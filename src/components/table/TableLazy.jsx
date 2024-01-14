import React, { useRef, useMemo } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { useColDefs } from "../../hooks/useColDefs";
import { useViewportDimensions } from "../../hooks/useViewportDimentions";

import { ModuleRegistry } from "@ag-grid-community/core";
import { InfiniteRowModelModule } from "@ag-grid-community/infinite-row-model";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig/fbConfig";

ModuleRegistry.registerModules([InfiniteRowModelModule]);

const TableLazy = props => {
	const { ml1 } = props;
	const { getViewportDimensions } = useViewportDimensions();
	const viewportDimesions = getViewportDimensions();

	const { tableFields } = useColDefs({
		viewportDimesions,
		ml1,
		ml2: null,
		ml3: null,
	});

	const gridRef = useRef();

	const defaultColDef = useMemo(
		() => ({
			sortable: false,
			filter: false,
			resizable: true,
			floatingFilter: false,
		}),
		[]
	);

	const onGridReady = params => {
		// console.log(`params`, params);
		const dataSource = {
			rowCount: null,
			getRows: async params => {
				console.log(`getRows called .....`, params);

				const q = query(collection(db, ml1));
				const querySnapshot = await getDocs(q);
				const col = [];
				querySnapshot.forEach(doc => {
					const colData = { id: doc.id, ...doc.data() };
					col.push(colData);
				});
				let rowsThisPage = col.slice(params.startRow, params.endRow);
				console.log(`rowsThisPage`, rowsThisPage);
				let lastRow = null;
				if (col.length <= params.endRow) {
					lastRow = col.length;
				}
				params.successCallback(rowsThisPage, lastRow);
			},
		};
		params.api.setGridOption("datasource", dataSource);
	};

	return (
		<div style={{ height: "95%" }} className="ag-theme-alpine">
			<AgGridReact
				ref={gridRef} // Ref for accessing Grid's API
				columnDefs={tableFields} // Column Defs for Columns
				defaultColDef={defaultColDef} // Default Column Properties
				animateRows={true} // Optional - set to 'true' to have rows animate when sorted
				rowBuffer={0}
				rowModelType={"infinite"}
				cacheBlockSize={100}
				cacheOverflowSize={2}
				maxConcurrentDatasourceRequests={1}
				infiniteInitialRowCount={100}
				maxBlocksInCache={10}
				onGridReady={onGridReady}
				pagination={true}
			></AgGridReact>
		</div>
	);
};

export default TableLazy;

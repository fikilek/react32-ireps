import React, { useRef, useMemo, useContext } from "react";
// import "./TableLazyTrns.css";

import "react-tippy/dist/tippy.css";

import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
// import { ModuleRegistry } from "@ag-grid-community/core";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RingLoader } from "react-spinners";
// import { AstsTableContext } from "../../contexts/AstsTableContext";
// import { InfiniteRowModelModule } from "@ag-grid-community/infinite-row-model";

const CustomNoRowsOverlay = props => {
	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "red",
	};

	return (
		<div
			className="ag-overlay-loading-center"
			style={{ backgroundColor: "#e6ffe6", height: "70%" }}
		>
			<RingLoader
				color={"#ff99ff"}
				loading={true}
				cssOverride={override}
				size={200}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

const TableLazyData = props => {
	// console.log(`TableLazyData props`, props);
	const { rowData, columnDefs, setSelectedRows, ml1 } = props;

	// const { state, dispatch } = useContext(AstsTableContext);

	let tableHeight = "";
	if (ml1 === "erfs") {
		tableHeight = "100%";
	} else {
		tableHeight = "95%";
	}

	const gridRef = useRef();

	const defaultColDef = useMemo(
		() => ({
			sortable: true,
			filter: true,
			resizable: true,
			floatingFilter: true,
			suppressMovable: true,
		}),
		[]
	);

	const onSelectionChanged = event => {
		// console.log(`selected rows`, event.api.getSelectedRows());
		setSelectedRows && setSelectedRows(event.api.getSelectedRows());
	};

	// const onGridReady = useCallback(params => {
	// 	fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			// give each row an id
	// 			data.forEach(function (d, index) {
	// 				d.id = "R" + (index + 1);
	// 			});
	// 			const dataSource = {
	// 				rowCount: undefined,
	// 				getRows: params => {
	// 					console.log("asking for " + params.startRow + " to " + params.endRow);
	// 					// At this point in your code, you would call the server.
	// 					// To make the demo look real, wait for 500ms before returning
	// 					setTimeout(function () {
	// 						// take a slice of the total rows
	// 						const dataAfterSortingAndFiltering = sortAndFilter(
	// 							data,
	// 							params.sortModel,
	// 							params.filterModel
	// 						);
	// 						const rowsThisPage = dataAfterSortingAndFiltering.slice(
	// 							params.startRow,
	// 							params.endRow
	// 						);
	// 						// if on or after the last page, work out the last row.
	// 						let lastRow = -1;
	// 						if (dataAfterSortingAndFiltering.length <= params.endRow) {
	// 							lastRow = dataAfterSortingAndFiltering.length;
	// 						}
	// 						// call the success callback
	// 						params.successCallback(rowsThisPage, lastRow);
	// 					}, 500);
	// 				},
	// 			};
	// 			params.api.setGridOption("datasource", dataSource);
	// 		});
	// }, []);

	// const onGridReady = params => {
	// 	// console.log(`onGridReady params`, params);

	// 	// destructure column api
	// 	// const { columnApi } = params;
	// 	// console.log(`columnApi`, columnApi);

	// 	// api and columnApi on the gridRef object

	// 	const { api, columnApi } = gridRef.current;
	// 	console.log(`api`, api);
	// 	console.log(`columnApi`, columnApi);

	// 	//get viewport width
	// 	// const viewportWidth = columnApi.columnModel.viewportRight;
	// 	// console.log(`viewportWidth`, viewportWidth);
	// };

	const noRowsOverlayComponent = useMemo(() => {
		return CustomNoRowsOverlay;
	}, []);

	return (
		// <div style={{ height: "calc(100% - 25px)" }} className="ag-theme-alpine">
		<div
			style={{ height: tableHeight }}
			className="ag-theme-alpine ireps-ag-table uplolad-table"
		>
			<AgGridReact
				ref={gridRef} // Ref for accessing Grid's API
				rowData={rowData} // Row Data for Rows
				columnDefs={columnDefs} // Column Defs for Columns
				defaultColDef={defaultColDef} // Default Column Properties
				animateRows={true} // Optional - set to 'true' to have rows animate when sorted
				// rowSelection="multiple" // Options - allows click selection of rows
				// enableBrowserTooltips={true}
				// rowMultiSelectWithClick={true}
				onSelectionChanged={onSelectionChanged}
				tooltipShowDelay={0}
				// tooltipHideDelay={90000}
				// pagination={true}
				// paginationPageSize={4}
				// paginationAutoPageSize={true}
				// onGridReady={onGridReady}
				noRowsOverlayComponent={noRowsOverlayComponent}
				// onBodyScroll={onBodyScroll}
				rowBuffer={0}
				rowModelType={"infinite"}
				cacheBlockSize={100}
				cacheOverflowSize={2}
				maxConcurrentDatasourceRequests={1}
				infiniteInitialRowCount={1000}
				maxBlocksInCache={10}
			></AgGridReact>
		</div>
	);
};

export default TableLazyData;

// TODO: mouse over tips on the TableLazyData skipHeader

import React, { useRef, useMemo, useContext } from "react";
import "./Table.css";

import "react-tippy/dist/tippy.css";

import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { RingLoader } from "react-spinners";
import { AstsTableContext } from "../../contexts/AstsTableContext";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

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

const Table = props => {
	// console.log(`Table props`, props);
	const { rowData, columnDefs, setSelectedRows, ml1 } = props;

	const { state, dispatch } = useContext(AstsTableContext);

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

	const onGridReady = params => {
		// console.log(`onGridReady params`, params);

		// destructure column api
		// const { columnApi } = params;
		// console.log(`columnApi`, columnApi);

		// api and columnApi on the gridRef object

		const { api, columnApi } = gridRef.current;
		// console.log(`api`, api);
		// console.log(`columnApi`, columnApi);

		//get viewport width
		const viewportWidth = columnApi.columnModel?.viewportRight;
		// console.log(`viewportWidth`, viewportWidth);
	};

	const noRowsOverlayComponent = useMemo(() => {
		return CustomNoRowsOverlay;
	}, []);

	const onBodyScroll = e => {
		// console.log(`schrolling`, e);
		const bottom = e.api.getVerticalPixelRange().bottom;
		// console.log(`bottom`, bottom);
		const grid_height =
			e.api.getLastDisplayedRow() * e.api.getSizesForCurrentTheme().rowHeight;
		// console.log(`grid_height`, grid_height);
		const toBotton = Math.abs(bottom - grid_height);
		// console.log(`------------------------------------`);
		// console.log(`toBotton`, toBotton);
		// console.log(`Can fetch data: ${state.fetch}`);
		if (toBotton < 100) {
			console.log("close to bottm. Call next page");
			dispatch({
				type: "SET_FETCH",
				payload: true,
			});
		}
	};

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
				pagination={true}
				// paginationPageSize={4}
				// paginationAutoPageSize={true}
				onGridReady={onGridReady}
				noRowsOverlayComponent={noRowsOverlayComponent}
				onBodyScroll={onBodyScroll}
			></AgGridReact>
		</div>
	);
};

export default Table;

// TODO: mouse over tips on the Table skipHeader

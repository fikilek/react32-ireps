import React, { useContext } from "react";
import { irepsDictionary } from "../../utils/utils.js";
import Table from "./Table.jsx";
import "./Table.css";
import "./TableWithAddRecordBtn.css";
import TableAddRecordBtn from "./tableBtns/TableAddRecordBtn.jsx";
import TableWrapper from "./TableWrapper.jsx";
import { useColDefs } from "../../hooks/useColDefs.js";
import { useViewportDimensions } from "../../hooks/useViewportDimentions.js";
import { useTrnsTable } from "../../hooks/useTrnsTable.js";
import { TrnsTableContext } from "../../contexts/TrnsTableContext.js";
import TableLazyTrns from "./TableLazyTrns.jsx";
import TableLazyData from "./TableLazyData.jsx";

const showTableAddRecordBtn = (ml1, ml2, ml3, nfd, fn) => {
	if (ml1 === "asts" || ml1 === "trns") return null;
	return <TableAddRecordBtn nfd={nfd} fn={fn} />;
};

// Suppliers is a page component
const TableTrnsWithAddRecordBtn = props => {
	// console.log(`Trns - props`, props);
	const { ml1, tn, ml3, nfd, fn } = props;

	// const {
	// 	data: rowData,
	// 	error,
	// 	isPending,
	// 	success,
	// } = useCollection(ml1, tn, ml3);
	// const rowData = useMemo(()=>{return data},[data])
	// console.log(`rowData`, rowData);

	const { state } = useContext(TrnsTableContext);
	// console.log(`state`, state);

	useTrnsTable({ ml1, ml2: tn, ml3 });

	const { getViewportDimensions } = useViewportDimensions();
	const viewportDimesions = getViewportDimensions();
	// console.log(`viewportDimesions`, viewportDimesions);

	const { tableFields } = useColDefs({
		viewportDimesions,
		ml1,
		ml2: tn,
		ml3,
	});
	// const tableFields = getTableFields();

	// console.log(`tableFields`, tableFields);
	// console.log(`isPending`, isPending);
	// console.log(`success`, success);
	// console.log(`tn`, tn);
	const ml2 = tn === "undefined" ? "" : tn;
	// console.log(`ml2`, ml2);
	// console.log(`ml3`, ml3);
	// console.log(`tn`, tn);

	return (
		<div className={`table `}>
			<div className="table-header">
				<div className="th-menu-levels">
					<p>
						{`
							${ml1 ? `${irepsDictionary.get(ml1)}` : ""}
							${ml2 ? `/ ${irepsDictionary.get(ml2)}s` : ""} 
							${ml3 ? `/ ${irepsDictionary.get(ml3)}s` : ""}
						`}
					</p>
				</div>
				<div></div>
				<div></div>
			</div>
			<TableWrapper rowData={state.trns} columnDefs={tableFields} ml1={ml1}>
				<TableLazyTrns rowData={state.trns} columnDefs={tableFields} ml1={ml1} />
			</TableWrapper>

			{showTableAddRecordBtn(ml1, tn, ml3, nfd, fn)}
		</div>
	);
};
export default TableTrnsWithAddRecordBtn;

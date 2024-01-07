import { useContext, useEffect } from "react";
// import { AstsTableContext } from "../contexts/AstsTableContext";
import useLazyCollection from "./useLazyCollection";
import { AstsTableContext } from "../contexts/AstsTableContext";

export const useAstsTable = props => {
	const { dispatch } = useContext(AstsTableContext);
	// console.log(`state`, state);

	const { ml1, ml2, ml3 } = props;
	// get all asts from firestore through useCollection hook
	const { lazyState } = useLazyCollection({ ml1, ml2, ml3 });
	console.log(`lazyState`, lazyState);

	// generate required stats

	// get an array of all existing cats
	const catsInAsts = [
		...new Set(lazyState.lazyData.map(item => item.astData.astCartegory)),
	];
	// console.log(`catsInAsts`, catsInAsts);

	// count occurance of each item in the array
	const astsArray = [];
	catsInAsts &&
		catsInAsts.forEach(astCat => {
			const astCount =
				lazyState.lazyData &&
				lazyState.lazyData.filter(obj => obj?.astData?.astCartegory === astCat)
					?.length;
			astsArray.push({
				name: astCat,
				quantity: astCount,
			});
		});
	// console.log(`astsArray`, astsArray);

	useEffect(() => {
		// update total asts in the context
		dispatch({
			type: "ASTS_TOTALS",
			payload: {
				astsTotal: lazyState.totalColCount,
				astsArray, //this gives quantities of each ast cat
				asts: lazyState.lazyData,
			},
		});
	}, [lazyState]);

	// update AstsTableContext
};

import { useContext, useEffect } from "react";
// import { AstsTableContext } from "../contexts/AstsTableContext";
import { TrnsTableContext } from "../contexts/TrnsTableContext";
import useLazyTrnsCollection from "./useLazyTrnsCollection";

export const useTrnsTable = props => {
	// console.log(`props`, props);
	const { dispatch } = useContext(TrnsTableContext);
	// console.log(`state`, state);

	const { ml1, ml2, ml3 } = props;
	// get all asts from firestore through useCollection hook
	const { lazyState } = useLazyTrnsCollection({ ml1, ml2, ml3 });
	// console.log(`trns lazyState`, lazyState);

	useEffect(() => {
		// update total asts in the context
		dispatch({
			type: "TRNS_TOTALS",
			payload: {
				trnsTotal: lazyState.totalColCount,
				// trnsArray, //this gives quantities of each ast cat
				trns: lazyState.lazyData,
			},
		});
	}, [lazyState]);

	// update AstsTableContext
};

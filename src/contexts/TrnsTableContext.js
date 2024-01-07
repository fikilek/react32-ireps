import { createContext, useReducer } from "react";

import meterImage from "../images/meter1.png";
import cbImage from "../images/cb5.jpg";
import sealImage from "../images/seal4.jpg";

export const TrnsTableContext = createContext();

const initTrns = {
	trns: [],
	trnsTotal: 0,
	fetch: true,
};

const trnsTableReducer = (state, action) => {
	// console.log(`state`, state);
	// console.log(`action`, action);
	switch (action.type) {
		default:
			return state;
		case "TRNS_TOTALS":
			return {
				...state,
				trns: [...state.trns, ...action.payload.trns],
				trnsTotal: action.payload.trnsTotal,
			};
		case "SET_FETCH":
			return {
				...state,
				fetch: action.payload,
			};
	}
};

export const TrnsTableContextProvider = props => {
	const [state, dispatch] = useReducer(trnsTableReducer, initTrns);
	// console.log(`state`, state);

	return (
		<TrnsTableContext.Provider value={{ state, dispatch }}>
			{props.children}
		</TrnsTableContext.Provider>
	);
};

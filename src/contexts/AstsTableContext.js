import { createContext, useReducer } from "react";

import meterImage from "../images/meter1.png";
import cbImage from "../images/cb5.jpg";
import sealImage from "../images/seal4.jpg";

export const AstsTableContext = createContext();

const initAsts = {
	asts: [],
	astsTotal: 0,
	astsCatTotals: [
		{
			key: "meter",
			astCat: "meter",
			astCatTotal: 0,
			states: [{ stores: 0 }, { field: 0 }, { service: 0 }],
			catImage: {
				image: meterImage,
				alt: "meter",
			},
		},
		{
			key: "cb",
			astCat: "cb",
			astCatTotal: 0,
			states: [{ stores: 0 }, { field: 0 }, { service: 0 }],
			catImage: {
				image: cbImage,
				alt: "cb",
			},
		},
		{
			key: "seal",
			astCat: "seal",
			astCatTotal: 0,
			states: [{ stores: 0 }, { field: 0 }, { service: 0 }],
			catImage: {
				image: sealImage,
				alt: "seal",
			},
		},
	],
	fetch: true,
};

const astsTableReducer = (state, action) => {
	// console.log(`state`, state);
	// console.log(`action`, action);
	switch (action.type) {
		default:
			return state;
		case "ASTS_TOTALS":
			return {
				...state,
				asts: [...state.asts, ...action.payload.asts],
				astsTotal: action.payload.astsTotal,
				astsCatTotals: state.astsCatTotals.map(cat => {
					// console.log(`cat`, cat);
					// console.log(`action.payload`, action.payload);
					const match = action.payload?.astsArray?.find(
						ast => ast?.name === cat?.astCat
					);
					return {
						...cat,
						astCatTotal: match?.quantity,
					};
				}),
			};
		case "SET_FETCH":
			return {
				...state,
				fetch: action.payload,
			};
	}
};

export const AstsTableContextProvider = props => {
	const [state, dispatch] = useReducer(astsTableReducer, initAsts);
	// console.log(`state`, state);

	return (
		<AstsTableContext.Provider value={{ state, dispatch }}>
			{props.children}
		</AstsTableContext.Provider>
	);
};

import {
	collection,
	getCountFromServer,
	limit,
	onSnapshot,
	orderBy,
	query,
	startAt,
} from "firebase/firestore";
import { useContext, useEffect, useReducer, useRef } from "react";
import { db } from "../firebaseConfig/fbConfig";
import { AstsTableContext } from "../contexts/AstsTableContext";

const initLazyData = {
	lazyData: [],
	lastDoc: null,
	endOfCOllection: false,
	fetchQuantity: 50,
	totalColCount: 0,
	progress: {
		success: null,
		error: null,
		isPending: null,
	},
};

export const lazyReducer = (state, action) => {
	// console.log(`action`, action);
	switch (action.type) {
		default:
			return state;

		case "PRE_FETCH_SETUP":
			return {
				...state,
				progress: {
					...state.progress,
					isPending: true,
					error: "",
				},
			};

		case "SUCCESS":
			console.log(`SUCCESS action.payload.data`, action.payload?.data);
			return {
				...state,
				lazyData: action.payload.data,
				lastDoc: action.payload.lastDoc,
				progress: {
					...state.progress,
					success: true,
					isPending: false,
				},
			};
		case "SET_COL_COUNT":
			return {
				...state,
				totalColCount: action.payload,
			};
		case "ERROR":
			return {
				...state,
				progress: {
					...state.progress,
					success: false,
					isPending: false,
					error: `error fetching lazy load document(s) - ${action.payload}`,
				},
			};
	}
};

const useLazyCollection = props => {
	// console.log(`props`, props);
	const { ml1, ml2, ml3 } = props;

	const { state: st, dispatch: dis } = useContext(AstsTableContext);

	const [lazyState, dispatch] = useReducer(lazyReducer, initLazyData);
	// console.log(`lazyState`, lazyState);

	const fetchData = useRef((dispatch, lastDoc, fetchQuantity) => {
		console.log(`fetchData called`);

		const q = query(
			collection(db, ml1),
			orderBy("metaData.updatedAtDatetime", "desc"),
			startAt(lastDoc || "0"),
			limit(fetchQuantity)
		);

		const unsubscribe = onSnapshot(q, querySnapshot => {
			// console.log(`querySnapshot.docs`, querySnapshot.docs);

			const col = [];
			querySnapshot.forEach(doc => {
				// console.log(`doc`, doc);
				const colData = { id: doc.id, ...doc.data() };
				// console.log(`ast`, ast);
				col.push(colData);
			});
			// console.log(`asts`, asts);
			dispatch({
				type: "SUCCESS",
				payload: {
					data: col,
					lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
				},
			});
			dis({ type: "SET_FETCH", payload: false });
		});

		return unsubscribe;
	});
	// console.log(`fechData.current`, fetchData.current);

	useEffect(() => {
		// perform pre-query setup
		// console.log(`st.fetch`, st.fetch);
		// console.log(`lazyState.inprogress.isPending`, lazyState.progress.isPending);
		console.log(`lazyState.lastDoc`, lazyState.lastDoc);

		const canFetch = st.fetch && !lazyState.progress.isPending;
		console.log(`canFetch`, canFetch);

		try {
			if (canFetch) {
				dispatch({ type: "PRE_FETCH_SETUP" });

				const unsubscribe = fetchData.current(
					dispatch,
					lazyState.lastDoc,
					lazyState.fetchQuantity
				);
				return () => unsubscribe;
			}
		} catch (error) {
			dispatch({
				type: "ERROR",
				payload: error.msg,
			});
		}
	}, [st.fetch, lazyState]);

	useEffect(() => {
		const getTotalCount = async () => {
			const coll = collection(db, ml1);
			const snapshot = await getCountFromServer(coll);
			const count = snapshot.data().count;
			// console.log(`count: ${count}`);
			dispatch({ type: "SET_COL_COUNT", payload: count });
		};
		getTotalCount();
	}, [ml1]);

	return { fetchData, lazyState };
};

export default useLazyCollection;

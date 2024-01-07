import React from "react";
import { useParams } from "react-router-dom";
import TableWithAddRecordBtn from "../../components/table/TableWithAddRecordBtn";
import useAuthContext from "../../hooks/useAuthContext";
import { PropagateLoader } from "react-spinners";
import NotAuthenticated from "../auth/NotAuthenticated";
import "../../components/table/TableUsersList.css";
import TableTrnsWithAddRecordBtn from "../../components/table/TableTrnsWithAddRecordBtn";

const Trns = () => {
	// console.log(`Asts rendering`);
	const { ml2, ml3 } = useParams();
	// console.log(`ml2`, ml2)
	const { user, isAuthReady } = useAuthContext();
	// console.log(`user`, user);
	// console.log(`ml3`, ml3)
	return isAuthReady ? (
		user ? (
			<TableTrnsWithAddRecordBtn ml1="trns" tn={ml2} ml3={ml3} fn="TrnsForm" />
		) : (
			<NotAuthenticated />
		)
	) : (
		<div className="users-list-loader">
			<PropagateLoader
				color="orange"
				loading={!isAuthReady}
				size={13}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Trns;

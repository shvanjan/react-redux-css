import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";

export default function PointsTable() {
	
	let formFields = [
		{
			fieldName: "Team Id",
			name: "id",
			type: "text",
			inForm: false

		},
		{
			fieldName: "Team Name",
			name: "team_name",
			type: "text",
			inForm: true
		},
		{
			fieldName: "Matches Played",
			name: "played",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Net Run Rate",
			name: "nrr",
			type: "number",
			inForm: true
		},
		{
			fieldName: "No Result",
			name: "nr",
			type: "number",
			inForm: true

		},
		{
			fieldName: "Won",
			name: "won",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Lost",
			name: "lost",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Points",
			name: "points",
			type: "number",
			inForm: true
		}
	];

	let requestName = REQUEST_NAMES.POINTS;

	let rowName = "Points";

	return (
		<DBTable {...{
			requestName, formFields, rowName,
			searchField: "team_name",
			searchFieldName: "Team Name"
		}}/>
		);
}
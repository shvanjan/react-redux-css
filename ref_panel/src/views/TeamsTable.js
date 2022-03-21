import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";


export default function TeamsTable() {

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
			fieldName: "Team Ne",
			name: "team_ne",
			type: "text",
			inForm: true,
			isForeignKey: true,
			forgein_key_info: {
				tableName: REQUEST_NAMES.POINTS,
				keyName: "team_name"
			}
		},
		{
			fieldName: "Team Image Url",
			name: "team_image_url",
			type: "url",
			inForm: true,

		},
		{
			fieldName: "Created At",
			name: "createdAt",
			type: "date",
			inForm: false
			
		},
		{
			fieldName: "Updated At",
			name: "updatedAt",
			type: "date",
			inForm: false
			
		}
		
	];

	/*
	 {
            "id": 1,
            "team_name": "Antique Friend",
            "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Antique%20Friends.png",
            "createdAt": "2021-11-09T09:26:30.000Z",
            "updatedAt": "2021-11-16T06:29:06.000Z"
        },
	*/

	
	let requestName = REQUEST_NAMES.TEAMS;

	let rowName = "Team";


	return (
		<DBTable key={rowName} {...{
			requestName, formFields, rowName,
			searchField: "team_name",
			searchFieldName: "Team Name"
		}}/>
		);
}
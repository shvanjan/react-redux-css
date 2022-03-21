import {REQUEST_NAMES} from "../network/network_enums";
import {useParams} from "react-router-dom";
import DBTable from "../components/DBTable2";

export default function MatchTableView() {
	let formFields = [
		{
			fieldName: "Match Id",
			name: "match_id",
			type: "number",
			inForm: true
		},
		{
			fieldName: "attributes",
			type: "json",
			name: "attributes",

			fields: [
			{
				fieldName: "IOS Live Stream Url",
				name: "iosLiveStreamUrl",
				type: "url",
				inForm: true
			},
			{
				fieldName: "Android Live Stream Url",
				name: "antroidLiveStreamUrl",
				type: "url",
				inForm: true

			},
			{
				fieldName: "Force Live",
				name: "forceLive",
				type: "boolean",
				inForm: true
			}]
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

	

	const urlParams = useParams();
	let {id: matchId} = urlParams;
	let requestName = REQUEST_NAMES.MATCH
	if(matchId) {
		requestName = `${requestName}/${matchId}`;
	}

	let rowName = "Match";

		return (
			<DBTable {...{
				 requestName, formFields, rowName,
				  matchId, enableSearch: true, 
				  keyField: "match_id",
				  searchField: "match_id",
				  searchFieldName: "Match Id"
			}}/>
		);

	
}
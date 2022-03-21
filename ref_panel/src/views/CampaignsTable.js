import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";


export default function CampaignsTable() {
	/*
		campaign_id
	campaign_property
	referrer_masked_msisdn (Referrer MaskId)
	status
	validation_fail_reason (Mapping Fail Reason)
	maq_response (maquette Response on UI)
	channel
	creation_date
	maq_request (maquette Request on UI)
	impression_response (Anti Fraud Response)
	*/

	let formFields = [
		{
			fieldName: "Id",
			name: "id",
			type: "number",
			inForm: false

		},
		{
			fieldName: "Campaign Id",
			name: "campaign_id",
			type: "text",
			inForm: false

		},
		{
			fieldName: "Campaign Property",
			name: "campaign_property",
			type: "text",
			inForm: true
		},
		{
			fieldName: "Referrer MaskId",
			name: "referrer_masked_msisdn",
			type: "text",
			inForm: true,

		},
		{
			fieldName: "status",
			name: "status",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Mapping Fail Reason",
			name: "validation_fail_reason",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Maquette Response on UI",
			name: "maq_response",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Channel",
			name: "channel",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Created At",
			name: "creation_date",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Maquette Request on UI",
			name: "maq_request",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Anti Fraud Response",
			name: "impression_response",
			type: "text",
			inForm: true
		}
		
	];

	/*
	 {
            "id": 1,
            "Campaign_name": "Antique Friend",
            "Campaign_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Antique%20Friends.png",
            "createdAt": "2021-11-09T09:26:30.000Z",
            "updatedAt": "2021-11-16T06:29:06.000Z"
        },
	*/

	
	let requestName = REQUEST_NAMES.CAMPAIGNS;

	let rowName = "Campaign";


	return (
		<DBTable key={rowName} {...{
			requestName, formFields, rowName,
			keyField: "id",
			searchField: "campaign_name",
			searchFieldName: "Campaign Name"
		}}/>
		);
}
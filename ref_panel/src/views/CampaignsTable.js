import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";
import {CURRENCY_ENUMS} from "../constants";

export default function CampaignsTable() {
	/*
		id
		campaign_title
campaign_id
campaign_type(PLATFORM','GAME)
campaign_property
game_pid (Game Id)
campaign_landing_url (Campagin URL)
gratification_currency('LOYALTY','PAYTM','BEANS','PFGBONUS','PFGWIN','PFGDEPOSIT')
gratification_description
referrer_gratification_limit
referrer_max_limit_daily
referrer_max_count_daily
referrer_max_limit
start_date
end_date
created_date
is_active
*/


/*
	CREATE TABLE `campaign_master` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `campaign_title` varchar(100) NOT NULL,
  `campaign_id` varchar(20) NOT NULL,
  `campaign_type` enum('PLATFORM','GAME') DEFAULT NULL,
  `campaign_property` varchar(100) DEFAULT NULL,
  `game_pid` varchar(50) DEFAULT NULL,
  `campaign_landing_url` varchar(255) DEFAULT NULL,
  `gratification_currency` enum('LOYALTY','PAYTM','BEANS','PFGBONUS','PFGWIN','PFGDEPOSIT') DEFAULT NULL,
  `gratification_description` varchar(255) DEFAULT NULL,
  `referrer_gratification_limit` double(10,2) DEFAULT NULL,
  `referrer_max_limit_daily` double(10,2) DEFAULT NULL,
  `referrer_max_count_daily` int DEFAULT NULL,
  `referrer_max_limit` int DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `loaddatetime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `campaign_type` (`campaign_type`,`campaign_property`(1),`start_date`,`end_date`),
  KEY `campaign_code` (`campaign_id`),
  KEY `loaddatetime` (`loaddatetime`)
)



*/

/*
					{
                        "id":1,
                        "campaign_title":"App install bonus New Test Update",
                        "campaign_id":"GP-CE9VF",
                        "campaign_type":"PLATFORM",
                        "campaign_property":"PP_PAYTM",
                        "game_pid":null,
                        "campaign_landing_url":"https://testgp.gamepind.com",
                        "gratification_currency":"BEANS",
                        "gratification_description":null,
                        "referrer_gratification_limit":100,
                        "referrer_max_limit_daily":25,
                        "referrer_max_count_daily":5,
                        "referrer_max_limit":9,
                        "start_date":"2020-02-10 13:13:29",
                        "end_date":"2020-12-10 00:00:00",
                        "created_date":"2020-02-16 16:24:51",
                        "is_active":0},

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
			inForm: true

		},
		{
			fieldName: "Campaign Title",
			name: "campaign_title",
			type: "text",
			inForm: true
		},
		{
			fieldName: "Campaign Type",
			name: "campaign_type",
			type: "text",
			range: ['PLATFORM', 'GAME'],
			inForm: true,

		},
		{
			fieldName: "Campaign Property",
			name: "campaign_property",
			type: "text",
			inForm: true,

		},
		{
			fieldName: "Game Id",
			name: "game_pid",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Campaign URL",
			name: "campaign_landing_url",
			type: "url",
			inForm: true
			
		},
		{
			fieldName: "Gratification Currency",
			name: "gratification_currency",
			type: "text",
			range: CURRENCY_ENUMS,
			inForm: true
			
		},
		{
			fieldName: "Gratification Description",
			name: "gratification_description",
			type: "text",
			inForm: true
			
		},
		{
			fieldName: "Referrer Gratification Limit",
			name: "referrer_gratification_limit",
			type: "number",
			inForm: true
			
		},
		{
			fieldName: "Referrer Max Limit Daily",
			name: "referrer_max_limit_daily",
			type: "number",
			inForm: true
			
		},
		{
			fieldName: "Referrer Max Count Daily",
			name: "referrer_max_count_daily",
			type: "number",
			inForm: true
			
		},
		{
			fieldName: "Referrer Max Limit",
			name: "referrer_max_limit",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Start Date",
			name: "start_date",
			type: "date",
			inForm: true
		},
		{
			fieldName: "End Date",
			name: "end_date",
			type: "date",
			inForm: true
		},
		{
			fieldName: "Created Date",
			name: "created_date",
			type: "date",
			inForm: true
		},
		{
			fieldName: "Is Active",
			name: "is_active",
			type: "number",
			inForm: true
		}
		
	];

	
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
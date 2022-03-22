import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";
import {CURRENCY_ENUMS} from "../constants";


export default function GratificationsTable() {
	/*
		start_count 
end_count
referrer_amount 
referrer_currency
referred_amount
referred_currency
campaign_id
task_id
whitelisted_repo
daily_gratification_limit( Daily Gratification Limit)
max_gratification_limit(Max Gratification Limit)
daily_max_count
max_count
per_referred_daily_gratification_limit(Referrer Per user daily gratification limit )
per_referred_max_gratification_limit (Referrer Per user max gratification limit )
per_referred_daily_max_count(Referrer Per user daily max count  )
per_referred_max_count (Referrer Per user max count  )
referrer_amount_per_slab(Referrer/Referred amount slab)
	*/

	/*
		CREATE TABLE `campaign_gratification` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `start_count` int DEFAULT NULL,
  `end_count` int DEFAULT NULL,
  `referrer_amount` double(10,2) DEFAULT NULL,
  `referrer_currency` enum('LOYALTY','PAYTM','BEANS','PFGBONUS','PFGWIN','PFGDEPOSIT') DEFAULT NULL,
  `referred_amount` double(10,2) DEFAULT NULL,
  `referred_currency` enum('LOYALTY','PAYTM','BEANS','PFGBONUS','PFGWIN','PFGDEPOSIT') DEFAULT NULL,
  `campaign_id` varchar(20) DEFAULT NULL,
  `task_id` varchar(45) DEFAULT NULL,
  `whitelisted_repo` varchar(100) DEFAULT NULL,
  `daily_gratification_limit` double(10,2) DEFAULT NULL,
  `max_gratification_limit` double(10,2) DEFAULT NULL,
  `daily_max_count` int DEFAULT NULL,
  `max_count` int DEFAULT NULL,
  `per_referred_daily_gratification_limit` double DEFAULT NULL,
  `per_referred_max_gratification_limit` double DEFAULT NULL,
  `per_referred_daily_max_count` int DEFAULT NULL,
  `per_referred_max_count` int DEFAULT NULL,
  `referrer_amount_per_slab` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `campaign_id` (`campaign_id`),
  CONSTRAINT `campaign_gratification_ibfk_2` FOREIGN KEY (`campaign_id`) REFERENCES `campaign_master` (`campaign_id`)
)



	*/

	/*
		 {"id":1,
                            "start_count":0,
                            "end_count":100,
                            "referrer_amount":60,
                            "referrer_currency":"PFGBONUS",
                            "referred_amount":0,
                            "referred_currency":"PFGDEPOSIT",
                            "campaign_id":"GP-CE9VF1",
                            "task_id":"233",
                            "whitelisted_repo":null,
                            "daily_gratification_limit":99999999,
                            "max_gratification_limit":99999999,
                            "daily_max_count":10,
                            "max_count":15,
                            "per_referred_daily_gratification_limit":null,
                            "per_referred_daily_max_count":null,
                            "per_referred_max_count":null,
                            "referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 0, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 20}]"},
                         
	*/

	let formFields = [
		{
			fieldName: "Id",
			name: "id",
			type: "number",
			inForm: false

		},
		{
			name: "start_count",
			type: "number",
			inForm: true

		},
		{
			name: "end_count",
			type: "number",
			inForm: true
		},
		{
			name: "referrer_amount",
			type: "number",
			inForm: true,

		},
		{
			name: "referrer_currency",
			type: "text",
			range: CURRENCY_ENUMS,
			inForm: true
			
		},
		{
			name: "referred_amount",
			type: "number",
			inForm: true
			
		},
		{
			name: "referred_currency",
			type: "text",
			range: CURRENCY_ENUMS,
			inForm: true
			
		},
		{
			name: "campaign_id",
			type: "text",
			inForm: true,
			isForeignKey: true,
			forgein_key_info: {
				tableName: REQUEST_NAMES.CAMPAIGNS,
				keyName: 'campaign_id'
			},
			inForm: true
		},
		{
			name: "task_id",
			type: "text",
			inForm: true
			
		},
		{
			name: "whitelisted_repo",
			type: "text",
			inForm: true
			
		},
		{
			name: "daily_gratification_limit",
			type: "number",
			inForm: true
		},
		{
			name: "max_gratification_limit",
			type: "number",
			inForm: true
		},
		{
			name: "daily_max_count",
			type: "number",
			inForm: true
		},
		{
			name: "max_count",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Referrer Per user daily gratification limit",
			name: "per_referred_daily_gratification_limit",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Referrer Per user max gratification limit",
			name: "per_referred_max_gratification_limit",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Referrer Per user daily max count",
			name: "per_referred_daily_max_count",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Referrer Per user max count",
			name: "per_referred_max_count",
			type: "number",
			inForm: true
		},
		{
			fieldName: "Referrer/Referred amount slab",
			name: "referrer_amount_per_slab",
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

	
	let requestName = REQUEST_NAMES.GRATIFICATIOS;

	let rowName = "Gratifications";


	return (
		<DBTable key={rowName} {...{
			requestName, formFields, rowName,
			keyField: "id",
			searchField: "campaign_name",
			searchFieldName: "Campaign Name"
		}}/>
		);
}
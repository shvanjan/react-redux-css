import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";

export default function Tasks() {
	/*
		campaign_id
		task_id
		daily_gratification_limit
		max_gratification_limit
		daily_task_count
		max_task_count
		task_title
		task_type  (consecutive','cumulative)
		event_type
		reward_mode
		task_description
		start_date
		end_date
		task_status   default 1
		per_referred_daily_gratification_limit default -1
		per_referred_max_gratification_limit  default -1
		per_referred_daily_task_count  default -1
		per_referred_max_task_count    default -1
		referral_source
	*/

	/*
		{    
                        "id":0,
                        "task_id":"245",
                        "campaign_id":"GP-CE9VF1",
                        "daily_gratification_limit":50,
                        "max_gratification_limit":100,
                        "daily_task_count":7,
                        "max_task_count":9,
                        "task_title":"sps",
                        "task_type":"consecutive",
                        "event_type":null,
                        "reward_mode":null,
                        "task_description":null,
                        "task_status":1,
                        "start_date":"2020-01-30 17:04:45",
                        "end_date":"2020-12-31 17:04:55",
                        "per_referred_daily_gratification_limit":null,
                        "per_referred_max_gratification_limit":null,
                        "per_referred_daily_task_count":null,
                        "per_referred_max_task_count":null,
                        "referral_source":"wallet"},
	*/

	/*
		CREATE TABLE `campaign_task` (
  `id` int NOT NULL,
  `campaign_id` varchar(20) DEFAULT NULL,
  `task_id` varchar(45) DEFAULT NULL,
  `daily_gratification_limit` double(10,2) DEFAULT NULL,
  `max_gratification_limit` double(10,2) DEFAULT NULL,
  `daily_task_count` int DEFAULT NULL,
  `max_task_count` int DEFAULT NULL,
  `task_title` varchar(45) DEFAULT NULL,
  `task_type` enum('consecutive','cumulative') DEFAULT NULL,
  `event_type` varchar(45) DEFAULT NULL,
  `reward_mode` varchar(45) DEFAULT NULL,
  `task_description` varchar(45) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `task_status` tinyint(1) DEFAULT NULL,
  `per_referred_daily_gratification_limit` double DEFAULT NULL,
  `per_referred_max_gratification_limit` double DEFAULT NULL,
  `per_referred_daily_task_count` int DEFAULT NULL,
  `per_referred_max_task_count` int DEFAULT NULL,
  `referral_source` varchar(20) DEFAULT 'wallet' COMMENT 'Use for referral source define',
  PRIMARY KEY (`id`),
  KEY `campaign_task_ibfk_1` (`campaign_id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `campaign_task_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign_master` (`campaign_id`)
)


	*/

	let formFields = [

		{
			fieldName: "Id",
			name: "id",
			type: "number",
			inForm: false,
			doNotShow: true
		},
		{
			fieldName: "Campaign",
			name: "campaign",
			type: "text",
			isForeignKey: true,
			nameParts: ["campaignId", "campaignTitle"],
			keyName: "campaign_id",
			forgein_key_info: {
				tableName: REQUEST_NAMES.CAMPAIGNS,
				keyName: 'campaignId'
			},
			inForm: true
		},
		{
			fieldName: "Task Id",
			name: "task_id",
			type: "text",
			inForm: true
		},
		{
			name: "daily_gratification_limit",
			type: "number",
			inForm: true,

		},
		{
			name: "max_gratification_limit",
			type: "number",
			inForm: true
			
		},
		{
			name: "daily_task_count",
			type: "number",
			inForm: true
			
		},
		{
			name: "max_task_count",
			type: "number",
			inForm: true
			
		},
		{
			name: "task_title",
			type: "text",
			inForm: true
			
		},
		{
			name: "task_type",
			type: "text",
			range: ['consecutive', 'cumulative'],
			inForm: true
			
		},
		{
			name: "event_type",
			type: "text",
			inForm: true
			
		},
		{
			name: "reward_mode",
			type: "text",
			inForm: true
		},
		{
			name: "task_description",
			type: "text",
			inForm: true
		},
		{
			name: "start_date",
			type: "date",
			inForm: true
		},
		{
			name: "end_date",
			type: "date",
			inForm: true
		},
		{
			name: "task_status",
			type: "number",
			inForm: true
		},
		{
			name: "per_referred_daily_gratification_limit",
			type: "number",
			inForm: true
		},
		{
			name: "per_referred_max_gratification_limit",
			type: "number",
			inForm: true
		},
		{
			name: "per_referred_daily_task_count",
			type: "number",
			inForm: true
		},
		{
			name: "per_referred_max_task_count",
			type: "number",
			inForm: true
		},
		{
			name: "referral_source",
			type: "text",
			inForm: true
		},
		{
			fieldName: "Is Active",
			name: "is_active",
			isCustom: true,
			type: "number",
			inForm: true
		}

	];

	// processFormFeilds(formFields);


	/*
	 {
            "id": 1,
            "Campaign_name": "Antique Friend",
            "Campaign_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Antique%20Friends.png",
            "createdAt": "2021-11-09T09:26:30.000Z",
            "updatedAt": "2021-11-16T06:29:06.000Z"
        },
	*/

	
	let requestName = REQUEST_NAMES.TASKS;

	let rowName = "Tasks";


	return (
		<DBTable key={rowName} {...{
			requestName, formFields, rowName,
			keyField: "id",
			searchField: "task_title",
			searchFieldName: "Task Title"
		}}/>
		);
}
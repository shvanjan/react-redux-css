import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";


export default function LogsGratification() {
	/*
		campaign_id 
		task_id
		re_user_id (Referrer Id)
		casid (Referrer MaskId)
		txn_id (SPS Push Transaction Id)
		companion_cas_id (Referred MaskId)
		amount
		re_txn_id (Task Transaction Id)
		type(User Type)
		currency
		request_data (SPS Push Request)
		callback_status
		response_code (SPS Response Code)
		response_data (SPS Response Data)
		callback_data
		created_date
	*/

	/*

	CREATE TABLE `gratification_api_log` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `campaign_id` varchar(20) NOT NULL,
  `task_id` varchar(45) DEFAULT NULL,
  `re_user_id` bigint unsigned NOT NULL,
  `casid` varchar(20) NOT NULL,
  `txn_id` varchar(100) NOT NULL,
  `companion_cas_id` varchar(15) NOT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `re_txn_id` varchar(45) NOT NULL,
  `type` varchar(10) NOT NULL,
  `currency` varchar(50) DEFAULT NULL,
  `request_data` text,
  `callback_status` bit(1) DEFAULT b'0',
  `response_code` varchar(10) DEFAULT NULL,
  `response_data` text,
  `callback_data` text,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `loaddatetime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  KEY `re_user_id` (`re_user_id`),
  KEY `response_code` (`response_code`),
  KEY `loaddatetime` (`loaddatetime`),
  KEY `created_date` (`created_date`),
  KEY `campaign_id` (`campaign_id`),
  KEY `txn_id` (`txn_id`),
  CONSTRAINT `gratification_api_log_ibfk_1` FOREIGN KEY (`re_user_id`) REFERENCES `re_user` (`id`),
  CONSTRAINT `gratification_api_log_ibfk_4` FOREIGN KEY (`campaign_id`) REFERENCES `campaign_master` (`campaign_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1681 DEFAULT CHARSET=latin1;

	*/

	const formFields =	[
	{
		fieldName: "Id",
		"name": "id",
        "type": "number",
        "inForm": false
	},
    {
        "name": "campaign_id",
        "type": "text",
        "inForm": true
    },
    {
        "name": "task_id",
        "type": "text",
        "inForm": true
    },
    {
        "name": "re_user_id",
        "type": "number",
        "inForm": true,
        "fieldName": "Referrer Id"
    },
    {
        "name": "casid",
        "type": "text",
        "inForm": true,
        "fieldName": "Referrer MaskId"
    },
    {
        "name": "txn_id",
        "type": "text",
        "inForm": true,
        "fieldName": "SPS Push Transaction Id"
    },
    {
        "name": "companion_cas_id",
        "type": "text",
        "inForm": true,
        "fieldName": "Referred MaskId"
    },
    {
        "name": "amount",
        "type": "number",
        "inForm": true
    },
    {
        "name": "re_txn_id",
        "type": "text",
        "inForm": true,
        "fieldName": "Task Transaction Id"
    },
    {
        "name": "typ",
        "type": "text",
        "inForm": true,
        "fieldName": "User Type"
    },
    {
        "name": "currency",
        "type": "text",
        "inForm": true
    },
    {
        "name": "request_data",
        "type": "text",
        "inForm": true,
        "fieldName": "SPS Push Request"
    },
    {
        "name": "callback_status",
        "type": "boolean",
        "inForm": true
    },
    {
        "name": "response_code",
        "type": "text",
        "inForm": true,
        "fieldName": "SPS Response Code"
    },
    {
        "name": "response_data",
        "type": "text",
        "inForm": true,
        "fieldName": "SPS Response Data"
    },
    {
        "name": "callback_data",
        "type": "text",
        "inForm": true
    },
    {
        "name": "created_date",
        "type": "text",
        "inForm": true
    }
];
	
	let requestName = REQUEST_NAMES.GRATIFICATION_LOGS;

	let rowName = "Gratification Logs";

	return (
		<DBTable key={rowName} {...{
			requestName, formFields, rowName,
			keyField: "id",
			searchField: "campaign_id",
			searchFieldName: "Campaign Id"
		}}/>
		);
}
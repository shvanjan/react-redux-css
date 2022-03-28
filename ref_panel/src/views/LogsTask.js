import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";


export default function LogsTask() {
	/*
		task_id
		campaign_id
		referrer_user_id
		referred_user_id
		referrer_earnings
		referred_earnings
		referrer_currency
		referred_currency
		task_engine_txn_id
		transaction_date
		referrer_params
		referred_params
	*/

	/*
	  	CREATE TABLE `task_gratification_summary` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `task_id` varchar(45) NOT NULL,
  `campaign_id` varchar(20) NOT NULL,
  `referrer_user_id` bigint unsigned NOT NULL,
  `referred_user_id` bigint unsigned NOT NULL,
  `referrer_earnings` double(10,2) DEFAULT NULL,
  `referred_earnings` double(10,2) DEFAULT NULL,
  `referrer_currency` varchar(20) DEFAULT NULL,
  `referred_currency` varchar(20) DEFAULT NULL,
  `task_engine_txn_id` varchar(100) NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `loaddatetime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `referrer_params` varchar(200) DEFAULT NULL,
  `referred_params` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_loaddatetime` (`loaddatetime`),
  KEY `task_gratification_summary_ibfk_1` (`referrer_user_id`),
  KEY `task_gratification_summary_ibfk_2` (`referred_user_id`),
  KEY `task_gratification_summary_ibfk_3` (`campaign_id`),
  KEY `task_gratification_summary_ibfk_4` (`task_id`),
  CONSTRAINT `task_gratification_summary_ibfk_1` FOREIGN KEY (`referrer_user_id`) REFERENCES `re_user` (`id`),
  CONSTRAINT `task_gratification_summary_ibfk_2` FOREIGN KEY (`referred_user_id`) REFERENCES `re_user` (`id`),
  CONSTRAINT `task_gratification_summary_ibfk_3` FOREIGN KEY (`campaign_id`) REFERENCES `campaign_master` (`campaign_id`),
  CONSTRAINT `task_gratification_summary_ibfk_4` FOREIGN KEY (`task_id`) REFERENCES `campaign_task` (`task_id`)
)

	*/

	let formFields = [
	{
			fieldName: "Id",
			name: "id",
			type: "number",
			inForm: false

	},
    {
        "name": "task_id",
        "type": "number",
        "inForm": true
    },
    {
        "name": "campaign_id",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referrer_user_id",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referred_user_id",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referrer_earnings",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referred_earnings",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referrer_currency",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referred_currency",
        "type": "number",
        "inForm": true
    },
    {
        "name": "task_engine_txn_id",
        "type": "number",
        "inForm": true
    },
    {
        "name": "transaction_date",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referrer_params",
        "type": "number",
        "inForm": true
    },
    {
        "name": "referred_params",
        "type": "number",
        "inForm": true
    }
];

	

	
	let requestName = REQUEST_NAMES.TASK_GRATIFICATION_LOGS;

	let rowName = "Task Gratification Logs";

	return (
		<DBTable key={rowName} {...{
			requestName, formFields, rowName,
			keyField: "id",
			searchField: "campaign_id",
			searchFieldName: "Campaign Id"
		}}/>
		);
}
import DBTable from "../components/DBTable2";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";


export default function UserMappings() {
	/*
		campaign_id
referral_code
referrer_user_id
referred_user_id
mapping_state  ('INIT','MAPPED','EXISTING_USER')
mapping_date
re_txn_id
	*/

	/*
	CREATE TABLE `referral_mapping` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `campaign_id` varchar(20) NOT NULL,
  `referral_code` varchar(20) NOT NULL,
  `referrer_user_id` bigint unsigned NOT NULL,
  `referred_user_id` bigint unsigned NOT NULL,
  `mapping_state` enum('INIT','MAPPED','EXISTING_USER') NOT NULL,
  `mapping_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `re_txn_id` varchar(45) NOT NULL,
  `loaddatetime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `campaign_id_2` (`campaign_id`,`referral_code`,`referrer_user_id`,`referred_user_id`,`mapping_state`),
  UNIQUE KEY `campaign_id_3` (`campaign_id`,`referred_user_id`,`mapping_state`),
  KEY `referrer_user_id` (`referrer_user_id`),
  KEY `loaddatetime` (`loaddatetime`),
  KEY `referred_user_id` (`referred_user_id`),
  CONSTRAINT `referral_mapping_ibfk_1` FOREIGN KEY (`referrer_user_id`) REFERENCES `re_user` (`id`),
  CONSTRAINT `referral_mapping_ibfk_2` FOREIGN KEY (`referred_user_id`) REFERENCES `re_user` (`id`),
  CONSTRAINT `referral_mapping_ibfk_3` FOREIGN KEY (`campaign_id`) REFERENCES `campaign_master` (`campaign_id`)
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
			fieldName: "Campaign Id",
			name: "campaign_id",
			type: "text",
			inForm: false

		},
		{
			name: "referrer_user_id",
			type: "number",
			inForm: true
		},
		{
			name: "referred_user_id",
			type: "number",
			inForm: true
		},
		{
			name: "mapping_state",
			range: ['INIT','MAPPED','EXISTING_USER'],
			type: "text",
			inForm: true,

		},
		{
			name: "mapping_date",
			type: "text",
			inForm: true
			
		},
		{
			name: "re_txn_id",
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

	
	let requestName = REQUEST_NAMES.USER_MAPPINGS;

	let rowName = "User Mappings";

	return (
		<DBTable key={rowName} {...{
			requestName, formFields, rowName,
			keyField: "id",
			searchField: "campaign_id",
			searchFieldName: "Campaign Id"
		}}/>
		);
}
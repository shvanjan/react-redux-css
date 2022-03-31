import {REQUEST_NAMES} from "../network/network_enums";
import {useParams} from "react-router-dom";
import DBTable from "../components/DBTable2";

export default function UsersTable() {
	/*
	["id",
	"userName",
	"password",
	"active",
	"roles"]
	*/

	/*
		CREATE TABLE `user` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `active` bit(1) NOT NULL,
		  `password` varchar(255) DEFAULT NULL,
		  `roles` varchar(255) DEFAULT NULL,
		  `user_name` varchar(255) DEFAULT NULL,
		  PRIMARY KEY (`id`)
		)
	*/
	let formFields = [
		    {
		        "fieldName": "Id",
		        "name": "id",
		        "type": "number",
		        "inForm": false
		    },
		    {
		        "name": "userName",
		        "type": "number",
		        "inForm": true
		    },
		    {
		        "name": "password",
		        "type": "text",
		        "inForm": true
		    },
		    {
		        "name": "active",
		        "type": "number",
		        "inForm": true
		    },
		    {
		        "name": "roles",
		        "type": "text",
		        "inForm": true
		    }
		];

	let requestName = REQUEST_NAMES.USERS
	

	let rowName = "Users";

		return (
			<DBTable {...{
				 requestName, formFields, rowName,
				  enableSearch: true, 
				  keyField: "id",
				  searchField: "userName",
				  searchFieldName: "user name"
			}}/>
		);

	
}
import nw from "../network/network_requests";
import {METHOD_TYPES} from "../network/network_enums";

export async function getForeignKeyObject(fieldData, dispatch) {
	const  {
            tableName,
            keyName
      	} = fieldData.forgein_key_info;

	    let response = await nw.request(tableName, METHOD_TYPES.GET,
	       [], undefined, null, dispatch);
	      

    const tempObj = {};

	response.list.forEach((foreignTableRow) => {

		let customValue = "";
		fieldData.nameParts.forEach((fieldName, i) => {
			customValue = customValue + foreignTableRow[fieldName];
			if(i < fieldData.nameParts.length - 1) {
				customValue = customValue + " - "; //dash
			}
		});

		let commonKeyValue = foreignTableRow[keyName];
		tempObj[commonKeyValue] = customValue;
	});

	return tempObj;
}
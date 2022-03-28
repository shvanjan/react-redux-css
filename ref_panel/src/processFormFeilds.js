export default function processFormFeilds(formFields, convertName = false) {
	formFields.forEach((field) => {
		let {fieldName, name} = field;
		
		let name_parts = field.name.split("_");

		let new_name_parts = name_parts;
		name_parts.forEach((part, index) => {
			new_name_parts[index] = part.replace((part[0]), part[0].toUpperCase());
		})
		let new_name;
		new_name = new_name_parts.join(" ");
		if(!fieldName) {
			field.fieldName = new_name;
		}

		if(convertName) {
			let firstWord = new_name_parts[0];
			new_name_parts[0] = firstWord.replace(firstWord[0], firstWord[0].toLowerCase());
			let camelCaseName = new_name_parts.join("");
			field.name = camelCaseName;
			// console.log("name: " + camelCaseName, "new_name: " + new_name);
		}
	})
}
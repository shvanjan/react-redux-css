export default function processFormFeilds(formFields) {
	formFields.forEach((field) => {
		let {fieldName, name} = field;
		if(!fieldName) {
			let name_parts = field.name.split("_");
			let new_name_parts = name_parts;
			name_parts.forEach((part, index) => {
				new_name_parts[index] = part.replace((part[0]), part[0].toUpperCase());
			})
			let new_name = new_name_parts.join(" ");
			console.log("name: " + name, "new_name: " + new_name);
			field.fieldName = new_name;
		}

	})
}
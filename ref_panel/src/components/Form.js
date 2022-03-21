import * as React from 'react';

import "./form.scss";
import nw from "../network/network_requests";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";

export default function Form({formData, formFields, 
	requestName, method, 
	heading, closeMethod, 
	keyField, showCancel = true}) {

	return (
			<form role = "form"  onSubmit = {(e) =>  {
				submitForm(e, requestName, method, formData, formFields, keyField, (data) => {
					closeMethod(data);
				});
			}}>
			<div className = "form_black_bg" onClick = {() => closeMethod()}>
				<div className = "form_white_bg" onClick = {(e) => e.stopPropagation()}>
					<FormHeader {...{heading: heading, method}}/>
					<fieldset>
						<FieldList {...{formData, formFields, method}}/>
					</fieldset>

					{(method !== METHOD_TYPES.GET)?
					(<div className = "form_field form_footer">
						<button type = "submit" className="submit-button" >Submit</button>
						 {showCancel && <button className="cancel-button" onClick={(e) => {
						 	// clearFields();
						 	e.preventDefault();
						 	closeMethod();
						 }} >Cancel</button>}
					</div>):null}
				</div>
			</div>
			</form>

		)
}

function FieldList({formFields, formData, method}) {
	return formFields.map((fieldData) => {
				if(fieldData.type === "json") {
					return FieldList({formFields: fieldData.fields, formData: formData[fieldData.name] || {}, method});
				}
				if(fieldData.inForm === true && method !== METHOD_TYPES.GET) {
					return <FormField {...{method, value:formData[fieldData.name], ...fieldData}} key={fieldData.name}/>
				} else if(method === METHOD_TYPES.GET) {
					return <FormField {...{method, value:formData[fieldData.name], ...fieldData}} key={fieldData.name}/>
				}
			});
}

function FormHeader({heading, method}) {
	let prefix = "";
	switch(method) {
		case METHOD_TYPES.PUT:
			prefix = "Update ";
			break;
		case METHOD_TYPES.POST:
			prefix = "Add ";
			break;
	}
	return (
			<h3> {prefix + heading} </h3>
		)
}

function FormField({method, fieldName, value,
 name, placeholder, type = "number", 
 isForeignKey = false, forgein_key_info,
 required = true}) {
	const [inputValue, setValue] = React.useState(value||"");
	const [listLoaded, setListLoaded] = React.useState(false);
	const [foreignKeyList, setList] = React.useState([]);
	placeholder = placeholder || fieldName;
	let className = required? "form_field required": "form_field"; 
	let inputNode;

	React.useEffect(() => {
		if(isForeignKey) {
			 const  {
				tableName,
				keyName,
			} = forgein_key_info;

			// let requestName = tab

			nw.request(tableName, METHOD_TYPES.GET).then((data) => {
		      setList([...data.list]);
		      setListLoaded(true);
		    }, () => {
		      setListLoaded(false);
		    });

		}
	}, [listLoaded])

	if(!isForeignKey) {

	return (<div className = {className}> 	
				<label htmlFor={name}>{fieldName}</label>
				<input className="form_input" type={type} placeholder={placeholder} 
				value={inputValue} required={required} name={name}
				onKeyDown = {
					(e) => {
						if(e.keyCode == 13) {
							e.preventDefault();
						}
					}
				}
				onChange = {(e) => {
					// e.preventDefault();
					if(method !== METHOD_TYPES.GET) {
						setValue(e.target.value);
					}
				}}
				/>
			</div>);
	} else {



		return listLoaded?(
			<div className = {className}> 	
				<label htmlFor={name}>{fieldName}</label>
				<select className="form_input" value={inputValue} required={required} name={name}
			onChange = {(e) => {
					// e.preventDefault();
					if(method !== METHOD_TYPES.GET) {
						setValue(e.target.value);
					}
				}}
			>
			{method !== METHOD_TYPES.GET? (<>
				{foreignKeyList.map((foreignKeyRow) => {
					let value = foreignKeyRow[forgein_key_info.keyName];
					return <option key={value} value={value}>{value}</option>

				})}
			    
			</>): (<><option value={inputValue}>{inputValue}</option></>)}
   
  		</select>
  		</div>):null;
	}

}

function submitForm(event, requestName, method, inputData, formFields, keyField, callback) {
	event.preventDefault();

	let allFormInputs = document.getElementsByTagName("form")[0].
						getElementsByTagName("input");

 	let formData = getFormData(formFields);


	console.log(formData);
	let rest_param = [];
	if(method == METHOD_TYPES.PUT || method == METHOD_TYPES.DELETE) {
		rest_param[0] = inputData[keyField];
	}
	if(requestName === REQUEST_NAMES.LOGIN) {
		nw.setAuthToken(formData["user"], formData["password"]);
	}	
	nw.request(requestName, method, rest_param, JSON.stringify(formData), callback);
	return;

}

function getFormData(formFields) {
	let formData = {};
	formFields.forEach(({name, type, inForm, fields}) => {

		if(type === "json") {
			formData[name] = getFormData(fields);
		} else {
			if(inForm) {
				let val = document.getElementsByName(name)[0].value;
				formData[name] = val;
			}
		}
	});

	return formData;
}

function clearFields() {
	let allFormInputs = document.getElementsByTagName("form")[0].
						getElementsByTagName("input");

 	let formData = {};
	Array.prototype.forEach.apply(allFormInputs, [(input) => {
		// formData[input.name] = input.value;
	}]);
}
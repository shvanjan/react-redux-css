import * as React from 'react';

import "./form.scss";
import nw from "../network/network_requests";
import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";

export default function PointsForm({formData, formFields, 
	requestName, method, 
	heading, closeMethod}) {

	return (
			<form role = "form"  onSubmit = {(e) =>  {
				submitForm(e, requestName, method, () => {
					closeMethod();
				});
			}}>
			<div className = "form_black_bg" onClick = {() => closeMethod()}>
				<div className = "form_white_bg" onClick = {(e) => e.stopPropagation()}>
					<FormHeader {...{heading: heading}}/>
					<fieldset>
					{
						formFields.map((fieldData) => {

							{/*if(fieldData.inForm === false && method !== METHOD_TYPES.GET) {
								return
							}*/}

							if(fieldData.inForm === true && method !== METHOD_TYPES.GET) {
								return <FormField {...{method, value:formData[fieldData.name], ...fieldData}} key={fieldData.name}/>
							} else if(method === METHOD_TYPES.GET) {
								return <FormField {...{method, value:formData[fieldData.name], ...fieldData}} key={fieldData.name}/>
							}
						})
					}
					</fieldset>
					{(method !== METHOD_TYPES.GET)?
					(<div className = "form_field form_footer">
						<button type = "submit" className="submit-button" >Submit</button>
						 <button className="cancel-button" onClick={() => {
						 	clearFields();
						 	closeMethod();
						 }} >Cancel</button>
					</div>):null}
				</div>
			</div>
			</form>

		)
}

function FormHeader({heading}) {
	return (
			<h3> {heading} </h3>
		)
}

function FormField({method, fieldName, value, name, placeholder, type = "number", required = true}) {
	let [inputValue, setValue ] = React.useState(value||"");

	placeholder = placeholder || fieldName;
	let className = required? "form_field required": "form_field"; 
	let inputNode;

	return (<div className = {className}> 	
				<label htmlFor={name}>{fieldName}</label>
				<input type={type} placeholder={placeholder} 
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
}

function submitForm(event, requestName, method, callback) {
	event.preventDefault();

	let allFormInputs = document.getElementsByTagName("form")[0].
						getElementsByTagName("input");

 	let formData = {
 		attributes: {

 		}
 	};

	Array.prototype.forEach.apply(allFormInputs, [(input) => {
		
		if(input.name === "id") {
			formData["match_id"] = input.value;
		} else {
			formData.attributes[input.name] = input.value;
		}
	}]);



	console.log(formData);
	let rest_param = [];

	if(method == METHOD_TYPES.POST) {
		let urlMatchId = requestName.split("/")[1];
		requestName = requestName.replace("/" + urlMatchId, "");
	}
	nw.request(requestName, method, rest_param, JSON.stringify(formData), callback);
	return;

}

function clearFields() {
	let allFormInputs = document.getElementsByTagName("form")[0].
						getElementsByTagName("input");

 	let formData = {};
	Array.prototype.forEach.apply(allFormInputs, [(input) => {
		// formData[input.name] = input.value;
	}]);
}
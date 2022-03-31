
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./form.scss";
import nw from "../network/network_requests";
import {REQUEST_NAMES, METHOD_TYPES, REST_PARAMS} from "../network/network_enums";
import Loader from "../components/Loader";

import {getForeignKeyObject} from "../utilities/customFields";

export default function Form({formData = {}, formFields = [], 
	requestName, method, 
	heading, closeMethod, 
	keyField, showCancel = true, message}) {

	const dispatch = useDispatch();

	const [disabled, setDisabled] = React.useState(false);

	return (
			
			<div className = {`form_black_bg ${requestName.split("/")[1] || requestName.split("/")[0]}`} onClick = {() => !disabled && closeMethod(false)}>
				<div className = "form_white_bg" onClick = {(e) => e.stopPropagation()}>
					<FormHeader {...{heading: heading, method}}/>
					<form role = "form"  onSubmit = {(e) =>  {
						submitForm(e, requestName, method, formData, formFields, keyField, (data) => {
							closeMethod(data);
						}, (e) => {
							setDisabled(false);
							console.log(e + "error occured")
						}, dispatch);
						setDisabled(true);
					}}>
					<fieldset>
						<FieldList {...{formData, formFields, method}}/>
					</fieldset>


					{(method && method !== METHOD_TYPES.GET)?
					(<div className = "form_field form_footer">
						<button type = "submit" className="submit-button" disabled={disabled} >Submit</button>
						 {showCancel && <button className="cancel-button" disabled={disabled} onClick={(e) => {
						 	// clearFields();
						 	e.preventDefault();
						 	closeMethod(false);
						 }} >Cancel</button>}
					</div>):null}
					</form>
				</div>
				{disabled && <Loader/>}
			</div>

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

export function FormField({method, fieldName, value,
	 name, placeholder, type = "number", 
	 isForeignKey = false, forgein_key_info,
	 required = true, range, editMode,
	closeInput, isLongText, ...fieldData}) {
	const dispatch = useDispatch();
	const [inputValue, setValue] = React.useState(value||getDefaultValue(type, method));
	const [listLoaded, setListLoaded] = React.useState(false);
	const [foreignKeyList, setList] = React.useState([]);
	placeholder = placeholder || fieldName;
	required = false; 
	let className = required? "form_field required": "form_field"; 
	className = editMode? "in-place-edit": className;
	let inputNode, step;
	if(type==="date") {
		type = "datetime-local";
		step = 1;
	}
	
	React.useEffect(async () => {
		if(isForeignKey) {
			const tempObj = await getForeignKeyObject({name, forgein_key_info, ...fieldData}, dispatch)
			const list = [];
			Object.keys(tempObj).forEach((id) => list.push(tempObj[id]));
			setList(list);
			setListLoaded(true);
		}
	}, [listLoaded])

	React.useEffect(() => {
		inputNode && inputNode.focus();
		if(type==="datetime-local" && value) {
			let parts = value.split(" ");
			setValue(parts[0] + "T" + parts[1]);
		}
	}, [inputNode])


	const onChange = (e) => {
					// e.preventDefault();
					if(method !== METHOD_TYPES.GET) {
						setValue(e.target.value);
					}
				};

    const onBlur = (e) => {
					// e.preventDefault();
					editMode && closeInput && closeInput();
				};

	const onKeyDown = (e) => {
						if(e.keyCode == 13) {
							e.preventDefault();
							editMode &&  closeInput && closeInput(e.target.value, true);
						}
					};
				

	const propsObj = {
		className: "form_input",
		type,
		placeholder,
		value: inputValue,
		required,
		name,
		step,
		onChange,
		onBlur,
		onKeyDown
	}

	if(!isForeignKey && !range) {

	return (<div className = {className}> 	
				<label htmlFor={name}>{fieldName}</label>
				{/*<input className="form_input" type={type} placeholder={placeholder} 
				value={inputValue} required={required} name={name}
				step={step}
				ref={(node)=>inputNode=node}
				onKeyDown = {onKeyDown}
				onChange = {onChange}
				onBlur = {onBlur}
				/>*/}
				<>
				{isLongText && <textarea {...{...propsObj}}
				ref={(node)=>inputNode=node}/>}


				{!isLongText && <input {...{...propsObj}}
				ref={(node)=>inputNode=node}
				/>}
				</>

			</div>);
	} else {



		return (listLoaded || range)?(
			<div className = {className}> 	
				<label htmlFor={name}>{fieldName}</label>
				<DropDownInput {...{
					rangeOfValues: range || foreignKeyList, 
					method,
					isForeignKey, keyName: isForeignKey && forgein_key_info.keyName,
					setValue, ...propsObj}}/>

				
  		</div>):null;
	}

}


function DropDownInput({rangeOfValues, 
	isForeignKey, keyName, setValue, method,
	...propsObj}) {
		let inputNode;
		React.useEffect(() => {
			inputNode && inputNode.focus();
		}, [inputNode]);
	
	let {value: inputValue} = propsObj;

	return (
		<select {...{...propsObj}}
			ref={(node)=>inputNode=node}
			>
			{method !== METHOD_TYPES.GET? (<>
				{rangeOfValues.map((value) => {
					return <option key={value} value={value}>{value}</option>

				})}
			    
			</>): (<><option value={inputValue}>{inputValue}</option></>)}
			</select>
		);
}


// function DropDownInput({inputValue, rangeOfValues, 
// 	isForeignKey, required, keyName, name, setValue, method,
// 	onChange, onBlur}) {
// 	let inputNode;
// 	React.useEffect(() => {
// 		inputNode && inputNode.focus();
// 	}, [inputNode]);

// 	return (
// 		<select className="form_input" value={inputValue} required={required} name={name}
// 			onChange = {onChange}
// 			onBlur = {onBlur}
// 			ref={(node)=>inputNode=node}

// 			>
// 			{method !== METHOD_TYPES.GET? (<>
// 				{rangeOfValues.map((foreignKeyRow) => {
// 					let value = isForeignKey? foreignKeyRow[keyName] : foreignKeyRow;
// 					return <option key={value} value={value}>{value}</option>

// 				})}
			    
// 			</>): (<><option value={inputValue}>{inputValue}</option></>)}
// 			</select>
// 		);
// }

async function submitForm(event, requestName, method,
 inputData, formFields, keyField, callback, errorCallback, dispatch) {
	event.preventDefault();

	let allFormInputs = document.getElementsByTagName("form")[0].
						getElementsByTagName("input");

 	let formData = getFormData(formFields);


	console.log(formData);
	let rest_param = [REST_PARAMS[method]];
	if(method == METHOD_TYPES.PUT || method == METHOD_TYPES.DELETE) {
		// rest_param[0] = inputData[keyField];
		formData[keyField] = inputData[keyField];
	}



	if(requestName === REQUEST_NAMES.LOGIN) {
		rest_param = [];
		nw.setAuthToken(formData["user"], formData["password"]);
	}	

	// nw.request(requestName, method, rest_param, JSON.stringify(formData), callback);
	try {
		let response = await nw.request(requestName, METHOD_TYPES.POST, rest_param, JSON.stringify(formData), callback, dispatch);

	} catch(e) {
		errorCallback(e);
	}
	
	return;

}

function getFormData(formFields) {
	let formData = {};
	formFields.forEach(({name, nameParts, type, inForm, fields, isForeignKey}) => {

		if(type === "json") {
			formData[name] = getFormData(fields);
		} else {
			if(inForm) {
				let val = document.getElementsByName(name)[0].value;
				formData[name] = val;

				if(isForeignKey && nameParts) {
					let valParts = val.split(" - ");
					nameParts.forEach((part, i) => {
						formData[part] = valParts[i];
					});
				}
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


function getDefaultValue(type, method) {
	let defaultValue;
	if(method === METHOD_TYPES.POST) {
		switch(type) {
			case "text":
				defaultValue = "abc";
				break;
			case "url": 
				defaultValue = "https://default.com";
				break;
			case "date":
				const d = new Date();

				defaultValue = d.toISOString();
				defaultValue = defaultValue.split(".")[0];
				break;
			case "number": 
				defaultValue = 1;
				break;
			default:
				defaultValue = "";
				break;
		}
	}

	return defaultValue;
}
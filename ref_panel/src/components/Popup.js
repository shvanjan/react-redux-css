import * as React from 'react';
import Form from "../components/Form";

export default function Popup({heading, message, closeMethod}) {
  const [disabled, setDisabled] = React.useState(false);
					
  return <div className = {`form_black_bg`}  onClick = {
  	() => {!disabled && closeMethod && closeMethod(false)}}>
		<div className = "form_white_bg popup" onClick = {(e) => e.stopPropagation()}>
			<h4>{heading || "Error"}</h4>
			<span>{message}</span>
			<button className = "popup_button" onClick = {() => {
				!disabled && closeMethod && closeMethod();
			}}> OK </button>
		</div>
	</div>
}
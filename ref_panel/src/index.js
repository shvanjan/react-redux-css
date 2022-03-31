import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function createFields(fieldsArr) {

  let formFields = [{
      fieldName: "Id",
      name: "id",
      type: "number",
      inForm: false

    }];

  fieldsArr.forEach((field) => {
    let fieldName;
    console.log("total length " + field.length)
    if(field.includes("(")) {
      let i = field.indexOf("(");
      let j = field.indexOf(")");
      console.log("i, j"  + i, j)
      fieldName = field.substring(i + 1, j);
      console.log(fieldName);
      field = field.substring(0, field.indexOf("(") - 1);
    }
    let obj = {
      name: field, type: "number", inForm: true, fieldName
    }

    formFields.push(obj);
  });

  return formFields;
}

window.createFields = createFields;
window.arr = ["id",
"userName",
"password",
"active",
"roles"];

// console.log(createFields(window.arr));


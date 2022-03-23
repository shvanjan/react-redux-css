import React, { useContext, createContext, useState } from "react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import {useDispatch } from 'react-redux';
import {
  login,
  logout
} from '../features/authentication/LoginSlice';

import Form from "../components/Form";

import {REQUEST_NAMES, METHOD_TYPES} from "../network/network_enums";
import nw from "../network/network_requests";

export default function LoginPage() {


  let location = useLocation();
  let navigate = useNavigate(); 
  let dispatch = useDispatch();

  let from  = location.state?.from?.pathname || '/Configuration/campaigns'
  let callLogin = (userInfo) => {
    dispatch(login(userInfo));
    navigate(from);
  };

  return (
    <div>

      {(<Form {...{
        formData: {}, 
        formFields: [
          {
            fieldName: "User Id",
            name: "user",
            type: "text",
            inForm: true
          },
          {
            fieldName: "Password",
            name: "password",
            type: "password",
            inForm: true
          }
        ],
          requestName: REQUEST_NAMES.LOGIN, 
          method: METHOD_TYPES.POST, 
          heading: "Login Details", 
          showCancel: false,
          closeMethod: ({user_info} = {}) => {
            if(user_info) {
              callLogin(user_info);
            } else {
              navigate("/")
            }
          }
      }}/>)}
    </div>
  );
}

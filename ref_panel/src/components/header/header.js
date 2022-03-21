import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import {
  login,
  logout
} from '../../features/authentication/LoginSlice';

import {
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function Header() {

	const isAuthenticated = useSelector(state => state.login.isAuthenticated);
	const userInfo = useSelector(state => state.login.userInfo);
	let navigate = useNavigate(); 
	let dispatch = useDispatch();
	

	const signIn = (e) => {

		// dispatch(login({name: "Shivani", permissions: {
		//      read_logs: true,
		//      read_configuration: true,
		//      is_admin: true,
		//      can_edit: true
  //  			}
		// }));

		navigate('/login');

	}

	const signOut = (e) => {
		dispatch(logout());
	}

	const toggleLogIn = (e) => {
		isAuthenticated? signOut(e): signIn(e);
	}

	const welcomMessage = <span className="welcome-message"> Welcome {isAuthenticated? userInfo.name: ""} !</span>;
	
	return (
			<div className="header">
				<h1> Referral Panel </h1>
				{welcomMessage}
				<button className="signin-button" onClick={toggleLogIn}> 
				{isAuthenticated? "Sign Out": "Sign In"} </button>
			</div>
		)
}	
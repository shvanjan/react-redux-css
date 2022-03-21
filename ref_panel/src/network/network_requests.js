import getMockData from "./mockData";
import {SERVER_URL, isMocked} from "./network_enums";
import token from "basic-auth-token";

const ONE_SECOND = 1000;
const WAIT_TIME = 0.1 * ONE_SECOND;
const headers = {
        "Authorization": "Basic ZGs6cXdlcg==",
        "Content-Type": "application/json",
        'Accept': 'application/json'
    }


const nw = {
    isMocked: function() {
        return isMocked;
    },

    request: async function(url, method, rest_params, body, callback) {
        let final_url = SERVER_URL + url + getRestUrl(rest_params || []);
        console.log( "url: " + final_url + " method: " + method);
        let response;

        if(this.isMocked()) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let data = getMockData(url, method);
                    callback && callback(data);
                    resolve(data);

                }, WAIT_TIME);
            });
        } 
        try {
            response = await fetch(final_url, {
                method,
                headers,
                body
            });
        } catch(e) {
            alert(e.message);
            return Promise.reject(e.message);
        }

        let responseJSON;
        if(response.status === 200) {
            responseJSON = await response.json();
            if(this.isMocked()) {
                   (delete responseJSON.json);

            }
            callback && callback(responseJSON);
        } else {
            responseJSON = await response.json();

            // this.handleServerError(responseJSON);
            console.log(responseJSON.message);

            return Promise.reject(responseJSON.message);
           
        }

        console.log(responseJSON);
        return responseJSON;
    },

    setChecksum: function(checksum) {
        if(checksum) {
            headers.checksum = checksum;
        }
    },  

    setAuthToken: function(userName, password) {
        var a = btoa(userName, password);
        console.log("a = " + a);
       // headers.Authorization = "Basic " + a;
    } 


};

export default nw;


function getRestUrl(rest_params) {
          let url = rest_params.length ? "/" : "";
          return `${url}${rest_params.join("/")}`;
    }
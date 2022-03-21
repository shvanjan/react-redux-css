import {REQUEST_NAMES, METHOD_TYPES} from "./network_enums"

export default function getMockData(taskName, methodType) {
	let mockData = {

	};

    // taskName = taskName.split("/")[0];
	switch(methodType) {
        case METHOD_TYPES.GET:
            switch(taskName) {
                case REQUEST_NAMES.POINTS: 
                    let obj = [
                        {"id":1, "team_name":"Antique Friends","nrr":"2.68","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":2, "team_name":"Anonymous Knights","nrr":"2.30","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":3, "team_name":"Just Cricket","nrr":"2.20","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":4, "team_name":"Bombay Vikings","nrr":"1.58","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":5, "team_name":"Quantei Titans","nrr":"1.06","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":6, "team_name":"Alpha Panthers","nrr":"0.90","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":7, "team_name":"Ace Cricket Club","nrr":"0.80","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":8, "team_name":"Avengers","nrr":"0.77","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":9, "team_name":"Spartans Cricket Club","nrr":"0.00","nr":1,"lost":0,"won":0,"played":1,"points":1},
                        {"id":10, "team_name":"Cargo Cricket Club","nrr":"0.00","nr":1,"lost":0,"won":0,"played":1,"points":1},
                        {"id":11, "team_name":"Kutchhi Pumas","nrr":"3.2","nr":0,"lost":0,"won":1,"played":1,"points":2},
                        {"id":12, "team_name":"Raging Rhinos","nrr":"-3.2","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":13, "team_name":"Mumbai vikings","nrr":"-0.77","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":14, "team_name":"Athletic Kangaroos","nrr":"-0.80","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":15, "team_name":"Kensington Cricket Club","nrr":"-0.90","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":16, "team_name":"Misfits","nrr":"-1.06","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":17, "team_name":"DBS Bank","nrr":"-1.58","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":18, "team_name":"Rroaring Lions","nrr":"-2.20","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":19, "team_name":"Ish Warriors","nrr":"-2.30","nr":0,"lost":1,"won":0,"played":1,"points":0},
                        {"id":20, "team_name":"Wicketing Wizards","nrr":"-2.68","nr":0,"lost":1,"won":0,"played":1,"points":0}
                        ]
                        mockData.list = obj;
                        break;
                case REQUEST_NAMES.TEAMS:
            mockData.list = 
                [
                    {
                        "id": 1,
                         "team_name": "Antique Friend",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Antique%20Friends.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-16T06:29:06.000Z"
                    },
                    {
                        "id": 2,
                         "team_name": "Anonymous Knights",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/ANONYMOUS%20KNIGHTS.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 3,
                         "team_name": "Just Cricket",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Just%20Cricket.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 4,
                         "team_name": "Bombay Vikings",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Bombay%20Vikings.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 5,
                         "team_name": "Quantei Titans",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Quantei%20Titans.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 6,
                         "team_name": "Alpha Panthers",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/ALPHA%20PANTHERS.png",
                        "createdAt": (new Date()).toISOString(),
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 7,
                         "team_name": "Ace Cricket Club",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/ACE%20C.C.png",
                        "createdAt": new Date((new Date()).getTime() + 13*3600).toISOString(),
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 8,
                         "team_name": "Avengers",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/1.Avengers%20LOGO.jpeg",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 9,
                         "team_name": "Spartans Cricket Club",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Spartans%20C.C.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 10,
                         "team_name": "Cargo Cricket Club",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Cargo%20Cricket%20Club.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 11,
                         "team_name": "Kutchhi Pumas",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/KUTCHHI%20PUMAS.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 12,
                         "team_name": "Raging Rhinos",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Raging%20Rhinos.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 13,
                         "team_name": "Mumbai Vikings",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Mumbai%20vikings.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 14,
                         "team_name": "Athletic Kangaroos",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/ATHLETIC-Kangaros.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 15,
                         "team_name": "Kensington Cricket Club",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/K.c.c.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 16,
                         "team_name": "Misfits",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/THE%20MISFITS.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 17,
                         "team_name": "DBS Bank",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/DBS.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 18,
                         "team_name": "Rroaring Lions",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/5.Rroaring%20Lions%20LOGO.jpeg",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 19,
                         "team_name": "Ish Warriors",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/ISH%20WARRIOR.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    },
                    {
                        "id": 20,
                         "team_name": "Wicketing Wizards",
                        "team_image_url": "https://f.hubspotusercontent10.net/hubfs/8790268/livestream/Wicketing%20Wizards.png",
                        "createdAt": "2021-11-09T09:26:30.000Z",
                        "updatedAt": "2021-11-09T09:26:30.000Z"
                    }
                ];
                break;
                case REQUEST_NAMES.MATCH: 

                    mockData.list = [
                    {
                        "id":19,"match_id":617114,
                        "attributes":{
                            "antroidLiveStreamUrl":"https://3e46f9f3de79c4d4.mediapackage.ap-south-1.amazonaws.com/out/v1/28ba9ee8555e4f9b89f5d824f49800cb/index.mpd",
                            "iosLiveStreamUrl":"https://3e46f9f3de79c4d4.mediapackage.ap-south-1.amazonaws.com/out/v1/467cf3241efa4b88bb678020ad8b446c/index.m3u8",
                            "forceLive":"true"
                        },
                        "created":"2021-12-02T09:08:41.000Z",
                        "modifiedon":"2021-12-02T09:08:41.000Z"
                    }, 
                    {
                        "id":20,"match_id":617113,
                        "attributes":{
                            "antroidLiveStreamUrl":"https://3e46f9f3de79c4d4.mediapackage.ap-south-1.amazonaws.com/out/v1/28ba9ee8555e4f9b89f5d824f49800cb/index.mpd",
                            "iosLiveStreamUrl":"https://3e46f9f3de79c4d4.mediapackage.ap-south-1.amazonaws.com/out/v1/467cf3241efa4b88bb678020ad8b446c/index.m3u8",
                            "forceLive":"true"
                        },
                        "created":"2021-12-02T09:08:41.000Z",
                        "modifiedon":"2021-12-02T09:08:41.000Z"
                    }];                 
                    break;
            }

                case REQUEST_NAMES.CAMPAIGNS: 
                    mockData.list = [
                    {
                        "id":1,
                        "campaign_title":"App install bonus New Test Update",
"campaign_id":"GP-CE9VF",
"campaign_type":"PLATFORM",
"campaign_property":"PP_PAYTM",
"game_pid":null,
"campaign_landing_url":"https://testgp.gamepind.com",
"gratification_currency":"BEANS",
"gratification_description":null,
"referrer_gratification_limit":100,
"referrer_max_limit_daily":25,
"referrer_max_count_daily":5,
"referrer_max_limit":9,
"start_date":"2020-02-10 13:13:29",
"end_date":"2020-12-10 00:00:00",
"created_date":"2020-02-16 16:24:51",
"is_active":0},
                    {"id":2,"campaign_title":"App install bonus New Test Update","campaign_id":"GP-CE9VF1","campaign_type":"PLATFORM","campaign_property":"PP_APP,PP_APP_IOS,PP_FAN_APP,PP_FAN_IOS","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"PFGBONUS","gratification_description":null,"referrer_gratification_limit":200,"referrer_max_limit_daily":200,"referrer_max_count_daily":17,"referrer_max_limit":20,"start_date":"2017-09-01 10:00:29","end_date":"2022-09-30 00:00:00","created_date":"2022-09-30 12:24:51","is_active":1},{"id":3,"campaign_title":"App install bonus","campaign_id":"GP-CE9VF2","campaign_type":"PLATFORM","campaign_property":"PP_WEB","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"LOYALTY","gratification_description":null,"referrer_gratification_limit":50,"referrer_max_limit_daily":25,"referrer_max_count_daily":5,"referrer_max_limit":9,"start_date":"2020-02-10 11:01:00","end_date":"2020-10-30 21:30:00","created_date":"2020-02-02 16:24:51","is_active":0},{"id":4,"campaign_title":"App install bonus New Test Update","campaign_id":"GP-CE9VF3","campaign_type":"PLATFORM","campaign_property":"GPC_GGL","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"PFGBONUS","gratification_description":null,"referrer_gratification_limit":100,"referrer_max_limit_daily":25,"referrer_max_count_daily":2,"referrer_max_limit":9,"start_date":"2020-03-06 10:00:29","end_date":"2020-12-10 00:00:00","created_date":"2020-02-29 12:24:51","is_active":0},{"id":5,"campaign_title":"","campaign_id":"","campaign_type":null,"campaign_property":null,"game_pid":null,"campaign_landing_url":null,"gratification_currency":null,"gratification_description":null,"referrer_gratification_limit":null,"referrer_max_limit_daily":null,"referrer_max_count_daily":null,"referrer_max_limit":null,"start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","created_date":"2020-09-16 14:46:47","is_active":0},{"id":6,"campaign_title":"App install bonus New Test Update","campaign_id":"GP-CE9VF","campaign_type":"PLATFORM","campaign_property":"PP_PAYTM","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"BEANS","gratification_description":null,"referrer_gratification_limit":100,"referrer_max_limit_daily":25,"referrer_max_count_daily":5,"referrer_max_limit":9,"start_date":"2017-12-01 13:13:29","end_date":"2022-01-01 00:00:00","created_date":"2020-02-16 16:24:51","is_active":1},{"id":8,"campaign_title":"Testing App install bonus New Test Update","campaign_id":"GP-CE9VF","campaign_type":"GAME","campaign_property":"PP_PAYTM","game_pid":"123123","campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"BEANS","gratification_description":null,"referrer_gratification_limit":100,"referrer_max_limit_daily":25,"referrer_max_count_daily":5,"referrer_max_limit":9,"start_date":"2020-02-10 13:13:29","end_date":"2020-12-10 00:00:00","created_date":"2022-03-07 09:32:40","is_active":1}];
            case METHOD_TYPES.POST:
                switch(taskName) {
                    case REQUEST_NAMES.LOGIN:
                        mockData = {
                           user_info:{
                             name: "Shivani", 
                             permissions: {
                                 read_logs: true,
                                 read_configuration: true,
                                 is_admin: true,
                                 can_edit: true
                             }
                            } 
                        }   
                        break;
                }
    }


	mockData.status = 200;

    mockData.json = function () {

        return mockData;
    }
    return mockData;


}

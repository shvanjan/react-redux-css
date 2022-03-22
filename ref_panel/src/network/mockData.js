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
                            }
                        ];                 
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
                case REQUEST_NAMES.GRATIFICATIOS:
                    mockData.list = [
                            {"id":1,
                            "start_count":0,
                            "end_count":100,
                            "referrer_amount":60,
                            "referrer_currency":"PFGBONUS",
                            "referred_amount":0,
                            "referred_currency":"PFGDEPOSIT",
                            "campaign_id":"GP-CE9VF1",
                            "task_id":"233",
                            "whitelisted_repo":null,
                            "daily_gratification_limit":99999999,
                            "max_gratification_limit":99999999,
                            "daily_max_count":10,
                            "max_count":15,
                            "per_referred_daily_gratification_limit":null,
                            "per_referred_daily_max_count":null,
                            "per_referred_max_count":null,
                            "referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 0, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 20}]"},
                            {"id":6,"start_count":0,"end_count":100,"referrer_amount":5,"referrer_currency":"PFGDEPOSIT","referred_amount":10,"referred_currency":"PFGBONUS","campaign_id":"GP-CE9VF1","task_id":"233","whitelisted_repo":"testrepo","daily_gratification_limit":300,"max_gratification_limit":350,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":null},{"id":7,"start_count":0,"end_count":100,"referrer_amount":0,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGDEPOSIT","campaign_id":"GP-CE9VF1","task_id":null,"whitelisted_repo":null,"daily_gratification_limit":200,"max_gratification_limit":250,"daily_max_count":null,"max_count":15,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":null},{"id":83,"start_count":0,"end_count":5,"referrer_amount":5,"referrer_currency":null,"referred_amount":4,"referred_currency":null,"campaign_id":"GP-CE9VF3","task_id":null,"whitelisted_repo":null,"daily_gratification_limit":null,"max_gratification_limit":null,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":null},{"id":84,"start_count":6,"end_count":9,"referrer_amount":5,"referrer_currency":null,"referred_amount":10,"referred_currency":null,"campaign_id":null,"task_id":null,"whitelisted_repo":null,"daily_gratification_limit":null,"max_gratification_limit":null,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":null},{"id":85,"start_count":10,"end_count":15,"referrer_amount":7,"referrer_currency":null,"referred_amount":12,"referred_currency":null,"campaign_id":null,"task_id":null,"whitelisted_repo":null,"daily_gratification_limit":null,"max_gratification_limit":null,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":null},{"id":86,"start_count":0,"end_count":100,"referrer_amount":0,"referrer_currency":"PFGDEPOSIT","referred_amount":10,"referred_currency":"PFGBONUS","campaign_id":"GP-CE9VF1","task_id":"282","whitelisted_repo":"test_repo","daily_gratification_limit":300,"max_gratification_limit":350,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":null},{"id":87,"start_count":0,"end_count":100,"referrer_amount":1,"referrer_currency":"PFGDEPOSIT","referred_amount":1,"referred_currency":"PFGBONUS","campaign_id":"GP-CE9VF1","task_id":"286","whitelisted_repo":"test_repo","daily_gratification_limit":300,"max_gratification_limit":350,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":null},{"id":88,"start_count":0,"end_count":100,"referrer_amount":1,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGBONUS","campaign_id":"GP-CE9VF1","task_id":"287","whitelisted_repo":"","daily_gratification_limit":120,"max_gratification_limit":120,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 0, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 15}]"},{"id":89,"start_count":0,"end_count":100,"referrer_amount":25,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGDEPOSIT","campaign_id":"GP-CE9VF1","task_id":"288","whitelisted_repo":null,"daily_gratification_limit":500,"max_gratification_limit":10000,"daily_max_count":20,"max_count":400,"per_referred_daily_gratification_limit":-1,"per_referred_daily_max_count":-1,"per_referred_max_count":-1,"referrer_amount_per_slab":null},{"id":90,"start_count":0,"end_count":100,"referrer_amount":25,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGDEPOSIT","campaign_id":"GP-CE9VF1","task_id":"289","whitelisted_repo":null,"daily_gratification_limit":10000,"max_gratification_limit":10000,"daily_max_count":20,"max_count":400,"per_referred_daily_gratification_limit":5035,"per_referred_daily_max_count":-1,"per_referred_max_count":-1,"referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 0, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 25}, {\"toAmount\": 10000, \"fromAmount\": 1001, \"referredAmount\": 0, \"referrerAmount\": 500}, {\"toAmount\": 50000, \"fromAmount\": 10001, \"referredAmount\": 0, \"referrerAmount\": 1000}]"},{"id":91,"start_count":0,"end_count":100,"referrer_amount":25,"referrer_currency":"PFGDEPOSIT","referred_amount":25,"referred_currency":"PFGDEPOSIT","campaign_id":"GP-CE9VF1","task_id":"295","whitelisted_repo":null,"daily_gratification_limit":250,"max_gratification_limit":1000,"daily_max_count":10,"max_count":40,"per_referred_daily_gratification_limit":-1,"per_referred_daily_max_count":-1,"per_referred_max_count":-1,"referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 0, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 25}, {\"toAmount\": 10000, \"fromAmount\": 1001, \"referredAmount\": 0, \"referrerAmount\": 500}, {\"toAmount\": 50000, \"fromAmount\": 10001, \"referredAmount\": 0, \"referrerAmount\": 1000}]"},{"id":92,"start_count":0,"end_count":100,"referrer_amount":25,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGDEPOSIT","campaign_id":"GP-CE9VF1","task_id":"290","whitelisted_repo":null,"daily_gratification_limit":250,"max_gratification_limit":1000,"daily_max_count":10,"max_count":40,"per_referred_daily_gratification_limit":-1,"per_referred_daily_max_count":-1,"per_referred_max_count":-1,"referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 0, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 25}, {\"toAmount\": 10000, \"fromAmount\": 1001, \"referredAmount\": 0, \"referrerAmount\": 500}, {\"toAmount\": 50000, \"fromAmount\": 10001, \"referredAmount\": 0, \"referrerAmount\": 1000}]"},{"id":93,"start_count":0,"end_count":100,"referrer_amount":1,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGBONUS","campaign_id":"GP-CE9VF1","task_id":"291","whitelisted_repo":"","daily_gratification_limit":200,"max_gratification_limit":250,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 0, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 15}]"},{"id":94,"start_count":0,"end_count":100,"referrer_amount":1,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGBONUS","campaign_id":"GP-CE9VF1","task_id":"292","whitelisted_repo":"","daily_gratification_limit":200,"max_gratification_limit":250,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":"[{\"toAmount\": 500, \"fromAmount\": 1, \"referredAmount\": 0, \"referrerAmount\": 25}, {\"toAmount\": 1000, \"fromAmount\": 501, \"referredAmount\": 0, \"referrerAmount\": 50}, {\"toAmount\": 5000, \"fromAmount\": 1001, \"referredAmount\": 0, \"referrerAmount\": 250}, {\"toAmount\": 20000, \"fromAmount\": 5001, \"referredAmount\": 0, \"referrerAmount\": 500}, {\"toAmount\": 50000, \"fromAmount\": 20001, \"referredAmount\": 0, \"referrerAmount\": 1250}, {\"toAmount\": 100000, \"fromAmount\": 50001, \"referredAmount\": 0, \"referrerAmount\": 2500}]"},{"id":95,"start_count":0,"end_count":100,"referrer_amount":1,"referrer_currency":"PFGDEPOSIT","referred_amount":0,"referred_currency":"PFGBONUS","campaign_id":"GP-CE9VF1","task_id":"293","whitelisted_repo":"","daily_gratification_limit":200,"max_gratification_limit":1000,"daily_max_count":null,"max_count":null,"per_referred_daily_gratification_limit":null,"per_referred_daily_max_count":null,"per_referred_max_count":null,"referrer_amount_per_slab":"[{\"toAmount\": 100, \"fromAmount\": 1, \"referredAmount\": 0, \"referrerAmount\": 15}, {\"toAmount\": 1000, \"fromAmount\": 101, \"referredAmount\": 0, \"referrerAmount\": 10}, {\"toAmount\": 5000, \"fromAmount\": 1001, \"referredAmount\": 0, \"referrerAmount\": 5}, {\"toAmount\": 10000, \"fromAmount\": 5001, \"referredAmount\": 0, \"referrerAmount\": 2}]"}
                    ];
                    break;
                case REQUEST_NAMES.TASKS:
                    mockData.list = [
                    {    
                        "id":0,
                        "task_id":"245",
                        "campaign_id":"GP-CE9VF1",
                        "daily_gratification_limit":50,
                        "max_gratification_limit":100,
                        "daily_task_count":7,
                        "max_task_count":9,
                        "task_title":"sps",
                        "task_type":"consecutive",
                        "event_type":null,
                        "reward_mode":null,
                        "task_description":null,
                        "task_status":1,
                        "start_date":"2020-01-30 17:04:45",
                        "end_date":"2020-12-31 17:04:55",
                        "per_referred_daily_gratification_limit":null,
                        "per_referred_max_gratification_limit":null,
                        "per_referred_daily_task_count":null,
                        "per_referred_max_task_count":null,
                        "referral_source":"wallet"},
                        {"id":1,"task_id":"233","campaign_id":"GP-CE9VF1","daily_gratification_limit":50,"max_gratification_limit":100,"daily_task_count":6,"max_task_count":7,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-02-28 17:04:55","per_referred_daily_gratification_limit":150,"per_referred_max_gratification_limit":200,"per_referred_daily_task_count":4,"per_referred_max_task_count":5,"referral_source":"wallet"},{"id":2,"task_id":"239","campaign_id":"GP-CE9VF1","daily_gratification_limit":100,"max_gratification_limit":120,"daily_task_count":10,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2020-04-30 17:04:55","per_referred_daily_gratification_limit":null,"per_referred_max_gratification_limit":null,"per_referred_daily_task_count":null,"per_referred_max_task_count":null,"referral_source":"wallet"},{"id":3,"task_id":"241","campaign_id":"GP-CE9VF1","daily_gratification_limit":25,"max_gratification_limit":50,"daily_task_count":10,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":"hello","task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2020-04-29 17:04:55","per_referred_daily_gratification_limit":null,"per_referred_max_gratification_limit":null,"per_referred_daily_task_count":null,"per_referred_max_task_count":null,"referral_source":"wallet"},{"id":4,"task_id":"242","campaign_id":"GP-CE9VF1","daily_gratification_limit":25,"max_gratification_limit":50,"daily_task_count":10,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2020-05-29 17:04:55","per_referred_daily_gratification_limit":null,"per_referred_max_gratification_limit":null,"per_referred_daily_task_count":null,"per_referred_max_task_count":null,"referral_source":"wallet"},{"id":5,"task_id":"282","campaign_id":"GP-CE9VF1","daily_gratification_limit":25,"max_gratification_limit":50,"daily_task_count":10,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-06-30 17:04:55","per_referred_daily_gratification_limit":null,"per_referred_max_gratification_limit":null,"per_referred_daily_task_count":null,"per_referred_max_task_count":null,"referral_source":"wallet"},{"id":6,"task_id":"286","campaign_id":"GP-CE9VF1","daily_gratification_limit":25,"max_gratification_limit":50,"daily_task_count":10,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-06-30 17:04:55","per_referred_daily_gratification_limit":null,"per_referred_max_gratification_limit":null,"per_referred_daily_task_count":null,"per_referred_max_task_count":null,"referral_source":"rummy"},{"id":7,"task_id":"287","campaign_id":"GP-CE9VF1","daily_gratification_limit":100,"max_gratification_limit":500,"daily_task_count":12,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-06-30 17:04:55","per_referred_daily_gratification_limit":150,"per_referred_max_gratification_limit":1000,"per_referred_daily_task_count":10,"per_referred_max_task_count":20,"referral_source":"cumulative"},{"id":8,"task_id":"288","campaign_id":"GP-CE9VF1","daily_gratification_limit":null,"max_gratification_limit":null,"daily_task_count":null,"max_task_count":null,"task_title":"Rummy First Play","task_type":"consecutive","event_type":null,"reward_mode":"FLAT","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-06-30 17:04:55","per_referred_daily_gratification_limit":-1,"per_referred_max_gratification_limit":-1,"per_referred_daily_task_count":-1,"per_referred_max_task_count":-1,"referral_source":"rummy"},{"id":9,"task_id":"289","campaign_id":"GP-CE9VF1","daily_gratification_limit":25,"max_gratification_limit":50,"daily_task_count":12,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"FIXEDFLAT","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-06-30 17:04:55","per_referred_daily_gratification_limit":10000,"per_referred_max_gratification_limit":10000,"per_referred_daily_task_count":10,"per_referred_max_task_count":20,"referral_source":"wallet"},{"id":10,"task_id":"291","campaign_id":"GP-CE9VF1","daily_gratification_limit":100,"max_gratification_limit":500,"daily_task_count":12,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-06-30 17:04:55","per_referred_daily_gratification_limit":-1,"per_referred_max_gratification_limit":-1,"per_referred_daily_task_count":-1,"per_referred_max_task_count":-1,"referral_source":"cumulative"},{"id":11,"task_id":"292","campaign_id":"GP-CE9VF1","daily_gratification_limit":100,"max_gratification_limit":500,"daily_task_count":12,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"FIXEDFLAT","task_description":null,"task_status":1,"start_date":"2019-12-12 17:04:45","end_date":"2022-06-30 17:04:55","per_referred_daily_gratification_limit":-1,"per_referred_max_gratification_limit":-1,"per_referred_daily_task_count":-1,"per_referred_max_task_count":-1,"referral_source":"cumulative"},{"id":12,"task_id":"293","campaign_id":"GP-CE9VF1","daily_gratification_limit":100,"max_gratification_limit":500,"daily_task_count":12,"max_task_count":15,"task_title":"sps","task_type":"consecutive","event_type":null,"reward_mode":"PERCENTAGE","task_description":null,"task_status":1,"start_date":"2022-03-16 09:04:45","end_date":"2022-12-12 17:04:45","per_referred_daily_gratification_limit":-1,"per_referred_max_gratification_limit":-1,"per_referred_daily_task_count":-1,"per_referred_max_task_count":-1,"referral_source":"rummy"}
                    ];
                    break;
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
                        
                        {"id":2,"campaign_title":"App install bonus New Test Update","campaign_id":"GP-CE9VF1","campaign_type":"PLATFORM","campaign_property":"PP_APP,PP_APP_IOS,PP_FAN_APP,PP_FAN_IOS","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"PFGBONUS","gratification_description":null,"referrer_gratification_limit":200,"referrer_max_limit_daily":200,"referrer_max_count_daily":17,"referrer_max_limit":20,"start_date":"2017-09-01 10:00:29","end_date":"2022-09-30 00:00:00","created_date":"2022-09-30 12:24:51","is_active":1},{"id":3,"campaign_title":"App install bonus","campaign_id":"GP-CE9VF2","campaign_type":"PLATFORM","campaign_property":"PP_WEB","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"LOYALTY","gratification_description":null,"referrer_gratification_limit":50,"referrer_max_limit_daily":25,"referrer_max_count_daily":5,"referrer_max_limit":9,"start_date":"2020-02-10 11:01:00","end_date":"2020-10-30 21:30:00","created_date":"2020-02-02 16:24:51","is_active":0},{"id":4,"campaign_title":"App install bonus New Test Update","campaign_id":"GP-CE9VF3","campaign_type":"PLATFORM","campaign_property":"GPC_GGL","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"PFGBONUS","gratification_description":null,"referrer_gratification_limit":100,"referrer_max_limit_daily":25,"referrer_max_count_daily":2,"referrer_max_limit":9,"start_date":"2020-03-06 10:00:29","end_date":"2020-12-10 00:00:00","created_date":"2020-02-29 12:24:51","is_active":0},
                        {"id":5,"campaign_title":"","campaign_id":"","campaign_type":null,"campaign_property":null,"game_pid":null,"campaign_landing_url":null,"gratification_currency":null,"gratification_description":null,"referrer_gratification_limit":null,"referrer_max_limit_daily":null,"referrer_max_count_daily":null,"referrer_max_limit":null,"start_date":"0000-00-00 00:00:00","end_date":"0000-00-00 00:00:00","created_date":"2020-09-16 14:46:47","is_active":0},{"id":6,"campaign_title":"App install bonus New Test Update","campaign_id":"GP-CE9VF","campaign_type":"PLATFORM","campaign_property":"PP_PAYTM","game_pid":null,"campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"BEANS","gratification_description":null,"referrer_gratification_limit":100,"referrer_max_limit_daily":25,"referrer_max_count_daily":5,"referrer_max_limit":9,"start_date":"2017-12-01 13:13:29","end_date":"2022-01-01 00:00:00","created_date":"2020-02-16 16:24:51","is_active":1},{"id":8,"campaign_title":"Testing App install bonus New Test Update","campaign_id":"GP-CE9VF","campaign_type":"GAME","campaign_property":"PP_PAYTM","game_pid":"123123","campaign_landing_url":"https://testgp.gamepind.com","gratification_currency":"BEANS","gratification_description":null,"referrer_gratification_limit":100,"referrer_max_limit_daily":25,"referrer_max_count_daily":5,"referrer_max_limit":9,"start_date":"2020-02-10 13:13:29","end_date":"2020-12-10 00:00:00","created_date":"2022-03-07 09:32:40","is_active":1}
                    ];
                    break;
                
            }
                

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

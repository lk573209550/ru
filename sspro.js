/*
酷我音乐 解锁会员试听及部分功能

***************************
QuantumultX:

[rewrite_local]
^https?://m.ishansong.com/(activationScore/client/home) url script-response-body https://raw.githubusercontent.com/lk573209550/ru/main/sspro.js
[mitm]
hostname = m.ishansong.com


**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const Score = '/activeMaxScore/totalScore';

if (url.indexOf(Score) != -1) {
	obj.data["activeMaxScore"] = "100";
	obj.data["totalScore"] = "100";

	body = JSON.stringify(obj);
}



$done({body});

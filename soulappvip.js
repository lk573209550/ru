var body = $response.body;
var obj = JSON.parse(body);

var user = {};
obj.success = true;
obj.data = {
    "hasMyMeet": true,
    "superVIP": true,
    "showSuperVIP": true,
    "hasCancelVIPSubscription": true,
    "leftDay": ntrue,
    "hasCancelVIPSubOfIAP": true,
    "needRestoreIAP": true,
    "hasFlyPackage": false,
    "remainDay": 9999
}
body = JSON.stringify(obj);
$done(body);

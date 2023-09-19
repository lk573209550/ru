
let obj = JSON.parse($response.body);
obj.data["activeMaxScore"] = 80;
obj.data["totalScore"] = 150;
obj.data["activeScore"] = 80;
obj.data["serviceScore"] = 50;
$done({body: JSON.stringify(obj)});


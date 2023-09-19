
let obj = JSON.parse($response.body);
obj.data["activeMaxScore"] = 100;
obj.data["totalScore"] = 100;

$done({body: JSON.stringify(obj)});


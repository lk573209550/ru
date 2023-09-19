
let obj = JSON.parse($response.body);
obj.data["activeMaxScore"] = 140;
obj.data["totalScore"] = 140;

$done({body: JSON.stringify(obj)});


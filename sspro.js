
let obj = JSON.parse($response.body);
obj.data["activeMaxScore"] = 80;
obj.data["totalScore"] = 150;
obj.data["activeScore"] = 80;
obj.data["serviceScore"] = 50;
obj.data["newCourierOrRankTip"] = "超过99.99%的骑手，已没有提升空间";
$done({body: JSON.stringify(obj)});


let obj = JSON.parse($response.body);
obj.data["gold"] = 10000
$done({body: JSON.stringify(obj)});

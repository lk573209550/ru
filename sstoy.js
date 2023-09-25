let obj = JSON.parse($response.body);
obj.data["balance"] = 10000
obj.data["gold"] = 10000
$done({body: JSON.stringify(obj)});

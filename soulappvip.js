let obj = JSON.parse($response.body);
obj.data["superVIP"] = true;
obj.data["showSuperVIP"] = true;
$done({body: JSON.stringify(obj)});

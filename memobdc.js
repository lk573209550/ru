let obj = JSON.parse($response.body);
obj.data["user"]["inf_level"] = 99;
obj.data["user"]["level"] = 99;
obj.data["user"]["inf_words_limit"] = 999999;
$done({body: JSON.stringify(obj)});

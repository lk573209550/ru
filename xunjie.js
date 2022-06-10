
let obj = JSON.parse($response.body);
obj.userinfo.vip = [{
      "id": 00000001,
      "auth_type": 1,
      "auth_value": 4102469002
    }];

$done({body: JSON.stringify(obj)});

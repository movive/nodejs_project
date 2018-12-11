{
    "productKey":"1234556554",
    "deviceName":"deviceName1234",
    "gmtCreate":1510799670074,
    "deviceType":"Ammeter",
    "iotId":"4z819VQHk6VSLmmBJfrf00107ee200",
    "action":"online|offline",
    "status":{
        "value":"1",
        "time":1510292697471
    }
}


SELECT ".MessageParams.iotId" FROM “/sys/a1n7upuU6T7/+/thing/event/property/post” WHERE 

{
    "ActionType":"upstream",
    "TransformData":"{}",
    "LogTime":"1544469758",
    "MessageParams":{
        "iotId":"Ln8ZWxQOK52Iag67tJpX00101d8500","method":"thing.event.property.post","topic":"/sys/a1n7upuU6T7/node5/thing/event/property/post","uniMsgId":"4288839979574681600","id":"123","params":{
            "COD":120
            }},
        "MessageMethod":"/sys/a1n7upuU6T7/node5/thing/event/property/post",
        "BizType":"PROPERTY_REPORT",
        "MessageResult":"200",
        "DeviceName":"node5",
        "MessageID":"123"
}
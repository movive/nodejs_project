const location_tag = {"node5":"东环路南", "node4":"河北沃尔旺有限公司","node3":"河北雪阳纺织有限公司","node2":"中节能生物质能源有限公司", "node1":"河北博纳德能源有限公司", "node6":"东环路中街", "node7":" 污水厂前端"};

var event = {"DeviceName":"node2", "COD":"570","time":"2018-12-11"}
console.log(location_tag[event["DeviceName"]]);

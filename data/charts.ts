export const abLift = [{name:"请求量",value:-0.36},{name:"订单量",value:-0.16},{name:"GMV",value:-1.26},{name:"优惠券成本",value:0.77},{name:"客单价",value:-1.63},{name:"完成率",value:0.20},{name:"取消率",value:-0.21}];
export const abMethods = [{name:"Welch 独立样本",p:0.9387},{name:"按日期配对",p:0.0002}];
export const aiTasks = [{name:"问答",value:54.55},{name:"写作",value:16.83},{name:"编程",value:13.51},{name:"其他",value:12.77},{name:"数学",value:1.68},{name:"翻译",value:0.66}];
export const aiFeatures = [{name:"平均回答长度",winner:1030.7,loser:783.9,unit:"字符"},{name:"含列表",winner:28.89,loser:19.63,unit:"%"},{name:"含代码块",winner:9.30,loser:6.47,unit:"%"},{name:"含拒答表达",winner:4.45,loser:7.59,unit:"%"}];
export const modelRates = [
  {model:"gpt-4",问答:84.8,写作:88.4,编程:86.4},{model:"gpt-3.5",问答:68.4,写作:77.1,编程:73.2},{model:"vicuna-13b",问答:63.3,写作:67.8,编程:65.2},{model:"koala-13b",问答:49.7,写作:43.8,编程:51.6},{model:"oasst-pythia",问答:33.1,写作:29.6,编程:36.0}
];
export const funnel = [{name:"首页",users:100000,rate:100},{name:"列表页",users:73894,rate:73.89},{name:"商品页",users:49618,rate:49.62},{name:"支付页",users:6862,rate:6.86},{name:"确认页",users:2404,rate:2.40}];
export const userStages = [{name:"首页→列表页",newUser:73.62,returning:74.02},{name:"列表→商品页",newUser:65.94,returning:67.70},{name:"商品→支付页",newUser:11.95,returning:14.67},{name:"支付→确认页",newUser:25.31,returning:38.57}];
export const channels = [{name:"Direct",raw:3.03,adjusted:2.41},{name:"SEO",raw:1.55,adjusted:1.67},{name:"Ads",raw:1.65,adjusted:1.63}];

import axios from 'axios';

// 基本配置
const Util = {
    imgPath : 'http://127.0.0.1:8011/img/',
    apiPath : 'http://127.0.0.1:8010/',
}

// 获取今天的时间戳
Util.getTodayTime = function () { 
    const date = new Date(); 
    date.setHours(O); 
    date.setMinutes(O); 
    date.setSeconds(O); 
    date.setMilliseconds (O); 
    return date.getTime(); 
}

// 获取前1天的日期
Util.prevDay = function (timestamp = (new Date()).getTime()) { 
    const date= new Date(timestamp); 
    const year = date.getFullYear(); 
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1; 
    const day= date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
    return year + month + day ; 
}

// Ajax通用配置
Util.ajax = axios.create({
    baseURL : Util.apiPath
})
// 添加响应拦截器
Util.ajax.interceptors.response.use(res => {
    return res.data;
})

export default Util;
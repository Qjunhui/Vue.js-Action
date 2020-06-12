// 判断每个月的天数
function getDate(year, month){
    var d = new Date(year, month, 0);
    return d.getDate();
}

var Day = {
    // 获取多少天
    getBirthDay : function(birth) {
        var birthDay = new Date() - new Date(birth);
        birthDay = Math.ceil(birthDay/1000/60/60/24);
        return birthDay + "天";
    },

    // 获取周岁
    getBirthYear : function(birth) {
        var returnAge,
        birthdayArr = birth.split("-"),
        birthYear = birthdayArr[0],
        birthMonth = birthdayArr[1],
        birthDay = birthdayArr[2],  
        d = new Date(),
        nowYear = d.getFullYear(),
        nowMonth = d.getMonth() + 1,
        nowDay = d.getDate();   
        if(nowYear == birthYear){
            returnAge = 0;//同年 则为0周岁
        }else{
            var ageDiff = nowYear - birthYear ; //年之差
            if(ageDiff > 0){
                if(nowMonth == birthMonth) {
                    var dayDiff = nowDay - birthDay;//日之差
                    if(dayDiff < 0) {
                        returnAge = ageDiff - 1;
                    }else {
                        returnAge = ageDiff;
                    }
                }else {
                    var monthDiff = nowMonth - birthMonth;//月之差
                    if(monthDiff < 0) {
                        returnAge = ageDiff - 1;
                    }else {
                        returnAge = ageDiff ;
                    }
                }
            }else {
                returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
            }
        } 
        return returnAge + "周岁";//返回周岁年龄
    },

    // 获取X年X月X日
    getBirthAge : function(birth) {
        var bYear,bMonth,bDay,
        birthdayArr = birth.split("-"),
        birthYear = birthdayArr[0],
        birthMonth = birthdayArr[1],
        birthDay = birthdayArr[2],  
        d = new Date(),
        nowYear = d.getFullYear(),
        nowMonth = d.getMonth() + 1,
        nowDay = d.getDate();   
        if(nowYear == birthYear){
            bYear = 0;//同年 则为0周岁
        }else{
            var ageDiff = nowYear - birthYear ; //年之差
            if(ageDiff > 0){
                if(nowMonth == birthMonth) {
                    var dayDiff = nowDay - birthDay;//日之差
                    if(dayDiff < 0) {
                        bYear = ageDiff - 1;
                        bMonth = 11;
                    }else {
                        bYear = ageDiff;
                        bMonth = 0;
                    }
                }else {
                    var monthDiff = nowMonth - birthMonth;//月之差
                    if(monthDiff < 0) {
                        bYear = ageDiff - 1;
                        bMonth = 12 - birthMonth + nowMonth;//月之差
                    }else {
                        bYear = ageDiff ;
                        bMonth = monthDiff;//月之差
                    }
                }
                // 判断天
                if(nowDay - birthDay < 0) {
                    bDay = getDate(birthYear,birthMonth) - birthDay + nowDay;
                }else {
                    bYear = ageDiff;
                    bMonth = 0;
                    bDay = dayDiff;
                }
            }else {
                bYear = -1;//返回-1 表示出生日期输入错误 晚于今天
            }
        } 
        return bYear + "岁" + bMonth + "个月" + bDay + "天";//
    }
}

Vue.directive('birthday',{
    bind : function(el,binding) {
        el.innerHTML = Day.getBirthDay(binding.value);
        el.__timeout__ = setInterval(function() {
            el.innerHTML = Day.getBirthDay(binding.value);
        },1000*60*60*24);
    },
    unbind : function(el) {
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
})

Vue.directive('birthyear',{
    bind : function(el,binding) {
        el.innerHTML = Day.getBirthYear(binding.value);
    }
})

Vue.directive('birthage',{
    bind : function(el,binding) {
        el.innerHTML = Day.getBirthAge(binding.value);
        el.__timeout__ = setInterval(function() {
            el.innerHTML = Day.getBirthAge(binding.value);
        },1000*60*60*24);
    },
    unbind : function(el) {
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
})
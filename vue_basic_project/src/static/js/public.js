var isMobile = {
  "Android" : function() {
    return navigator.userAgent.match(/Android/i) ? true : false;
  },
  "BlackBerry" : function() {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
  },
  "iOS" : function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
  },
  "Windows" : function() {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
  },
  "any" : function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
  }
}

var operationTime = {
    /*
     * 两个参数:ns为时间戳,type(1,2,3,4,5,6,7)为需要返回时间格式
     * type=1:将时间戳转换成datetime格式返回 2000-01-01 10:00:00
     * type=2:将时间戳转换成datetime格式返回 2000-01-01 10:00
     * type=3:将时间戳转换成time格式返回 10:00:00
     * type=4:将时间戳转换成date格式返回 2000-01-01
     * type=5:将时间戳转换成date格式返回 2000-01-01 10
     * type=6:将时间戳转换成date格式返回 2000 01
     * type=7:将时间戳转换成date格式返回 20000101
     * !type:将时间戳转换成datetime格式返回 2000-01-01 10:00
     * */
  getTime: function(ns, type) {
    //非空判断
    if (!ns) {
        return "";
    }
    var myDate = new Date(ns);
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var secont = myDate.getSeconds();

    function plusZero(variable) {
        if (variable < 10) {
            return "0" + variable;
        } else {
            return variable;
        }
    }
    var dateTime1 = year + "-" + plusZero(month) + "-" + plusZero(date) + " " + plusZero(hour) + ":" + plusZero(minute) + ":" + plusZero(secont);
    var dateTime2 = year + "-" + plusZero(month) + "-" + plusZero(date) + " " + plusZero(hour) + ":" + plusZero(minute);
    var dateTime3 = year + "-" + plusZero(month) + "-" + plusZero(date) + " " + plusZero(hour);
    var time = plusZero(hour) + ":" + plusZero(minute) + ":" + plusZero(secont);
    var datenone = year  + plusZero(month) + plusZero(date);
    var date = year + "-" + plusZero(month) + "-" + plusZero(date);
    var dateTime4 = year + "" + plusZero(month);
    if (type == 1) {
        return dateTime1;
    } else if (type == 2) {
        return dateTime2;
    } else if (type == 3) {
        return time;
    } else if (type == 4) {
        return date;
    } else if (type == 5) {
        return dateTime3;
    }else if(type == 6){
      return dateTime4
    }else if(type == 7){
        return datenone
    }else if (!type) {
        return dateTime2;
    }
  },
  //将时间转换成时间戳
  toTimeStamp:function (date) {
    date = date || "";
    if(date.indexOf("-") > -1){
      var newDate = date.replace(/\-/g,"/");
      var timeStamp = Date.parse(new Date(newDate));
      timeStamp = timeStamp;
      return timeStamp;
    }else{
      return null
    }
  },
  //两个时间戳之间的时间段
  calculatePeriod:function (lang1,lang2) {
    var period = lang2 - lang1;
    period = Math.ceil(period/60000);
    if(period>=0&&period<60){
      return (period+"分钟")
    }else if(period>= 60) {
      return (parseInt(period / 60) + "小时" + period % 60 + "分钟")
    }else{
      return "数据错误"
    }
  },
  //将时间戳转换为时间段
  toQuantum:function (lang) {
    var period = parseInt(lang/60000);
    if(period>=0&&period<60){
      return (period+"分钟")
    }else if(period>=60&&period<1440) {
      return (parseInt(period / 60) + "小时" + period % 60 + "分钟")
    }else if(period>=1440){
      return (parseInt(period / 1440) + "天" + parseInt(period %1440/60) + "小时" + period % 60 + "分钟")
    }else {
      return "数据错误"
    }
  },
  //将时间戳转换为时间段
  togetbetweendate:function (lang) {
    var period = parseInt(lang/60000);
    if(period>=0&&period<=60){
      return ('00小时'+operationTime.todoublestr(period)+"分钟")
    }else if(period>=60&&period<1440) {
      return (operationTime.todoublestr(parseInt(period / 60)) + "小时" + operationTime.todoublestr(period % 60) + "分钟")
    }else if(period>=1440){
      return (parseInt(period / 1440) + "天" + operationTime.todoublestr(parseInt(period %1440/60)) + "小时" + operationTime.todoublestr(period % 60) + "分钟")
    }else {
      return "数据错误"
    }
  },
  //时间单位数转为两位数字符串
  todoublestr:function(num){
    if(num<10){
      num = '0'+num;
    }
    return num
  },
  /**
   * 计算出n个月后的日期
   * 参数startTime:为 yyyy-mm-dd 格式的字符串
   * 参数dMonth:代表间隔几个月，类型为 Number（或全为数字的String）
   */
  calcDate : function (startTime,dMonth){
    var startTimeArr = startTime.split("-");
    var startTimeMonth = Number.parseInt(startTimeArr[1]);
    var startTimeYear =  Number.parseInt(startTimeArr[0]);
    dMonth = Number.parseInt(dMonth);
    var totalMon = startTimeMonth + dMonth;
    var yearAdd = Number.parseInt(totalMon / 12);
    var endTimeYear = startTimeYear + yearAdd;
    var endTimeMonth = Number.parseInt(totalMon % 12);
    if (endTimeMonth == 0){
      endTimeMonth = 12;
    }else if(endTimeMonth < 10){
      endTimeMonth = "0" + endTimeMonth;
    }
    var endTimeDay = startTimeArr[2];
    if(!(((endTimeYear % 4)==0) && ((endTimeYear % 100)!=0) || ((endTimeYear % 400)==0)) && endTimeDay == "29" && endTimeMonth == "02")  {
      endTimeDay = "28"
    }
    if(endTimeDay == "31" && (endTimeMonth=="04"||endTimeMonth=="06"||endTimeMonth=="09"||endTimeMonth=="11")){
      endTimeDay = "30"
    }
    if((endTimeDay == "31" || endTimeDay == "30")&&endTimeMonth=="02"){
      if(((endTimeYear % 4)==0) && ((endTimeYear % 100)!=0) || ((endTimeYear % 400)==0)){
        endTimeDay = "29"
      }else{
        endTimeDay = "28"
      }
    }
    return endTimeYear + "-" + endTimeMonth + "-" + endTimeDay;
  }
}

export {isMobile,operationTime};

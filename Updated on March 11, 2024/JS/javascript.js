//获得当前时间,刻度为十分之一毫秒
var initializationTime=(new Date()).getTime();
function Time(){
    //获取实时日期
    var real=new Date();

    //获取年⽉⽇
    var year=real.getUTCFullYear();
    var month=real.getUTCMonth()+1;
    var day=real.getUTCDate();

    //获取时分秒
    var hours=real.getHours();
    var minutes=real.getUTCMinutes();
    var seconds=real.getUTCSeconds();

    //判断是否小于10
    if(hours < 10){
        hours="0"+hours;
    }
    if(minutes < 10){
        minutes="0"+minutes;
    }
    if(seconds < 10){
        seconds="0"+seconds;
    }

    //获取周
    var week=real.getUTCDay();
    if(week==0){
        var real_week="日";
    }else if(week==1){
        var real_week="一"
    }else if(week==2){
        var real_week="二"
    }else if(week==3){
        var real_week="三"
    }else if(week==4){
        var real_week="四"
    }else if(week==5){
        var real_week="五"
    }else{
        var realweek="六"
    };
document.all.Time_1.innerHTML=year+"年"+month+"月"+day+"日"+""+hours+":"+minutes+":"+seconds;
document.all.Time_2.innerHTML="星期"+""+real_week;

//一秒刷新一次显示时间
var timeID=setTimeout(Time,1);
};
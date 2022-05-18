//获得当前时间,刻度为十分之一毫秒
var initializationTime=(new Date()).getTime();
function ShowTime(){
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
        var realweek="日";
    }else if(week==1){
        var realweek="一"
    }else if(week==2){
        var realweek="二"
    }else if(week==3){
        var realweek="三"
    }else if(week==4){
        var realweek="四"
    }else if(week==5){
        var realweek="五"
    }else{
        var realweek="六"
    };
document.all.show.innerHTML=year+"年"+month+"月"+day+"日"+""+hours+":"+minutes+":"+seconds;
document.all.showtime.innerHTML="星期"+""+realweek;

//一秒刷新一次显示时间
var timeID=setTimeout(ShowTime,1);
};
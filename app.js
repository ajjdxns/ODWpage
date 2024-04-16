//获取在线人数
$.ajax({
    url:"http://api.wer.plus/api/mcse" ,
    type:'get', 
    data:{
        host:'pm.rainplay.cn:12530',
},
success: function (res){
    let online = res.data.online
    console.log(online)
    document.getElementById('online').innerHTML="在线人数:"+online
    }
});
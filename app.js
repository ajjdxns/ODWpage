//获取在线人数
$.ajax({
    url:"https://api.imlazy.ink/mcapi" ,
    type:'get', 
    data:{
        host:'pm.rainplay.cn:12530',
},
success: function (res){
    let online = res.data.players_online
    console.log(online)
    document.getElementById('online').innerHTML="在线人数:"+online
    }
});
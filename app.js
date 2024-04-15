document.getElementById('menu').addEventListener('toggle', function(event) {  
        if (!this.close) {  
            // 关闭动画  
            this.style.animation = 'close 0.5s ease-in-out forwards';  
        } else {  
            // 清除动画，以便下次可以正常触发打开动画  
            this.style.animation = '';  
        }  
});
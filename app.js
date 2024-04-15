document.getElementById('menu').addEventListener('toggle', function(event) {  
        if (!this.open) {  
            // 关闭动画  
            this.style.animation = 'collapse 0.5s ease-in-out forwards';  
        } else {  
            // 清除动画，以便下次可以正常触发打开动画  
            this.style.animation = '';  
        }  
});
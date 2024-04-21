var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
var isTablet = /iPad|Android/i.test(userAgent);
var isDesktop = !isMobile && !isTablet;
if (isDesktop){
    console.log("[INFO]正在跳转至电脑版...")
    window.location.assign("https://mcyouxi.asia/")
}
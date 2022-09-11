var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="img/sun.png";
    }else{
        icon.src = "img/moon.png";
    }
}
function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementsByClassName('container').style.opacity="0.2";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementsByClassName('container').style.opacity="1";
}
window.onload=loadCoupon()
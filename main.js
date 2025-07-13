
function showAd() {
    const phone = document.getElementById('phone').value;
    if (!/^\d{11}$/.test(phone)) {
        alert("请输入11位有效手机号");
        return;
    }

    const ad = document.getElementById("adPopup");
    ad.style.display = "block";

    let counter = 3;
    const countdown = document.getElementById("countdown");
    countdown.innerText = counter;

    const interval = setInterval(() => {
        counter--;
        countdown.innerText = counter;
        if (counter <= 0) {
            clearInterval(interval);
            ad.style.display = "none";
            document.getElementById("verifySection").style.display = "block";
        }
    }, 1000);
}

function verifyCode() {
    const code = document.getElementById('code').value;
    if (code === "0000") {
        document.getElementById("verifySection").style.display = "none";
        document.getElementById("finalAd").style.display = "block";
        // 不再自动隐藏 finalAd，也不再自动显示 downloadSection
        // 用户可点击广告跳转
    } else {
        alert("验证码错误，请输入0000");
    }
}

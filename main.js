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
            ad.style.display = "none"; // 确保隐藏第一个广告
            document.getElementById("verifySection").style.display = "block";
        }
    }, 1000);
}

function verifyCode() {
    const code = document.getElementById('code').value;
    if (code === "0000") {
        document.getElementById("verifySection").style.display = "none";
        document.getElementById("adPopup").style.display = "none"; // 彻底隐藏第一个广告
        document.getElementById("finalAd").style.display = "block"; // 显示点击跳转广告
    } else {
        alert("验证码错误，请输入0000");
    }
}
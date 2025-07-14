document.getElementById("nextBtn").addEventListener("click", function () {
  const phone = document.getElementById("phoneInput").value.trim();
  if (/^\d{11}$/.test(phone)) {
    document.getElementById("mainContainer").style.display = "none";
    const ad1 = document.getElementById("ad1");
    const countdown = document.getElementById("countdown");
    ad1.style.display = "flex";
    let time = 3;
    countdown.innerText = time;
    const interval = setInterval(() => {
      time--;
      countdown.innerText = time;
      if (time <= 0) {
        clearInterval(interval);
        ad1.style.display = "none";
        document.getElementById("codeContainer").style.display = "block";
      }
    }, 1000);
  } else {
    alert("请输入11位手机号！");
  }
});

function validateCode() {
  const code = document.getElementById("codeInput").value.trim();
  if (code === "0000") {
    document.getElementById("codeContainer").style.display = "none";
    document.getElementById("ad2").style.display = "flex";
  } else {
    alert("验证码错误！");
  }
}
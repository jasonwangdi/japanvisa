
function startVerification() {
  var phone = document.getElementById("phone").value;
  if (/^\d{11}$/.test(phone)) {
    document.getElementById("ad1").style.display = "flex";
    let count = 3;
    let countdown = document.getElementById("countdown");
    let interval = setInterval(() => {
      count--;
      countdown.textContent = count;
      if (count <= 0) {
        clearInterval(interval);
        document.getElementById("ad1").style.display = "none";
        document.getElementById("code-section").style.display = "block";
      }
    }, 1000);
  } else {
    alert("请输入有效的11位手机号");
  }
}

function validateCode() {
  var code = document.getElementById("code").value;
  if (code === "0000") {
    document.getElementById("code-section").style.display = "none";
    document.getElementById("ad2").style.display = "flex";
  } else {
    alert("验证码错误，请输入0000");
  }
}

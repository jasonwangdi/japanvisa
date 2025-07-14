
document.getElementById("nextButton").addEventListener("click", function () {
  const phone = document.getElementById("phone").value;
  if (/^\d{11}$/.test(phone)) {
    showAdWithCountdown();
  } else {
    alert("请输入11位手机号");
  }
});

function showAdWithCountdown() {
  const adContainer = document.getElementById("adContainer");
  const countdown = document.createElement("div");
  countdown.id = "countdown";
  countdown.style.fontSize = "24px";
  countdown.style.textAlign = "center";
  let timeLeft = 3;
  countdown.textContent = timeLeft;
  adContainer.innerHTML = "";
  adContainer.appendChild(countdown);
  adContainer.style.display = "block";

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      adContainer.innerHTML = '<a href="https://shibu-cli-en.com/cn/" target="_blank"><img src="ad.jpg" class="ad-image" alt="广告图" /></a>';
      document.getElementById("codeContainer").style.display = "block";
    }
  }, 1000);
}

document.getElementById("verifyButton").addEventListener("click", function () {
  const code = document.getElementById("code").value;
  if (code === "0000") {
    const downloadBtn = document.createElement("a");
    downloadBtn.href = "visa.pdf";
    downloadBtn.textContent = "点击下载签证 PDF";
    downloadBtn.className = "download-button";
    downloadBtn.download = "visa.pdf";
    document.getElementById("adContainer").appendChild(downloadBtn);
  } else {
    alert("验证码错误，请输入0000");
  }
});

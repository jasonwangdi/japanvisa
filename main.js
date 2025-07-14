
function showAd() {
    var phone = document.getElementById("phoneInput").value;
    if (/^\d{11}$/.test(phone)) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("adContainer").style.display = "block";
    } else {
        alert("请输入有效的11位手机号码");
    }
}

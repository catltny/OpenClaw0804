document.getElementById("btn").addEventListener("click", function () {
  const now = new Date().toLocaleString("zh-TW");
  document.getElementById("output").textContent = "最後點擊時間：" + now;
});

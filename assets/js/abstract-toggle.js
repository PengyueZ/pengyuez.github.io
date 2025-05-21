document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".abstract-button");
  
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("id");
        const panel = document.getElementById(id);
        const isHidden = panel.style.display === "none" || panel.style.display === "";
  
        panel.style.display = isHidden ? "block" : "none";
        btn.textContent = isHidden ? "[-] Abstract" : "[+] Abstract";
      });
    });
  });
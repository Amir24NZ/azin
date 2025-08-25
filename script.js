document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');

    ctaButton.addEventListener('click', () => {
        alert('از اینکه آذین نیک مانده را انتخاب کردید متشکریم!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('صفحه زیتول با موفقیت بارگذاری شد و آماده تعامل است!');

    // مثال: اضافه کردن یک رویداد کلیک به آیتم‌های ابزار (اختیاری)
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log(`روی ابزار "${item.textContent}" کلیک شد.`);
            // اینجا می‌تونی کاربر رو به صفحه ابزار مربوطه هدایت کنی
        });
    });

});

  document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("tools-link");
    if (link) {
      link.addEventListener("click", function (e) {
        const isSamePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
        if (isSamePage) {
          e.preventDefault();
          const target = document.getElementById("tools");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }
  });
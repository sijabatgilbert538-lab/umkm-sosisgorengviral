// GANTI dengan nomor WhatsApp usaha kamu.
// Contoh: 6281234567890
const NOMOR_WA = "6281234567890";

function pesanWhatsApp(menu) {
  const pesan =
    "Halo Sosis Goreng Viral! Saya ingin memesan menu " +
    menu +
    ". Mohon informasi harga dan cara pemesanannya.";

  const url =
    "https://wa.me/" +
    NOMOR_WA +
    "?text=" +
    encodeURIComponent(pesan);

  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  // Tahun otomatis
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Tombol pesan pada masing-masing menu
  document.querySelectorAll(".order-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      const menu = button.dataset.menu;
      pesanWhatsApp(menu);
    });
  });

  // Tombol WhatsApp mengambang
  const floatingWa = document.getElementById("floatingWa");

  if (floatingWa) {
    floatingWa.href =
      "https://wa.me/" +
      NOMOR_WA +
      "?text=" +
      encodeURIComponent(
        "Halo Sosis Goreng Viral! Saya ingin bertanya tentang menu."
      );
  }

  // Menu navigasi HP
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
      });
    });
  }

  // Tombol kembali ke atas
  const backTop = document.getElementById("backTop");

  window.addEventListener("scroll", function () {
    if (backTop) {
      backTop.classList.toggle("show", window.scrollY > 300);
    }
  });

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
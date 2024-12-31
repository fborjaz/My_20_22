const book = document.getElementById("book");
const pages = book.children;
let currentPage = 0;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function showPage(pageIndex) {
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.transform = `translateX(${100 * (i - pageIndex)}%)`;
  }
}
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}); // Inicializar la primera página showPage(0);

document.addEventListener("DOMContentLoaded", function () {
  const textAreas = document.querySelectorAll(".textarea");
  textAreas.forEach((textArea) => {
    let text = textArea.innerText;
    if (text.length > 600) {
      textArea.innerText = text.substring(0, 500) + "...";
    }
  });
});

document.querySelectorAll(".icono").forEach((icon) => {
  icon.addEventListener("click", () => {
    alert(icon.title || "Hospital IMSS");
  });
});
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

document.querySelectorAll(".icono").forEach((icon) => {
  icon.addEventListener("mouseover", (e) => {
    tooltip.textContent = icon.dataset.nombre || "Hospital IMSS";
    tooltip.style.display = "block";
  });

  icon.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
  });

  icon.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });

  icon.addEventListener("click", () => {
    alert(icon.dataset.nombre || "Hospital IMSS");
  });
});

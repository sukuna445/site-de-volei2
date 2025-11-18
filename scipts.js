function showSection(id) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

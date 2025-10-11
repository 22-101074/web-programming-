alert("✅ JavaScript file linked successfully!");


function showSection(id) {
  // Hide all sections
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  
  // Show the target section
  const target = document.querySelector(id);
  if (target) target.classList.add("active");
}

// On page load, show the "start" section
window.onload = () => {
  showSection("#start");

  // Intercept clicks on all links to show sections instead of jumping
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // stop the normal jump
      const targetId = link.getAttribute("href"); // e.g. "#a"
      showSection(targetId);
    });
  });
};
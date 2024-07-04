document.getElementById("browse").addEventListener("click", function() {
    document.getElementById("browse-section").style.display = "block";
    document.getElementById("discover").style.display = "none";
    document.getElementById("browse").style.color = "#a970ff";
    document.getElementById("discover").style.color = "#d3d3d3";
  });
  document.getElementById("discover").addEventListener("click", function() {
    document.getElementById("browse-section").style.display = "none";
    document.getElementById("discover").style.display = "block";
    document.getElementById("discover").style.color = "#a970ff";
    document.getElementById("browse").style.color = "#d3d3d3";
  });
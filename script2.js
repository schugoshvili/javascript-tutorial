document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const celebration = document.getElementById("celebration");
    const result = document.getElementById("result");

    container.addEventListener("click", function () {
        celebration.style.display = "block";
        result.textContent = "Yes, Sese had a productive day!";
    });
});

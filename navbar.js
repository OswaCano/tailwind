//fetch("/navbar.html")
fetch(`${window.location.origin}/navbar.html`)
    .then(response => response.text())
    .then(html => {
        document.getElementById("navbar").innerHTML = html;
    })
    .catch(error => console.error("Error cargando el navbar:", error));

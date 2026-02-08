function showMessage() {
    document.getElementById("message").innerHTML =
        "📧 Email: pranav@email.com <br> 📱 Phone: +91-XXXXXXXXXX";
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

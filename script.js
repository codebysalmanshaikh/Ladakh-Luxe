document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburgerIcon")
    const sidebar = document.getElementById("mobileSidebar")
    const sidebarLinks = document.querySelectorAll('.sidebar a')

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active")
    })
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active")
        })
    })
})



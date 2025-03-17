
// ==== profile ==== //
document.addEventListener("DOMContentLoaded", function () {
    const registerOption = document.getElementById("registerOption");
    const profileNav = document.getElementById("profileNav");
    const profileLogo = document.getElementById("profileLogo");
    const profileInitial = document.getElementById("profileInitial");
    const profileDropdown = document.getElementById("profileDropdown");
    const profileContainer = document.getElementById("profileContainer");
    const logoutBtn = document.getElementById("logout");

    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        // Remove Registration Link
        if (registerOption) {
            registerOption.style.display = "none";
        }

        // Show Profile Dropdown
        profileNav.style.display = "block";

        // Display Username Initial or Profile Pic
        if (loggedInUser.avatarContainer) {
            profileLogo.style.backgroundImage = `url(${loggedInUser.avatarContainer})`;
            profileInitial.style.display = "none";
        } else {
            profileInitial.textContent = loggedInUser.username.charAt(0).toUpperCase();
            profileInitial.style.display = "block";
        }
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            alert("✅ You have been logged out.");
            window.location.href = "index.html"; // Redirect to homepage
        });
    }

    // Toggle Profile Dropdown
    profileContainer.addEventListener("click", function () {
        profileDropdown.classList.toggle("show");
    });

    // Hide Dropdown When Clicking Outside
    document.addEventListener("click", function (e) {
        if (!profileContainer.contains(e.target)) {
            profileDropdown.classList.remove("show");
        }
    });
});










const profileNav = document.getElementById("profileNav");
const dropdown = document.getElementById("profileDropdown");
const arrow = document.getElementById("dropdownArrow");

profileNav.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    arrow.classList.toggle("rotate");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!profileNav.contains(event.target)) {
        dropdown.classList.remove("show");
        arrow.classList.remove("rotate");
    }
});



// ==== profile page ====

document.addEventListener("DOMContentLoaded", function () {
    const profileNav = document.getElementById("profileNav");
    const profileContainer = document.getElementById("profileContainer");
    const profileLogo = document.getElementById("profileLogo");
    const profileInitial = document.getElementById("profileInitial");
    const profileDropdown = document.getElementById("profileDropdown");
    const profileUsername = document.getElementById("profileUsername");
    const avatarContainer = document.getElementById("avatarContainer");
    const avatarInput = document.getElementById("avatarInput");
    const userAvatar = document.getElementById("userAvatar");
    const avatarPlaceholder = document.getElementById("avatarPlaceholder");
    const removeAvatarBtn = document.getElementById("removeAvatarBtn");
    const logoutBtn = document.getElementById("logout");

    // Check if user is logged in
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
        window.location.href = "index.html"; // Redirect to homepage if not logged in
    } else {
        profileUsername.textContent = loggedInUser.username;

        if (loggedInUser.avatarContainer) {
            updateProfileImage(loggedInUser.avatarContainer);
        } else {
            setInitialAvatar(loggedInUser.username);
        }

        profileNav.style.display = "block"; // Show profile dropdown
    }

    // Handle profile picture change
    avatarInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                updateProfileImage(imageUrl);

                // Update profile picture in localStorage
                loggedInUser.avatarContainer = imageUrl;
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle avatar removal
    removeAvatarBtn.addEventListener("click", function () {
        updateProfileImage(null);
        loggedInUser.avatarContainer = null;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    });

    // Handle logout
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("✅ You have been logged out.");
        window.location.href = "index.html"; // Redirect to homepage
    });

    // Toggle dropdown on profile click
    profileContainer.addEventListener("click", function () {
        profileDropdown.classList.toggle("show");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!profileContainer.contains(e.target)) {
            profileDropdown.classList.remove("show");
        }
    });

    // Update profile image across both profile sections
    function updateProfileImage(imageUrl) {
        if (imageUrl) {
            userAvatar.src = imageUrl;
            userAvatar.style.display = "block";
            avatarPlaceholder.style.display = "none";
            profileLogo.style.backgroundImage = `url(${imageUrl})`;
            profileInitial.style.display = "none"; // Hide initial if profile picture exists
        } else {
            userAvatar.style.display = "none";
            setInitialAvatar(loggedInUser.username);
        }
    }

    // Set initial avatar with user's initial
    function setInitialAvatar(username) {
        const initials = username.charAt(0).toUpperCase();
        avatarPlaceholder.textContent = initials;
        avatarPlaceholder.style.display = "flex";
        profileInitial.textContent = initials;
        profileInitial.style.display = "block";
        profileLogo.style.backgroundImage = "none";
    }
});




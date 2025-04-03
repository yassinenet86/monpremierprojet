document.addEventListener("DOMContentLoaded", function() {
    // Gestion de l'inscription
    const formSignup = document.getElementById("signup");

    if (formSignup) {
        formSignup.addEventListener("submit", function(event) {
            event.preventDefault();

            let isValid = true;

            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirm-password").value.trim();

            // Validation du nom d'utilisateur
            const usernameError = document.getElementById("username").nextElementSibling;
            if (username === '') {
                usernameError.textContent = "Le nom est obligatoire.";
                isValid = false;
            } else {
                usernameError.textContent = "";
            }

            // Validation de l'email
            const emailError = document.getElementById("email").nextElementSibling;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                emailError.textContent = "L'email est obligatoire.";
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = "Adresse email invalide.";
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            // Validation du mot de passe
            const passwordError = document.getElementById("password").nextElementSibling;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (password === '') {
                passwordError.textContent = "Le mot de passe est obligatoire.";
                isValid = false;
            } else if (!passwordRegex.test(password)) {
                passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre, et un caractère spécial.";
                isValid = false;
            } else {
                passwordError.textContent = "";
            }

            // Validation de la confirmation du mot de passe
            const confirmPasswordError = document.getElementById("confirm-password").nextElementSibling;
            if (confirmPassword === '') {
                confirmPasswordError.textContent = "La confirmation est obligatoire.";
                isValid = false;
            } else if (confirmPassword !== password) {
                confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
                isValid = false;
            } else {
                confirmPasswordError.textContent = "";
            }

            // Redirection si tout est valide
            if (isValid) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                alert("Inscription réussie ! Redirection vers la page de connexion...");
                window.location.href = "login.html";
            }
        });
    }

    // Gestion de la connexion
    const formLogin = document.getElementById("login");

    if (formLogin) {
        formLogin.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const storedEmail = localStorage.getItem("email");
            const storedPassword = localStorage.getItem("password");

            // Validation
            if (email === storedEmail && password === storedPassword) {
                // Sauvegarder l'heure de connexion
                const now = new Date();
                localStorage.setItem("connectionTime", now.toISOString());

                alert("Connexion réussie ! Redirection...");
                window.location.href = "success.html";
            } else {
                alert("Email ou mot de passe incorrect !");
            }
        });
    }

    // Afficher l'heure de connexion sur la page de succès
    const connectionTimeElement = document.getElementById("connection-time");
    if (connectionTimeElement) {
        const connectionTime = localStorage.getItem("connectionTime");
        if (connectionTime) {
            const formattedTime = new Date(connectionTime).toLocaleString("fr-FR", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            connectionTimeElement.textContent = `Heure de connexion : ${formattedTime}`;
        }
    }
});
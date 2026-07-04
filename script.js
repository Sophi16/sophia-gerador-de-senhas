const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");

generateBtn.addEventListener("click", () => {

    const length = parseInt(document.getElementById("length").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (chars.length === 0) {
        alert("Selecione pelo menos uma opção.");
        return;
    }

    results.innerHTML = "";

    for (let i = 0; i < quantity; i++) {

        let password = "";

        for (let j = 0; j < length; j++) {
            password += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );
        }

        const div = document.createElement("div");
        div.className = "password-item";

        div.innerHTML = `
            <span class="password-text">${password}</span>
            <button class="copy-btn">Copiar</button>
        `;

        const copyBtn = div.querySelector(".copy-btn");

        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(password);

            copyBtn.textContent = "Copiado!";

            setTimeout(() => {
                copyBtn.textContent = "Copiar";
            }, 1500);
        });

        results.appendChild(div);
    }

});

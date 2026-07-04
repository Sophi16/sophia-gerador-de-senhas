function generatePassword() {
  const length = document.getElementById("length").value;

  const upper = document.getElementById("uppercase").checked;
  const lower = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  let chars = "";

  if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%&*";

  if (chars === "") {
    alert("Selecione pelo menos uma opção.");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  document.getElementById("result").innerText = password;
}

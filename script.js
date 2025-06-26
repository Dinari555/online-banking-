document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgErreur = document.getElementById("msgErreur");

  if (!nom || !email || !message) {
    msgErreur.textContent = "Veuillez remplir tous les champs.";
    msgErreur.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    msgErreur.textContent = "Adresse email invalide.";
    msgErreur.style.color = "red";
    return;
  }

  msgErreur.textContent = "Message envoyé avec succès !";
  msgErreur.style.color = "green";
});

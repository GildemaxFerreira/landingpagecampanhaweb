const form = document.getElementById("form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  feedback.textContent = `🎉 Obrigado, ${name}! Sua inscrição foi confirmada.`;
  form.reset();
});

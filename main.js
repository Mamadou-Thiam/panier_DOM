


// Obtenir le bouton Ajouter.
const addButton = document.querySelector('.btn.btn-success');

// Ajouter un écouteur d'événements click au bouton Ajouter.
addButton.addEventListener('click', () => {
  // Calculer le montant total.
  let total = 0;
  const quantities = document.querySelectorAll('.table tbody input[type="number"]');
  const prices = document.querySelectorAll('.table tbody td:nth-child(3)');
  for (let i = 0; i < quantities.length; i++) {
    total += quantities[i].value * parseFloat(prices[i].textContent);
  }

  // Afficher le montant total dans la balise h1.
  document.querySelector('#total').textContent = `Total: ${total}Fcfa`;
});


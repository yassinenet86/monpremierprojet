// JavaScript (script.js)
document.getElementById('showDetails').addEventListener('click', function () {
    const title = "Exemple de produit";
    const pricePerUnit = 25;
  
    // Ajouter les données dynamiques
    document.getElementById('productTitle').textContent = title;
    document.getElementById('unitPrice').textContent = pricePerUnit;
  
    // Afficher la fenêtre
    document.getElementById('detailsPopup').classList.remove('hidden');
  });
  
  document.getElementById('closePopup').addEventListener('click', function () {
    // Masquer la fenêtre
    document.getElementById('detailsPopup').classList.add('hidden');
  });
  
  document.getElementById('quantitySelect').addEventListener('change', function () {
    const pricePerUnit = parseFloat(document.getElementById('unitPrice').textContent);
    const quantity = parseInt(document.getElementById('quantitySelect').value);
    const totalPrice = pricePerUnit * quantity;
  
    // Mettre à jour le prix total
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2); // Format avec deux décimales
  });
  
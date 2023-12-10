document.addEventListener('DOMContentLoaded', function() {
    const confessionForm = document.getElementById('confessionForm');
    const confessionText = document.getElementById('confessionText');
    const confessionList = document.getElementById('confessionList');
  
    confessionForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const confession = confessionText.value;
  
      // Crear un nuevo elemento de lista para mostrar la confesión
      const li = document.createElement('li');
      li.textContent = confession;
  
      // Agregar la confesión a la lista de confesiones
      confessionList.prepend(li);
  
      // Limpiar el campo de texto después de enviar la confesión
      confessionText.value = '';
    });
  });
  
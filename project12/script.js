document.getElementById('userForm').addEventListener('submit', function(event) {
   event.preventDefault();
   const username = document.getElementById('username').value || 'Ім’я користувача';
   const email = document.getElementById('email').value || 'Електронна пошта';
   const meal = document.querySelector('input[name="meal"]:checked') ? document.querySelector('input[name="meal"]:checked').value : '...';
   const dishes = Array.from(document.querySelectorAll('input[name="dish"]:checked')).map(checkbox => checkbox.value);
   const comment = document.getElementById('comment').value || '...';
   const result = `${username} (${email}) з’їв на ${meal} ${dishes.join(', ')} та залишив такий коментар: "${comment}"`;

   document.getElementById('result').textContent = result;
});

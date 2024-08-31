document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

 
    const name = document.getElementById('nameUser').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

  
    console.log("Dados salvos com sucesso!");
    
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 3000);
});

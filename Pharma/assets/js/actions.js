function mostrar_ocultar(id) {
  const elemento = document.getElementById(id);
  if(elemento.style.display === 'none'){
    elemento.style.display = 'block';
  }else{
    elemento.style.display = 'none'
  }
}

const logo = document.getElementById('logo');
const links = document.querySelectorAll('.navegador a:not(:first-child)');

logo.addEventListener('click', function() {
  links.forEach(link => link.classList.toggle('hidden'));
});


/*
function myFunction2() {
    if(document.getElementById("dos").style.display === 'none'){
      document.getElementById("dos").style.display = 'block';
    }else{
      document.getElementById("dos").style.display = 'none'
    }
  }


function myFunction1(id){
    const divElement = document.getElementById(id);

// Agrega un evento de clic al div
  divElement.addEventListener('click', () => {
    // Alterna la visibilidad del div
    if (divElement.style.display === 'none') {
        divElement.style.display = 'block';
    } else {
        divElement.style.display = 'none';
    }
  });
}
*/




let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1125/posts/30546/preview_image/RN.jpg') {
      miImage.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/115px-Firefox_logo%2C_2019.svg.png');
    } else {
      miImage.setAttribute('src', 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1125/posts/30546/preview_image/RN.jpg');
    }
}
let miBoton = document.querySelector('button')
let miTitulo = document.querySelector('h1')

const estableceNombreUsuario = () => {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Mozilla es genial,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}
miBoton.onclick = function() {
  estableceNombreUsuario();
}
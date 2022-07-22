function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);


// Filtro de busqueda.
let botonActivo = document.getElementById('botonesFiltro');
let botonFiltro = document.querySelectorAll('.button-value');
let imagenesProductos = document.querySelectorAll('.container .image-container .image');



/*

cajaBusqueda.oninput = () =>{
	productoImagenes.forEach(hide => hide.style.display = 'none');
	let valorInput = cajaBusqueda.value;
	productoImagenes.forEach(filter =>{
		let tituloProducto = filter.getAttribute('data-title');
		if(valorInput == tituloProducto){
			filter.style.display = 'block';
		}
		if (cajaBusqueda.value == ''){
			filter.style.display = 'block';
		}
	})
}

*/


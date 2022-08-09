//Funcion abrir y cerrar carrito

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

let products = {
	data: [
	  {
		productName: "Elden Ring",
		id: 0,
		category: "Juegos",
		price: 3999,
		image: "/assets/prodimgs/eldenring.jpg",
	  },
	  {
		productName: "Ghostwire: Tokyo",
		id: 1,
		category: "Juegos",
		price: 2999,
		image: "/assets/prodimgs/ghostwire.jpg",
	  },
	  {
		productName: "FIFA 22",
		id: 2,
		category: "Juegos",
		price: 4500,
		image: "/assets/prodimgs/fifa22.jpg",
	  },
	  {
		productName: "Minecraft",
		id: 3,
		category: "Juegos",
		category2: "Ofertas",
		price: 1500,
		image: "/assets/prodimgs/minecraft.jpg",
	  },
	  {
		productName: "Rust",
		id: 4,
		category: "Juegos",
		price: 2500,
		image: "/assets/prodimgs/rust.jpg",
	  },
	  {
        productName: "Red Dead Redemption 2",
		id: 5,
        category: "Juegos",
        price: 2500,
        image: "/assets/prodimgs/rdr2.jpg",
	  },
	  {
        productName: "The Elders Scrolls V: Skyrim SE",
		id: 6,
        category: "Juegos",
        price: 1900,
        image: "/assets/prodimgs/skyrim.jpg",
	  },
	  {
        productName: "Sekiro™: Shadows Die Twice",
		id: 7,
        category: "Juegos",
        price: 1300,
        image: "/assets/prodimgs/sekiro.jpg",
	  },
	  {
        productName: "Fallout 76",
		id: 8,
        category: "Juegos",
		category2: "Ofertas",
        price: 450,
        image: "/assets/prodimgs/fo76.jpg",
	  },
	  {
		productName: "Microsoft Windows 10 Pro",
		id: 9,
		category: "Software",
		price: 3200,
		image: "/assets/prodimgs/windows10.jpg",
	  },
	  {
		productName: "Microsoft Office Professional Plus 2021",
		id: 10,
		category: "Software",
		category2: "Ofertas",
		price: 2000,
		image: "/assets/prodimgs/office.jpg",
	  },
	  {
        productName: "Steam Giftcard 500 ARS",
		id: 11,
        category: "Tarjetas",
        price: 623,
        image: "/assets/prodimgs/steamgiftcard.jpg",
	  },
	],
  };
  

  //Bucle for que permitira recorrer el array y asignarle los siguientes atributos al html

  for (let i of products.data) {
	// Crear una card
	let card = document.createElement("div");

	// Cada card debería tener una categoria y permanecer oculta al principio

	card.classList.add("card", i.category, "hide");
	card.classList.add("card", i.category2, "hide");

	// Div imagen

	let imgContainer = document.createElement("div");
	imgContainer.classList.add("image-container");

	// Tag imagen

	let image = document.createElement("img");
	image.classList.add("product-image");
	image.setAttribute("src", i.image);
	imgContainer.appendChild(image);
	card.appendChild(imgContainer);

	// Container

	let container = document.createElement("div");
	container.classList.add("container");

	// Nombre del producto

	let name = document.createElement("h5");
	name.classList.add("product-name");
	name.innerText = i.productName;
	container.appendChild(name);

	// Precio - Precio oferta

	let price = document.createElement("h6");
	price.classList.add("producto-price");
	price.innerText = "$" + i.price;
	container.appendChild(price);
	
	card.appendChild(container);
	document.getElementById("products").appendChild(card);

	let crearBotonCarrito = document.createElement("button");
	crearBotonCarrito.innerText = "Agregar al carrito";
	crearBotonCarrito.setAttribute("class", "btn btn-small addToCart");
	crearBotonCarrito.setAttribute("id", "Botoncito");
	container.appendChild(crearBotonCarrito);

  }


 /* Agregar diferente id a cada elemento con este codigo. Obviamente puede mejorar quiza con un bucle for pero
 me dio miedo romper todo, perdon (?) */

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-1");
	$(this).attr("data-product-id", 0);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-2");
	$(this).attr("data-product-id", 1);
});
  

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-3");
	$(this).attr("data-product-id", 2);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-3");
	$(this).attr("data-product-id", 3);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-4");
	$(this).attr("data-product-id", 4);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-5");
	$(this).attr("data-product-id", 5);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-6");
	$(this).attr("data-product-id", 6);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-7");
	$(this).attr("data-product-id", 7);
});
  

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-8");
	$(this).attr("data-product-id", 8);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-9");
	$(this).attr("data-product-id", 9);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-10");
	$(this).attr("data-product-id", 10);
});

$("#Botoncito").each(function(index){
    $(this).attr("id", "product-11");
	$(this).attr("data-product-id", 11);
});



  function filterProduct(value) {
	
	//Determinar la class de los botones

	let buttons = document.querySelectorAll(".button-value");
	buttons.forEach((button) => {
	  // Chequear si el valor es igual al innerText
	  if (value.toUpperCase() == button.innerText.toUpperCase()) {
		button.classList.add("active");
	  } else {
		button.classList.remove("active");
	  }
	});
  
	//Seleccionar todas las cards

	let elements = document.querySelectorAll(".card");

	//Hacer un loop entre todas las cartas

	elements.forEach((element) => {
	  //Mostrar todas las cartas al hacer click en "mostrar todo"
	  if (value == "Mostrar todo") {
		element.classList.remove("hide");
	  } else {
		// Chequear si el elemento contiene una clase
		if (element.classList.contains(value)) {
		  // Mostrar los elementos basados en su categoria
		  element.classList.remove("hide");
		} else {
		  // Tecnica para ocultar los demas elementos
		  element.classList.add("hide");
		}
	  }
	});
  }
  
  // Filtrar busqueda al hacer click
  document.getElementById("buscarBtn").addEventListener("click", () => {
	
	let searchInput = document.getElementById("search-input").value;
	let elements = document.querySelectorAll(".product-name");
	let cards = document.querySelectorAll(".card");
  
	// Loop entre los elementos
	elements.forEach((element, index) => {
	  // Chequear si el texto contiene un valor que hayamos escrito
	  if (element.innerText.includes(searchInput.toUpperCase())) {
		// Mostrar las cards filtradas
		cards[index].classList.remove("hide");
	  } else {
		// Ocultar las demas
		cards[index].classList.add("hide");
	  }
	});
  });
  
  // Al cargar la pagina mostrar todas las cards
  window.onload = () => {
	filterProduct("Mostrar todo");
  };
  



  // Carrito de compras 


  // Lamento mucho que el codigo no sea limpio


  
  let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
  if(!productsInCart){
	  productsInCart = [];
  }
  const parentElement = document.querySelector('#buyItems');
  const cartSumPrice = document.querySelector('#sum-prices');
  const product = document.querySelectorAll('#products');
  
  
  const countTheSumPrice = function () { // 4
	  let sum = 0;
	  productsInCart.forEach(item => {
		sum += item.price;
	  });
	  return sum;
  }
  
  const updateShoppingCartHTML = function () {  // 3
	  localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
	  if (productsInCart.length > 0) {
		  let result = productsInCart.map(product => {
			  return `
				  <li class="buyItem">
					  <img src="${product.image}">
					  <div>
						  <h5>${product.name}</h5>
						  <h6>$${product.price}</h6>
						  <div>
							  <button class="button-minus" data-id=${product.id}>-</button>
							  <span class="countOfProduct">${product.count}</span>
							  <button class="button-plus" data-id=${product.id}>+</button>
						  </div>
					  </div>
				  </li>`
		  });

		  parentElement.innerHTML = result.join('');
		  document.querySelector('.checkout').classList.remove('hidden');
		  cartSumPrice.innerHTML = '$' + countTheSumPrice();
  
	  }
	  else {
		  document.querySelector('.checkout').classList.add('hidden');
		  parentElement.innerHTML = '<h4 class="empty">Tu carrito está vacío.</h4>';
		  cartSumPrice.innerHTML = '';
	  }
  }
  
  function updateProductsInCart(product) { // 2
	  for (let i = 0; i < productsInCart.length; i++) {
		  if (productsInCart[i].id == product.id) {
			  productsInCart[i].count += 1;
			  productsInCart[i].price = productsInCart[i].price * productsInCart[i].count;
			  return;
		  }
	  }
	  productsInCart.push(product);
  }
  
  product.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.product-name').innerHTML;
			const productPrice = item.querySelector('.producto-price').innerHTML;
			const productImage = item.querySelector('.product-image').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});
  
  parentElement.addEventListener('click', (e) => { // Last
	  const isPlusButton = e.target.classList.contains('button-plus');
	  const isMinusButton = e.target.classList.contains('button-minus');
	  if (isPlusButton || isMinusButton) {
		  for (let i = 0; i < productsInCart.length; i++) {
			  if (productsInCart[i].id == e.target.dataset.id) {
				  if (isPlusButton) {
					  productsInCart[i].count += 1
				  }
				  else if (isMinusButton) {
					  productsInCart[i].count -= 1
				  }
				  productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
  
			  }
			  if (productsInCart[i].count <= 0) {
				  productsInCart.splice(i, 1);
			  }
		  }
		  updateShoppingCartHTML();
	  }
  });
  
  updateShoppingCartHTML();
  
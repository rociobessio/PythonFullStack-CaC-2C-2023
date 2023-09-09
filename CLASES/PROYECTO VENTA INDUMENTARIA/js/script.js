const productImages = [
    [
        "../img/indumentaria/cream-polo/poloCrema.jpg",
        "../img/indumentaria/cream-polo/poloUpClose.jpg",
        "../img/indumentaria/cream-polo/poloReverso3.jpg",  
    ],
    [
        "../img/indumentaria/black-polo/poloNegra.jpg",
        "../img/indumentaria/black-polo/poloReverso.jpg", 
    ],
    [
        "../img/indumentaria/lentes/SpeedRacer/LentesDelante.jpg",
        "../img/indumentaria/lentes/SpeedRacer/lentesCostado.jpg",
        "../img/indumentaria/lentes/SpeedRacer/lentesCostado2.jpg", 
    ],
    [
        "../img/indumentaria/polo-Turquesa/poloTurquesa.jpg",
        "../img/indumentaria/polo-Turquesa/poloReverso2.jpg",
    ],
    [
        "../img/indumentaria/tee-aborfend/1.jpg",
        "../img/indumentaria/tee-aborfend/2.jpg",
        "../img/indumentaria/tee-aborfend/3.jpg",
    ],
    [
        "../img/indumentaria/tee-racer/1.jpg",
        "../img/indumentaria/tee-racer/2.jpg",
        "../img/indumentaria/tee-racer/5.jpg",
        "../img/indumentaria/tee-racer/3.jpg",
        "../img/indumentaria/tee-racer/4.jpg",
    ],
    [
        "../img/indumentaria/Masque/delanteMasque.jpg",
        "../img/indumentaria/Masque/masque3.jpg",
        "../img/indumentaria/Masque/puestoMasque.jpg",
        "../img/indumentaria/Masque/modeloMasque.jpg",
    ]

    // Agrega más matrices de URLs de imágenes para otros productos
];

const productImageElements = document.querySelectorAll(".product-img");

let currentImageIndex = 0;

function changeProductImage() {
    productImageElements.forEach((img, index) => {
        img.src = productImages[index][currentImageIndex];
    });

    currentImageIndex = (currentImageIndex + 1) % productImages[0].length;
}

// Cambia la imagen cada 3 segundos (3000 milisegundos)
setInterval(changeProductImage, 3000);
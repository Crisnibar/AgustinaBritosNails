let precioManicura = document.getElementById('precioManicura');
let precioService = document.getElementById('precioService');
let precioPies = document.getElementById('precioPies');
let precioDepi = document.getElementById('precioDepi');

let imgPreciosNails = document.getElementById('imgPreciosNails');
let imgPreciosService = document.getElementById('imgPreciosService');
let imgPreciosPies = document.getElementById('imgPreciosPies')
let imgPreciosDepi = document.getElementById('imgPreciosDepi')

let seMuestra = document.getElementById('seMuestra');

function Mostrar(a) {
    let id = a.id;

    switch (id) {
        case 'precioManicura':
            imgPreciosNails.style.display = 'block';  // Muestra imgPreciosNails
            imgPreciosService.style.display = 'none'; // Oculta imgPreciosService
            imgPreciosPies.style.display = 'none'; // Oculta imgPreciosPies
            imgPreciosDepi.style.display = 'none'; // Oculta imgPreciosDepi
            break;
        case 'precioService':
            imgPreciosNails.style.display = 'none';  // Oculta imgPreciosNails
            imgPreciosService.style.display = 'block'; // Muestra imgPreciosService
            imgPreciosPies.style.display = 'none'; // Oculta imgPreciosPies
            imgPreciosDepi.style.display = 'none'; // Oculta imgPreciosDepi
            break;
        case 'precioPies':
            imgPreciosNails.style.display = 'none';  // Oculta imgPreciosNails
            imgPreciosService.style.display = 'none'; // Oculta imgPreciosService
            imgPreciosPies.style.display = 'block'; // Muestra imgPreciosPies
            imgPreciosDepi.style.display = 'none'; // Oculta imgPreciosDepi
            break;
        case 'precioDepi':
            // Personaliza según tus necesidades
            imgPreciosNails.style.display = 'none';  // Oculta imgPreciosNails
            imgPreciosService.style.display = 'none'; // Oculta imgPreciosService
            imgPreciosPies.style.display = 'none'; // Oculta imgPreciosPies
            imgPreciosDepi.style.display = 'block'; // Muestra imgPreciosDepi
            break;
        default:
            // Maneja caso predeterminado si es necesario
            break;
    }
}
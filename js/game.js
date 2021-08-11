let canvas;
let ctx; //context 
let character = new MovableObject();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = '../img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png'

    ctx.drawImage(character, 20, 20, 50, 150);  //  (image, coordinate, coordinate, width, height)

}
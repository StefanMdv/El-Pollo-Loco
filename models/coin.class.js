class Coin extends MovableObject {

    constructor(x, y) {
        super().loadImage('./img/7.Marcadores/Icono/Monedas.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
    }
}
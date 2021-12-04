class StatusCoin extends DrawableObject {

    IMAGES = [
        `./img/7.Marcadores/Barra/Marcador moneda/azul/0_.png`,
        `./img/7.Marcadores/Barra/Marcador moneda/azul/20_.png`,
        `./img/7.Marcadores/Barra/Marcador moneda/azul/40_.png`,
        `./img/7.Marcadores/Barra/Marcador moneda/azul/60_.png`,
        `./img/7.Marcadores/Barra/Marcador moneda/azul/80_.png`,
        `./img/7.Marcadores/Barra/Marcador moneda/azul/100_.png`
    ];

    coins = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 30;
        this.width = 200;
        this.height = 50;
        this.setAmount(0);
    }


    setAmount(coins) {
        this.coins = coins;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coins == 40) {
            return 5;
        } else if (this.coins > 32) {
            return 4;
        } else if (this.coins > 24) {
            return 3;
        } else if (this.coins > 16) {
            return 2;
        } else if (this.coins > 8) {
            return 1;
        } else {
            return 0;
        }
    }



}
class StatusBottle extends DrawableObject {

    IMAGES = [
        `./img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png`,
        `./img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png`,
        `./img/7.Marcadores/Barra/Marcador_botella/Naranja/40_.png`,
        `./img/7.Marcadores/Barra/Marcador_botella/Naranja/60_.png`,
        `./img/7.Marcadores/Barra/Marcador_botella/Naranja/80_.png`,
        `./img/7.Marcadores/Barra/Marcador_botella/Naranja/100_.png`
    ];

    bottles = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 60;
        this.width = 200;
        this.height = 50;
        this.setAmount(0);
    }


    setAmount(bottles) {
        this.bottles = bottles;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.bottles == 5) {
            return 5;
        } else if (this.bottles > 3) {
            return 4;
        } else if (this.bottles > 2) {
            return 3;
        } else if (this.bottles > 1) {
            return 2;
        } else if (this.bottles > 0) {
            return 1;
        } else {
            return 0;
        }
    }



}
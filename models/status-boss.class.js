class StatusBoss extends DrawableObject {

    IMAGES = [
        `./img/7.Marcadores/Barra/Marcador vida/verde/0_.png`,
        `./img/7.Marcadores/Barra/Marcador vida/verde/20_.png`,
        `./img/7.Marcadores/Barra/Marcador vida/verde/40_.png`,
        `./img/7.Marcadores/Barra/Marcador vida/verde/60_.png`,
        `./img/7.Marcadores/Barra/Marcador vida/verde/80_.png`,
        `./img/7.Marcadores/Barra/Marcador vida/verde/100_.png`
    ];

    amount = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 490;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setAmount(100);
    }

    //setPercentage(50);
    setAmount(amount) {
        this.amount = amount;// => 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.amount == 100) {
            return 5;
        } else if (this.amount > 79) {
            return 4;
        } else if (this.amount > 59) {
            return 3;
        } else if (this.amount > 39) {
            return 2;
        } else if (this.amount > 19) {
            return 1;
        } else {
            return 0;
        }
    }



}
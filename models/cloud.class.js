class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;
    speed = 0.15

    constructor(coordinate_x) {
        super().loadImage(`./img/5.Fondo/Capas/4.nubes/1.png`);

        this.x = coordinate_x;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}
class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;
    bossEnergy = 100;


    IMAGES_WALKING = [
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G5.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G6.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G7.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G8.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G9.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G10.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G11.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/2.Ateciขn-ataque/1.Alerta/G12.png'
    ];

    IMAGES_DEAD = [
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G21.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G22.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/3.Herida/G23.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G24.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G25.png',
        './img/4.Secuencias_Enemy_gigantขn-Doคa_Gallinota-/4.Muerte/G26.png'

    ];

    constructor(coordinate_x) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = coordinate_x;
        this.animate();
    }

    animate() {

        let animationInterval = setInterval(() => {
            if (!this.bossIsDead) {
                this.playAnimation(this.IMAGES_WALKING);
            }
            if (this.bossDead) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    clearInterval(animationInterval);
                }, 700);
               
            }
        }, 200);

    }


}

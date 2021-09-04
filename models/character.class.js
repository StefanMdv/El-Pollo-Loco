class Character extends MovableObject {

    height = 350;
    width = 150;
    y = 85;
    speed = 10;
    IMAGES_WALKING = [
        `./img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png`,
        `./img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png`,
         `./img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png`, 
         `./img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png`, 
         `./img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png`, 
         `./img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png`
        ];
        world;
        walking_sound = new Audio('audio/walk.mp3');
    
    constructor() {
        super().loadImage(` ./img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png`);
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.RIGHT && this.x <=719*3){
                    this.x +=this.speed;
                    this.otherDirection = false;
                    this.walking_sound.play();
            }

            if(this.world.keyboard.LEFT && this.x>0){
                this.x -=this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
        }
        this.world.camera_x = -this.x + 100;
        }, 1000/60);

        setInterval(() => {

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT ){
               //walk animation
                this.playAnimation(this.IMAGES_WALKING);
            }
            }, 50);
            
           

    }

    jump() {

    }
}
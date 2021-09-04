class MovableObject{
    x =120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    //loadImage('img/test.png);
    loadImage(path){
        this.img = new Image();//this.image = document.getElemendByID('image')<img id="image" src= " ">
        this.img.src = path;
    }
    /**
     * 
     * @param {Array} arr - ['img/image1.png' , 'img/image2.png', ...]
     */
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
       
    }
    
    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i=0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, ......
        let path = this.images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

     moveRight() {
        console.log('moving right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -=this.speed;
        }, 1000 / 60);
    }
}
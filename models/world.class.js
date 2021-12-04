class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBottle = new StatusBottle();
    statusCoin = new StatusCoin();
    statusBoss = new StatusBoss();
    throwableObjects = [];
    bottleCount = 0;
    coinCount = 0;
    throwing_sound = new Audio('audio/throw-bottle.mp3');
    collect_bottle_sound = new Audio('audio/collect-bottle.mp3');
    collect_coin_sound = new Audio('audio/coin.mp3');
    boss_hit_sound = new Audio('audio/chicken_hit.mp3');
    game_lost_sound = new Audio('audio/lost.mp3');
    game_won_sound = new Audio('audio/win.mp3');
    throwactive = false;
    thrownBottle;
    bossEnergy = 100;
    bossDead = false;
    collisionInterval;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        this.collisionInterval = setInterval(() => {


            this.checkCollisions();
            this.checkThrowObjects();

        }, 80);
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            if (this.bottleCount > 0 && this.throwactive == false) {
                this.thrownBottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(this.thrownBottle);
                this.bottleCount--;
                this.statusBottle.setAmount(this.bottleCount);
                this.throwactive = true;

            }
        } else {
            this.throwactive = false
        }
    }

    checkCollisions() {
        this.checkCollisionEnemy();
        this.checkCollisionBottle();
        this.checkCollisionCoin();
        this.checkCollisionEndboss();

    }

    checkCollisionEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionEndboss() {
        this.throwableObjects.forEach((thrownBottle) => {
            if (this.level.enemies[10].isColliding(thrownBottle)) {
                this.endbossHit();
                this.throwableObjects.splice(thrownBottle, 1);
                this.statusBoss.setAmount(this.bossEnergy);
            }
        });
    }

    checkCollisionBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(bottle, 1);
                this.bottleCount++;
                this.statusBottle.setAmount(this.bottleCount);
                this.collect_bottle_sound.play();
            }
        });
    }

    checkCollisionCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(coin, 1);
                this.coinCount++;
                this.statusCoin.setAmount(this.coinCount);
                this.collect_coin_sound.play();
            }
        });
    }

    endbossHit() {
        if (this.bossEnergy > 19) {
            this.bossEnergy = this.bossEnergy - 20;
            this.throwing_sound.play();
            setTimeout(() => {
                this.boss_hit_sound.play();
            }, 850);

            if (this.bossEnergy < 19) {
                this.bossDead = true;
                this.bossIsDead();
            }

        }
    }

    bossIsDead() {
        this.level.enemies[10].bossDead = true;
        this.bossEnergy == 0;
        setTimeout(() => {
            this.game_won_sound.play();
        }, 500);        
        setTimeout(() => {
            this.youWon();
        }, 600);
        }

    youWon() {
        document.getElementById('world-end').classList.remove('d-none');
        setTimeout(() => {
            document.getElementById('youWonScreen').classList.remove('d-none');
            document.getElementById('restart-game-btn').classList.remove('d-none');
        }, 500);

        setTimeout(() => {
            document.getElementById('infobox').innerHTML=`<h4> Congratulations, YOU WON! </h4>`;
        }, 600);
    }

    youLost() {
        document.getElementById('world-end').classList.remove('d-none');
        setTimeout(() => {
            document.getElementById('youLostScreen').classList.remove('d-none');
            document.getElementById('restart-game-btn').classList.remove('d-none');
        }, 500);

        setTimeout(() => {
            document.getElementById('infobox').innerHTML=`<h4> Oh NO! You've lost! TRY AGAIN!</h4>`;
        }, 600);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        //   --------  Space for fixed objects  --------
        this.addToMap(this.statusBar);
        this.addToMap(this.statusCoin);
        this.addToMap(this.statusBottle);
        this.addToMap(this.statusBoss);
        this.ctx.translate(this.camera_x, 0);


        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
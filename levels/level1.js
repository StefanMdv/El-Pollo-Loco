const level1 = new Level(
    [
        new Chicken(500),
        new Chicken(800),
        new Chicken(1250),
        new Chicken(1700),
        new Chicken(2250),
        new Chicken(2700),
        new Chicken(3200),
        new Chicken(3700),
        new Chicken(4000),
        new Chicken(4500),
        new Endboss(5200)
    ],

    [
        new Bottle(800, 360),
        new Bottle(1400, 360),
        new Bottle(2000, 360),
        new Bottle(3200, 360),
        new Bottle(4800, 360)
    ],

    [
        new Coin(600, 250),
        new Coin(650, 220),
        new Coin(700, 185),
        new Coin(750, 150),
        new Coin(800, 120),
        new Coin(850, 150),
        new Coin(900, 185),
        new Coin(950, 220),
        new Coin(1000, 250),
        new Coin(1050, 270),

        new Coin(1800, 250),
        new Coin(1850, 220),
        new Coin(1900, 185),
        new Coin(1950, 150),
        new Coin(2000, 120),
        new Coin(2050, 150),
        new Coin(2100, 185),
        new Coin(2150, 220),
        new Coin(2200, 250),
        new Coin(2250, 270),

        new Coin(2900, 250),
        new Coin(2950, 220),
        new Coin(3000, 185),
        new Coin(3050, 150),
        new Coin(3100, 120),
        new Coin(3150, 150),
        new Coin(3200, 185),
        new Coin(3250, 220),
        new Coin(3300, 250),
        new Coin(3350, 270),

        new Coin(4200, 250),
        new Coin(4250, 220),
        new Coin(4300, 185),
        new Coin(4350, 150),
        new Coin(4400, 120),
        new Coin(4450, 150),
        new Coin(4500, 185),
        new Coin(4550, 220),
        new Coin(4600, 250),
        new Coin(4650, 270)

    ],

    [
        new Cloud(1),
        new Cloud(500),
        new Cloud(1000),
        new Cloud(1500),
        new Cloud(2000),
        new Cloud(2500),
        new Cloud(3000),
        new Cloud(3500),
        new Cloud(4000),
        new Cloud(4500),
        new Cloud(5000),
        new Cloud(5500)
    ],

    [
        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, -719),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/2.png`, -719),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/2.png`, -719),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/2.png`, -719),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 0),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/1.png`, 0),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/1.png`, 0),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 0),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/2.png`, 719),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/2.png`, 719),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 2),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 2),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 2),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 2),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 3),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/2.png`, 719 * 3),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/2.png`, 719 * 3),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719 * 3),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 4),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 4),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 4),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 4),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 5),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/2.png`, 719 * 5),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/2.png`, 719 * 5),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719 * 5),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 6),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 6),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 6),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 6),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 7),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/2.png`, 719 * 7),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/2.png`, 719 * 7),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719 * 7),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 8),
        new BackgroundObject(`./img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 8),
        new BackgroundObject(` ./img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 8),
        new BackgroundObject(` ./img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 8)
    ]

);

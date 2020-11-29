input.onButtonPressed(Button.A, function () {
    SHIP.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    SHOOT = game.createSprite(SHIP.get(LedSpriteProperty.X), SHIP.get(LedSpriteProperty.Y))
    SHOOT.change(LedSpriteProperty.Brightness, 80)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        SHOOT.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (SHOOT.isTouching(ENEMY)) {
            ENEMY.delete()
            SHOOT.delete()
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            game.addScore(1)
        }
    }
    if (SHOOT.get(LedSpriteProperty.Y) <= 0) {
        SHOOT.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    SHIP.move(1)
})
let ENEMY: game.LedSprite = null
let SHOOT: game.LedSprite = null
let SHIP: game.LedSprite = null
music.setVolume(50)
SHIP = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    ENEMY = game.createSprite(randint(0, 4), 0)
    ENEMY.set(LedSpriteProperty.Brightness, 150)
    basic.pause(175)
    ENEMY.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        ENEMY.move(1)
        basic.pause(650)
    }
    if (ENEMY.isTouching(SHIP)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        game.gameOver()
    }
    if (ENEMY.isTouchingEdge()) {
        ENEMY.delete()
    }
})

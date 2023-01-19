namespace SpriteKind {
    export const snakeheadsprite = SpriteKind.create()
    export const snakebodysprite = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SpeedY == 0) {
        SpeedX = 0
        SpeedY = -1
    }
    mySprite.setPosition(X, Y)
    mySprite2.setPosition(X, Y)
})
function spawnFood () {
    MySprite3 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    isEmptyPositions = false
    while (!(isEmptyPositions)) {
        X = 8 + 16 * randint(0, 9)
        Y = 8 + 15 * randint(0, 7)
        isEmptyPositions = true
        for (let value of Snake) {
            if (X == value.x && Y == value.y) {
                isEmptyPositions = false
            }
        }
    }
    MySprite3.setPosition(X, Y)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SpeedX == 0) {
        SpeedX = -1
        SpeedY = 0
    }
    mySprite.setPosition(X, Y)
    mySprite2.setPosition(X, Y)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SpeedX == 0) {
        SpeedX = 1
        SpeedY = 0
    }
    mySprite.setPosition(X, Y)
    mySprite2.setPosition(X, Y)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (SpeedY == 0) {
        SpeedX = 0
        SpeedY = 1
    }
    mySprite.setPosition(X, Y)
    mySprite2.setPosition(X, Y)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    Growth = 1
    spawnFood()
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let isEmptyPositions = false
let MySprite3: Sprite = null
let Y = 0
let X = 0
let Growth = 0
let SpeedY = 0
let SpeedX = 0
let mySprite2: Sprite = null
let Snake: Sprite[] = []
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.AutoDestroy, true)
mySprite.setPosition(8, 8)
Snake.push(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
mySprite2.setPosition(24, 8)
Snake.push(mySprite2)
SpeedX = 1
SpeedY = 0
Growth = 0
spawnFood()
info.setScore(0)
pause(2000)
forever(function () {
    if (Growth == 0) {
        mySprite = Snake.shift()
    } else {
        Growth = 0
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    }
    X = Snake[Snake.length - 1].x + 16 * SpeedX
    Y = Snake[Snake.length - 1].y + 15 * SpeedY
    mySprite.setPosition(X, Y)
    Snake.push(mySprite)
    if (Snake.length == 80) {
        game.over(true)
    }
    pause(200)
})

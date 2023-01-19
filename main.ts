namespace SpriteKind {
    export const snakeheadsprite = SpriteKind.create()
    export const snakebodysprite = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = -1
    }
    mySprite.setPosition(x, y)
    mysprite2.setPosition(x, y)
})
function spawnFood () {
    Mysprite3 = sprites.create(img`
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
        x = 8 + 16 * randint(0, 9)
        y = 8 + 15 * randint(0, 7)
        isEmptyPositions = true
        for (let value of snake) {
            if (x == value.x && y == value.y) {
                isEmptyPositions = false
            }
        }
    }
    Mysprite3.setPosition(x, y)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = -1
        speedY = 0
    }
    mySprite.setPosition(x, y)
    mysprite2.setPosition(x, y)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = 1
        speedY = 0
    }
    mySprite.setPosition(x, y)
    mysprite2.setPosition(x, y)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = 1
    }
    mySprite.setPosition(x, y)
    mysprite2.setPosition(x, y)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    growth = 1
    spawnFood()
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let isEmptyPositions = false
let Mysprite3: Sprite = null
let y = 0
let x = 0
let growth = 0
let speedY = 0
let speedX = 0
let mysprite2: Sprite = null
let snake: Sprite[] = []
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
snake.push(mySprite)
mysprite2 = sprites.create(img`
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
mysprite2.setFlag(SpriteFlag.AutoDestroy, true)
mysprite2.setPosition(24, 8)
snake.push(mysprite2)
speedX = 1
speedY = 0
growth = 0
spawnFood()
info.setScore(0)
pause(2000)
forever(function () {
    if (growth == 0) {
        mySprite = snake.shift()
    } else {
        growth = 0
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
    x = snake[snake.length - 1].x + 16 * speedX
    y = snake[snake.length - 1].y + 15 * speedY
    mySprite.setPosition(x, y)
    snake.push(mySprite)
    if (snake.length == 80) {
        game.over(true)
    }
    pause(200)
})

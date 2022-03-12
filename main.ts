namespace SpriteKind {
    export const inbattle_enemy = SpriteKind.create()
    export const player1 = SpriteKind.create()
    export const heroprojectile = SpriteKind.create()
}
namespace StatusBarKind {
    export const cooldown = StatusBarKind.create()
    export const herocooldown = StatusBarKind.create()
}
function encounter () {
    controller.moveSprite(mySprite, 0, 0)
    controller.player2.moveSprite(player2, 0, 0)
    player1_y = mySprite.y
    player1_x = mySprite.x
    color.startFade(color.originalPalette, color.Black, 100)
    pause(1000)
    color.startFade(color.Black, color.originalPalette, 100)
    if (player_heath == 1) {
        player_2_y = player2.y
        player2_x = player2.x
        controller.player2.moveSprite(player2, 0, 0)
    }
    fight()
}
function fight_multiple_enemy () {
    battle_with_muti = true
    mySprite2enemy = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d d d d d d f f f d d d d f 
        f d d d d d f f f 1 f d d d d f 
        f d d d d f f 1 1 f f d d d d f 
        f d d d f f 1 1 f f d d d d d f 
        f d d d f f f f f d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.inbattle_enemy)
    my_sprite_enemy = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d d d d d d f f f d d d d f 
        f d d d d d f f f 1 f d d d d f 
        f d d d d f f 1 1 f f d d d d f 
        f d d d f f 1 1 f f d d d d d f 
        f d d d f f f f f d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.inbattle_enemy)
    tiles.placeOnTile(mySprite2enemy, tiles.getTileLocation(9, 9))
    tiles.placeOnTile(my_sprite_enemy, tiles.getTileLocation(7, 9))
    herostatusbarp1 = statusbars.create(20, 4, StatusBarKind.herocooldown)
    herostatusbarp1.setLabel("   1 CD", 8)
    herostatusbarp1.attachToSprite(mySprite)
    herostatusbarp1.positionDirection(CollisionDirection.Bottom)
    herostatusbarp1.setColor(6, 9)
    herostatusbarp2 = statusbars.create(20, 4, StatusBarKind.herocooldown)
    herostatusbarp2.attachToSprite(player2)
    herostatusbarp2.positionDirection(CollisionDirection.Top)
    herostatusbarp2.setLabel("2 CD", 2)
    herostatusbarp2.setColor(4, 5)
    enemystatusbar1hp = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    enemystatusbarCD1 = statusbars.create(20, 4, StatusBarKind.cooldown)
    enemystatusbar1hp.attachToSprite(mySprite2enemy)
    enemystatusbarCD1.attachToSprite(mySprite2enemy)
    enemystatusbar1hp.positionDirection(CollisionDirection.Bottom)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.cooldown)
    statusbar3.attachToSprite(my_sprite_enemy)
    statusbar4.attachToSprite(my_sprite_enemy)
    statusbar3.positionDirection(CollisionDirection.Bottom)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (battle_with_muti || in_battle) {
    	
    } else {
        mySprite.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `)
    }
})
function exp_player1 () {
    let expp1 = 0
    if (expp1 == 0) {
        exp_p1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            8 . . . 8 . 8 . 8 8 8 . . . . . 
            8 8 8 . . 8 . . 8 . 8 . . . . . 
            8 . . . 8 . 8 . 8 8 8 . . . . . 
            8 8 8 . . . . . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    } else if (expp1 == 1) {
        exp_p1.setImage(img`
            . . . . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            8 5 5 5 8 . 8 . 8 8 8 . . . . . 
            8 8 8 5 . 8 . . 8 . 8 . . . . . 
            8 5 5 5 8 . 8 . 8 8 8 . . . . . 
            8 8 8 . . . . . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (expp1 == 2) {
        exp_p1.setImage(img`
            . . . . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            8 5 5 5 8 5 8 . 8 8 8 . . . . . 
            8 8 8 5 5 8 . . 8 . 8 . . . . . 
            8 5 5 5 8 5 8 . 8 8 8 . . . . . 
            8 8 8 . . . . . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (expp1 == 3) {
        exp_p1.setImage(img`
            . . . . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            8 5 5 5 8 5 8 5 8 8 8 . . . . . 
            8 8 8 5 5 8 5 5 8 . 8 . . . . . 
            8 5 5 5 8 5 8 5 8 8 8 . . . . . 
            8 8 8 . . . . . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (expp1 == 4) {
        exp_p1.setImage(img`
            . . . . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            8 5 5 5 8 5 8 5 8 8 8 5 5 . . . 
            8 8 8 5 5 8 5 5 8 5 8 5 5 . . . 
            8 5 5 5 8 5 8 5 8 8 8 5 5 . . . 
            8 8 8 . . . . . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        level_up_p1()
    }
}
function level (num: number) {
    if (num == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
        music2 = 1
        for (let index = 0; index < 10; index++) {
            mySprite3 = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 f 1 1 1 f 1 1 1 1 1 1 1 f 
                f 1 1 f 1 1 1 f 1 1 1 1 1 1 1 f 
                f 1 1 f 1 1 1 f 1 1 1 1 1 1 1 f 
                f 1 1 f 1 1 1 f 1 1 1 1 1 1 1 f 
                f 1 1 f 1 1 1 f 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 14), randint(1, 14)))
        }
    } else if (num == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        music2 = 2
    } else if (num == 2) {
        tiles.setCurrentTilemap(tilemap`level3`)
        music2 = 3
    } else if (num == 3) {
        game.over(true)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if ((battle_with_muti || in_battle) && statusbars.getStatusBarAttachedTo(StatusBarKind.herocooldown, mySprite).value == statusbars.getStatusBarAttachedTo(StatusBarKind.herocooldown, mySprite).max) {
        projectile2 = sprites.createProjectileFromSprite(img`
            6 6 6 6 6 6 8 8 8 . . . . . . . 
            9 9 9 9 9 9 6 6 8 8 . . . . . . 
            . . . . . . 9 9 6 6 8 . . . . . 
            . . . . . . . . 9 9 6 8 8 . . . 
            . . . . . . . . . . 9 6 8 . . . 
            . . . . . . . . . . . 9 6 8 . . 
            . . . . . . . . . . . . 9 6 8 . 
            . . . . . . . . . . . . 9 6 8 8 
            . . . . . . . . . . . . . 9 6 8 
            . . . . . . . . . . . . . 9 6 8 
            . . . . . . . . . . . . . . 9 6 
            . . . . . . . . . . . . . . 9 6 
            . . . . . . . . . . . . . . 9 6 
            . . . . . . . . . . . . . . 9 6 
            . . . . . . . . . . . . . . 9 6 
            . . . . . . . . . . . . . . 9 6 
            `, mySprite, 50, 0)
        projectile2.setKind(SpriteKind.heroprojectile)
        animation.runImageAnimation(
        mySprite,
        [img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818......22......
            81111111111188888888882244....
            811111111111811188111822454...
            8111111111118111881118224554..
            811111111111811188111822454...
            81111111111188888888882244....
            8111111111111118......22......
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.......22.....
            811111111111188888888882244...
            8111111111111811188111822454..
            81111111111118111881118224554.
            8111111111111811188111822454..
            811111111111188888888882244...
            8111111111111118.......22.....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818........22....
            8111111111111188888888882244..
            81111111111111811188111822454.
            811111111111118111881118224554
            81111111111111811188111822454.
            8111111111111188888888882244..
            8111111111111118........22....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.........22...
            81111111111111188888888882244.
            811111111111111811188111822454
            811111111111111811188111822455
            811111111111111811188111822454
            81111111111111188888888882244.
            8111111111111118.........22...
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.........22...
            81111111111111188888888882244.
            811111111111111811188111822454
            811111111111111811188111822455
            811111111111111811188111822454
            81111111111111188888888882244.
            8111111111111118.........22...
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818........22....
            8111111111111188888888882244..
            81111111111111811188111822454.
            811111111111118111881118224554
            81111111111111811188111822454.
            8111111111111188888888882244..
            8111111111111118........22....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.......22.....
            811111111111188888888882244...
            8111111111111811188111822454..
            81111111111118111881118224554.
            8111111111111811188111822454..
            811111111111188888888882244...
            8111111111111118.......22.....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818......22......
            81111111111188888888882244....
            811111111111811188111822454...
            8111111111118111881118224554..
            811111111111811188111822454...
            81111111111188888888882244....
            8111111111111118......22......
            8111111111111118..............
            8888888888888888..............
            `],
        50,
        false
        )
        herostatusbarp1.value = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if ((battle_with_muti || in_battle) && statusbars.getStatusBarAttachedTo(StatusBarKind.herocooldown, player2).value == statusbars.getStatusBarAttachedTo(StatusBarKind.herocooldown, player2).max && !(p2_down)) {
        projectile2 = sprites.createProjectileFromSprite(img`
            4 4 4 4 4 4 2 2 2 . . . . . . . 
            5 5 5 5 5 5 4 4 2 2 . . . . . . 
            . . . . . . 5 5 4 4 2 . . . . . 
            . . . . . . . . 5 5 4 2 2 . . . 
            . . . . . . . . . . 5 4 2 . . . 
            . . . . . . . . . . . 5 4 2 . . 
            . . . . . . . . . . . . 5 4 2 . 
            . . . . . . . . . . . . 5 4 2 2 
            . . . . . . . . . . . . . 5 4 2 
            . . . . . . . . . . . . . 5 4 2 
            . . . . . . . . . . . . . . 5 4 
            . . . . . . . . . . . . . . 5 4 
            . . . . . . . . . . . . . . 5 4 
            . . . . . . . . . . . . . . 5 4 
            . . . . . . . . . . . . . . 5 4 
            . . . . . . . . . . . . . . 5 4 
            `, player2, 50, 0)
        projectile2.setKind(SpriteKind.heroprojectile)
        animation.runImageAnimation(
        mySprite,
        [img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818......22......
            81111111111188888888882244....
            811111111111811188111822454...
            8111111111118111881118224554..
            811111111111811188111822454...
            81111111111188888888882244....
            8111111111111118......22......
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.......22.....
            811111111111188888888882244...
            8111111111111811188111822454..
            81111111111118111881118224554.
            8111111111111811188111822454..
            811111111111188888888882244...
            8111111111111118.......22.....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818........22....
            8111111111111188888888882244..
            81111111111111811188111822454.
            811111111111118111881118224554
            81111111111111811188111822454.
            8111111111111188888888882244..
            8111111111111118........22....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.........22...
            81111111111111188888888882244.
            811111111111111811188111822454
            811111111111111811188111822455
            811111111111111811188111822454
            81111111111111188888888882244.
            8111111111111118.........22...
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.........22...
            81111111111111188888888882244.
            811111111111111811188111822454
            811111111111111811188111822455
            811111111111111811188111822454
            81111111111111188888888882244.
            8111111111111118.........22...
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818........22....
            8111111111111188888888882244..
            81111111111111811188111822454.
            811111111111118111881118224554
            81111111111111811188111822454.
            8111111111111188888888882244..
            8111111111111118........22....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818.......22.....
            811111111111188888888882244...
            8111111111111811188111822454..
            81111111111118111881118224554.
            8111111111111811188111822454..
            811111111111188888888882244...
            8111111111111118.......22.....
            8111111111111118..............
            8888888888888888..............
            `,img`
            8888888888888888..............
            8111111111111118..............
            8111111111111118..............
            8111111111111118..............
            8118888818888818..............
            8111186811182818..............
            8111186811182818..............
            8111188811188818......22......
            81111111111188888888882244....
            811111111111811188111822454...
            8111111111118111881118224554..
            811111111111811188111822454...
            81111111111188888888882244....
            8111111111111118......22......
            8111111111111118..............
            8888888888888888..............
            `],
        50,
        false
        )
        herostatusbarp2.value = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 2 2 2 1 1 1 2 2 2 1 1 2 
        2 1 1 1 1 2 1 1 1 1 1 2 1 1 1 2 
        2 1 1 1 1 2 1 1 1 1 1 2 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (battle_with_muti || in_battle) {
    	
    } else {
        mySprite.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 1 8 8 8 8 8 8 1 8 
            8 8 6 8 1 1 1 1 8 2 8 1 1 1 1 8 
            8 8 6 8 1 1 1 1 8 2 8 1 1 1 1 8 
            8 8 8 8 1 1 1 1 8 8 8 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    levelnum += 1
    level(levelnum)
})
function fight () {
    tiles.setCurrentTilemap(tilemap`level4`)
    scene.setBackgroundColor(10)
    if (player_heath == 1) {
        tiles.placeOnTile(player2, tiles.getTileLocation(2, 9))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 9))
        fight_multiple_enemy()
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 9))
        battle_one_enemy()
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (battle_with_muti || in_battle) {
    	
    } else {
        mySprite.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 8 8 8 8 8 8 1 8 8 8 8 8 8 8 
            8 1 1 1 1 8 2 8 1 1 1 1 8 6 8 8 
            8 1 1 1 1 8 2 8 1 1 1 1 8 6 8 8 
            8 1 1 1 1 8 8 8 1 1 1 1 8 8 8 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    player_2_heath += 1
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (battle_with_muti || in_battle) {
    	
    } else {
        mySprite.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 8 8 8 8 8 1 1 8 8 8 8 8 1 8 
            8 1 1 1 8 2 8 1 1 8 6 8 1 1 1 8 
            8 1 1 1 8 2 8 1 1 8 6 8 1 1 1 8 
            8 1 1 1 8 8 8 1 1 8 8 8 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `)
    }
})
scene.onOverlapTile(SpriteKind.player1, sprites.dungeon.stairWest, function (sprite, location) {
    levelnum += 1
    level(levelnum)
})
sprites.onOverlap(SpriteKind.player1, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    p1_heath += 1
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 2 2 2 2 1 1 1 2 2 2 2 1 2 
        2 1 1 2 1 1 1 1 1 1 2 1 1 1 1 2 
        2 1 1 2 1 1 1 1 1 1 2 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
function level_up_p1 () {
    let levels_p1 = 0
    if (levels_p1 == 0) {
        mySprite5 = sprites.create(img`
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . 8 8 8 8 8 8 . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . . 8 8 8 8 8 8 8 . . . . . . . 
            . . 8 8 8 . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            `, SpriteKind.Player)
    } else if (levels_p1 == 1) {
        mySprite5.setImage(img`
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 . . 8 8 8 8 8 . . . 
            . . 8 8 8 . . . . 8 8 8 8 . . . 
            . . . . . . . . . 8 8 8 8 . . . 
            . . . . . . . . . 8 8 8 8 . . . 
            . . . . . . . . 8 8 8 8 8 . . . 
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . . 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . 8 8 8 8 8 8 8 . . . . . . . . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `)
    } else if (levels_p1 == 2) {
        mySprite5.setImage(img`
            . . . . 8 8 8 8 8 . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . . . 8 8 8 8 8 8 . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . . 8 8 8 . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . . . 8 8 8 8 8 8 8 . . . . . . 
            . . . 8 8 8 8 8 8 . . . . . . . 
            `)
    } else if (levels_p1 == 3) {
        mySprite5.setImage(img`
            . . 8 8 8 . . . . . 8 8 8 . . . 
            . . 8 8 8 . . . . . 8 8 8 . . . 
            . . 8 8 8 . . . . . 8 8 8 . . . 
            . . 8 8 8 . . . . . 8 8 8 . . . 
            . . 8 8 8 . . . . . 8 8 8 . . . 
            . . 8 8 8 . . . . . 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . . . . . . . . 8 8 8 . . . 
            . . . . . . . . . . 8 8 8 . . . 
            . . . . . . . . . . 8 8 8 . . . 
            . . . . . . . . . . 8 8 8 . . . 
            . . . . . . . . . . 8 8 8 . . . 
            . . . . . . . . . . 8 8 8 . . . 
            . . . . . . . . . . 8 8 8 . . . 
            `)
    } else if (levels_p1 == 4) {
        mySprite5.setImage(img`
            . . . . 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . 8 8 8 8 8 . . 
            . . . . . . . . 8 8 8 8 8 8 . . 
            . . . . . . . 8 8 8 8 8 8 . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . . . 8 8 8 . . . . . . . . 
            . . . . . 8 8 8 . . . . . . . . 
            . . . . . 8 8 8 8 . . . . . . . 
            . . . . . 8 8 8 8 8 8 8 8 8 . . 
            . . . . . 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . 8 8 8 8 8 8 8 . . 
            `)
    } else {
        mySprite5.setImage(img`
            . . . . . . . . 8 8 8 . . . . . 
            . . . . . . . 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 . . . . . . . 
            . . . . 8 8 8 8 8 . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . 8 8 8 8 8 . 8 8 8 8 8 . . . 
            . . 8 8 8 8 . . . 8 8 8 8 . . . 
            . . 8 8 8 8 . . . 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            `)
    }
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    player2 = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 2 2 2 2 1 1 1 2 2 2 2 1 1 2 
        2 1 1 1 1 2 1 1 1 1 1 1 2 1 1 2 
        2 1 1 1 1 2 1 1 1 1 1 1 2 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    controller.player2.moveSprite(player2)
    player2.setPosition(mySprite.x, mySprite.y)
    player2.setStayInScreen(true)
    player_2_heath = 0
    player_heath = 1
})
function battle_one_enemy () {
    in_battle = true
    mySprite2enemy = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d f d d f d d d d d d d d f 
        f d d d d d d d f f f d d d d f 
        f d d d d d f f f 1 f d d d d f 
        f d d d d f f 1 1 f f d d d d f 
        f d d d f f 1 1 f f d d d d d f 
        f d d d f f f f f d d d d d d f 
        f d d d d d d d d d d d d d d f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.inbattle_enemy)
    tiles.placeOnTile(mySprite2enemy, tiles.getTileLocation(9, 9))
    herostatusbarp1 = statusbars.create(20, 4, StatusBarKind.herocooldown)
    herostatusbarp1.setLabel("player 1 CD", 8)
    herostatusbarp1.attachToSprite(mySprite)
    herostatusbarp1.positionDirection(CollisionDirection.Top)
    enemystatusbar1hp = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    enemystatusbarCD1 = statusbars.create(20, 4, StatusBarKind.cooldown)
    enemystatusbar1hp.attachToSprite(mySprite2enemy)
    enemystatusbarCD1.attachToSprite(mySprite2enemy)
    enemystatusbar1hp.positionDirection(CollisionDirection.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    encounter()
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
let projectile: Sprite = null
let mySprite5: Sprite = null
let p1_heath = 0
let player_2_heath = 0
let p2_down = false
let projectile2: Sprite = null
let mySprite3: Sprite = null
let music2 = 0
let exp_p1: Sprite = null
let in_battle = false
let statusbar4: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let enemystatusbarCD1: StatusBarSprite = null
let enemystatusbar1hp: StatusBarSprite = null
let herostatusbarp2: StatusBarSprite = null
let herostatusbarp1: StatusBarSprite = null
let my_sprite_enemy: Sprite = null
let mySprite2enemy: Sprite = null
let battle_with_muti = false
let player2_x = 0
let player_2_y = 0
let player_heath = 0
let player1_x = 0
let player1_y = 0
let player2: Sprite = null
let levelnum = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 8 8 8 8 8 8 1 8 8 8 8 8 8 8 
    8 1 1 1 1 8 2 8 1 1 1 1 8 6 8 8 
    8 1 1 1 1 8 2 8 1 1 1 1 8 6 8 8 
    8 1 1 1 1 8 8 8 1 1 1 1 8 8 8 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.player1)
controller.moveSprite(mySprite)
level(0)
scene.cameraFollowSprite(mySprite)
levelnum = 0
level_up_p1()
exp_player1()
game.onUpdate(function () {
    if (player_heath == 0) {
        exp_p1.setPosition(0, mySprite.y + 20)
        exp_p1.setStayInScreen(true)
        mySprite5.setStayInScreen(true)
        mySprite5.setPosition(-1000, mySprite.y + 1000000)
    } else if (player_heath == 1) {
        exp_p1.setPosition(0, 0)
        exp_p1.setStayInScreen(true)
        mySprite5.setPosition(-1000, mySprite.y + 1000000)
        mySprite5.setStayInScreen(true)
    }
    if (in_battle) {
        herostatusbarp1.value += 0.25
    }
    if (battle_with_muti) {
        herostatusbarp1.value += 0.25
        herostatusbarp2.value += 0.25
    }
    if ((battle_with_muti || in_battle) && statusbars.getStatusBarAttachedTo(StatusBarKind.cooldown, mySprite2enemy).value == statusbars.getStatusBarAttachedTo(StatusBarKind.cooldown, mySprite2enemy).max) {
        enemystatusbarCD1.value = 0
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f . . . . f . . . . . . . . . . 
            f . . . . f . . . . f . . . . f 
            f . . . . f . . . f f . . . . f 
            f . . . . f . . . f . f . . . f 
            f f f f f f . . . f . f . . . f 
            f f f f f f . . f . . . f . . f 
            f . . . . f . . f f f f f . . . 
            f . . . . f . f . . . . . f . f 
            f . . . . f . f . . . . . f . . 
            f . . . . f . f . . . . . . f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2enemy, -50, 0)
    }
    if ((battle_with_muti || false) && statusbars.getStatusBarAttachedTo(StatusBarKind.cooldown, my_sprite_enemy).value == statusbars.getStatusBarAttachedTo(StatusBarKind.cooldown, my_sprite_enemy).max) {
        statusbar4.value = 0
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f . . . . f . . . . . . . . . . 
            f . . . . f . . . . f . . . . f 
            f . . . . f . . . f f . . . . f 
            f . . . . f . . . f . f . . . f 
            f f f f f f . . . f . f . . . f 
            f f f f f f . . f . . . f . . f 
            f . . . . f . . f f f f f . . . 
            f . . . . f . f . . . . . f . f 
            f . . . . f . f . . . . . f . . 
            f . . . . f . f . . . . . . f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, my_sprite_enemy, -50, 0)
    }
    if (battle_with_muti) {
        enemystatusbarCD1.value += 0.25
        statusbar4.value += 0.25
    }
    if (in_battle) {
        enemystatusbarCD1.value += 0.25
    }
})
forever(function () {
    if (music2 == 1) {
        music.playMelody(music.convertRTTTLToMelody("heroic bat:d=4,o=5,b=150:2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2p,2g.,2p.,c6,p,2a#,2p,2f#,2p,2d.,2p.,g,p,2f,2p,1p,2g.,2p.,c6,p,2a#,2p,2f#,2p,2d.,2p.,g,p,2f,2p,1p,2g.,2p.,c6,p,2a#,2p,2f#,2p,2c.6,2p.,d#,p,2c#6,8a#,16f#,16a#,8c#6,8e6,2c.,g,2f#,2d#,2c.,g,2f#,2d#,2c.,g,2f#,2d#,2c.,g,2f#,2d#,2e.,b,2a#,2g,2p,2c.6,2p.,d#,p,2c#6,8a#,16f#,16a#,8c#6,8e6,2e.,b,2a#,2g,2p,2g.,2p.,c6,p,2a#,2p,2f#,2e.,b,2a#,2g,2d#6,d6,g,2f#,p,8f#,8a,2c.,g,2f#,2d#,2d#6,d6,g,2f#,p,8f#,8a,8p,2d.,2p.,g,p,2f,2p,2d#6,d6,g,2f#,p,8f#,8a,8p,2g.,2p.,c6,p,2a#,2p,2f#,2d#6,d6,g,2f#,p,8f#,8a,8a#,8g,8f,g.,g,2e,p,c6,1p,8a#,8g,8f,g.,g,2e,p,c6,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,8a#,8g,8f,g.,g,2e,p,c6,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,2c.,g,2f#,2d#,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,b,16g#,8f#.,16g#,8f#.,f,2e,2p,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,8f#6,8a#6,8c#7,a#6,8f#6,g6,2f6,8d6,8b,8a,8b,8d6,8f#6,8a6,f#6,8d6,d#6,2c#6,8a#,8g,8f,8g,8f#6,8a#6,8c#7,a#6,8f#6,g6,2f6,8d6,8b,8a,8b,8d6,8f#6,8a6,f#6,8d6,d#6,2c#6,8a#,8g,8f,8g,8b,8g#,8f#,8g#,g#,c6,d6,8g6,2g#6,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2p,2c.7,2p.,g#6,p,g#.6,p.,f.6,p.,g6,p,2f#.6,2p.,d6,p,d.6,p.,b.,p.,c#6,p,2c.7,2p.,g#6,p,g#.6,p.,f.6,p.,g6,p,2c.7,2p.,g#6,p,g#.6,p.,f.6,p.,g6,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,8f,8f#,8g,8g#"), 500)
    }
    if (music2 == 2) {
        music.playMelody(music.convertRTTTLToMelody("day may en:d=4,o=5,b=150:g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,2g.4,2g.4,g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,2g.4,2g.4,2g.4,2c.4,2g4,g4,a4,2g.4,2g.4,8e4,8g4,e4,g4,16e4,8g.4,8a.4,16p,8g.4,8e.4,8g4,8d4,8e4,g4,a4,2g.4,2g.4,8g4,8e4,8g4,8a4,8g4,8a4,8g4,8e4,8g4,8a4,8g4,8e4,8g4,8g4,8g4,8g4,g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,g4,e4,8g4,8e4,8g4,8a4,8g4,8a4,8g4,8e4,8g4,8a4,8g4,8e4,8g4,8g4,8g4,8g4,c,d,c,a4,c,d,c,a4,c,d,2c.,2c.,8c,8a4,8c,8d,8c,8d,8c,8a4,8c,8d,8c,8a4,8c,8c,8c,8c,8c,8a4,8c,8d,8c,8d,8c,8a4,8c,8d,8c,8a4,8c,8c,8c,8c,g4,a4,g4,e4,g4,a4,g4,e4,8g4,8e4,8g4,8a4,8g4,8a4,8g4,8e4,8g4,8a4,8g4,8e4,8g4,8g4,8g4,8g4,g4,a4,g4,p,a4,g4,g#4,g4,f4,g4,a4,2g.4,2g.4,g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,g4,p,a4,g4,g#4,g4,f4,g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,2g.4,2g.4,g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,2g.4,2g.4,g4,a4,g4,e4,g4,a4,g4,e4,g4,a4,2g.4,2g.4,g4,a4,g4,e4,g4,a4,g4,e4"), 500)
    }
    if (music2 == 3) {
        music.playMelody(music.convertRTTTLToMelody("heroic bat:d=4,o=5,b=150:2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2p,2g.,2p.,c6,p,2a#,2p,2f#,2p,2d.,2p.,g,p,2f,2p,1p,2g.,2p.,c6,p,2a#,2p,2f#,2p,2d.,2p.,g,p,2f,2p,1p,2g.,2p.,c6,p,2a#,2p,2f#,2p,2c.6,2p.,d#,p,2c#6,8a#,16f#,16a#,8c#6,8e6,2c.,g,2f#,2d#,2c.,g,2f#,2d#,2c.,g,2f#,2d#,2c.,g,2f#,2d#,2e.,b,2a#,2g,2p,2c.6,2p.,d#,p,2c#6,8a#,16f#,16a#,8c#6,8e6,2e.,b,2a#,2g,2p,2g.,2p.,c6,p,2a#,2p,2f#,2e.,b,2a#,2g,2d#6,d6,g,2f#,p,8f#,8a,2c.,g,2f#,2d#,2d#6,d6,g,2f#,p,8f#,8a,8p,2d.,2p.,g,p,2f,2p,2d#6,d6,g,2f#,p,8f#,8a,8p,2g.,2p.,c6,p,2a#,2p,2f#,2d#6,d6,g,2f#,p,8f#,8a,8a#,8g,8f,g.,g,2e,p,c6,1p,8a#,8g,8f,g.,g,2e,p,c6,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,8a#,8g,8f,g.,g,2e,p,c6,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,2c.,g,2f#,2d#,8b,8d#6,8f#6,d#6,8b,c6,2a#,8g,8e,8d,8e,b,16g#,8f#.,16g#,8f#.,f,2e,2p,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,8f#6,8a#6,8c#7,a#6,8f#6,g6,2f6,8d6,8b,8a,8b,8d6,8f#6,8a6,f#6,8d6,d#6,2c#6,8a#,8g,8f,8g,8f#6,8a#6,8c#7,a#6,8f#6,g6,2f6,8d6,8b,8a,8b,8d6,8f#6,8a6,f#6,8d6,d#6,2c#6,8a#,8g,8f,8g,8b,8g#,8f#,8g#,g#,c6,d6,8g6,2g#6,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2c.,g,2f#,2d#,2e.,b,2a#,2g,2p,2c.7,2p.,g#6,p,g#.6,p.,f.6,p.,g6,p,2f#.6,2p.,d6,p,d.6,p.,b.,p.,c#6,p,2c.7,2p.,g#6,p,g#.6,p.,f.6,p.,g6,p,2c.7,2p.,g#6,p,g#.6,p.,f.6,p.,g6,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,2p,d6,16b,8a.,16b,8a.,g#,2g,2p,b,16g#,8f#.,16g#,8f#.,f,2e,8f,8f#,8g,8g#"), 500)
    }
})
forever(function () {
    if (Achievements.checkForAchievement("Oh No", p2_down == true)) {
    	
    }
})

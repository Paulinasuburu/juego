let Gesto = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    Gesto = randint(1, 3)
    if (Gesto == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (Gesto == 2) {
        basic.showIcon(IconNames.Square)
    } else if (Gesto == 3) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
    	
    }
})

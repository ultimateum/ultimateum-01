input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    soundExpression.slide.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.twinkle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    led.plot(2, 3)
})
basic.forever(function () {
	
})

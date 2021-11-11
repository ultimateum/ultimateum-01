let lightson = false
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.soaring.playUntilDone()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    soundExpression.slide.playUntilDone()
})
input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showLeds(`
            # . . . .
            . # . # .
            . # # # #
            . . # # #
            . . # # #
            `)
    } else {
        basic.showString("love")
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Fabulous)
    soundExpression.hello.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.twinkle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    led.plot(2, 3)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.StickFigure)
    soundExpression.twinkle.playUntilDone()
})
function _if (문자열: string, bool: boolean, list: any[]) {
	
}
basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(1000)
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})

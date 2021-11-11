def on_button_pressed_a():
    basic.show_icon(IconNames.STICK_FIGURE)
    soundExpression.slide.play_until_done()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    music.start_melody(music.built_in_melody(Melodies.WAWAWAWAA),
        MelodyOptions.ONCE)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    soundExpression.twinkle.play_until_done()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    music.start_melody(music.built_in_melody(Melodies.ODE), MelodyOptions.ONCE)
    led.plot(2, 3)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)

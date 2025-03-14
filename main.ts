function Stopp () {
    basic.showIcon(IconNames.No)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
input.onButtonPressed(Button.B, function () {
	
})
function Drive () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    pins.servoWritePin(AnalogPin.P1, 130)
    pins.servoWritePin(AnalogPin.P2, 50)
}
basic.showIcon(IconNames.Heart)
basic.pause(1000)

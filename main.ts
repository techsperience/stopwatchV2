let start = 0
let elapsed = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    serial.writeValue("start", start)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.idiv(elapsed, 1000))
})
input.onButtonPressed(Button.B, function () {
    while (elapsed >= 0) {
        elapsed = input.runningTime() - start
        basic.showNumber(time)
        if (time == 1) {
            basic.showString("DRINK!")
        } else {
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    basic.pause(1000)
    serial.writeValue("elapsed", elapsed)
    basic.pause(1000)
    serial.writeValue("time", time)
})
basic.forever(function () {
    time = Math.floor(Math.idiv(elapsed, 1000) / 60)
})

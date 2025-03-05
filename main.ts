huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        basic.showIcon(IconNames.Heart)
    }
})

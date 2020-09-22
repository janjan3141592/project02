let actualRow = 0
let lineString = ""
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
while (true) {
    led.plot(0, 0)
    for (let index = 0; index < 19; index++) {
        lineString = "" + lineString + convertToText(randint(0, 9))
    }
    LCD1IN8.DisString(
    10,
    actualRow * 10,
    lineString,
    0
    )
    lineString = convertToText(0)
    actualRow = actualRow + 1
    LCD1IN8.LCD_Display()
    led.unplot(0, 0)
    if (actualRow > 11) {
        actualRow = 0
        LCD1IN8.DrawRectangle(
        0,
        0,
        160,
        128,
        65535,
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1
        )
    }
}

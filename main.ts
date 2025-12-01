for (let index = 0; index <= 2; index++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.showNumber(3 - index)
}
basic.showString("GO")
music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)

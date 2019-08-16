declare interface PlaybackController {
    loop(): void
    play(): void
    reset(): void
    setLooping(looping: BoolValue): void
    setPlaying(playing: BoolValue): void
    stop(): void
}
///<reference path="AudioSource.d.ts" />

declare interface AudioModule {
    getPlaybackController(name: String): PlaybackController
    play(audioSource: AudioSource): void
    stopAll(audioSource: AudioSource): void
}
declare interface Speaker {
    volume: ScalarValue | ScalarSignal
    play(): void
    stopAll(speaker: Speaker): void
}
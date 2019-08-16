declare interface TimeDriver {
    isRunning(): BoolSignal
    onAfterIteration(): EventSource
    onCompleted(): EventSource
    reset(): void
    reverse(): void
    start(): void
    stop(): void
}
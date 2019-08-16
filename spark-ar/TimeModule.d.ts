declare class TimeModule {
    ms: ScalarSignal

    clearInterval(timer: Subscription): void
    clearTimeout(timer: Subscription): void
    setInterval(callback: () => void, delay: Number): Subscription
    setIntervalWithSnapshot(snapshot: Object, callback: () => void, delay: Number): Subscription
    setTimeout(callback: () => void, delay: Number): Subscription
    setTimeoutWithSnapshot(snapshot: Object, callback: () => void, delay: Number): Subscription
}
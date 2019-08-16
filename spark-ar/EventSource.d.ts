declare interface EventSource {
    select(property: string): EventSource
    skip(count: number): EventSource
    subscribe(callback: (event: any) => void): Subscription
    subscribeOnNext(callback: (event: any) => void): Subscription
    subscribeWithSnapshot(snapshot: Object, callback: (event: any, snapshot: any) => void): Subscription
    take(count: number): EventSource
}
declare interface StringSignal {
    lastValue: string
    concat(other: StringSignal): StringSignal
    delayBy(milliseconds: number): this
    eq(other: StringSignal): BoolSignal

    monitor(): EventSource
    monitor(config: { fireOnInitialValue: null | boolean }): EventSource
    ne(other: StringSignal): BoolSignal
    pin(): StringSignal
    pinLastValue(): ConstStringSignal
}
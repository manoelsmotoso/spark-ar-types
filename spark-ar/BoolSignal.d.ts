///<reference path="ConstBoolSignal.d.ts" />
declare interface BoolSignal {
    lastValue: boolean

    and(other: BoolSignal): BoolSignal
    delayBy(delay: DelayType): this
    eq(other: BoolSignal): BoolSignal
    ifThenElse(thenValue: EventSource, elseValue: EventSource): EventSource
    ifThenElse(thenValue: ScalarSignal, elseValue: ScalarSignal): ScalarSignal
    ifThenElse(thenValue: StringSignal, elseValue: StringSignal): StringSignal
    ifThenElse(thenValue: BoolSignal, elseValue: BoolSignal): BoolSignal
    monitor(): EventSource
    monitor(config: { fireOnInitialValue: null | boolean }): EventSource
    ne(other: BoolSignal): BoolSignal
    not(): BoolSignal
    onOff(): EventSource
    onOff(config: { fireOnInitialValue: null | boolean }): EventSource
    onOn(): EventSource
    onOn(config: { fireOnInitialValue: null | boolean }): EventSource
    or(other: BoolSignal): BoolSignal
    pin(): BoolSignal
    pinLastValue(): ConstBoolSignal
    xor(other: BoolSignal): BoolSignal
}
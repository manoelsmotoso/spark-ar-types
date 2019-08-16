///<reference path="VectorSignal.d.ts" />
///<reference path="PointSignal.d.ts" />
///<reference path="BoolSignal.d.ts" />
///<reference path="StringSignal.d.ts" />
///<reference path="ConstScalarSignal.d.ts" />

declare interface ScalarSignal {
    lastValue: number
    abs(): ScalarSignal

    add(other: ScalarSignal): ScalarSignal
    add(other: VectorSignal): PointSignal
    add(other: VectorSignal): VectorSignal
    add(other: PointSignal): PointSignal
    atan2(other: ScalarSignal): ScalarSignal
    ceil(): ScalarSignal
    cross(other: VectorSignal): VectorSignal
    delayBy(milliseconds: number): this
    distance(other: PointSignal): ScalarSignal
    div(other: ScalarSignal): ScalarSignal
    dot(other: VectorSignal): ScalarSignal
    eq(other: ScalarSignal): BoolSignal
    expSmooth(dampFactor: number): ScalarSignal
    floor(): ScalarSignal
    format(formatString: string): StringSignal
    fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
    ge(other: ScalarSignal): BoolSignal
    gt(other: ScalarSignal): BoolSignal
    interval(threshold: number): EventSource
    le(other: ScalarSignal): BoolSignal
    lt(other: ScalarSignal): BoolSignal
    magnitude(): ScalarSignal
    mod(other: ScalarSignal): ScalarSignal

    monitor(): EventSource
    monitor(config: { fireOnInitialValue: null | boolean }): EventSource

    mul(other: ScalarSignal): ScalarSignal
    mul(other: VectorSignal): VectorSignal
    mul(other: ScalarSignal): VectorSignal
    mul(other: ScalarSignal): VectorSignal
    multiTrigger(threshold: number): EventSource
    ne(other: ScalarSignal): BoolSignal

    neg(): ScalarSignal
    neg(): VectorSignal

    normalize(v: VectorSignal): VectorSignal
    normalize(): VectorSignal
    pin(): ScalarSignal
    pinLastValue(): ConstScalarSignal
    pow(exponent: ScalarSignal): ScalarSignal

    reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
    reflect(normal: VectorSignal): VectorSignal
    round(): ScalarSignal
    schmittTrigger(config: { low: number, high: number, initialValue: null | boolean }): BoolSignal
    sign(): ScalarSignal
    smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
    sqrt(): ScalarSignal

    sub(other: ScalarSignal): ScalarSignal
    sub(other: PointSignal): VectorSignal
    sub(other: VectorSignal): PointSignal
    sub(other: VectorSignal): VectorSignal

    sum(other: ScalarSignal): ScalarSignal
    sum(other: VectorSignal): PointSignal
    sum(other: VectorSignal): VectorSignal
    sum(other: PointSignal): PointSignal
    toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
    toString(): StringSignal
    trigger(threshold: number): EventSource
}
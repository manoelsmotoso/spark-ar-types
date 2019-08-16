declare interface ShaderSignal {
    abs(): ScalarSignal

    add(other: ScalarSignal): ScalarSignal
    add(other: VectorSignal): PointSignal
    add(other: VectorSignal): VectorSignal
    add(other: PointSignal): PointSignal
    atan2(other: ScalarSignal): ScalarSignal
    ceil(): ScalarSignal
    cross(other: VectorSignal): VectorSignal
    distance(other: PointSignal): ScalarSignal
    div(other: ScalarSignal): ScalarSignal
    dot(other: VectorSignal): ScalarSignal
    floor(): ScalarSignal
    fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
    magnitude(): ScalarSignal
    mod(other: ScalarSignal): ScalarSignal

    mul(other: ScalarSignal): ScalarSignal
    mul(other: VectorSignal): VectorSignal
    mul(other: ScalarSignal): VectorSignal
    mul(other: ScalarSignal): VectorSignal

    neg(): ScalarSignal
    neg(): VectorSignal

    normalize(v: VectorSignal): VectorSignal
    normalize(): VectorSignal
    pow(exponent: ScalarSignal): ScalarSignal

    reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
    reflect(normal: VectorSignal): VectorSignal
    round(): ScalarSignal
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
}
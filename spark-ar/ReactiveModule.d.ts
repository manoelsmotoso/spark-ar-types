declare interface ReactiveModule {
    abs(x: ScalarSignal): ScalarSignal
    acos(x: ScalarSignal): ScalarSignal

    add(x: ScalarSignal, y: ScalarSignal): ScalarSignal
    add(x: PointSignal, y: VectorSignal): PointSignal
    add(x: VectorSignal, y: PointSignal): PointSignal
    add(x: VectorSignal, y: VectorSignal): VectorSignal
    and(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
    andList(x: Array<BoolSignal>): BoolSignal
    antiderivative(signal: ScalarSignal, { min, max, initialValue, overflowBehaviour: AntiderivativeOverflowBehaviour }): ScalarSignal
    asin(x: ScalarSignal): ScalarSignal
    atan(x: ScalarSignal): ScalarSignal
    atan2(y: ScalarSignal, x: ScalarSignal): ScalarSignal
    ceil(x: ScalarSignal): ScalarSignal
    clamp(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
    concat(lhs: StringSignal, rhs: StringSignal): StringSignal
    cos(x: ScalarSignal): ScalarSignal
    cross(v1: VectorSignal, v2: VectorSignal): VectorSignal
    derivative(): ScalarSignal
    distance(v1: PointSignal, v2: PointSignal): ScalarSignal
    div(x: ScalarSignal, y: ScalarSignal): ScalarSignal
    dot(v1: VectorSignal, v2: VectorSignal): ScalarSignal

    eq(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
    eq(lhs: StringSignal, rhs: StringSignal): BoolSignal
    eq(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
    exp(x: ScalarSignal): ScalarSignal

    expSmooth(signal: ScalarSignal, dampFactor: number): ScalarSignal
    expSmooth(signal: PointSignal, dampFactor: number): PointSignal
    expSmooth(signal: VectorSignal, dampFactor: number): VectorSignal
    expSmooth(signal: TransformSignal, dampFactor: number): TransformSignal
    floor(x: ScalarSignal): ScalarSignal
    fromRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal
    ge(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
    gt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
    HSVA(h: ScalarSignal, s: ScalarSignal, v: ScalarSignal, a: ScalarSignal): HsvaSignal
    le(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
    log(x: ScalarSignal): ScalarSignal
    lt(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
    magnitude(v: VectorSignal): ScalarSignal
    max(x: ScalarSignal, y: ScalarSignal): ScalarSignal
    min(x: ScalarSignal, y: ScalarSignal): ScalarSignal

    mix(x: ScalarSignal, y: ScalarSignal, alpha: ScalarSignal): ScalarSignal
    mix(x: PointSignal, y: PointSignal, alpha: ScalarSignal): PointSignal
    mix(x: VectorSignal, y: VectorSignal, alpha: ScalarSignal): VectorSignal
    mix(x: TransformSignal, y: TransformSignal, alpha: ScalarSignal): TransformSignal
    mod(x: ScalarSignal, y: ScalarSignal): ScalarSignal

    monitorMany(signals: { [string]: ScalarSignal }): EventSource
    monitorMany(signals: { [string]: ScalarSignal }, config: { fireOnInitialValue: null | boolean }): EventSource

    mul(x: ScalarSignal, y: ScalarSignal): ScalarSignal
    mul(x: VectorSignal, y: ScalarSignal): VectorSignal
    mul(x: ScalarSignal, y: VectorSignal): VectorSignal
    mul(x: VectorSignal, y: VectorSignal): VectorSignal
    mulList(x: Array<number>): ScalarSignal

    ne(lhs: ScalarSignal, rhs: ScalarSignal): BoolSignal
    ne(lhs: StringSignal, rhs: StringSignal): BoolSignal
    ne(lhs: BoolSignal, rhs: BoolSignal): BoolSignal

    neg(x: ScalarSignal): ScalarSignal
    neg(x: VectorSignal): VectorSignal

    normalize(v: VectorSignal): VectorSignal
    normalize(): VectorSignal
    not(signal: BoolSignal): BoolSignal
    once(): EventSource
    or(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
    orList(x: Array<BoolSignal>): BoolSignal

    pack2(x: ScalarSignal, y: ScalarSignal): Point2DSignal
    pack2(x: ScalarSignal, y: Point2DSignal): PointSignal
    pack2(x: Point2DSignal, y: ScalarSignal): PointSignal
    pack2(x: ScalarSignal, y: PointSignal): Point4DSignal
    pack2(x: PointSignal, y: ScalarSignal): Point4DSignal
    pack2(x: Point2DSignal, y: Point2DSignal): Point4DSignal

    pack3(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal
    pack3(x: ScalarSignal, y: ScalarSignal, z: Point2DSignal): Point4DSignal
    pack3(x: ScalarSignal, y: Point2DSignal, z: ScalarSignal): Point4DSignal
    pack3(x: Point2DSignal, y: ScalarSignal, z: ScalarSignal): Point4DSignal
    pack4(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal, w: ScalarSignal): Point4DSignal
    point(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): PointSignal
    point2d(x: ScalarSignal, y: ScalarSignal): PixelPointSignal
    pow(base: ScalarSignal, exponent: ScalarSignal): ScalarSignal

    reflect(incident: VectorSignal, normal: VectorSignal): VectorSignal
    reflect(normal: VectorSignal): VectorSignal
    RGBA(r: ScalarSignal, g: ScalarSignal, b: ScalarSignal, a: ScalarSignal): RgbaSignal
    rotation(w: number, x: number, y: number, z: number): Rotation
    round(x: ScalarSignal): ScalarSignal
    scale(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): ScaleSignal
    schmittTrigger(signal: ScalarSignal, config: { low: number, high: number, initialValue: null | boolean }): BoolSignal
    sign(x: ScalarSignal): ScalarSignal
    sin(x: ScalarSignal): ScalarSignal
    smoothStep(x: ScalarSignal, edge0: ScalarSignal, edge1: ScalarSignal): ScalarSignal
    sqrt(x: ScalarSignal): ScalarSignal
    step(x: ScalarSignal, edge: ScalarSignal): ScalarSignal

    sub(x: ScalarSignal, y: ScalarSignal): ScalarSignal
    sub(x: PointSignal, y: VectorSignal): PointSignal
    sub(x: VectorSignal, y: VectorSignal): VectorSignal
    sub(x: PointSignal, y: PointSignal): VectorSignal

    sum(x: ScalarSignal, y: ScalarSignal): ScalarSignal
    sum(x: PointSignal, y: VectorSignal): PointSignal
    sum(x: VectorSignal, y: PointSignal): PointSignal
    sum(x: VectorSignal, y: VectorSignal): VectorSignal
    sumList(x: Array<number>): ScalarSignal
    tan(x: ScalarSignal): ScalarSignal
    toRange(x: ScalarSignal, min: ScalarSignal, max: ScalarSignal): ScalarSignal

    val(constant: number): ScalarSignal
    val(constant: string): StringSignal
    val(constant: boolean): BoolSignal
    vector(x: ScalarSignal, y: ScalarSignal, z: ScalarSignal): VectorSignal
    xor(lhs: BoolSignal, rhs: BoolSignal): BoolSignal
    xorList(x: Array<BoolSignal>): BoolSignal
}
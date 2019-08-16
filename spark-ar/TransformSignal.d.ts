declare interface TransformSignal {
    position: PointSignal
    rotationX: ScalarSignal
    rotationY: ScalarSignal
    rotationZ: ScalarSignal
    scale: ScaleSignal
    scaleX: ScalarSignal
    scaleY: ScalarSignal
    scaleZ: ScalarSignal
    x: ScalarSignal
    y: ScalarSignal
    z: ScalarSignal

    applyTo(transform: TransformSignal): TransformSignal
    applyTo(point: PointSignal): PointSignal
    applyTo(vector: VectorSignal): VectorSignal
    delayBy(delay: DelayType): this
    expSmooth(dampFactor: number): TransformSignal
    inverse(): TransformSignal
}
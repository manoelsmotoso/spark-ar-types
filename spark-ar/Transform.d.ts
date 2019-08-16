declare interface Transform {
    position: PointSignal
    rotation: Rotation
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
    toSignal(): TransformSignal
}
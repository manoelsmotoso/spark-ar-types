declare interface Face {
    cameraTransform: TransformSignal
    chin: Chin
    forehead: Forehead
    id: StringSignal
    isTracked: StringSignal
    leftCheek: Cheek
    leftEye: Eye
    leftEyebrow: Eyebrow
    mouth: Mouth
    nose: Nose
    rightCheek: Cheek
    rightEye: Eye
    rightEyebrow: Eyebrow
    
    point(u: ScalarSignal, v: ScalarSignal): PointSignal
}
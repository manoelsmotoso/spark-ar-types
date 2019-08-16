declare interface FaceTracking2DModule {
        count: ScalarSignal
    face(index: number): Face2D
}
declare interface SceneModule {
    root: SceneObjectBase
    unprojectToFocalPlane(location: PixelPointSignal): PointSignal
    unprojectWithDepth(location: PixelPointSignal, depth: number): PointSignal
}

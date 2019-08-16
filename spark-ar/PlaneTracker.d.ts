declare interface PlaneTracker {
    confidence: StringSignal
    trackingMode: TrackingMode
    hitTest(screenLocation: Point2D): Point3D

    trackPoint(screenLocation: Point2D): void
    trackPoint(screenX: number, screenY: number): void
    trackPoint(screenLocation: PixelPointSignal, gestureState: StringSignal): void
}
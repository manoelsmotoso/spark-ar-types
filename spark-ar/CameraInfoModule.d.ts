declare interface CameraInfoModule {
    captureDevicePosition: CameraPosition
    effectSafeAreaInsets: InsetsSignal
    isCapturingPhoto: BoolSignal
    isRecordingVideo: BoolSignal
    previewSize: PixelSizeSignal
}
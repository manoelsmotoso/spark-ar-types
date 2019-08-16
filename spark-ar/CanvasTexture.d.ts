declare interface CanvasTexture {
    addPath(startProgress: ScalarSignal, endProgress: ScalarSignal, xSampler: ScalarSampler, ySampler: ScalarSampler, widthSampler: ScalarSampler, colorSampler: ColorSampler): void
    clearPaths(): void
}
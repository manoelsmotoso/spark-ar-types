declare interface PatchesModule {
    getBooleanValue(name: String): BoolSignal
    getColorValue(name: String): ColorSignal
    getPoint2DValue(name: String): PixelPointSignal
    getPointValue(name: String): PointSignal
    getPulseValue(name: String): EventSource
    getScalarValue(name: String): ScalarSignal
    getStringValue(name: String): StringSignal
    getVectorValue(name: String): VectorSignal
    setBooleanValue(name: String, signal: BoolSignal): void
    setColorValue(name: String, signal: ColorSignal): void
    setPoint2DValue(name: String, signal: PixelPointSignal): void
    setPointValue(name: String, signal: PointSignal): void
    setPulseValue(name: String, signal: EventSource): void
    setScalarValue(name: String, signal: ScalarSignal): void
    setStringValue(name: String, signal: StringSignal): void
    setVectorValue(name: String, signal: VectorSignal): void
}
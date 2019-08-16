declare interface BlockSceneRoot {
    getBooleanInput(name: String): BoolSignal
    getColorOutput(name: String): ColorSignal
    getPixelPointOutput(name: String): PixelPointSignal
    getPointOutput(name: String): PointSignal
    getScalarOutput(name: String): ScalarSignal
    getStringOutput(name: String): StringSignal
    getVectorOutput(name: String): VectorSignal
    setBooleanInput(name: String, signal: BoolSignal): void
    setColorInput(name: String, signal: ColorSignal): void
    setPixelPointInput(name: String, signal: PixelPointSignal): void
    setPointInput(name: String, signal: PointSignal): void
    setScalarInput(name: String, signal: ScalarSignal): void
    setStringInput(name: String, signal: StringSignal): void
    setVectorInput(name: String, signal: VectorSignal): void
}
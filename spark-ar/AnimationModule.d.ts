declare interface AnimationModule {
    samplers: SamplerFactory

    animate(driver: Driver, sampler: ScalarSampler): ScalarSignal
    animate(driver: Driver, sampler: ArrayOfScalarSamplers): ArrayOfScalarSignals
    animate(driver: Driver, sampler: RotationSampler): RotationSignal
    animate(driver: Driver, sampler: ColorSampler): RgbaSignal
    timeDriver(timeDriverParams: { durationMilliseconds: number, loopCount: null | number, mirror: null | boolean }): TimeDriver
    valueDriver(value: ScalarSignal, min: number, max: number): ValueDriver
}
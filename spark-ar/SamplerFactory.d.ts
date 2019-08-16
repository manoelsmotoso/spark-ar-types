declare interface SamplerFactory {

    bezier(p0: number, p1: number, p2: number, p3: number): ScalarSampler
    bezier(p0: number[], p1: number[], p2: number[], p3: number[]): ArrayOfScalarSamplers

    constant(value: number): ScalarSampler
    constant(value: number[]): ArrayOfScalarSamplers

    easeInBack(beginValue: number, endValue: number): ScalarSampler
    easeInBack(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInBounce(beginValue: number, endValue: number): ScalarSampler
    easeInBounce(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInCirc(beginValue: number, endValue: number): ScalarSampler
    easeInCirc(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInCubic(beginValue: number, endValue: number): ScalarSampler
    easeInCubic(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInElastic(beginValue: number, endValue: number): ScalarSampler
    easeInElastic(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInExpo(beginValue: number, endValue: number): ScalarSampler
    easeInExpo(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutBack(beginValue: number, endValue: number): ScalarSampler
    easeInOutBack(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutBounce(beginValue: number, endValue: number): ScalarSampler
    easeInOutBounce(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutCirc(beginValue: number, endValue: number): ScalarSampler
    easeInOutCirc(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutCubic(beginValue: number, endValue: number): ScalarSampler
    easeInOutCubic(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutElastic(beginValue: number, endValue: number): ScalarSampler
    easeInOutElastic(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutExpo(beginValue: number, endValue: number): ScalarSampler
    easeInOutExpo(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutQuad(beginValue: number, endValue: number): ScalarSampler
    easeInOutQuad(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutQuart(beginValue: number, endValue: number): ScalarSampler
    easeInOutQuart(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutQuint(beginValue: number, endValue: number): ScalarSampler
    easeInOutQuint(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInOutSine(beginValue: number, endValue: number): ScalarSampler
    easeInOutSine(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInQuad(beginValue: number, endValue: number): ScalarSampler
    easeInQuad(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInQuart(beginValue: number, endValue: number): ScalarSampler
    easeInQuart(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInQuint(beginValue: number, endValue: number): ScalarSampler
    easeInQuint(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeInSine(beginValue: number, endValue: number): ScalarSampler
    easeInSine(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutBack(beginValue: number, endValue: number): ScalarSampler
    easeOutBack(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutBounce(beginValue: number, endValue: number): ScalarSampler
    easeOutBounce(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutCirc(beginValue: number, endValue: number): ScalarSampler
    easeOutCirc(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutCubic(beginValue: number, endValue: number): ScalarSampler
    easeOutCubic(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutElastic(beginValue: number, endValue: number): ScalarSampler
    easeOutElastic(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutExpo(beginValue: number, endValue: number): ScalarSampler
    easeOutExpo(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutQuad(beginValue: number, endValue: number): ScalarSampler
    easeOutQuad(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutQuart(beginValue: number, endValue: number): ScalarSampler
    easeOutQuart(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutQuint(beginValue: number, endValue: number): ScalarSampler
    easeOutQuint(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    easeOutSine(beginValue: number, endValue: number): ScalarSampler
    easeOutSine(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    frame(numberOfFrames: number): ScalarSampler
    frame(numberOfFrames: number, startFrame: number): ScalarSampler
    frame(numberOfFrames: number[]): ArrayOfScalarSamplers
    frame(numberOfFrames: number[], startFrame: number[]): ArrayOfScalarSamplers
    HSVA(channelSamplers: ArrayOfScalarSamplers): ColorSampler

    linear(beginValue: number, endValue: number): ScalarSampler
    linear(beginValue: number[], endValue: number[]): ArrayOfScalarSamplers

    polybezier(config: { keyframes: number[], knots: null | number[], tangents: null | number[] }): ScalarSampler
    polybezier(config: { keyframes: number[][], knots: null | number[], tangents: null | number[][] }): ArrayOfScalarSamplers

    polyline(config: { keyframes: number[], knots: null | number[] }): ScalarSampler
    polyline(config: { keyframes: number[][], knots: null | number[] }): ArrayOfScalarSamplers
    polyline(config: { keyframes: Rotation[], knots: null | number[] }): RotationSampler
    RGBA(channelSamplers: ArrayOfScalarSamplers): ColorSampler

    sequence(config: { samplers: ScalarSampler[], knots: null | number[] }): ScalarSampler
    sequence(config: { samplers: ArrayOfScalarSamplers[], knots: null | number[] }): ArrayOfScalarSamplers
}
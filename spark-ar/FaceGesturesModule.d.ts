declare interface FaceGesturesModule {
    hasEyebrowsFrowned(face: Face): BoolSignal
    hasEyebrowsFrowned(face: Face, config: { observationPeriod: number | null, threshold: number | null, backlash: number | null }): BoolSignal
    hasEyebrowsRaised(face: Face): BoolSignal
    hasEyebrowsRaised(face: Face, config: { observationPeriod: number | null, threshold: number | null, backlash: number | null }): BoolSignal
    hasLeftEyeClosed(face: Face): BoolSignal
    hasLeftEyeClosed(face: Face, config: { threshold: number | null, backlash: number | null }): BoolSignal
    hasMouthOpen(face: Face): BoolSignal
    hasMouthOpen(face: Face, config: { threshold: number | null, backlash: number | null }): BoolSignal
    hasRightEyeClosed(face: Face): BoolSignal
    hasRightEyeClosed(face: Face, config: { threshold: number | null, backlash: number | null }): BoolSignal
    isHappy(face: Face): BoolSignal
    isKissing(face: Face): BoolSignal
    isLeanedBack(face: Face): BoolSignal
    isLeanedBack(face: Face, config: { angle: number | null, backlash: number | null }): BoolSignal
    isLeanedForward(face: Face): BoolSignal
    isLeanedForward(face: Face, config: { angle: number | null, backlash: number | null }): BoolSignal
    isLeanedLeft(face: Face): BoolSignal
    isLeanedLeft(face: Face, config: { angle: number | null, backlash: number | null }): BoolSignal
    isLeanedRight(face: Face): BoolSignal
    isLeanedRight(face: Face, config: { angle: number | null, backlash: number | null }): BoolSignal
    isSmiling(face: Face): BoolSignal
    isSmiling(face: Face, config: { lipMix: number | null, threshold: number | null, backlash: number | null }): BoolSignal
    isSurprised(face: Face): BoolSignal
    isTurnedLeft(face: Face): BoolSignal
    isTurnedLeft(face: Face, config: { angle: number | null, backlash: number | null }): BoolSignal
    isTurnedRight(face: Face): BoolSignal
    isTurnedRight(face: Face, config: { angle: number | null, backlash: number | null }): BoolSignal
    onBlink(face: Face): EventSource
    onBlink(face: Face, config: { threshold: number | null, backlash: number | null }): EventSource
    onNod(face: Face): EventSource
    onNod(face: Face, config: { angle: number | null, period: number | null, swings: number | null }): EventSource
    onShake(face: Face): EventSource
    onShake(face: Face, config: { angle: number | null, period: number | null, swings: number | null }): EventSource
}

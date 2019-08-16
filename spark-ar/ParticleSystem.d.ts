declare interface ParticleSystem {
    acceleration: VectorSignal
    angularVelocity: PointSignal
    angularVelocityDelta: PointSignal
    birthrate: ScalarSignal
    birthrateDelta: ScalarSignal
    colorModulationHSVA: HsvaSignal
    colorModulationHSVADelta: HsvaSignal
    hsvaColorModulationModifier: ColorSampler
    initialRotation: ScalarSignal
    initialRotationDelta: ScalarSignal
    initialVelocityAngle: ScalarSignal
    initialVelocityAngleDelta: ScalarSignal
    initialVelocityMagnitude: ScalarSignal
    initialVelocityMagnitudePercentageDelta: ScalarSignal
    innerRadius: ScalarValue | ScalarSignal
    lifetimeSeconds: ScalarSignal
    lifetimeSecondsPercentageDelta: ScalarValue | ScalarSignal
    linearDamping: ScalarSignal
    linearDampingPercentageDelta: ScalarSignal
    material: MaterialBase
    opticalFlowSensitivity: ScalarSignal
    outerRadius: ScalarValue | ScalarSignal
    particleRotation: PointSignal
    particleRotationDelta: PointSignal
    position: PointSignal
    positionDelta: VectorSignal
    positionModifier: ArrayOfScalarSamplers
    rotationalDamping: ScalarSignal
    rotationalDampingPercentageDelta: ScalarSignal
    rotationalVelocity: ScalarSignal
    rotationalVelocityDelta: ScalarSignal
    scale: ScalarSignal
    scaleDelta: ScalarSignal
    sizeModifier: ScalarSampler
    sprayAngle: PointSignal
    sprayAngleDelta: PointSignal
    types: ParticleTypeDescriptions
    velocityModifier: ArrayOfScalarSamplers
    worldSpace: BoolSignal
}
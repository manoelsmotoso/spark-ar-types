declare interface ScaleSignal {
    x: ScalarSignal
    y: ScalarSignal
    z: ScalarSignal
    div(other: ScaleSignal): ScaleSignal
    mul(other: ScaleSignal): ScaleSignal
}
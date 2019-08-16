declare interface TextExtrusion {
    backMaterial: MaterialBase
    depth: ScalarSignal
    faceMaterial: MaterialBase
    font: FontId
    frontMaterial: MaterialBase
    letterSpacing: ScalarSignal
    lineSpacing: ScalarSignal
    sideMaterial: MaterialBase
    text: StringSignal
}
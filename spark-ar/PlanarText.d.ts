declare interface PlanarText {
    alignment: TextAlignmentWrapper
    font: FontId
    fontSize: number
    leading: null | number
    material: MaterialBase
    maxLines: null | number
    scaleToFit: boolean
    text: StringSignal
    tracking: number
}
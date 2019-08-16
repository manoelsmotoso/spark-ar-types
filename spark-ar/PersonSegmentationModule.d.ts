declare interface PersonSegmentationModule {
    foregroundPercent: ScalarSignal
    hasForeground: BoolSignal
    isEnabled: BoolSignal
}
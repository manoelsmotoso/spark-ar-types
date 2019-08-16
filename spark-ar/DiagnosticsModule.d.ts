declare interface DiagnosticsModule {
    getModuleNames(): Array<string>
    getTypeDescriptions(): Array<string>
    log(content: Object): void

    watch(tag: String, signal: BoolSignal): void
    watch(tag: String, signal: ScalarSignal): void
    watch(tag: String, signal: StringSignal): void
}
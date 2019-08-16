declare interface InstructionModule {
    automaticInstructionsEnabled: Boolean
    
    bind(enabled: BooleanSignal, token: StringSignal): void
}
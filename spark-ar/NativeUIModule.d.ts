declare interface NativeUIModule {
    enterTextEditMode(nodeName: String): void
    getText(nodeName: String): StringSignal
    setText(nodeName: String, text: String): void
}
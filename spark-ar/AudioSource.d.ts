declare interface AudioSource {
    boundingBoxVisible: BoolSignal
    cameraVisibility: CameraVisibility
    hidden: BoolSignal
    name: String
    outputVisibility: OutputVisibility
    transform: Transform | TransformSignal

    play(): void
    stopAll(audioSource: AudioSource): void
    child(name: string): SceneObjectBase
    find(name: string): SceneObjectBase
}
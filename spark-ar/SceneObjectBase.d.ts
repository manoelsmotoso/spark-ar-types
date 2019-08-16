declare interface SceneObjectBase {
    boundingBoxVisible: BoolSignal
    cameraVisibility: CameraVisibility
    hidden: BoolSignal
    identifier: String
    materialIdentifier: String
    name: String
    outputVisibility: OutputVisibility
    parentWorldTransform: TransformSignal
    transform: Transform | TransformSignal
    worldTransform: WorldTransform | TransformSignal
    
    child(name: string): SceneObjectBase
    find(name: string): SceneObjectBase
}
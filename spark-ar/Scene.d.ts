declare interface Scene {
    child(name: string): SceneObjectBase
    find(name: string): SceneObjectBase
}
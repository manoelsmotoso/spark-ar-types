declare interface TouchGesturesModule {

    onLongPress(): EventSource
    onLongPress(object: SceneObjectBase): EventSource
    onLongPress(options: { object?: SceneObjectBase, normalizeCoordinates?: boolean }): EventSource
    onPan(): EventSource
    onPan(object: SceneObjectBase): EventSource
    onPan(options: { object?: SceneObjectBase, normalizeCoordinates?: boolean }): EventSource
    inch(): EventSource
    onPinch(): EventSource
    onPinch(object: SceneObjectBase): EventSource
    onPinch(options: { object?: SceneObjectBase, normalizeCoordinates?: boolean }): EventSource
    onRotate(): EventSource
    onRotate(object: SceneObjectBase): EventSource
    onRotate(options: { object: SceneObjectBase, normalizeCoordinates: boolean }): EventSource
    onTap(): EventSource
    onTap(object: SceneObjectBase): EventSource
    onTap(options: { object: SceneObjectBase, normalizeCoordinates: boolean }): EventSource
}
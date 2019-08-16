declare interface BlendShapesMesh {
    count: number
    getAtIndex(index: number): BlendShape
    getByName(name: String): BlendShape
}
declare interface Mesh {
    blendShapes: BlendShapesMesh
    material: MaterialBase
    materialIdentifier: String
    prefabName: String
    getBlendShapes(): Promise<BlendShape[]>
}
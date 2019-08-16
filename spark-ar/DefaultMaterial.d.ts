type TextureTransformSignal = {}
declare interface DefaultMaterial {
    emissive: TextureBase
    emissiveTextureTransform: TextureTransform | TextureTransformSignal
    multiply: TextureBase
    multiplyTextureTransform: TextureTransform | TextureTransformSignal
    reflective: TextureBase
}
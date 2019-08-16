declare interface MetallicRoughnessPbrMaterial {
    baseColor: TextureBase
    baseColorFactor: ColorSignal
    baseColorTextureTransform: TextureTransform | TextureTransformSignal
    emissive: TextureBase
    emissiveTextureTransform: TextureTransform | TextureTransformSignal
    metallicFactor: ScalarSignal
    metallicRoughness: TextureBase
    metallicRoughnessTextureTransform: TextureTransform | TextureTransformSignal
    roughnessFactor: ScalarSignal
}
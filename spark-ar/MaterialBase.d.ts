declare interface MaterialBase {
    alphaCutoff: ScalarSignal
    diffuse: TextureBase
    transform: TextureTransform | TextureTransformSignal
    doubleSided: BoolSignal
    identifier: String
    name: String
    opacity: ScalarSignal
    setTexture(signal: ShaderSignal, config: { textureSlotName: DefaultMaterialTextures | BlendedMaterialTextures | FacePaintMaterialTextures | PhysicallyBasedMaterialTextures }): void
}
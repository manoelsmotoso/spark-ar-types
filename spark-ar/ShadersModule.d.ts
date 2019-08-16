declare class ShadersModule {
    blend(src: PointSignal, dest: PointSignal, {"mode": BlendMode}): PointSignal
    blend(src: PointSignal, dest: Point4DSignal, {"mode": BlendMode}): Point4DSignal
    blend(src: Point4DSignal, dest: PointSignal, {"mode": BlendMode}): Point4DSignal
    blend(src: Point4DSignal, dest: Point4DSignal, {"mode": BlendMode}): Point4DSignal
    colorSpaceConvert(color: PointSignal, {inColorSpace, outColorSpace}): PointSignal
    colorSpaceConvert(color: Point4DSignal, {inColorSpace, outColorSpace}): Point4DSignal
    composition(f: any, g: any): any
    composition(f: any, g: any): any
    derivative(val: any, {"derivativeType": DerivativeType}): any
    fallback(main: any, fallback: any): any
    fallback(main: Function, fallback: Function): Function
    fragmentStage(val: any): any
    fragmentStage(val: Function): Function
    functionScalar(): ScalarSignal|ScalarSignal
    functionVec2(): Point2DSignal|Point2DSignal
    functionVec3(): PointSignal|PointSignal
    functionVec4(): Point4DSignal|Point4DSignal
    functionScalar(): ScalarSignal|ScalarSignal
    functionVec2(): Point2DSignal|Point2DSignal
    functionVec3(): PointSignal|PointSignal
    functionVec4(): Point4DSignal|Point4DSignal
    functionScalar(): ScalarSignal|ScalarSignal
    functionVec2(): Point2DSignal|Point2DSignal
    functionVec3(): PointSignal|PointSignal
    functionVec4(): Point4DSignal|Point4DSignal
    functionScalar(): ScalarSignal|ScalarSignal
    functionVec2(): Point2DSignal|Point2DSignal
    functionVec3(): PointSignal|PointSignal
    functionVec4(): Point4DSignal|Point4DSignal
    gradient({"type": GradientType}): 'Texture2d_1ch'
    renderTargetSize(): Point2DSignal
    sdfAnnular(sdf: 'TextureSdf', width: ScalarSignal): 'TextureSdf'
    sdfCircle(center: Point2DSignal, radius: ScalarSignal): 'TextureSdf'
    sdfComplement(sdf: 'TextureSdf'): 'TextureSdf'
    sdfDifference(sdf1: 'TextureSdf', sdf2: 'TextureSdf'): 'TextureSdf'
    sdfEllipse(center: Point2DSignal, halfSize: Point2DSignal): 'TextureSdf'
    sdfFlip(sdf: 'TextureSdf', offset: Point2DSignal, normal: Point2DSignal): 'TextureSdf'
    sdfHalfPlane(offset: Point2DSignal, normal: Point2DSignal): 'TextureSdf'
    sdfIntersection(sdf1: 'TextureSdf', sdf2: 'TextureSdf'): 'TextureSdf'
    sdfLine(offset: Point2DSignal, normal: Point2DSignal, halfWidth: ScalarSignal): 'TextureSdf'
    sdfMix(sdf1: 'TextureSdf', sdf2: 'TextureSdf', alpha: ScalarSignal): 'TextureSdf'
    sdfPolygon(center: Point2DSignal, radius: ScalarSignal, numSides: ScalarSignal, {"sdfVariant": SdfVariant}): 'TextureSdf'
    sdfRectangle(center: Point2DSignal, halfSize: Point2DSignal, {"sdfVariant": SdfVariant}): 'TextureSdf'
    sdfRepeat(sdf: 'TextureSdf', pivot: Point2DSignal, size: Point2DSignal): 'TextureSdf'
    sdfRotation(sdf: 'TextureSdf', pivot: Point2DSignal, angle: ScalarSignal): 'TextureSdf'
    sdfRotationalRepeat(sdf: 'TextureSdf', pivot: Point2DSignal, radius: ScalarSignal, numTimes: ScalarSignal): 'TextureSdf'
    sdfRound(sdf: 'TextureSdf', radius: ScalarSignal): 'TextureSdf'
    sdfScale(sdf: 'TextureSdf', pivot: Point2DSignal, size: Point2DSignal): 'TextureSdf'
    sdfShear(sdf: 'TextureSdf', pivot: Point2DSignal, shear: Point2DSignal): 'TextureSdf'
    sdfSmoothDifference(sdf1: 'TextureSdf', sdf2: 'TextureSdf', K: ScalarSignal): 'TextureSdf'
    sdfSmoothIntersection(sdf1: 'TextureSdf', sdf2: 'TextureSdf', K: ScalarSignal): 'TextureSdf'
    sdfSmoothUnion(sdf1: 'TextureSdf', sdf2: 'TextureSdf', K: ScalarSignal): 'TextureSdf'
    sdfStar(center: Point2DSignal, radius1: ScalarSignal, radius2: ScalarSignal, numSides: ScalarSignal): 'TextureSdf'
    sdfTranslation(sdf: 'TextureSdf', offset: Point2DSignal): 'TextureSdf'
    sdfTwist(sdf: 'TextureSdf', pivot: Point2DSignal, twist: ScalarSignal): 'TextureSdf'
    sdfUnion(sdf1: 'TextureSdf', sdf2: 'TextureSdf'): 'TextureSdf'
    textureSampler(texture: 'Texture2d_1ch', uv: Point2DSignal): ScalarSignal
    textureSampler(texture: 'Texture2d_2ch', uv: Point2DSignal): Point2DSignal
    textureSampler(texture: 'Texture2d_3ch', uv: Point2DSignal): PointSignal
    textureSampler(texture: 'Texture2d_4ch', uv: Point2DSignal): Point4DSignal
    textureTransform(texture: 'Texture2d_1ch', transform: 'Matrix3'): 'Texture2d_1ch'
    textureTransform(texture: 'Texture2d_2ch', transform: 'Matrix3'): 'Texture2d_2ch'
    textureTransform(texture: 'Texture2d_3ch', transform: 'Matrix3'): 'Texture2d_3ch'
    textureTransform(texture: 'Texture2d_4ch', transform: 'Matrix3'): 'Texture2d_4ch'
    vertexAttribute({"variableName": VertexAttribute}): 'GenericVector'
    vertexTransform({"variableName": BuiltinUniform}): 'GenericMatrix'
}
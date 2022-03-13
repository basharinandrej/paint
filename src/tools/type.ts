export type CanvasCtxType = CanvasRenderingContext2D | null
export type CanvasType = HTMLCanvasElement | null

export interface ITool {
    canvas: CanvasType,
    ctx: CanvasCtxType,
    isMouseDown: boolean,
    onMouseDownHandler: (e: MouseEvent) => void
    onMouseMoveHandler: (e: MouseEvent) => void
    onMouseUpHandler: (e: MouseEvent) => void
}
import {CanvasCtxType, CanvasType} from './type'
// будет метод destoryListens

class Tool {
    canvas: CanvasType = null
    ctx: CanvasCtxType = null

    constructor(canvas: CanvasType) {
        this.canvas = canvas
        if(canvas) {
            this.ctx = canvas.getContext('2d')
        }
    }
}

export default Tool
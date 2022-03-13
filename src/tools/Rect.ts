import Tool from './Tool'
import { CanvasType } from './type'

class Rect extends Tool {
    initRectCoorX = 0
    initRectCoorY = 0
    isMouseDown = false

    constructor(canvas:CanvasType) {
        super(canvas)
        this.setListens()
    }
    setListens() {
        if(this.canvas) {
            this.canvas.onmousedown = this.onMouseDownHandler
            this.canvas.onmousemove = this.onMouseMoveHandler
            this.canvas.onmouseup = this.onMouseUpHandler
        }
    }

    onMouseDownHandler = (e: MouseEvent) => {
        const {pageX, pageY} = e
        const target = e.target as HTMLCanvasElement
        this.isMouseDown = true
        this.initRectCoorX = pageX
        this.initRectCoorY = pageY

        this.ctx?.beginPath()
        this.ctx?.moveTo(pageX - target?.offsetLeft, pageY - target?.offsetTop)
    }
    onMouseMoveHandler = (e: MouseEvent) => {
        const {pageX, pageY} = e
        const target = e.target as HTMLCanvasElement

        if (this.isMouseDown) {
            let startX = this.initRectCoorX - target?.offsetLeft
            let startY = this.initRectCoorY - target?.offsetTop
            let width = pageX - this.initRectCoorX
            let height = pageX - this.initRectCoorX

            this.ctx?.fillRect(
                startX, startY, 
                width, height
            );

            this.ctx?.stroke();
        }
    }
    onMouseUpHandler = () => {
        this.isMouseDown = false
    }
}

export default Rect
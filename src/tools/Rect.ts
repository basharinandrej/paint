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

    onMouseDownHandler = (e: any) => {
        const {pageX, pageY} = e
        this.isMouseDown = true
        this.ctx?.beginPath()
        this.ctx?.moveTo(pageX - e.target.offsetLeft, pageY - e.target.offsetTop)

        this.initRectCoorX = pageX
        this.initRectCoorY = pageY
        
    }
    onMouseMoveHandler = (e: any) => {
        const {pageX, pageY} = e

        if (this.isMouseDown) {
            let startX = this.initRectCoorX - e.target.offsetLeft
            let startY = this.initRectCoorY - e.target.offsetTop
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
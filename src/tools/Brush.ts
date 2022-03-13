import Tool from './Tool'
import {CanvasType} from './type'

class Brush extends Tool {
    isMouseDown: boolean = false

    constructor(canvas: CanvasType) {
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
    }
    onMouseMoveHandler = (e: any) => {
        const {pageX, pageY} = e

        if(this.isMouseDown) {
            this.ctx?.lineTo(pageX - e.target.offsetLeft, pageY - e.target.offsetTop)
            this.ctx?.stroke()
        }
    }
    onMouseUpHandler = () => {
        this.isMouseDown = false
    }
}

export default Brush
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

    onMouseDownHandler = (e: MouseEvent) => {
        const {pageX, pageY} = e
        const target = e.target as HTMLCanvasElement
        this.isMouseDown = true
        
        this.ctx?.beginPath()
        this.ctx?.moveTo(pageX - target?.offsetLeft, pageY - target?.offsetTop)
    }
    onMouseMoveHandler = (e: MouseEvent) => {
        const {pageX, pageY} = e
        const target = e.target as HTMLCanvasElement

        if(this.isMouseDown) {
            this.ctx?.lineTo(pageX - target?.offsetLeft, pageY - target?.offsetTop)
            this.ctx?.stroke()
        }
    }
    onMouseUpHandler = () => {
        this.isMouseDown = false
    }
}

export default Brush
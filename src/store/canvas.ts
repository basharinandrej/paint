import { makeAutoObservable } from "mobx"
import Tools from '../store/tools'

class CanvasStore {
    context:CanvasRenderingContext2D | null = null;
    canvas: HTMLCanvasElement | null = null;
    isMouseDown: boolean = false

    //coords 
    initRectCoorX = 0
    initRectCoorY = 0

    setListens() {
        if(this.canvas) {
            this.canvas.onmousedown = this.onMouseDownHandler
            this.canvas.onmousemove = this.onMouseMoveHandler
            this.canvas.onmouseup = this.onMouseUpHandler

        }
    }

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }
    setContext() {
        if(this.canvas) {
            this.context = this.canvas.getContext('2d')
        }
    }


    //Listens
    onMouseDownHandler = (e: any) => {
        const {pageX, pageY} = e
        this.isMouseDown = true
        this.context?.beginPath()
        this.context?.moveTo(pageX - e.target.offsetLeft, pageY - e.target.offsetTop)

        if(Tools.name === 'rect') {
            this.initRectCoorX = pageX
            this.initRectCoorY = pageY
         }
    }
    onMouseMoveHandler = (e: any) => {
        const {pageX, pageY} = e

        if(this.isMouseDown && Tools.name === 'pen') {
            this.context?.lineTo(pageX - e.target.offsetLeft, pageY - e.target.offsetTop)
            this.context?.stroke()
        }else if (this.isMouseDown && Tools.name === 'rect') {
            let startX = this.initRectCoorX - e.target.offsetLeft
            let startY = this.initRectCoorY - e.target.offsetTop
            let width = pageX - this.initRectCoorX
            let height = pageX - this.initRectCoorX

            this.context?.fillRect(
                startX, startY, 
                width, height
            );

            this.context?.stroke();
        }
    }
    onMouseUpHandler = () => {
        this.isMouseDown = false

    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new CanvasStore()
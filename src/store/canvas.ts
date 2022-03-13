import { makeAutoObservable } from "mobx"

class CanvasStore {
    canvas: HTMLCanvasElement | null = null;

    setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new CanvasStore()
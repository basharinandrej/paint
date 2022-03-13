import { makeAutoObservable } from "mobx"

class Tools {
    name = 'pen'

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: string): void{
        this.name = tool
    }
}
export default new Tools()
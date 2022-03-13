import { makeAutoObservable } from "mobx"

class ToolsStore {
    name = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: any): void{
        this.name = tool
    }
}
export default new ToolsStore()
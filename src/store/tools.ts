import { makeAutoObservable } from "mobx"
import Tool from '../tools/Tool'
import {ITool} from '../tools/type'

class ToolsStore {
    tool: ITool | null = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: ITool | null): void{
        this.tool = tool
    }
}
export default new ToolsStore()
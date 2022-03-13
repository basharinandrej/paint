import { observer } from "mobx-react"
import {ReactElement} from 'react'
import '../../style/tools.scss'
import Tools from '../../store/tools'
import Rect from "../../tools/Rect"
import Brush from "../../tools/Brush"
import CanvasStore from '../../store/canvas'

const ToolsBar = observer((): ReactElement => {
    function setBrush() {
        Tools.setTool(new Brush(CanvasStore.canvas))
    }
    function setRect() {
        Tools.setTool(new Rect(CanvasStore.canvas))
    }
    return (
        <div className={'tools'}>
            <button className={'tools-pen'} onClick={setBrush} >pen</button>
            <button className={'tools-rect'} onClick={setRect}>rect</button>
        </div>
        )
    }
)

export default ToolsBar
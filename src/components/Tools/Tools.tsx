import { observer } from "mobx-react"
import {ReactElement} from 'react'
import '../../style/tools.scss'
import Tools from '../../store/tools'
 
const ToolsBar = observer((): ReactElement => {
    
    return (
        <div className={'tools'}>
            <button className={'tools-pen'} onClick={()=>Tools.setTool('pen')} >pen</button>
            <button className={'tools-rect'} onClick={()=>Tools.setTool('rect')}>rect</button>
        </div>
        )
    }
)

export default ToolsBar
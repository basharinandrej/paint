import {ReactElement, useEffect, useRef, useState} from 'react'
import '../../style/canvas.scss'
import { observer } from "mobx-react"
import ToolsStore from '../../store/tools'
import CanvasStore from '../../store/canvas'
import Brush from '../../tools/Brush'

const Canvas = observer((): ReactElement => {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if(ref.current) {
            CanvasStore.setCanvas(ref.current)
            ToolsStore.setTool(new Brush(ref.current))
        }
    }, [])


    return (
        <canvas className={'canvas'} ref={ref} width={880} height={400} />
    )

})

export default Canvas
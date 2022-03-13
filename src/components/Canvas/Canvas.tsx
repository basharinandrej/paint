import React, {ReactElement, useEffect, useRef, useState} from 'react'
import '../../style/canvas.scss'
import { observer } from "mobx-react"
import Tools from '../../store/tools'
import CanvasStore from '../../store/canvas'

const Canvas = observer((): ReactElement => {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if(ref.current) {
            CanvasStore.setCanvas(ref.current)
        }
    }, [])
    useEffect(() => {
        CanvasStore.setContext()
        CanvasStore.setListens()
    }, [ref.current, Tools.name])


    return (
        <canvas className={'canvas'} ref={ref} width={880} height={400} />
    )

})

export default Canvas
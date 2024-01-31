import { Maximize } from "lucide-react"
import { BTNFS } from "@/Constants/styles"
import { SlideContext } from "@/Providers/SlideProvider";
import { useContext } from "react";

export const MaxButton = () => {

    const { setIsFullscreen, elementRef } = useContext(SlideContext)

    const handleFullscreen = async () => {
        if (!elementRef) return
        await elementRef?.current?.requestFullscreen()
        setIsFullscreen(true)
    }

    return <button
        className={BTNFS}
        onClick={handleFullscreen}
    >
        <Maximize className="hover:stroke-black" />
    </button>

}
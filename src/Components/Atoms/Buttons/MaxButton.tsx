import { Maximize } from "lucide-react"
import { BTNFS } from "@/Constants/styles"
import { SlideContext } from "@/Providers/SlideProvider";
import { useContext } from "react";

export const MaxButton = ({elementRef}:any) => {

    const { isFullscreen, setIsFullscreen } = useContext(SlideContext)

    const handleFullscreen = async () => {
        if (!elementRef) return
        const res = await elementRef?.current?.requestFullscreen()
        setIsFullscreen(true)
    }

    return !isFullscreen && <button
        className={BTNFS}
        onClick={handleFullscreen}
    >
        <Maximize className="hover:stroke-black" />
    </button>

}
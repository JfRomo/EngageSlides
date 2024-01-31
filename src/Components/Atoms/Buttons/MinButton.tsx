import { Minimize } from "lucide-react"
import { BTNFS } from "@/Constants/styles"
import { SlideContext } from "@/Providers/SlideProvider";
import { useContext } from "react";


export const MinButton = () => {

    const { isFullscreen, setIsFullscreen } = useContext(SlideContext)

    const handleFullscreenOut = async () => {
        document.exitFullscreen();
        setIsFullscreen(false)
    }

    return (<button
        className={BTNFS}
        onClick={handleFullscreenOut}
    >
        <Minimize className="hover:stroke-black" />
    </button>
    )
}
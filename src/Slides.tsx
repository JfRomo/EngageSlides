import { useContext, useEffect, useRef } from "react";
import './Slide.css';
import { SlideContext } from "@/Providers/SlideProvider";
import { MinButton } from "./Components/Atoms/Buttons/MinButton";
import { MaxButton } from "./Components/Atoms/Buttons/MaxButton";
function Slide() {

    const { setIsFullscreen } = useContext(SlideContext)

    const elementRef: any = useRef(null)

    useEffect(() => {
        const handle = () => {
            if (document.fullscreenElement) {
                setIsFullscreen(true)
            } else {
                setIsFullscreen(false)
            }
        }
        document.addEventListener("fullscreenchange", handle);
        return () => {
            document.removeEventListener("fullscreenchange", handle);
        };
    }, []);

    return (
        <div id="slide">
            <div ref={elementRef} >
                <img src="https://picsum.photos/536/354" alt="" />
                <MinButton/>
            </div>
           <MaxButton elementRef={elementRef}/>
        </div>
    )
}

export default Slide
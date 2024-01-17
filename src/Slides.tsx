import { useEffect, useRef, useState } from "react";
import './Slide.css'
import { Maximize, Minimize } from "lucide-react";
function Slide() {

    const [isFullscreen, setIsFullscreen] = useState(false)
    const btnFs = "text-black-500 fixed bottom-[2vh] right-[2vw] hover:bg-white w-[40px] h-[40px] p-2 rounded-lg ease-in-out transition-all duration-300"
    const elementRef: any = useRef(null)

    const handleFullscreen = async () => {
        if (!elementRef) return
        const res = await elementRef?.current?.requestFullscreen()
        setIsFullscreen(true)
        console.log(res);
    }


    const handleFullscreenOut = async () => {
        if (!elementRef) return
        document.exitFullscreen();
        setIsFullscreen(false)
    }

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
            {/* <FullScreen handle={handle}> */}
            <div
                ref={elementRef}
            >
                <img src="https://picsum.photos/536/354" alt="" />

                {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-SJfoBFjdnQ" title="Fania All Stars Live in Africa - Full Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                {isFullscreen &&
                    <button
                        className={btnFs}
                        onClick={handleFullscreenOut}
                    >
                        <Minimize className="hover:stroke-black" />
                    </button>}
            </div>

            {/* </FullScreen> */}
            {!isFullscreen &&
                <button
                    className={btnFs}
                    onClick={handleFullscreen}
                >
                    <Maximize className="hover:stroke-black" />
                </button>}
        </div>
    )
}

export default Slide
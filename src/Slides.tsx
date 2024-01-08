import { useRef, useState } from "react";

function Slide() {

    const [isFullscreen, setIsFullscreen] = useState(false)

    const elementRef = useRef(null)

    const handleFullscreen = async () =>{
        if(!elementRef) return
        const res = await elementRef?.current?.requestFullscreen()
        setIsFullscreen(true)
        console.log(res);
    }
    const handleFullscreenOut = async () =>{
        if(!elementRef) return
        document.exitFullscreen();
        setIsFullscreen(false)
    }


    return (
    <div id="slide">
        {/* <FullScreen handle={handle}> */}
            <div
                ref={elementRef}
                >
                <img src="https://picsum.photos/536/354" alt=""/> 

            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-SJfoBFjdnQ" title="Fania All Stars Live in Africa - Full Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {isFullscreen && <button onClick={handleFullscreenOut}><img src="/minimize.svg"></img></button>}
            </div>
        
        {/* </FullScreen> */}
        {!isFullscreen && <button onClick={handleFullscreen}><img src="/maximize.svg"></img></button>}
        
    </div>
    // <div id="slide">
    //     <FullScreen handle={handle}>
    //        <img src="https://picsum.photos/536/354" alt=""/>
    //     </FullScreen>
        

    // </div>
    )
}

export default Slide
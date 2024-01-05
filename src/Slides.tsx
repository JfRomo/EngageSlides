import { FullScreen, useFullScreenHandle } from "react-full-screen"
function Slide() {
    const handle = useFullScreenHandle();
    return (
        <div id="slide">
            <FullScreen handle={handle}>
                <img src="https://picsum.photos/536/354" alt=""/>
                <button onClick={handle.exit}><img src="../public/minimize.svg"></img></button>
            </FullScreen>
            <button onClick={handle.enter}><img src="../public/maximize.svg"></img></button>
            
        </div>
    )
}

export default Slide
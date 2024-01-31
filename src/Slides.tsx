import './Slide.css';
import { useContext, useEffect} from "react";
import { SlideContext } from "@/Providers/SlideProvider";
import { MinButton } from "./Components/Atoms/Buttons/MinButton";
import { MaxButton } from "./Components/Atoms/Buttons/MaxButton";
import SideBar from "./Components/Molecules/SideBar";
import { ToggleSideBarButton } from "./Components/Atoms/Buttons/ToggleSideBarButton";
import { BC } from "./Constants";
import { Interactive } from './Components/Organims/Interactive';
function Slide() {

    const { setIsFullscreen, isFullscreen, viewSidebar, elementRef } = useContext(SlideContext)

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
            <div ref={elementRef} className="h-[100vh] w-[100vw] bg-red-500" >

                {/* lo que el usuario modifica */}

                <img src="https://picsum.photos/536/354" alt="" />
                {isFullscreen && <Interactive><MinButton /></Interactive>
                    // <>
                    //     <div className={BC}>
                    //         <ToggleSideBarButton />
                    //         <MinButton />
                    //         <SideBar />
                    //     </div>
                    // </>
                }
            </div>
            {!isFullscreen && <Interactive><MaxButton /></Interactive>
                // <>
                //     <div className='fixed top-0 flex justify-end w-[100vw] h-[100vh]' >
                //         <div className={`grid grid-cols-${viewSidebar ? '12' : '2'} gap-1`}>
                //             <div className="col-span-1 flex flex-col-reverse pb-2">
                //                 <ToggleSideBarButton />
                //             </div>
                //             <div className="col-span-1 flex flex-col-reverse pb-2">
                //             </div>
                //             <div className={` ${!viewSidebar ? 'hidden' : ''} col-span-10`}>
                //                 <SideBar />
                //             </div>
                //         </div>
                //     </div>
                // </>
            }
        </div>
    )
}

export default Slide
import { useContext } from "react"
import { ToggleSideBarButton } from "../Atoms/Buttons/ToggleSideBarButton"
import SideBar from "../Molecules/SideBar"
import { SlideContext } from "@/Providers/SlideProvider"



export const Interactive = ({children}: any) => {

    const { viewSidebar } = useContext(SlideContext)


    return <div className='fixed top-0 flex justify-end w-[100vw] h-[100vh]' >
        <div className={`flex gap-1`}>
            <div className="flex flex-col-reverse pb-2">
                <ToggleSideBarButton />
            </div>
            <div className="flex flex-col-reverse pb-2">
                {children}
            </div>
            <SideBar />
        </div>
    </div>
}
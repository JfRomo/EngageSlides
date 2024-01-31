import { BTNSD } from "@/Constants/styles"
import { SlideContext } from "@/Providers/SlideProvider"
import { ListCollapse  } from "lucide-react"
import { useContext } from "react"

export const ToggleSideBarButton = () => {
    
    const { setViewSidebar, viewSidebar } = useContext(SlideContext)

    const toggleSideBar = () => setViewSidebar(!viewSidebar)
    
    return (
        <button className={BTNSD} onClick={toggleSideBar}> <ListCollapse/> </button>

    )


        
        
}
import { ReactNode, createContext, useState } from "react";

interface SlideContextPros {
    isFullscreen: boolean,
    setIsFullscreen: (value: boolean) => void,
    viewNotifications: boolean,
    setViewNotifications: (value: boolean) => void,
    viewSidebar: boolean,
    setViewSidebar: (value: boolean) => void,
    shadowRange: boolean,
    setShadowRange: (value: boolean) => void,
    messagesArray: any[],
    setMessagesArray: (value: any[]) => void,
    slide: number,
    setSlide: (value: number)
}


export const SlideContext = createContext<SlideContextPros>({
    isFullscreen: false,
    setIsFullscreen: () => { },

})

export const SlideProvider = ({ children }: { children: ReactNode }) => {

    const [isFullscreen, setIsFullscreen] = useState(false)
    const [viewNotifications, setViewNotifications] = useState<boolean>(false);
    const [viewSidebar, setViewSidebar] = useState<boolean>(false);
    const [shadowRange, setShadowRange] = useState<boolean>(false);
    const [messagesArray, setMessagesArray] = useState<any[]>([]); // Adjust the type according to your needs
    const [slide, setSlide] = useState<number>(0);

    return <SlideContext.Provider
        value={{
            isFullscreen, 
            setIsFullscreen, 
            viewNotifications,
            setViewNotifications,
            viewSidebar,
            setViewSidebar,
            shadowRange,
            setShadowRange,
            messagesArray,
            setMessagesArray,
            slide,
            setSlide,
        }}
    >
        {children}
    </SlideContext.Provider>
}


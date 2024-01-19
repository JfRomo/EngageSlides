import { ReactNode, createContext, useEffect, useState } from "react";

interface SlideContextPros {
    isFullscreen: boolean,
    setIsFullscreen: (value: boolean) => void,
    viewNotifications: boolean,
    setViewNotifications: (value: boolean) => void,
    viewSidebar: boolean,
    setViewSidebar: (value: boolean) => void,
    slide: number,
    setSlide: (value: number) => void,
    shadowRange: number,
    messagesArray: any[],
}

interface message {
    name: string,
    message: string,
    dateTime: string,
}

export const SlideContext = createContext<SlideContextPros>({
    isFullscreen: false,
    setIsFullscreen: () => { },
    viewNotifications: false,
    setViewNotifications: () => { },
    viewSidebar: false,
    setViewSidebar: () => { },
    slide: 0,
    setSlide: () => { },
    shadowRange: 4,
    messagesArray: [],
})

export const SlideProvider = ({ children }: { children: ReactNode }) => {

    const [isFullscreen, setIsFullscreen] = useState(false)
    const [viewNotifications, setViewNotifications] = useState<boolean>(false);
    const [viewSidebar, setViewSidebar] = useState<boolean>(false);
    const [shadowRange, setShadowRange] = useState<number>(4);
    const [messagesArray, setMessagesArray] = useState<message[]>([]); // Adjust the type according to your needs
    const [slide, setSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            
        }, 1000)

        return clearInterval(interval)
    }, [])

    return <SlideContext.Provider
        value={{
            isFullscreen,
            setIsFullscreen,
            viewNotifications,
            setViewNotifications,
            viewSidebar,
            setViewSidebar,
            shadowRange,
            messagesArray,
            slide,
            setSlide,
        }}
    >
        {children}
    </SlideContext.Provider>
}


import { ReactNode, createContext, useState } from "react";

interface SlideContextPros {
    isFullscreen: boolean,
    setIsFullscreen: (value: boolean) => void
}


export const SlideContext = createContext<SlideContextPros>({
    isFullscreen: false,
    setIsFullscreen: () => { }
})

export const SlideProvider = ({ children }: { children: ReactNode }) => {

    const [isFullscreen, setIsFullscreen] = useState(false)

    return <SlideContext.Provider
        value={{ isFullscreen, setIsFullscreen }}
    >
        {children}
    </SlideContext.Provider>
}


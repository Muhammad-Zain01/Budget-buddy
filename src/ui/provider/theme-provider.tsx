import React from "react"
import dynamic from "next/dynamic"
import { Theme } from "@/common/theme"

const ConfigProvider = dynamic(() => import("antd").then(mod => mod.ConfigProvider), { ssr: false })

type ComponentProps = {
    children: React.ReactNode
}
const UIThemeProvider: React.FC<ComponentProps> = ({ children }): JSX.Element => {
    return (
        <ConfigProvider theme={Theme}>
            {children}
        </ConfigProvider>
    )
}

export default UIThemeProvider;
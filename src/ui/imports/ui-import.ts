import dynamic from "next/dynamic"
export const Layout = dynamic(() => import("antd").then(mod => mod.Layout), { ssr: false })
export const Menu = dynamic(() => import("antd").then(mod => mod.Menu), { ssr: false })
export const Sider = dynamic(() => import("antd").then(mod => mod.Layout.Sider), { ssr: false })
export const Footer = dynamic(() => import("antd").then(mod => mod.Layout.Footer), { ssr: false })
export const Header = dynamic(() => import("antd").then(mod => mod.Layout.Header), { ssr: false })
export const Content = dynamic(() => import("antd").then(mod => mod.Layout.Content), { ssr: false })
export const Button = dynamic(() => import("antd").then(mod => mod.Button), { ssr: false })
export const Title = dynamic(() => import("antd").then(mod => mod.Typography.Title), { ssr: false })
export const Text = dynamic(() => import("antd").then(mod => mod.Typography.Text), { ssr: false })



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
export const Card = dynamic(() => import("antd").then(mod => mod.Card), { ssr: false })
export const Table = dynamic(() => import("antd").then(mod => mod.Table), { ssr: false })
export const Switch = dynamic(() => import("antd").then(mod => mod.Switch), { ssr: false })
export const Tabs = dynamic(() => import("antd").then(mod => mod.Tabs), { ssr: false })
export const Segmented = dynamic(() => import("antd").then(mod => mod.Segmented), { ssr: false })
export const Dropdown = dynamic(() => import("antd").then(mod => mod.Dropdown), { ssr: false })
export const Tag = dynamic(() => import("antd").then(mod => mod.Tag), { ssr: false })
export const Avatar = dynamic(() => import("antd").then(mod => mod.Avatar), { ssr: false })
export const DatePicker = dynamic(() => import("antd").then(mod => mod.DatePicker), { ssr: false })
export const Input = dynamic(() => import("antd").then(mod => mod.Input), { ssr: false })
export const FormItem = dynamic(() => import("antd").then(mod => mod.Form.Item), { ssr: false })
export const Modal = dynamic(() => import("antd").then(mod => mod.Modal), { ssr: false })
export const Select = dynamic(() => import("antd").then(mod => mod.Select), { ssr: false })

import DashboardLayout from '@/layout/dashboard.layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <DashboardLayout />     
    </>
  )
}

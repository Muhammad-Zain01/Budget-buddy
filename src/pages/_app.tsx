import type { AppProps } from 'next/app'
import Head from 'next/head'
import DasboardLayout from '@/layout/dashboard.layout'
import GlobalProvider from '@/provider/global-provider'
import { dashboardRoutes } from '@/common/common'
import { usePathname } from 'next/navigation'

export default function App({ Component, pageProps }: AppProps) {
  const path = usePathname().split('/')[1];

  return (
    <main>
      <Head>
        <title>Budget Buddy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalProvider>
        {
          dashboardRoutes.includes(path) ? (
            <DasboardLayout><Component {...pageProps} /></DasboardLayout>
          ) : (<Component {...pageProps} />)
        }
      </GlobalProvider>
    </main>
  )
}

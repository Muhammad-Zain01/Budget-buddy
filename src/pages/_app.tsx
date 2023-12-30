import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import DasboardLayout from '@/layout/dashboard.layout'
import useLoadingState from '@/hooks/useLoadingState'
import GlobalProvider from '@/ui/provider/provider'
import Loader from '@/components/loader/loader'

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useLoadingState();
  return (
    <main>
      <Head>
        <title>Budget Buddy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalProvider>
        <DasboardLayout>
          {
            !loading ? <Component {...pageProps} />: <Loader />
          }
        </DasboardLayout>
      </GlobalProvider>
    </main>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UploadContext, UploadProvider } from '@/components/context/Upload';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UploadProvider>
      <Component {...pageProps} />

    </UploadProvider>
  )


}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UploadContext, UploadProvider } from '@/components/context/Upload';
import { LoginProvider } from '@/components/context/Login/LoginProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <LoginProvider>
      <UploadProvider>
        <Component {...pageProps} />
      </UploadProvider>
    </LoginProvider>
  )


}

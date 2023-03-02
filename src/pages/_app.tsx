import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UploadContext, UploadProvider } from '@/components/context/Upload';
import { LoginProvider } from '@/components/context/Login/LoginProvider';
import { DeleteProvider } from '@/components/context/Delete';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <LoginProvider>
      <UploadProvider>
        <DeleteProvider>
          <Component {...pageProps} />
        </DeleteProvider>
      </UploadProvider>
    </LoginProvider>
  )


}

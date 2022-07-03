import React from 'react'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import Script from 'next/script'
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    
    <StateContext>
    <Layout>
    <Toaster />
    <Script
    
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
                
      </Script>
      
      <Component {...pageProps} />
    </Layout>
    </StateContext>
    
  )
}

export default MyApp

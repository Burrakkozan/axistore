import React from 'react';
    import Head from 'next/head';
    import { MY_SEO } from '../next-seo.config';

    const Seo = () => (
      
        <Head>
          <title key="title">{MY_SEO.title}</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta key="og_image:width" property="og:image:width" content="1200" />
          <meta key="og_image:height" property="og:image:height" content="630" />
          <meta key="og_locale" property="og:locale" content="en_IE" />
          <meta property="og:type" content="axıstore" />
          <meta property="og:image" content="/public/axis.png" />
           <meta key="og_site_name" property="og:site_name" content={MY_SEO.siteName} />
           <meta key="og_url" property="og:url" content={MY_SEO.canonical} />
           <meta name="keywords" content="Ladies handbags, Women’s handbags, Women mini bags,Tote bag"/>
           <meta name="copyright" content="Axıstore"/>
           <meta name="rating" content="adult" />
           <meta name="robots" content="index,follow" />
           <meta
            key="og_image:alt"
             property="og:image:alt"
            content={`${MY_SEO.title} | ${MY_SEO.siteName}`}
            />
          <meta
            key="description"
            name="description"
            content={MY_SEO.description}
          />
          <meta
            key="og:type"
            name="og:type"
            content={MY_SEO.openGraph.type}
          />
          <meta
            key="og:title"
            name="og:title"
            content={MY_SEO.openGraph.title}
          />
          <meta
            key="og:description"
            name="og:description"
            content={MY_SEO.openGraph.description}
          />
          <meta
            key="og:url"
            name="og:url"
            content={MY_SEO.openGraph.url}
          />
          <meta
            key="og:image"
            name="og:image"
            content={MY_SEO.openGraph.image}
          />

         <meta
           key="twitter:card"
           name="twitter:card"
           content={MY_SEO.twitter.cardType}
          />
        <meta
          key="twitter:description"
          property="twitter:description"
          content={MY_SEO.twitter.description}
         />
          <meta 
          key="twitter:site" 
          name="twitter:site" 
          content={MY_SEO.twitter.site} 
         />
         <meta
            key="twitter:image"
            name="twitter:image"
            content={MY_SEO.twitter.image}
          />
       
       <meta
        key="twitter:creator"
        name="twitter:creator"
        content={MY_SEO.twitter.handle}
      />
     <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" /> 

        </Head>
      )
    

    export default Seo;
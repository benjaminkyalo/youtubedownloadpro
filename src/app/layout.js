// src/app/layout.js
import Script from "next/script";
import AppProviders from "../component/AppProviders";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/download.ico" sizes="any" />
        <title>Youtube Download Pro</title>
        <meta
        
          name="description"
          content="Youtube Download Pro, no ads, easy to use, and friendly user interface"
        />
        <meta name="google-site-verification" content="LVA8QfkwN8hXmekVoefFCq_ScPMjJbT2G6DrPgKIzEY" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M2KSNH2EZZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M2KSNH2EZZ');
          `}
        </Script>
      </head>

      <body>
        <AppProviders>
          <div id="root">{children}</div>
        </AppProviders>
      </body>
    </html>
  );
}

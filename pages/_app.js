import 'tailwindcss/tailwind.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
  <title>My new cool app</title>
</Head>
  return <Component {...pageProps} />
}

export default MyApp

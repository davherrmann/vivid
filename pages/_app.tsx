import { NextPage } from "next"
import { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default App

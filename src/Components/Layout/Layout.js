import { Fragment } from "react"
import MainNavigate from "./MainNavigate"
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
        <Head>
            <title>Next Course</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Fragment>
            <MainNavigate/>
            <main>{children}</main>
        </Fragment>
        </>
    )
}

export default Layout
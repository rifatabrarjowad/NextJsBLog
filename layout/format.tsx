import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function format({children}) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header></Header>
            <main className="xl:container xl:mx-auto">
                {children}
            </main>
            <Footer></Footer>
        </>
    )
    
};

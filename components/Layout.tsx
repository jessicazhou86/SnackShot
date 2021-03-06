import Nav from './Nav';
import styles from '../styles/Home.module.css';
import Head from 'next/head'

export default function Layout({children}:{children:any}) {
  return (
    <>
      <Head >
        <title>🤳🏼 SnackShot 🍣</title>
        <meta name="keywords" content="food, restaurants, recommendations, friends" />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Chewy&family=Raleway&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.container}>
        <Nav ></Nav>
        <div style={{height: "5em"}}></div>
        <main>{children}</main>
      </div>
    </>
  )
}
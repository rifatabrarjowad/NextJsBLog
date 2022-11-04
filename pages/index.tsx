import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Format from '../layout/format'

export default function Home() {
  return (
    <div className={styles.container}>
     
      <Format></Format>
    </div>
  )
}

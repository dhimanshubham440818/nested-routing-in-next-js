import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>this example show you how to use nested routing in next js</p>
      <p>for normal routing enter /user, and for nested routing enter /user/dashboard inside URL....</p>
     </main>
  )
}

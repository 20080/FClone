import Footer from './footer'
import Navbar from './navbar'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div>
      <Navbar/>
      <br/><br/><br/><br/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
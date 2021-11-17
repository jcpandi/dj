import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="container flex justify-between">
      <div className="flex flex-row justify-center">
      <Navbar />
      { children }
      <Footer />
    </div>
    </div>
  );
}
 
export default Layout;
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ecommerce-logo.png" alt="site logo" width={296} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>{" "} | 
      <Link href="/about"><a>About</a></Link>{" "} | 
      <Link href="/products/"><a>Products</a></Link>
    </nav>
  );
}
 
export default Navbar;
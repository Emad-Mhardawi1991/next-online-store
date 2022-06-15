import Link from "next/link";
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter();
  return (
    <nav className=" container flex items-center space-x-8">
      <img src="vercel.svg" className="w-24 bg-primary_gray h-[40px] "/>
      <ul className="text-lg hidden md:flex space-x-6 flex-1 font-nunito font-bold py-4 ">
      <li>
          <Link href='/about-us'>
              <a className={`navlink ${router.pathname =='/about-us' ? 'navlink-active':''}  `} >About</a>
          </Link>
        </li>
        <li>
          <Link href='/#'>
              <a className={`navlink ${router.pathname =='/find-us' ? 'navlink-active':''}  `}>Find Us</a>
          </Link>
        </li>
        <li >
          <Link href='/#'>
              <a className={`navlink ${router.pathname =='/blog' ? 'navlink-active':''}  `}>Blog</a>
          </Link>
        </li>
      </ul>
      <div>
          nav right
      </div>
    </nav>
  );
};

export default Nav;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="cursor-pointer hover:scale-105 transition-all opacity-75 hover:opacity-100 ">
            About
          </h3>
          <h3 className="cursor-pointer hover:scale-105 transition-all opacity-75 hover:opacity-100 ">
            Contact
          </h3>
          <h3 className="text-white bg-green-600 px-4 py-1 border border-green-600 rounded-full cursor-pointer hover:bg-white hover:text-green-600 hover:scale-105 transition-all ease-in-out">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer hover:scale-105 transition-all opacity-75 hover:opacity-100 ">
          Sign In
        </h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600 cursor-pointer hover:bg-green-600 hover:text-white hover:scale-105 transition-all ease-in-out">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;

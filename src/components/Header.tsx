import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-8">
      <Link
        to="/"
        className="h-10 w-10 rounded-full bg-yellow-600 inline-block bg-gradient-to-l from-pink-300 via-sky-700 p-1"
      >
        <div className="w-full h-full bg-[#202122] rounded-full"></div>
      </Link>
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/" className="custom-underscore">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="custom-underscore">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="custom-underscore">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

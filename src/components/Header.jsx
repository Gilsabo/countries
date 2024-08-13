import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-center mt-12 pb-6">
      <h1 className="text-3xl font-bold text-green-800 pt-6">
        <Link
          to="/"
          className="relative inline-block text-green-800 before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-green-800 before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
        >
          Countries App
        </Link>
      </h1>
    </header>
  );
}

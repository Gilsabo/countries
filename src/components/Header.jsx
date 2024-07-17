import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-center mt-6">
      <h1 className="text-3xl font-bold text-green-800 hover:text-4xl hover:transition duration-700 ease-in-out">
        <Link to="/">Countries App</Link>
      </h1>
    </header>
  );
}

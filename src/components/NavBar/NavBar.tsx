import { useSelector } from 'react-redux';

export const NavBar = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-stone-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#home"
          >
            WriteAway
          </a>
        </div>
        <div
          className="lg:flex flex-grow items-center flex"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {user && (
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#write"
                >
                  <p className="ml-2">Write</p>
                </a>
              </li>
            )}
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" />
                <span className="ml-2">Tweet</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75" />
                <span className="ml-2">Pin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

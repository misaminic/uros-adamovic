import Link from 'next/Link';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <i className="fas fa-home">
                <span className="nav-font">Home</span>
              </i>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <i className="fas fa-user-alt">
                <span className="nav-font">About</span>
              </i>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <i className="fas fa-envelope">
                <span className="nav-font">Contact</span>
              </i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { useState, useCallback, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function Home() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [menuElementVisibility, setMenuElementVisibility] = useState(true);

  //MenuElementVisibility
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setMenuElementVisibility(false);
    } else {
      setMenuElementVisibility(true);
    }
  };
  //detecting scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  //

  const menuClickHandler = () => {
    setMenuVisibility(!menuVisibility);
  };

  //Video player customization - not to show video details
  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Uros Adamovic</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            src="/uros-naslovna.jpg"
            alt="background-decoration"
            layout="fill"
            objectFit="cover"
          />
          <div
            className={`${menuVisibility ? 'container show-nav' : 'container'}`}
          >
            {menuElementVisibility ? (
              <div className="circle-container">
                <div className="circle">
                  <button id="close" onClick={() => menuClickHandler()}>
                    <i className="fas fa-times"></i>
                  </button>
                  <button id="open" onClick={() => menuClickHandler()}>
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            ) : null}

            <div className="content">
              <h3>UROŠ ADAMOVIĆ</h3>
              <h5>CLASSICAL VIOLINIST</h5>
            </div>
          </div>
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
        </div>
      </main>
      <section className="sound-wave-section">
        <Image
          src="/sound-wave.svg"
          alt="background-decoration"
          // layout="fill"
          height={200}
          width={2500}
          className="sound-wave"
        />
      </section>
      <section className="about">
        <h3>ABOUT</h3>
        <p>
          Uroš Adamovic was born on 5th August 2004. He began his musical
          education at the age of 9 at the Ub's Music school „Petar Stojanovic“
          in the class of professors Marija Nikitovic and Lidija Rankovic, and
          later prof. Tanja Maksimovic. At the age of 11 he attended the ARLEMM
          Summer Music School where he worked with famous professor Milica
          Mladenovic at whose invitation he transferred to School for Musically
          Gifted Children in Suprija. He continued his education in the class of
          the said professor.
        </p>
        <p>
          He played over 100 concerts in the most important halls in Serbia
          (SANU Gallery, Great Hall and Kolarac Endowment Gallery, ArtGet
          Gallery, Czech Embassy, Italian Cultural Center, Princess Ljubica's
          Residence, Jewish Community, King Peter I House, Atrium of the
          National Museum in Belgrade, National Museum Gallery in
          Kragujevac...), as well as in: Italy, Greece and Czech Republic.
        </p>
        <p>
          Uros Adamovic has won more than 30 firsts and special prizes at all
          national and international competitions in which he has participated
          so far, the following stand out: International String Competitions -
          Niš, "Stringfest", "Golden Steps", "Young Virtuosos", EMCY "Ohrid
          Pearls" Competition, "Lisinski", "State Competition ZMBŠS"...
        </p>
      </section>
      <section className="sound-wave-section">
        <Image
          src="/sound-wave.svg"
          alt="background-decoration"
          // layout="fill"
          height={200}
          width={2500}
          className="sound-wave sound-wave-2"
        />
      </section>
      <section className="videos-headline-wrapper">
        <h3 className="videos-headline">VIDEOS</h3>
      </section>
      <section className="videos-section">
        <div className="player-wrapper">
          <ReactPlayer
            onContextMenu={handleContextMenu}
            className="react-player"
            url="https://www.youtube.com/watch?v=k9ZZa71MRy4"
            width="100%"
            height="100%"
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          &nbsp; all rights reserved
        </h4>
      </footer>
    </div>
  );
}

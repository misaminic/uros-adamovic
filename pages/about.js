import Link from 'next/Link';
import { useState } from 'react';

const About = () => {
  const [showWholeBio, setShowWholeBio] = useState(false);

  const showBioText = () => {
    setShowWholeBio(true);
  };

  return (
    <>
      {/* <section className="links">
        <Link href="/">HOME</Link>
        <Link href="/contact">CONTACT</Link>
      </section> */}
      <div className="bio-container">
        <div className="image-wrapper">
          <img src="/uros-1.jpg" />
        </div>
        <div className="bio-info">
          <h1>Biography</h1>
          <p>
            Uroš Adamovic was born on 5th August 2004. He began his musical
            education at the age of 9 at the Ub's Music school „Petar
            Stojanovic“ in the class of professors Marija Nikitovic and Lidija
            Rankovic, and later prof. Tanja Maksimovic. At the age of 11 he
            attended the ARLEMM Summer Music School where he worked with famous
            professor Milica Mladenovic at whose invitation he transferred to
            School for Musically Gifted Children in Suprija. He continued his
            education in the class of the said professor.
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
          <p>
            In December 2020, he won the "Talent Prague 5" competition, where he
            was invited to perform as a soloist with the Prague Philharmonic
            Orchestra in 2021. He was also invited to play a recital in the Hall
            of the Macedonian Philharmonic in 2021.
          </p>
          <p>
            He got the position of assistant concertmaster in the "Žebeljan"
            Orchestra, with which he will perform at the International Festival
            "Isidora Žebeljan", which was established this year in honor of one
            of the most important composers on the world music scene.
            <span onClick={() => showBioText()}>...read more</span>
          </p>

          {showWholeBio ? (
            <>
              <p>
                He is a member of the chamber ensembles "ArtLink Young
                Virtuosos" and "ArtLink Camerata Balcanica”. As part of the
                ArtLink festival he had the opportunity to play and collaborate
                with world-renowned artists, such as violinists Anna Tifu
                (Italy) and Pavel Doležal (Czech Republic), Konstantin Adrian
                Grigore - conductor (Romania), as well as with the famous
                Italian bassoonist Giorgio Mandolesi. In September 2020, he
                performed at the opening of the ArtLink Festival, performing
                Beethoven's 6th Symphony in Arrangement for String Sextet under
                the baton of conductor Benjamin Haemhouts.
              </p>
              <p>
                At the invitation of maestro Igor Coretti, in December 2019 he
                played with the European Spirit of Youth Orchestra (ESYO) on
                tour in the prestigious theaters "Verdi" Florence, "Alighieri"
                Ravenna, Italy.
              </p>
              <p>
                He attended masterclasses held by soloists and
                professors:Tatjana Balashova (Moscow), Latica Honda - Rosenberg
                (Berlin), Evgenia Epshtein (Israel), Anne Harvey-Nagl
                (Australia), Gordan Trajkovid and Fredrik Burstedt (Schweden),
                Lazar Miletic (Norway), Teresa Jones (USA), Alexander Gilman
                (Concertmaster of the LGT Young Soloists Orchestra) and many
                others...
              </p>
              <p>
                A show about Uroš was recorded on Brainz TV, within the series
                Brainz Art - Young Geniuses for their oflcial YouTube channel,
                in May 2020.
              </p>
              <p>
                He plays a rented violin from the private collection of the
                maker Milan Nikolic.
              </p>
            </>
          ) : null}
        </div>
        <style jsx>
          {`
            .bio-container {
              display: flex;
              justify-content: center;
              margin: 1.5rem;
              margin-top: 3rem;
            }

            .links {
              display: flex;
              justify-content: space-around;
              padding: 1rem;
            }

            .image-wrapper {
              display: flex;
              justify-content: center;
              align-items: flex-end;
            }

            .image-wrapper img {
              max-width: 40rem;
              height: auto;
              margin-bottom: 1.5rem;

            }
            .bio-info {
              max-width: 1000px;
              width: 100%;
              margin-left: 1rem;
              padding-top: 1rem;
              padding-left: 3rem;
              line-height: 2rem;
              text-align: center;
            }
            .bio-container h1 {
              margin-bottom: 3rem;
            }

            .bio-info > p:first-child {
              margin-top: 0;
            }
            .bio-info > p {
              text-align: justify;
            }

            @media (max-width: 1600px) {
              .image-wrapper {
                align-self: center;
              }
            }
            @media (max-width: 1415px) {
              .bio-container {
                flex-direction: column-reverse;
                margin: 1rem;
              }
            }
            @media (max-width: 768px) {
              .bio-info {
                margin: 0;
                padding: 0;
                line-height: 1.7rem;
              }

              .image-wrapper img {
                max-width: 10rem;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default About;

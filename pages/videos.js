import { useState, useCallback } from 'react';
import ReactPlayer from 'react-player';

const Videos = () => {
  const [videos, setVideos] = useState('');
  const [modal, setModal] = useState(false);

  //   ref which will change element on click
  //   on each click different video will be referenced

  //Video player customization - not to show video details
  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
  }, []);

  //show single video full-screen
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="videos-page">
      <div>
        <h1>Videos</h1>
      </div>

      {!modal ? (
        <>
          <section className="videos-section on-videos-page">
            <article className="single-video" onClick={handleModal}>
              <div className="player-wrapper">
                <ReactPlayer
                  onContextMenu={handleContextMenu}
                  className="react-player"
                  url="https://www.youtube.com/watch?v=vEKIvBx6dJ0&feature=youtu.be"
                  width="100%"
                  height="100%"
                />
              </div>
            </article>
          </section>
          <section className="videos-section on-videos-page">
            <article className="single-video" onClick={handleModal}>
              <div className="player-wrapper">
                <ReactPlayer
                  onContextMenu={handleContextMenu}
                  className="react-player"
                  url="https://www.youtube.com/watch?v=WBxV2fpNxF0"
                  width="100%"
                  height="100%"
                />
              </div>
            </article>
          </section>
          <section className="videos-section on-videos-page">
            <article className="single-video">
              <div className="player-wrapper">
                <ReactPlayer
                  onContextMenu={handleContextMenu}
                  className="react-player"
                  url="https://www.youtube.com/watch?v=DyZqhyBQOYs"
                  width="100%"
                  height="100%"
                />
              </div>
            </article>
          </section>
          <section className="videos-section on-videos-page">
            <article className="single-video">
              <div className="player-wrapper">
                <ReactPlayer
                  onContextMenu={handleContextMenu}
                  className="react-player"
                  url="https://www.youtube.com/watch?v=18Sdlak4Hoc"
                  width="100%"
                  height="100%"
                />
              </div>
            </article>
          </section>
        </>
      ) : (
        <>kao</>
      )}
    </div>
  );
};

export default Videos;

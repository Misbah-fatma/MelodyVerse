import React, { useState, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const tracks = [
    { title: "David Guetta Miami Ultra", audioUrl: "music-files/1.mp3" },
    { title: "David Guetta Miami Ultra", audioUrl: "music-files/2.mp3" },
    { title: "David Guetta Miami Ultra", audioUrl: "music-files/3.mp3" },
    { title: "David Guetta Miami Ultra", audioUrl: "music-files/4.mp3" },
    { title: "David Guetta Miami Ultra", audioUrl: "music-files/5.mp3" },
    { title: "David Guetta Miami Ultra", audioUrl: "music-files/6.mp3" },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: 'David Guetta Miami Ultra Music Festival 2019',
      thumbnail: 'img/youtube/youtube-1.jpg',
      url: 'https://www.youtube.com/embed/yJg-Y5byMMw?autoplay=1',
    },
    {
      title: 'Martin Garrix (Full live-set) | SLAM!Koningsdag',
      thumbnail: 'img/youtube/youtube-2.jpg',
      url: 'https://www.youtube.com/embed/K4DyBUG242c?autoplay=1',
    },
    {
      title: 'Dimitri Vegas, Steve Aoki & Like Mike’s “3 Are Legend”',
      thumbnail: 'img/youtube/youtube-3.jpg',
      url: 'https://www.youtube.com/embed/S19UcWdOA-I?autoplay=1',
    },
  ];

  const targetDate = new Date("2025-02-20T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(countdownInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div>

      <Header />

      <section
        className="hero spad set-bg"
        style={{
          backgroundImage: "url('/img/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <span>MelodyVerse</span>
                <h1>Feel the heart beats</h1>
                <p>
                  Welcome to <strong>MelodyVerse</strong>, where music transcends boundaries and emotions come alive!<br /> Dive into the world of rhythm and harmony as we bring you a universe of melodies designed to stir your soul.
                </p>
                <a
                  href="#"
                  className="play-btn video-popup"
                  onClick={handleClickOpen}
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="linear__icon">
          <i className="fas fa-angle-double-down"></i>
        </div>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            style: {
              margin: "auto",
              maxWidth: "70%",
            },
          }}
        >
          <DialogContent>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/yJg-Y5byMMw?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </section>

      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__pic">
                <img src="img/about/about.png" alt="MelodyVerse" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__text">
                <div className="section-title">
                  <h2>MelodyVerse</h2>
                  <h1>About Us</h1>
                </div>
                <p>
                  Welcome to <strong>MelodyVerse</strong>, where music brings people together across the world. From live concerts to virtual music festivals, we offer a platform for artists, fans, and creators to explore the beauty of music in every form. Join us as we shape the future of the music industry with innovative sound experiences and live performances.
                </p>
                <Link to="/contact" className="primary-btn">
                  Join MelodyVerse
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="services__left set-bg"
                style={{
                  backgroundImage: "url('img/services/service-left.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
                  className="play-btn video-popup"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="row services__list">
                {/* Service 1 */}
                <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
                  <div className="service__item deep-bg">
                    <img src="img/services/service-1.png" alt="Artist Collaboration" />
                    <h4>Artist Collaboration</h4>
                    <p>
                      Connect with top artists worldwide for collaborations, productions, and new projects.
                    </p>
                  </div>
                </div>
                {/* Service 2 */}
                <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
                  <div className="service__item">
                    <img src="img/services/service-2.png" alt="Live Performances" />
                    <h4>Live Performances</h4>
                    <p>
                      Enjoy exclusive live performances from emerging and established artists around the globe.
                    </p>
                  </div>
                </div>
                {/* Service 3 */}
                <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
                  <div className="service__item deep-bg">
                    <img src="img/services/service-3.png" alt="Music Production Lessons" />
                    <h4>Music Production Lessons</h4>
                    <p>
                      Learn the art of music production with expert lessons and hands-on tutorials.
                    </p>
                  </div>
                </div>
                {/* Service 4 */}
                <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
                  <div className="service__item">
                    <img src="img/services/service-4.png" alt="Virtual Music Festivals" />
                    <h4>Virtual Music Festivals</h4>
                    <p>
                      Experience world-class music festivals from the comfort of your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="track spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title">
                <h2>Latest tracks</h2>
                <h1>Music podcast</h1>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="track__all">
                <a href="#" className="primary-btn border-btn">View all tracks</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 p-0">
              <div className="track__content nice-scroll">
                {tracks.map((track, index) => (
                  <div className="single_player_container" key={index}>
                    <h4>{track.title}</h4>
                    <div className="audio-player-container">
                      <ReactPlayer
                        url={track.audioUrl}
                        controls={true}
                        width="80%"
                        height="50px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 p-0">
              <div className="track__pic">
                <img src="img/track-right.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="youtube spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Youtube feed</h2>
                <h1>Latest videos</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {videos.map((video, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="youtube__item">
                  <div
                    className="youtube__item__pic set-bg"
                    style={{
                      backgroundImage: `url('${video.thumbnail}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {activeVideo === video.url ? (
                      <iframe
                        width="100%"
                        height="255"
                        src={video.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <button
                        className="play-btn video-popup"
                        onClick={() => setActiveVideo(video.url)}
                      >
                        <i className="fas fa-play"></i>
                      </button>
                    )}
                  </div>
                  <div className="youtube__item__text">
                    <h4>{video.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="countdown spad set-bg"
        style={{
          backgroundImage: "url('img/countdown-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="countdown__text">
                <h1>Tomorrowland 2025</h1>
                <h4>Music festival start in</h4>
              </div>
              <div className="countdown__timer" id="countdown-time">
                <div className="countdown__item">
                  <span>{timeLeft.days}</span>
                  <p>days</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.hours}</span>
                  <p>hours</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.minutes}</span>
                  <p>minutes</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.seconds}</span>
                  <p>seconds</p>
                </div>
              </div>
              <div className="buy__tickets">
                <a href="#" className="primary-btn">Buy tickets</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

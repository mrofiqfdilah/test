import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS Toastify

import Ekskul from "../assets/images/Ekskul.png";
import Mlb from "../assets/images/Mlb.png";
import Ppdb from "../assets/images/Ppdb.png";
import Foodcare from "../assets/images/download.jpg";
import Spotify from "../assets/images/spotify.png";
import Wella from "../assets/images/wella.jpg";

function Project() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const projects = [
    { src: Ekskul, title: "SIEkskul : Information System", type: "Website" },
    { src: Ppdb, title: "Registration vocational school students", type: "Website" },
    { src: Mlb, title: "GM Energy Landing Page", type: "Website" },
    { src: Foodcare, title: "Foodcare : With Food We Care", type: "Website" },
    { src: Spotify, title: "Instagram Clone ", type: "Website" },
    { src: Wella, title: "Wella&co : Hotel Booking", type: "Website" },
  ];

  const handleImageLoad = () => {
    setLoadedImages((prevLoadedImages) => prevLoadedImages + 1);
  };

  useEffect(() => {
    if (loadedImages === projects.length) {
      setIsLoading(false);
    }
  }, [loadedImages, projects.length]);

  // Fungsi untuk menampilkan notifikasi toast
  const showToast = () => {
    toast.info("This link is not yet available", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "custom-toast", 
      progressClassName: "custom-toast-progress",
    });
  };

  return (
    <>
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f0f0f0">
        <section className="section__container project__container" id="project">
          <h2>PROJECTS</h2>
          <div className="project__grid">
            {projects.map((project, index) => (
              <div
                className="project__card aos-item"
                key={index}
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-duration="1200"
              >
                <img
                  src={project.src}
                  alt="project"
                  onLoad={handleImageLoad}
                  style={{ display: "none" }}
                />

                {isLoading ? (
                  <Skeleton height={200} width={320} style={{ borderRadius: "10px" }} />
                ) : (
                  <img src={project.src} alt="project" className="project-image" />
                )}
                <div className="project__card__details">
                  <div>
                    <p>{isLoading ? <Skeleton width={120} /> : project.type}</p>
                    <h4>{isLoading ? <Skeleton width={"80%"} /> : project.title}</h4>
                  </div>
                  {!isLoading && (
                    <a href="#" onClick={showToast}>
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SkeletonTheme>

      <ToastContainer />
    </>
  );
}

export default Project;

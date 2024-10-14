import React, { useEffect } from "react";
import Disdik from "../assets/images/kalteng.png";
import Wuri from "../assets/images/tutwuri.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Upr from "../assets/images/upr.png";
import Stimik from "../assets/images/stmik.png";
import Kotim from "../assets/images/kotim.png";
import Politala from "../assets/images/politala.png";

function Award() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Durasi animasi
      easing: "ease-in-out",  // Efek easing untuk transisi yang halus
      once: true,  // Animasi hanya terjadi sekali saat di-scroll
    });
  }, []);

  return (
    <>
      <section className="section__container experience__container" id="experience">
        <h2>ACHIEVEMENT</h2>
        <ul className="experience__list">
        <li
               data-aos="fade-left"
               data-aos-easing="ease-in-out"
               data-aos-duration="1200"
           >
             <div className="experience__header">
               <div>
                 <img src={Politala} alt="Wuri Handayani Logo" />
                 <h4>1st Place and Best Solution in Application Development Competition for Leading Vocational Schools</h4>
               </div>
               <p>12 September 2024</p>
             </div>
      <p>
      Officially Awarded By Politeknik Negeri Tanah Laut
      </p>
           </li>
          <li
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
          >
            <div className="experience__header">
              <div>
                <img src={Wuri} alt="Wuri Handayani Logo" />
                <h4>
                Medallion of Excellence in National Student Skills Competition (LKS) in the Web Technologies Category</h4>
              </div>
              <p>25 Agustus 2024</p>
            </div>
            <p>
            Officially Awarded By Kementrian Pendidikan, Pusat Prestasi Nasional, Balai Pengembangan Talenta Indonesia.
            </p>
          </li>
          
          <li
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
          >
            <div className="experience__header">
              <div>
                <img src={Disdik} alt="Disdik Logo" className="disdik" />
                <h4>
                1st Place in Central Kalimantan Province Student Skills Competition (LKS) in the Web Technologies Category</h4>
              </div>
              <p>22 April 2024</p>
            </div>
            <p>
            Officially Awarded By Dinas Pendidikan Provinsi Kalimantan Tengah.
            </p>
          </li>

          <li
               data-aos="fade-left"
               data-aos-easing="ease-in-out"
               data-aos-duration="1200"
          >
            <div className="experience__header">
              <div>
                <img src={Kotim} alt="Disdik Logo" className="kotim"  />
                <h4>1st Place in East Kotawaringin Regency Student Skills Competition (LKS) in the Web Technologies Category</h4>
              </div>
              <p>18 April 2024</p>
            </div>
            <p>
            Officially Awarded By Dinas Pendidikan Kotawaringin Timur.
            </p>
          </li>

          <li
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
          >
            <div className="experience__header">
              <div>
                <img src={Upr} alt="Upr Logo" />
                <h4>1st Place in Informatics Engineering Software Development Festival By University of Palangkaraya</h4>
              </div>
              <p>19 Desember 2023</p>
            </div>
            <p>
            Officially Awarded By Universitas Palangka Raya.
            </p>
          </li>

          <li
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
          >
            <div className="experience__header">
              <div>
                <img src={Wuri} alt="Wuri Handayani Logo" />
                <h4>
                National Finalist in Indonesian Student Innovation and Entrepreneurship (FIKSI) in the Digital Technology Category</h4>
              </div>
              <p>28 September 2023</p>
            </div>
            <p>
            Officially Awarded By Kementrian Pendidikan, Pusat Prestasi Nasional, Balai Pengembangan Talenta Indonesia.
            </p>
          </li>
          <li
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
          >
            <div className="experience__header">
              <div>
                <img src={Disdik} alt="Disdik Logo" className="disdik" />
                <h4>
                2nd Place in Central Kalimantan Province Student Skills Competition (LKS) in the Web Technologies Category</h4>
              </div>
              <p>22 September 2024</p>
            </div>
            <p>
            Officially Awarded By Dinas Pendidikan Provinsi Kalimantan Tengah.
            </p>
          </li>
          <li
               data-aos="fade-left"
               data-aos-easing="ease-in-out"
               data-aos-duration="1200"
            >
              <div className="experience__header">
                <div>
                  <img src={Kotim} alt="Disdik Logo" className="kotim"  />
                  <h4>1st Place in East Kotawaringin Regency Student Skills Competition (LKS) in the Web Technologies Category</h4>
                </div>
                <p>12 September 2023</p>
              </div>
              <p>
              Officially Awarded By Dinas Pendidikan Kotawaringin Timur.
              </p>
            </li>
          <li
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
          >
            <div className="experience__header">
              <div>
                <img src={Stimik} alt="Stimik Logo" />
                <h4>3rd Place in Software Desktop App Development Competition at STIMIK Palangkaraya University</h4>
              </div>
              <p>15 Mei 2023</p>
            </div>
            <p>
            Officially Awarded By  Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Palangkaraya.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Award;

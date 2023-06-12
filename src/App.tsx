import React, { useEffect } from "react";
import "./App.css";

const CardComponent: React.FC = () => {



  const buttons = document.querySelectorAll(".card-buttons button");
  let sections!: NodeListOf<HTMLElement>
  let card!: HTMLElement;


    const handleButtonClick = e => {
      const targetSection = e.target.getAttribute("data-section");
      const section = document.querySelector(targetSection);
      targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
      console.log(sections);

      sections.forEach(s => s.classList.remove("is-active"));
      buttons.forEach(b => b.classList.remove("is-active"));
      card.setAttribute("data-state", targetSection);
      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };


  useEffect(() => {
    card = document.querySelector(".card");
    sections = document.querySelectorAll(".card-section");

    // buttons.forEach((button) => {
    //   button.addEventListener("click", handleButtonClick);
    // });
  }, []);

  return (
    <div className="card" data-state="#about">
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')",
          }}
        ></div>
        <img
          className="card-avatar"
          src="https://api.monosnap.com/file/download?id=BqhmeDY8umAtSRVTeCib30fqqnjhNn"
          alt="avatar"
        />
        <h1 className="card-fullname">Happy Web Dev</h1>
        <h2 className="card-jobtitle">Desenvolvedor Front-end</h2>
      </div>
      <div className="card-main">
        <div className="card-section is-active" id="about">
          <div className="card-content">
            <div className="card-subtitle">PIADA</div>
            <p className="card-desc">
              Por que o desenvolvedor front-end começou a fazer jardinagem?
              <br />
              Porque eles queriam dominar a arte de cultivar belos "elementos
              raiz"!
            </p>
          </div>
          <div className="card-social">
            <a href="https://www.facebook.com/profile.php?id=100087750472135">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.616-13.024v1.376c0 50.784 36.16 93.216 84.32 102.976-8.64 2.368-17.856 3.712-27.392 3.712-6.72 0-13.344-.64-19.776-1.856 13.408 41.856 52.384 72.32 98.464 73.12-36.16 28.448-81.568 45.312-130.88 45.312-8.608 0-17.12-.512-25.568-1.472C45.408 448.224 100.096 464 159.104 464c190.464 0 294.784-157.568 294.784-294.784 0-4.48-.096-8.896-.288-13.344C480.224 136.96 497.728 118.496 512 97.248z"
                  fill="#3B5998"
                />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M437 32H75C33.645 32 0 65.645 0 107v298c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75V107c0-41.355-33.645-75-75-75zm-31.617 162.699c.006 78.263-.103 155.993 0 234.262-.001 15.79-13.303 29.532-29.047 29.58-38.797.104-77.6-.036-116.396.02-14.368.026-27.846-12.684-27.928-27.038-.244-46.28-.196-92.584-.196-138.873.006-15.868 12.744-28.606 28.608-28.609 77.068-.023 154.148-.006 231.215-.006 15.911 0 28.649 12.738 28.652 28.646.014 38.4-.011 76.801.019 115.198.025 15.832-12.757 28.639-28.604 28.646-38.92.019-77.84-.02-116.76.02-14.938 0-28.678-12.75-28.681-28.667-.091-62.52-.073-125.049-.073-187.57h27.827c.017 60.646.07 121.293-.036 181.935-.027 15.805 12.683 28.584 28.489 28.614 38.32.07 76.641-.016 114.961.036 15.989.026 28.709-12.527 28.752-28.516.074-59.684-.033-119.372.027-179.056zm0 0"
                  fill="#0077B5"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="card-section" id="experience">
          <div className="card-content">
            <div className="card-subtitle">WORK EXPERIENCE</div>
            <div className="card-timeline">
              <div className="card-item" data-year="2014">
                <div className="card-item-title">
                  Front-end Developer at <span>Dadvi</span>
                </div>
                <div className="card-item-desc">
                  Disrupt stumptown retro everyday carry unicorn.
                </div>
              </div>
              <div className="card-item" data-year="2016">
                <div className="card-item-title">
                  UI Developer at <span>GitHub</span>
                </div>
                <div className="card-item-desc">
                  Developed new conversion funnels and disrupt.
                </div>
              </div>
              <div className="card-item" data-year="2018">
                <div className="card-item-title">
                  Illustrator at <span>Google</span>
                </div>
                <div className="card-item-desc">
                  Onboarding illustrations for App.
                </div>
              </div>
              <div className="card-item" data-year="2020">
                <div className="card-item-title">
                  Full-Stack Developer at <span>CodePen</span>
                </div>
                <div className="card-item-desc">
                  Responsible for the encomposing brand expreience.
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="card-section" id="contact">
            <div className="card-content">
              <div className="card-subtitle">CONTATO</div>
              <div className="card-contact-wrapper">
                <div className="card-contact">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
                  Algonquin Rd, Three Oaks Vintage, MI, 49128
                </div>
                <div className="card-contact">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
                  (825) 288-2717
                </div>
                <div className="card-contact">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
                  casperwdc@gmail.com
                </div>
                <button className="contact-me">TRABALHAR JUNTOS</button>
              </div>
            </div>
          </div>


        <div className="card-buttons">
          <button
            type="button"
            data-section="#about"
            className="is-active"
            onClick={(e) => handleButtonClick(e)}
          >
            ABOUT
          </button>
          <button
            type="button"
            data-section="#experience"
            onClick={(e) => handleButtonClick(e)}
          >
            EXPERIENCE
          </button>
          <button
            type="button"
            data-section="#contact"
            onClick={(e) => handleButtonClick(e)}
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

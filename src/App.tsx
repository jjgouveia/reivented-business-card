import React, { useEffect, useRef } from "react";
import "./App.css";

const CardComponent: React.FC = () => {
  const buttonsRef = useRef<NodeListOf<HTMLButtonElement> | null>(null);
  const sectionsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const year = new Date().getFullYear();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = cardRef.current;
    const targetSection = e.currentTarget.getAttribute("data-section")!;
    const section = document.querySelector(targetSection);

    if (card && section) {
      targetSection !== "#about"
        ? card.classList.add("is-active")
        : card.classList.remove("is-active");

      sectionsRef.current?.forEach((s) => s.classList.remove("is-active"));
      buttonsRef.current?.forEach((b) => b.classList.remove("is-active"));

      card.setAttribute("data-state", targetSection);
      e.currentTarget.classList.add("is-active");
      section.classList.add("is-active");
    }
  };

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll(".card-section");
    buttonsRef.current = document.querySelectorAll(".card-buttons button");
  }, []);

  return (
    <><div ref={cardRef} className="card" data-state="#about">
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage: "url('https://i.ibb.co/dkbYnfV/fireflu.jpg')",
          }}
        ></div>
        <img
          className="card-avatar"
          src="https://scontent.frec20-1.fna.fbcdn.net/v/t39.30808-6/293613135_5473623919326070_6326872393041188425_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HeN7EOxCr5cAX_VBvJu&_nc_ht=scontent.frec20-1.fna&oh=00_AfAQFqSkyaDS8HkzWlDC4LuS5ZST1wQqWTRNSs0bIJ9qFg&oe=648B7AE5"
          alt="avatar" />
        <h1 className="card-fullname">
          Jr Gouveia{" "}
          <a
            href="https://juniorgouveia.me/"
            title="Portifólio"
            target="_blank"
          >
            🌎
          </a>
        </h1>
        <h2 className="card-jobtitle">Desenvolvedor Web Full-Stack</h2>
      </div>
      <div className="card-main">
        <div className="card-section is-active" id="about">
          <div className="card-content">
            <div className="card-subtitle">O que eu faço?</div>
            <p className="card-desc">
              Desenvolvo aplicações web e mobile, com foco em ReactJS, React
              Native, Node e Java Spring Boot.
            </p>
          </div>
          <div className="card-social">
            <a
              href="https://github.com/jjgouveia/"
              target="_blanck"
              title="GitHub"
            >
              <svg
                fill="#d6dde9"
                width="256px"
                height="256px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1821.63 637.76c0-130.027-43.627-236.373-116.054-319.68 11.627-30.187 50.347-151.36-11.2-315.307 0 0-94.72-32-310.4 122.134-90.133-26.454-186.773-39.68-282.773-40.107-96 .427-192.64 13.653-282.667 40.107C602.749-29.227 507.923 2.773 507.923 2.773c-61.547 163.947-22.72 285.12-11.094 315.307-72.32 83.307-116.266 189.653-116.266 319.68 0 456.533 263.68 558.72 514.453 588.8 0 0-180.267 111.68-180.267 299.413-64.32 30.507-336.533 123.947-437.333-58.133 0 0-59.627-114.347-173.013-122.773 0 0-110.294-1.494-7.787 72.426 0 0 74.027 36.694 125.44 174.294 0 0 57.173 289.92 489.067 159.68 4.373 2.24 1.6 140.266 1.6 168.533h777.173s1.28-277.013 1.28-365.12c0-216.64-144.64-292.48-185.28-329.28 251.627-29.44 515.733-130.133 515.733-587.84"
                    fillRule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jarbasgouveia/"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
              </svg>
            </a>
            <a
              href="https://juniorgouveia.me/"
              title="Portifólio"
              target="_blank"
            >
              <svg
                fill="#d6dde9"
                height="420px"
                width="420px"
                version="1.1"
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                stroke="#d6dde9"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M26,9h-2.6c-1.2-3-4.1-5-7.4-5c-3.3,0-6.2,2-7.4,5H6c-1.7,0-3,1.3-3,3v0.6C3,16.1,5.9,19,9.4,19h13.3 c3.5,0,6.4-2.9,6.4-6.4V12C29,10.3,27.7,9,26,9z M16,6c2.2,0,4.1,1.2,5.2,3H10.8C11.9,7.2,13.8,6,16,6z"></path>{" "}
                    <path d="M23,21C23,21,23,21,23,21l0,2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2H11v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0,0,0,0,0,0 c-2.4-0.1-4.5-1.2-6-2.9V25c0,1.7,1.3,3,3,3h20c1.7,0,3-1.3,3-3v-6.9C27.5,19.8,25.4,20.9,23,21z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/junior.gouveia/"
              target="_blanck"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/junior_gouveia/"
              target="_blanck"
              title="Instagram"
            >
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
              </svg>
            </a>

            <a
              href="https://drive.google.com/file/d/1oCYBDzKNnBWZpW_lVnRVOPR_0K1-rC_T/view?usp=sharing"
              title="Currículo"
            >
              <svg
                width="320px"
                height="320px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.1"
                    d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z"
                    fill="#bfcadc"
                  ></path>{" "}
                  <path
                    d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z"
                    stroke="#bfcadc"
                    strokeWidth="0.12000000000000002"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className="card-section" id="experience">
          <div className="card-content">
            <div className="card-subtitle">EXPERIÊNCIAS</div>
            <div className="card-timeline">
              <div className="card-item" data-year="Atual">
                <div className="card-item-title">
                  Desenvolvedor Full-Stack <span>Freelancer</span>
                </div>
                <div className="card-item-desc">
                  Trabalho com prestação de serviços de desenvolvimento de sites
                  e aplicações mobile híbridas.
                </div>
              </div>
              <div className="card-item" data-year="2022">
                <div className="card-item-title">
                  Desenvolvedor Front-End na <span>B4Connect</span>
                </div>
                <div className="card-item-desc">
                  Desenvolvimento e testagem de aplicações React
                </div>
              </div>
              <div className="card-item" data-year="2016">
                <div className="card-item-title">
                  Back Office na <span>CSU CARDSYSTEM</span>
                </div>
                <div className="card-item-desc">
                  Análise e tratamento de dados em bancos mySQL Server.
                </div>
              </div>
              <div className="card-item" data-year="2018">
                <div className="card-item-title">
                  Back Office na <span>NeoBPO</span>
                </div>
                <div className="card-item-desc">
                  Análise e tratamento de dados internos do cliente Net/Claro.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-section" id="contact">
          <div className="card-content">
            <div className="card-subtitle">CONTATOS</div>
            <div className="card-contact-wrapper">
              <div className="card-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Recife, Pernambuco. Brasil, 51280-030.
              </div>
              <div className="card-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="https://api.whatsapp.com/send?phone=5581996122536&text=Vamos%20trabalhar%20juntos?"
                  title="WhatsApp"
                  target="_black"
                >
                  (81) 99612-2536
                </a>
              </div>
              <div className="card-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a href="mailto:gouvik.dev@gmail.com?subject=Tenho uma proposta!">
                  gouvik.dev@gmail.com
                </a>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=5581996122536&text=Vamos%20trabalhar%20juntos?"
                target="_blanck"
              >
                <button className="contact-me">VAMOS TRABALHAR JUNTOS!?</button>
              </a>
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
            SOBRE
          </button>
          <button
            type="button"
            data-section="#experience"
            onClick={(e) => handleButtonClick(e)}
          >
            EXPERIÊNCIA
          </button>
          <button
            type="button"
            data-section="#contact"
            onClick={(e) => handleButtonClick(e)}
          >
            CONTATO
          </button>
        </div>
      </div>
    </div><footer>
        <div className="footer-content">
          <div className="footer-item">
            <a
              href="https://juniorgouveia.me/"
              title="Portifólio"
              target="_blank"
            >
              Jr Gouveia{" "}
            </a>{" "}
            ©{` ${year}`} - Todos os direitos reservados.
          </div>
        </div>
      </footer></>
  );
};

export default CardComponent;

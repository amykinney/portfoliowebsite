"use client";

import { useState, useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showHello, setShowHello] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setShowHello(true);
          setTimeout(() => {
            setShowHello(false);
            setShowMain(true);
          }, 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Loading screen */}
      {loading && (
        <div className="loading-screen" aria-label="Loading screen">
          <h2>Loading...</h2>
          <Progress.Root
            className="progress-root"
            value={progress}
            aria-label="Loading progress"
          >
            <Progress.Indicator
              className="progress-indicator"
              style={{ width: `${progress}%` }}
            />
          </Progress.Root>
        </div>
      )}

      {/* Welcome screen */}
      {showHello && !loading && (
        <div className="welcome-screen" aria-label="Welcome screen">
          Welcome!
        </div>
      )}

      {/* Main content */}
      {showMain && !loading && !showHello && (
        <main
          style={{
            display: "flex",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Left column */}
          <aside
            style={{
              width: "50%",
              padding: "2rem",
              borderRight: "1px solid var(--silver)",
              boxSizing: "border-box",
              overflowY: "auto",
              backgroundColor: "var(--isabelline)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                style={{
                  marginBottom: "0.5rem",
                  color: "var(--taupe)",
                  fontSize: "60px",
                }}
              >
                Amy Kinney
              </h1>
              <h2
                style={{
                  marginBottom: "1rem",
                  color: "var(--battleship-gray)",
                  fontSize: "30px",
                }}
              >
                Aspiring Tech Consultant
              </h2>
              <NavigationMenu>
                <NavigationMenuList
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    width: "100%",
                    maxWidth: "250px",
                  }}
                >
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#about"
                      style={{ display: "block", padding: "0.5rem 1rem" }}
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#experience"
                      style={{ display: "block", padding: "0.5rem 1rem" }}
                    >
                      Experience
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#projects"
                      style={{ display: "block", padding: "0.5rem 1rem" }}
                    >
                      Projects
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Social icons */}
            <div className="social-icons" aria-label="Social links">
              {["LinkedIn", "Email", "GitHub", "Goodreads"].map((name) => {
                let href = "#";
                let ariaLabel = "";
                let svg;

                switch (name) {
                  case "LinkedIn":
                    href = "https://www.linkedin.com/in/amyelkinney/";
                    ariaLabel = "LinkedIn";
                    svg = (
                      <svg
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    );
                    break;
                  case "Email":
                    href = "mailto:amyelkinney@outlook.com";
                    ariaLabel = "Email";
                    svg = (
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                          fill="currentColor"
                        />
                      </svg>
                    );
                    break;
                  case "GitHub":
                    href = "https://github.com/amykinney";
                    ariaLabel = "GitHub";
                    svg = (
                      <svg
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="currentColor"
                        />
                      </svg>
                    );
                    break;
                  case "Goodreads":
                    href =
                      "https://www.goodreads.com/user/show/61886999-amy-kinney";
                    ariaLabel = "Goodreads";
                    svg = (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                      >
                        <path d="M663.8 382.4c10.2 74.6-9.4 158-71.8 201.4-44.6 31-105.6 28.2-141.6 11.4-74.2-34.6-99-117.2-93.6-194.4 8.6-121.8 81.8-175.8 150.6-175 93.8-0.4 143.6 63.6 156.4 156.6zM960 176v672c0 61.8-50.2 112-112 112H176c-61.8 0-112-50.2-112-112V176c0-61.8 50.2-112 112-112h672c61.8 0 112 50.2 112 112zM724 626.4s-0.2-68-0.2-434.6h-58v80.6c-1.6 0.6-2.4-1-3.2-2.4-19.2-41.4-71.8-92.6-152-92-103.8 0.8-174.4 62.4-201.2 155.6-8.6 29.8-11.6 60.2-11 91.2 3.4 155.8 90.2 235.6 224.8 230.4 57.8-2.2 109-34 138-90.4 1-2 2.2-3.8 3.4-5.8 0.4 0.2 0.8 0.2 1.2 0.4 0.6 7.6 0.4 61.4 0.2 69-0.4 29.6-4 59-14.4 87-15.6 42-44.6 69.4-89 79-35.6 7.8-71.2 7.6-106.4-2.4-43-12.2-73-38-82.2-83.6-0.6-3.2-2.6-2.6-4.6-2.6h-53.6c1.6 21.2 6.4 40.6 17 58.4 48.4 81 165.4 97 256.4 74.8 99.8-24.6 134.6-109.8 134.8-212.6z" />
                      </svg>
                    );
                    break;
                }

                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                    tabIndex={0}
                  >
                    {svg}
                  </a>
                );
              })}
            </div>
          </aside>

          {/* Right column */}
          <section
            style={{
              width: "50%",
              padding: "2rem",
              overflowY: "auto",
              boxSizing: "border-box",
              backgroundColor: "var(--isabelline)",
              color: "var(--taupe)",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {/* About Section */}
            <section id="about" style={{ marginBottom: "40px" }}>
              <p>
                I’m a technologist passionate about building thoughtful,
                intuitive experiences at the intersection of design, data, and
                usability. I love crafting interfaces that not only look
                polished but also empower users.
              </p>
              <br />
              <p>
                Currently pursuing a Bachelor of Science in Informatics with
                minors in Business and Spanish at Indiana University — and
                admitted to the Master of Science in Information Systems (MSIS)
                program at the Kelley School of Business, where I plan to
                further specialize in ethical AI, data strategy, and systems
                design.
              </p>
              <br />
              <p>
                I’ve contributed to a wide range of projects — from nonprofit
                initiatives and hospital partnerships to AI research and tech
                consulting competitions. Whether working independently or
                collaborating in teams, I enjoy exploring how technology can
                solve real-world problems with empathy and precision.
              </p>
              <br />
              <p>
                Outside of tech, you’ll find me reading, searching for cats,
                drinking chai tea, or obsessively organizing things — digital
                and otherwise.
              </p>
            </section>

            {/* Experience Section */}
            <section id="experience" style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "var(--taupe)",
                }}
              >
                Experience
              </h2>

              <div
                style={{
                  display: "flex",
                  marginBottom: "1.5rem",
                  gap: "1rem",
                  border: "1px solid var(--silver)",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "var(--isabelline)",
                }}
              >
                <div
                  style={{
                    minWidth: "80px",
                    color: "var(--battleship-gray)",
                    fontWeight: "500",
                  }}
                >
                  Summer 2025
                </div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "var(--taupe)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Technology Consulting Intern · PwC
                  </h4>
                  <p
                    style={{
                      color: "var(--battleship-gray)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Contributing to PwC’s SAP practice by supporting the
                    implementation and optimization of SAP solutions that
                    enhance business processes and drive seamless system
                    integration.
                  </p>
                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    <Button variant="outline">Jira</Button>
                    <Button variant="outline">Project Management</Button>
                    <Button variant="outline">Defect Testing</Button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  border: "1px solid var(--silver)",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "var(--isabelline)",
                }}
              >
                <div
                  style={{
                    minWidth: "80px",
                    color: "var(--battleship-gray)",
                    fontWeight: "500",
                  }}
                >
                  Summer 2024
                </div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "var(--taupe)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Data Modernization Intern · Allied Solutions
                  </h4>
                  <p
                    style={{
                      color: "var(--battleship-gray)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Supported data modernization by improving data pipelines,
                    creating governance documentation, and enhancing integration
                    with third-party tools.
                  </p>
                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    <Button variant="outline">Microsoft Power BI</Button>
                    <Button variant="outline">Amazon Web Services (AWS)</Button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  border: "1px solid var(--silver)",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "var(--isabelline)",
                  marginTop: "1.5rem", // 👈 This adds the top gap
                }}
              >
                <div
                  style={{
                    minWidth: "80px",
                    color: "var(--battleship-gray)",
                    fontWeight: "500",
                  }}
                >
                  2023–Present
                </div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "var(--taupe)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Ethical AI Intern · CEW&T, Indiana University
                  </h4>
                  <p
                    style={{
                      color: "var(--battleship-gray)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Lead intern for the Ethical AI team at the Center of
                    Excellence for Women & Technology, creating hands-on
                    trainings and ethical guidance around generative AI,
                    chatbots, and digital humans.
                  </p>
                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    <Button variant="outline">AI Ethics</Button>
                    <Button variant="outline">Generative AI</Button>
                    <Button variant="outline">Workshop Design</Button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  border: "1px solid var(--silver)",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "var(--isabelline)",
                  marginTop: "1.5rem", // Maintain spacing consistency
                }}
              >
                <div
                  style={{
                    minWidth: "80px",
                    color: "var(--battleship-gray)",
                    fontWeight: "500",
                  }}
                >
                  2023–2024
                </div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "var(--taupe)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Executive Council Director of Accounting · IU Dance Marathon
                  </h4>
                  <p
                    style={{
                      color: "var(--battleship-gray)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Directed the Accounting Committee, overseeing donation
                    tracking, financial reporting, and fundraising operations
                    for Riley Hospital for Children. Selected as one of 23
                    Executive Council members leading 4,000+ participants and a
                    60-person committee. Personally raised over $25,000 for
                    pediatric care and research.
                  </p>
                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    <Button variant="outline">Nonprofit Finance</Button>
                    <Button variant="outline">Leadership</Button>
                    <Button variant="outline">Team Management</Button>
                    <Button variant="outline">Fundraising Strategy</Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "var(--taupe)",
                }}
              >
                Projects and Activities
              </h2>
              <section id="projects" className="mb-40">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--taupe)" }}
                ></h2>

                <div className="project-container">
                  <img
                    src="/images/postercomp.png"
                    alt="Poster Competition"
                    className="project-image"
                  />
                  <div className="project-description">
                    <h3>Kelley MSIS 3+1 Case Competition</h3>
                    <p>
                      Won 1st place in the Upperclassmen Flight of the 2025 MSIS
                      3+1 Case Competition, which welcomed record sign-ups and
                      expanded participation to students across Indiana and
                      beyond. Collaborated on a tech-driven solution and
                      presented to Kelley School faculty, alumni, and industry
                      judges.
                    </p>
                  </div>
                </div>
                <div className="project-container">
                  <img
                    src="/images/postercomp.png"
                    alt="Poster Competition"
                    className="project-image"
                  />
                  <div className="project-description">
                    <h3>Women&rsquo;s Research Poster Competition</h3>
                    <p>x</p>
                  </div>
                </div>

                <div className="project-container">
                  <img
                    src="/images/aiethics.png"
                    alt="Screenshot of AI Ethics Training"
                    className="project-image"
                  />
                </div>
                <div className="project-container">
                  <img
                    src="/images/postercomp.png"
                    alt="Poster Competition"
                    className="project-image"
                  />
                  <div className="project-description">
                    <h3>Harvard WECode Student Ambassador</h3>
                    <p>x</p>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </main>
      )}
    </>
  );
}

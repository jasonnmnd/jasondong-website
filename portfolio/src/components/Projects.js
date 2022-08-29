import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import ProjectImg1 from '../assets/project-img1.png'
import HypotheticalTransport from '../assets/project_pictures/hypothetical_transport.png'
import Crypto from '../assets/project_pictures/crypto.png'
import HologramShift from '../assets/project_pictures/hologram_shift.png'
import Poker from '../assets/project_pictures/poker.png'
import ADSB from '../assets/project_pictures/adsb.png'
import BoardGame from '../assets/project_pictures/board_game.png'
import SludgeRunner from '../assets/project_pictures/sludge_runner.png'
import SunTracker from '../assets/project_pictures/sun_tracker.png'
import AFRL from '../assets/project_pictures/afrl.png'
import SkunkFeeder from '../assets/project_pictures/skunk_feeder.png'
import IGEM2017 from '../assets/project_pictures/igem2017.png'
import IGEM2018 from '../assets/project_pictures/igem2018.png'
import TrackVisibility from 'react-on-screen';

function Projects() {

  const projects = [
    {
        title: "School Transportation Web App",
        description: "Senior year capstone project to built a full-stack web app in React.js/Django/PostgreSQL to create a portal for staff, parents, and students to use. Staff can manage their school districts including bus planning, email messaging, and user management. Parents and Students are able to view their school pick-up and drop-off times and other school related information.",
        imgURL: HypotheticalTransport,
        hasGithubRepo: true,
        gitHubURL: "https://github.com/jasonnmnd/hypothetical-transportation-cp",
        projectType: "SCHOOL",
        hasProjectWriteUp: false,
        projectURL: ""
    },
    {
        title: "Cryto Tracker",
        description: "Personal project to build my own cryptocurrency dashboard using a pure JavaScript stack. I leveraged a Node.js backend (Express, Cheerio) interfacing with CoinMarketCap.com and a React.js frontend to display the current top 10 most popular cryptocurrency prices. I am currently learning React Native and plan to turn this into a usable iOS/Android App.",
        imgURL: Crypto,
        hasGithubRepo: true,
        gitHubURL: "https://github.com/jasonnmnd/crypto-scraper",
        projectType: "PERSONAL",
        hasProjectWriteUp: false,
        projectURL: ""
    },
    {
        title: "Percepted Augmented Reality Hologram Shift",
        description: "Worked as an undergraduate researcher in Duke's Intelligent Interactive Internet of Things Lab (I^3T) studying user perception of hologram drift. I used Unity's Unreal Engine to build an iOS app to place markers for virtual holograms, designed and conducted multiple user studies, and wrote python scripts to collect and parse user data.",
        imgURL: HologramShift,
        hasGithubRepo: true,
        gitHubURL: "https://github.com/jasonnmnd/HoloMeasure",
        projectType: "SCHOOL",
        hasProjectWriteUp: false,
        projectURL: ""
    },
    {
        title: "iOS Poker Bankroll Tracker",
        description: "Personal project and currently working on designing my first iOS app: a Texas Hold'Em poker bankroll manager with built in equity calculator and pre-flop charts. Currently still under production, but basic functionality and features have been implemented to track and log sessions, filter by tournament format, along with displaying winnings, losses, and hourly statistics",
        imgURL: Poker,
        hasGithubRepo: false,
        gitHubURL: "",
        projectType: "PERSONAL",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/poker.html"
    },
    {
        title: "ADS-B Extension via UAV",
        description: "Designing and building payload for an UAV to have greater ADS-B range extension to track aircraft. Work included implementing scripts on Raspberry Pi for data acquisition, post processing with Python, electrical wiring, load analysis, housing design, and system modelling with Cameo.",
        imgURL: ADSB,
        hasGithubRepo: true,
        gitHubURL: "https://github.com/jasonnmnd/Edge-Computing-ADSB",
        projectType: "WORK",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/adsb.html"
    },
    {
        title: "Java Board Game Collection",
        description: "Developed with an Agile software team in implementing a custom board game collection in Java. Adhered to OOP principles in designing and developing a fully modular game engine and APIs for Checkers, Othello, Tic-Tac-Toe, and Connect-Four with multiplayer and AI capabilities.",
        imgURL: BoardGame,
        hasGithubRepo: true,
        gitHubURL: "https://github.com/jason1440049328/Board-Game-Collection-Java",
        projectType: "SCHOOL",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/cs307.html"
    },
    {
        title: "Verilog & Mips Sludge Runner",
        description: "Designed and built a multi-cycle pipelined processor in Verilog. The processor was incorporated in game and collision logic in implementing a Verilog based game deployed on a FPGA with graphics, sounds, and score keeping.",
        imgURL: SludgeRunner,
        hasGithubRepo: true,
        gitHubURL: "https://github.com/jason1440049328/Sludge-Runner",
        projectType: "SCHOOL",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/ece350.html"
    },
    {
        title: "Sun Tracking Power Supply",
        description: "Designed and deployed an Arduino controlled module capable of tracking the sun to charge a solar panel. The design features an relays in order to impart logic on a repurposed drill motor and stepper motor. The solar panel is used to support other projects at AFLCMC that needed a self-sustaining power supply to power a remote Raspberry Pi.",
        imgURL: SunTracker,
        hasGithubRepo: false,
        gitHubURL: "",
        projectType: "WORK",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/suntracker.html"
    },
    {
        title: "Automated Aircraft Damage Inspection and Tape Bubble Study",
        description: "Shortly after military aircraft are landed, the maintenance team often discover small pockets of air entrapped under tape betwteen aircraft parts. Current solutions require maintainers to deflate small air bubbles by cutting the tape or sometimes stripping and replacing tape over the entire aircraft.",
        imgURL: AFRL,
        hasGithubRepo: false,
        gitHubURL: "",
        projectType: "WORK",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/tapebubble.html"
    },
    {
        title: "Automatic Skunk Feeder",
        description: "We designed a fully portable and modular automatic feeder capable of dispensing food for small exhibit animals. At random time intervals throughout the day, food is dispensed to simulate feeding in the wild without the need of a caretaker. This allows the animals to hunt for their food within the exhibit.",
        imgURL: SkunkFeeder,
        hasGithubRepo: false,
        gitHubURL: "",
        projectType: "SCHOOL",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/skunkfeeder.html"
    },
    {
        title: "Engineered Microbes to Sense and Destroy Biofilms",
        description: "Biodiesel storage tanks are susceptible to water infiltration that often results in the formation of biofilms containing bacteria and fungi. Biofilms may clog pipes, degrade fuel, or corrode storage tanks. We set out to engineer a “seek, aim, and destroy” system for the remediation of microbial biofilm.",
        imgURL: IGEM2018,
        hasGithubRepo: false,
        gitHubURL: "",
        projectType: "WORK",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/igem2018.html"
    },
    {
        title: "Engineered Microbes to Sense and Detect ETEC",
        description: "Every year, Enterotixigenic Escherichia coli (ETEC), the most common form of traveler's diarrhea, affects thousands of deployed warfighters. The goal is to engineer non-pathogenic E. coli to sense ETEC, response to it's presense, and package it in a cellulose matrix.",
        imgURL: IGEM2017,
        hasGithubRepo: false,
        gitHubURL: "",
        projectType: "WORK",
        hasProjectWriteUp: true,
        projectURL: "https://jasonnmnd.github.io/website/igem2017.html"
    }

  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some interesting stuff I've worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">School/Work Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className='justify-content'>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        {/* <Row className='justify-content'>
                        {
                            projects.filter(projects => projects.projectType === "PERSONAL").map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                        </Row> */}
                        <p>Currently Under Construction</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row className='justify-content'>
                        {
                            projects.filter(projects => projects.projectType === ("SCHOOL") || projects.projectType === ("WORK")).map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={ColorSharp2} alt="img"></img> */}
    </section>
  )}

export default Projects
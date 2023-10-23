import React from "react";
import mouseIcon from "../Assets/mouseIcon.svg";
import mouseLine from "../Assets/mouseLine.svg";
import heroImg from "../Assets/heroImg.png";
import Navbar from "../Components/Navbar";
import rocketPath from "../Assets/rocketPath.svg";
import rocket from "../Assets/rocket.svg";
import Footer from "../Components/Footer";
import Links from "../Components/Links";
import Event from "../Components/Event";
import pitch1 from "../Assets/Pitchme_1.jpg";
import pitch2 from "../Assets/Pitchme_2.jpg";
import pitch3 from "../Assets/Pitchme_3.jpg";
import launchPadBg from "../Assets/launchPad-bg.png";
import startUpBg from "../Assets/start-up-bg.png";
import ProfileCard from "../Components/ProfileCard";
import memberTushar from "../Assets/member-1.png";
import memberAnanya from "../Assets/member-2.png";
import memberPriyanshu from "../Assets/member-0.png";
import memberAthrav from "../Assets/member-3.png";
import memberVishal from "../Assets/member-4.png";
import memberShreyansh from "../Assets/member-5.png";
import memberVansh from "../Assets/member-6.png";
import menberRishabh from "../Assets/member-10.png";
import memberSaksham from "../Assets/member-11.png";
import Raj from "../Assets/rajsir.png";
import Aradhana from "../Assets/member.png";
import { TypeAnimation } from "react-type-animation";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Button from "../Components/Button";
import { useState } from "react";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) {
      setVisible(true);
    } else if (scrolled <= 900) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="overflow-hidden">
      {/*Section-1(HeroSection) Starting*/}
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className="h-screen mt-40 transition-all ease-in-out delay-200">
          <div className="text-2xl ls:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            The
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                " Enterpreneurship",
                1000,
                " Innovation",
                1000,
                " Startup",
                1000,
                " Idea",
                1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              // style={{ fontSize: '2em' }}
              cursor={false}
              className="text-[#f9c922] type"
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            Cell
          </div>

          <div className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold mt-5 lg:mt-12 xl:mt-16">
            Galgotias University
          </div>

          <div className="hidden sm:flex flex-row-reverse max-w-full mt-5 ">
            <div className=" ontop fixed flex px-2 h-[50px] items-center justify-center">
              <div className="flex flex-col justify-between gap-y-6 items-center w-[50px]">
                <div className="right-[-6px] top-20 uppercase text-sm font-semibold origin-center rotate-[-90deg] tracking-wide w-[150px]">
                  social handles
                </div>
                <Links direction="flex-col" />
              </div>
            </div>
          </div>
          {/* <div className='sm:flex sm:items-start flex-row-reverse max-w-full mt-10 '>
                        <div className='ontop fixed flex px-8 h-[350px] items-center justify-center'>
                            <div className='flex flex-col justify-between gap-y-6 items-center w-[50px]'>
                                <div className='right-[-6px] top-60 uppercase text-sm font-semibold origin-center rotate-[-90deg] tracking-wide w-[150px]'>
                                    social handles
                                </div>
                                <Links direction="flex-col" />
                            </div>
                        </div>
                    </div> */}

          <div className="absolute bottom-16 sm:bottom-0 left-[50%] lg:top-[700px]">
            <div className="flex justify-center items-center">
              <img
                src={mouseIcon}
                alt="mouseIcon"
                className="h-6 sm:h-7 animate-bounce"
              />
              <img
                src={mouseLine}
                alt="mouseLine"
                className="absolute top-[-30px] h-24 sm:h-28 sm:top-[-80px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Section-1 Ending*/}

      {/*Section-2 (AboutUs) Starting*/}
      <div className="h-max  relative" id="About">
        <div className="uppercase text-3xl mt-16 font-semibold">
          <p>
            <span className="text-[#f9c922]">About</span> us
          </p>
        </div>
        <Fade left>
          <div className="hidden sm:flex absolute z[-1]">
            <img src={rocketPath} alt="path" className="w-44 xl:w-64" />
            <img
              src={rocket}
              alt="Rocket"
              className="w-8 mb-7 xl:mb-9 xl:w-10"
            />
          </div>
        </Fade>

        <div className="gradient-div w-[40%] h-[40%] rounded-full absolute top-[70%] sm:top-[30%]" />
        <div className="gradient-div w-[45%] h-[45%] rounded-full absolute top-16 right-0" />
        <div className="w-full sm:w-8/12 lg:w-[100%] mx-auto mt-20 sm:text-xl md:text-2xl ">
          <p className="text-center px-4 my-3 leading-7 md:leading-10">
            Entrepreneurship Cell, Galgotias University strives to stimulate and
            encourage entrepreneurship and innovation, both within
            Entrepreneurship Cell and beyond. We endeavour to help aspiring
            entrepreneurs overcome any hurdles they face and support them in any
            way possible, including by connecting them to mentors and investors
            and providing any other support they need. Apart from this, we
            attempt to enhance the culture of entrepreneurship and invention.
            From hosting talks with the leaders of various industries,
            conducting workshops to propagate skills related to entrepreneurship
            to organizing events and competitions that enable participants to
            showcase their skills, E-Cell aims to build a community of
            innovation and excellence.
          </p>
        </div>
        {visible && (
          <div className="hidden sm:flex flex-row-reverse px-8 mt-8">
            <Flip left>
              <div
                className="rocketIcon flex items-center justify-center fixed top-[650px] z-50 cursor-pointer "
                onClick={scrollToTop}
              >
                <img
                  src={rocket}
                  alt="Rokect"
                  className="origin-center rotate-[-55deg] w-8"
                />
              </div>
            </Flip>
          </div>
        )}
      </div>
      {/*Section-2 Ending*/}
      {/*Start-up community Section*/}
      <div className="h-max md:h-[1200px]  relative" id="Start-up">
        <div className="hidden xl:flex items-center justify-center ">
          <img src={startUpBg} alt="bg" />
        </div>
        <div className="md:absolute  top-20 flex flex-col justify-center items-center">
          <div className="uppercase text-3xl mt-16 font-semibold">
            <p>
              <span className="text-[#f9c922]">STARTUP</span> COMMUNITY
            </p>
          </div>
          <div className="w-[80%]  flex items-center justify-center flex-col mt-12">
            <div className="md:w-[80%] lg:w-[60%]">
              <span className="font-semibold text-2xl">AIM</span>
              <p className="text-lg my-5">
                To bring the Startups of Galgotias University under one
                community which will help in smooth networking of like-minded
                people. Ultimate aim to make the launchpad of Galgotias
                University successful. Planning Start-up events in the Galgotias
                University to boost an overall understanding of
                Entrepreneurship.
              </p>
            </div>
            <div className="md:w-[80%] lg:w-[60%] mt-8 md:mt-0 lg-mt-8">
              <span className="font-semibold text-2xl ">Community</span>
              <p className="text-lg my-5">
                Being part of an engaging community gives us a sense of
                belonging. It enables us to share personal relatedness and
                support the perpetual growth of each other, ourselves, and our
                environment.
                <br />
                <br />
                The Start-ups community will act as a catalyst in the process of
                planning and launching the start-ups from the university and
                also help in the overall growth of the university as well.
              </p>
            </div>
            <Button
              title={"JOIN STARTUP COMMUNITY"}
              link={"https://bit.ly/3CTTaWl"}
              hideOnSmall={false}
            />
          </div>
        </div>
      </div>
      {/*Start-up community Section ending*/}

      {/*Section-3 (Events) starting*/}
      <div className="h-max relative mt-16" id="Events">
        <div className="uppercase text-3xl mt-16 font-semibold">
          <p>
            <span className="text-[#f9c922]">Our</span> Events
          </p>
        </div>
        <div className="w-[90%] mx-auto md:my-36">
          <Event
            eventTitle="Pitch Me"
            eventDesc="Pitch Me is a series event of pitching competiton which occurs yearly. Industry investors come and judges the idea."
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
            isOpp={false}
          />
        </div>
        <div className="w-[90%] mx-auto my-36">
          <Event
            eventTitle="Launch Pad"
            eventDesc="Launchpad , an event that would spark innovation and creativity by bringing together founders, budding entrepreneurs, mentors, and industry leaders. It is going to be an official event series hosted by Entrepreneurship Cell, Galgotias University. It will be a 24-hour hackathon where people will get together to solve problems or create new ideas around a specific topic. There will be certain rules that everyone needs to follow while developing their product. There will also be a jury who will evaluate the final product.
                    North- India’s Biggest Student Start-up & Entrepreneurship Event of 2023, 2 Day event on campus."
            paraTwo="Launchpad, would start by a speaker session which would act as a fuel in the minds of the budding entrepreneurs. The Speaker would be a renowned founder from the start-up ecosystem."
            isOpp={false}
            bgImg={launchPadBg}
            extendDescWidth={true}
            isCentered={true}
          />
        </div>
        <div className="w-[90%] mx-auto my-36">
          <Event
            eventTitle="E-summit (Comming Soon!)"
            eventDesc="Considering the recent hype around the start-up culture in country and spirit amongst college students regarding the same, E-CELL Galgotias has planned an event which shall address all their queries and provide a platform for those who are a part of this community."
            paraTwo="The Summit brings together the speakers that are the best breed of entrepreneurs, innovators, venture capitalists, business model creators, government representatives, consultants, policy-makers, academicians, support groups, business coaches and business practitioners to present and discuss innovation and success under the aegis of entrepreneurship for Small and Medium Businesses as they recount their learning and experiences, share their insights and practices that have enriched their ventures.
                    "
            extendDescWidth={true}
          />
        </div>
        <div className="w-[90%] mx-auto ">
          <Event
            eventTitle="Pitch Me 2.0  "
            eventDesc="Considering the recent hype around the start-up culture in country and spirit amongst college students regarding the same, E-CELL Galgotias has planned an event which shall address all their queries and provide a platform for those who are a part of this community."
            paraTwo="The Summit brings together the speakers that are the best breed of entrepreneurs, innovators, venture capitalists, business model creators, government representatives, consultants, policy-makers, academicians, support groups, business coaches and business practitioners to present and discuss innovation and success under the aegis of entrepreneurship for Small and Medium Businesses as they recount their learning and experiences, share their insights and practices that have enriched their ventures."
            imgOne={pitch1}
            imgTwo={pitch2}
            imgThree={pitch3}
            isOpp={false}
          />
        </div>
        <div className="gradient-div md:w-[40rem] md:h-[40rem] rounded-full absolute top-[30%] sm:left-[10%] md:left-[20%] lg:left-[30%]" />
      </div>
      {/*Section-3 Ending */}

      {/*Section-4 (Our teams) starting*/}
      <div className="w-screen pb-20" id="Team">
        <div className="uppercase text-3xl mt-16 font-semibold">
          <p>
            Our <span className="text-[#f9c922]">Team</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-y-24 mt-24 w-[80%] mx-auto">
          <div>
            <p className="text-md lg:text-xl text-[#f9c922] py-5">
              <i>Under the guidance of</i>
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto">
              <Fade bottom>
                <ProfileCard
                  img={Aradhana}
                  name={"Aradhana Galgotia"}
                  role={""}
                  linkedinLink={
                    "https://www.linkedin.com/in/ananya-goswami-3a3702106/"
                  }
                  instaLink={
                    "https://instagram.com/ananyadolly?igshid=YmMyMTA2M2Y="
                  }
                />
              </Fade>
            </div>
          </div>
          <div>
            <p className="text-md lg:text-xl  text-[#f9c922] py-5">
              <i>Under the mentorship of</i>
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto">
              <Fade bottom>
                <ProfileCard
                  img={Raj}
                  name={"Raj Singh Bhati"}
                  role={""}
                  linkedinLink={
                    "https://www.linkedin.com/in/tushar-asthana2402/"
                  }
                  instaLink={
                    "https://instagram.com/tushar.asthana_?igshid=YmMyMTA2M2Y="
                  }
                />
              </Fade>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[60%] mx-auto">
            <Fade bottom>
              <ProfileCard
                img={memberTushar}
                name={"Tushar Asthana"}
                role={"President"}
                linkedinLink={"https://www.linkedin.com/in/tushar-asthana2402/"}
                instaLink={
                  "https://instagram.com/tushar.asthana_?igshid=YmMyMTA2M2Y="
                }
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAnanya}
                name={"ANANYA GOSWAMI"}
                role={"Vice President"}
                linkedinLink={
                  "https://www.linkedin.com/in/ananya-goswami-3a3702106/"
                }
                instaLink={
                  "https://instagram.com/ananyadolly?igshid=YmMyMTA2M2Y="
                }
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberPriyanshu}
                name={"Priyanshu Bir"}
                role={"Event Advisor"}
                linkedinLink={
                  "https://www.linkedin.com/in/priyanshu-bir-44545a1b7/"
                }
                instaLink={"https://www.instagram.com/sauronium/"}
              />
            </Fade>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[90%] mx-auto">
            <Fade bottom>
              <ProfileCard
                img={menberRishabh}
                name="Rishabh Jain"
                role="Technical Head"
                linkedinLink={"https://www.linkedin.com/in/rishi23jain/"}
                instaLink={"https://www.instagram.com/rishi23jain/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberAthrav}
                name={"ATHARVA SRIVASTAVA"}
                role="Event Management Head"
                linkedinLink={
                  " https://www.linkedin.com/in/atharva-srivastava-profile"
                }
                instaLink={"https://www.linkedin.com/in/atharvva_/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberShreyansh}
                name={"SHREYANSH GUPTA"}
                role="Digital Media Head"
                linkedinLink={
                  "https://www.linkedin.com/in/shreyansh-gupta-1036b9225/"
                }
                instaLink={
                  "https://instagram.com/shreyansh.gupta10?igshid=YmMyMTA2M2Y="
                }
              />
            </Fade>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-around items-center md:w-[90%] mx-auto">
            <Fade bottom>
              <ProfileCard
                img={memberVishal}
                name={"VISHAL DIAVISINE"}
                role="Startup - Development Head"
                linkedinLink={
                  "https://www.linkedin.com/in/vishal-diavisine-40a97a232/"
                }
                instaLink={"https://www.instagram.com/vishal.20_/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberSaksham}
                name={"SAKSHAM CHAWLA"}
                role="Public Realations"
                linkedinLink={"https://www.linkedin.com/in/saksham5400/"}
                instaLink={"https://www.instagram.com/i.sakshamchawla/"}
              />
            </Fade>
            <Fade bottom>
              <ProfileCard
                img={memberVansh}
                name="VANSH TANEJA"
                role="Marketing Head"
                linkedinLink={
                  "https://www.linkedin.com/in/vansh-taneja-0809381a0/"
                }
                instaLink={
                  "https://instagram.com/taneja.vansh?igshid=YmMyMTA2M2Y="
                }
              />
            </Fade>
          </div>
        </div>
      </div>
      {/*Section-4 Ending*/}

      <Footer />
    </div>
  );
};

export default Home;

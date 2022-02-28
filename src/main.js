import Tag from "./component/Tag";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaHackerrank, FaTwitter } from "react-icons/fa";

import { useEffect, useState } from "react";
import { Card } from "./component/Card";

function Main() {
	const [screenheight, setScreenHeight] = useState(window.innerHeight);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const heightResize = () => {
		setScreenHeight(window.innerHeight - 60);
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		heightResize();
		window.addEventListener("resize", heightResize);
		return () => {
			window.removeEventListener("resize", heightResize);
		};
	});

	return (
		<div>
			<div className='container'>
				<ScrollAnimation duration={1} animateIn='fadeIn' animateOut='fadeOut'>
					<section
						style={{ height: screenheight + "px " }}
						className='bio-container'>
						<header className='intro-text'>
							<p className='h0'>Hi,my name is</p>
							<p className='h1'>PRAMOD THAPA</p>
							<p className='h2'>A LOVER OF LATEST TECHNOLOGY AND A DEVELOPER</p>

							<p className='h3'>
								I had recently graduated doing Computer Science and Engineering
								and have good knowledege of web devlopment and latest web
								framework. I love to learn new technology and currently focoused
								on learning AI.
							</p>
							<button className='button btn-secondary'>Get in touch</button>
						</header>
						<div className='intro-img-container'>
							<img className='intro-img' src='./image/me.jpeg' alt='pramod' />
						</div>
					</section>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
					<section
						id='about'
						className='abt-container'
						style={{
							height: screenWidth < 400 ? "100%" : screenheight + "px ",
						}}>
						<p className='text-right fh1'>About</p>
						<div className='d-flex m-abt'>
							<div className='abtImg-container'>
								<img className='abt-img' src='./image/me2.jpg' alt='' />
							</div>

							<div className='abt-text'>
								<p className='fp1 '>
									The beauty of technology is that it give you the power to
									build your imigination. and building the think you love is
									much more pleasure than any other kind of pleasure.
								</p>
								<p className='fp1 '>
									So, I am an inventor and I love to work in any type of project
									it may be where I dont have any expertiese because at the end
									of day you learn some thing new and exciting and whats better
									than that.
								</p>
								<p className='fp1 '>
									From past two year I have been working in web developing
									frontend and have learned many exiciting things I have been
									working for small business .
								</p>
								<p className='fp1 '>
									Here are a few technologies I've been working with recently:
								</p>
								<div className='d-flex fp1'>
									<ul>
										<li>Javascript</li>
										<li>Next js</li>
										<li>Html</li>
										<li>Css</li>
									</ul>
									<ul>
										<li>Bootstrap</li>
										<li>React-bootstrap</li>
										<li>scss</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
					<section id='work'>
						<p className='fh1 '>Some of my work</p>
						<div className='c-cont'>
							<Card>
								<Card.Img className='card-img' src='./image/banner2.png' />

								<Card.Body>
									<h4 style={{ margin: "0px", fontSize: "18px" }}>
										NGOs website using Next.Js
									</h4>
									<p>
										Develop and deploy fully functional website for NGO.It is
										powered by next js for frontend and for backend it uses
										Strapi cms with mongodb. For media hosting it use amazon sw3
										bucket.
									</p>
									<div className='tag-container'>
										<div className='d-flex'>
											<Tag tagname='javascript' />
											<Tag tagname='css' />
											<Tag tagname='html' />
											<Tag tagname='nextjs' />
										</div>

										<a
											style={{ textDecoration: "none" }}
											href='https://whocares.vercel.app/'
											target={"_blank"}
											rel='noreferrer'
											className='fsh1 text-right'>
											<p>Visit Now</p>
										</a>
									</div>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img className='card-img' src='./image/banner.PNG' />

								<Card.Body>
									<h4 style={{ margin: "0px", fontSize: "18px" }}>
										Company website using React
									</h4>
									<p>
										It is a react template design for company. It can be used by
										company for sale as well as marketing. As website are te
										gateway to internet.It is build in react and react-bootstrap
										a ui framework
										<br />
									</p>
									<div className='tag-container'>
										<div className='d-flex'>
											<Tag tagname='javascript' />
											<Tag tagname='css' />
											<Tag tagname='html' />
											<Tag tagname='react-bootstrap' />
										</div>

										<a
											style={{ textDecoration: "none" }}
											href='https://turing-ksnsc63d2-prakus.vercel.app/'
											target={"_blank"}
											rel='noreferrer'
											className='fsh1 text-right'>
											<p>Visit Now</p>
										</a>
									</div>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img className='card-img' src='./image/banner3.png' />

								<Card.Body>
									<h4 style={{ margin: "0px", fontSize: "18px" }}>
										MOF Kalimpong
									</h4>
									<p>
										My current project is mof website. Where I am using React
										with plain css for devloping website. This website will be
										linked with instgram api for latest trend photo of gym
										member.It will have its own Blog pages as well.
									</p>
									<div className='tag-container'>
										<div className='d-flex'>
											<Tag tagname='javascript' />
											<Tag tagname='css' />
											<Tag tagname='html' />
											<Tag tagname='React' />
										</div>
										<a
											style={{ textDecoration: "none" }}
											href='https://prakus-mof.vercel.app/'
											target={"_blank"}
											rel='noreferrer'
											className='fsh1 text-right'>
											<p>Visit Now</p>
										</a>
									</div>
								</Card.Body>
							</Card>
						</div>
					</section>
				</ScrollAnimation>

				<section id='contact' className='container'>
					<p className='fh1 text-center '>Get In Touch</p>
					<p className='text-center fp1'>Looking for opportunities </p>

					<div className='contact-link-container'>
						<a href='mailto:pramodthapa2321@gmail.com' className='contact-link'>
							<MdEmail
								className='contact-icon '
								size={screenWidth <= 350 ? "1em" : "1.2em"}
							/>
							<p className='m-0 text-secondary'>Email </p>
							<p className='contact-font '>pramodthapa2321@gmail.com</p>
						</a>

						<a
							href='https://bit.ly/3gl7UC8'
							className='contact-link'
							rel='noreferrer'
							target='_blank'>
							<AiFillGithub
								className='contact-icon '
								size={screenWidth <= 350 ? "1em" : "1.2em"}
							/>
							<p className='m-0 text-secondary'>Github </p>
							<p className='contact-font '>Prakus</p>
						</a>
						<a
							href='https://bit.ly/383HakU'
							target='_blank'
							rel='noreferrer'
							className='contact-link'>
							<MdPhoneIphone
								className='contact-icon '
								size={screenWidth <= 350 ? "1em" : "1.2em"}
							/>
							<p className='m-0 text-secondary'>Phone </p>
							<p className='contact-font '>+91-9952267492</p>
						</a>
						<a
							href='https://bit.ly/3z64Pgt'
							target='_blank'
							rel='noreferrer'
							className='contact-link'>
							<FaFacebook
								className='contact-icon '
								size={screenWidth <= 350 ? "1em" : "1.2em"}
							/>
							<p className='m-0 text-secondary'>Facebook </p>
							<p className='contact-font '>Pramod Thapa</p>
						</a>
						<a
							href='https://bit.ly/3kegp2R'
							target='_blank'
							rel='noreferrer'
							className='contact-link '>
							<FaHackerrank
								className='contact-icon '
								size={screenWidth <= 350 ? "1em" : "1.2em"}
							/>
							<p className='m-0 text-secondary'>Hacker Rank </p>
							<p className='contact-font '>Pramod</p>
						</a>
						<a
							href='https://bit.ly/2XK53MG'
							target='_blank'
							rel='noreferrer'
							className='contact-link'>
							<FaTwitter
								className='contact-icon '
								size={screenWidth <= 350 ? "1em" : "1.2em"}
							/>
							<p className='m-0 text-secondary '>Twitter </p>
							<p className='contact-font '>Pramod</p>
						</a>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Main;

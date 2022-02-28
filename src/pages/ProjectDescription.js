import React, { useRef, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
function ProjectDescription() {
	const [screenHeight, setSeceenHeight] = useState("500");
	const section = useRef(null);
	const selector = useRef(null);

	const selectorHandler = (id) => {
		console.log(selector);

		for (let i = 0; i < section.current.children.length; i++) {
			section.current.children[i].style.display = "none";
			section.current.children[i].classList.remove("fadeIn");
			selector.current.children[i].classList.remove("text-primary");

			selector.current.children[i].classList.remove("bg");

			section.current.children[id].style.display = "";
			selector.current.children[id].classList.add("text-primary");
			section.current.children[id].classList.add("fadeIn");

			selector.current.children[id].classList.add("bg");
		}
		const resizeWindow = () => {
			if (window.innerWidth < 1254) {
				setSeceenHeight("30");
			} else {
				setSeceenHeight("500");
			}
		};
		useEffect(() => {
			window.addEventListener("resize", resizeWindow);
			return () => {
				window.removeEventListener("resize", resizeWindow);
			};
		});

		return (
			<div>
				<section className='container-fluid'>
					<div className='banner'>
						<div className='banner-overlay'>
							<div className='border banner-caption '>
								<p className='text-center m-0 fh2'>Project</p>
								<p className='text-center m-0 fh2'>Amazon Clone</p>
							</div>
						</div>
						<img
							style={{ width: "100%" }}
							src='image/banner.PNG'
							alt='project'
						/>

						<div className='border banner-caption '>
							<p className='text-center m-0 fh2'>Project</p>
							<p className='text-center m-0 fh2'>Amazon Clone</p>
						</div>
						<div className='banner-overlay'></div>
						<img src='image/banner.PNG' alt='project' />
					</div>
				</section>
				<div className='container-fluid projectDes-section'>
					<div
						ref={selector}
						style={{ height: screenHeight + "px" }}
						className='tableofcontent'>
						<p
							className=' side-option'
							onClick={() => {
								selectorHandler(0);
							}}>
							Project Description
						</p>
						<p
							className=' side-option'
							onClick={() => {
								selectorHandler(1);
							}}>
							Area of focous
						</p>
						<p
							className=' side-option'
							onClick={() => {
								selectorHandler(2);
							}}>
							Technology Stack
						</p>
						<p
							className=' side-option'
							onClick={() => {
								selectorHandler(3);
							}}>
							Glance of Project
						</p>
						<p
							className=' side-option'
							onClick={() => {
								selectorHandler(4);
							}}>
							What I learn
						</p>
					</div>
					<div ref={section} className='content'>
						<ScrollAnimation
							duration={1}
							animateIn='fadeIn'
							animateOut='fadeOut'>
							<section>
								<h2 className='fh3 '>PROJECT DESCRIPTION</h2>
								<p className='fp1'>
									Lorem ipsum dolor sit amet, officia excepteur ex fugiat
									reprehenderit enim labore culpa sint ad nisi Lorem pariatur
									mollit ex esse exercitation amet. Nisi anim cupidatat
									excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
									est aliquip amet voluptate voluptate dolor minim nulla est
									proident. Nostrud officia pariatur ut officia. Sit irure elit
									esse ea nulla sunt ex occaecat reprehenderit commodo officia
									dolor Lorem duis laboris cupidatat officia voluptate. Culpa
									proident adipisicing id nulla nisi laboris ex in Lorem sunt
									duis officia eiusmod. Aliqua reprehenderit commodo ex non
									excepteur duis sunt velit enim. Voluptate laboris sint
									cupidatat ullamco ut ea consectetur et est culpa et culpa
									duis.
								</p>
							</section>
						</ScrollAnimation>
						<ScrollAnimation
							duration={1}
							animateIn='fadeIn'
							animateOut='fadeOut'>
							<section>
								<h2 className='fh3'>AREA OF FOCOUS</h2>
							</section>
						</ScrollAnimation>
						<ScrollAnimation
							duration={1}
							animateIn='fadeIn'
							animateOut='fadeOut'>
							<section>
								<h2 className='fh3 '>TECHNOLOGY STACK</h2>
								<div className=''>
									<div></div>
									<div></div>
									<div></div>
								</div>
							</section>
						</ScrollAnimation>
						<ScrollAnimation
							duration={1}
							animateIn='fadeIn'
							animateOut='fadeOut'>
							<section>
								<h2 className='fh3 '>GLANCE OF PROJECT</h2>
							</section>
						</ScrollAnimation>
						<ScrollAnimation
							duration={1}
							animateIn='fadeIn'
							animateOut='fadeOut'>
							<section>
								<h2 className='fh3 '>WHAT I LEARN</h2>
								<p className='fp1'>
									Lorem ipsum dolor sit amet, officia excepteur ex fugiat
									reprehenderit enim labore culpa sint ad nisi Lorem pariatur
									mollit ex esse exercitation amet. Nisi anim cupidatat
									excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
									est aliquip amet voluptate voluptate dolor minim nulla est
									proident. Nostrud officia pariatur ut officia. Sit irure elit
									esse ea nulla sunt ex occaecat reprehenderit commodo officia
									dolor Lorem duis laboris cupidatat officia voluptate. Culpa
									proident adipisicing id nulla nisi laboris ex in Lorem sunt
									duis officia eiusmod. Aliqua reprehenderit commodo ex non
									excepteur duis sunt velit enim. Voluptate laboris sint
									cupidatat ullamco ut ea consectetur et est culpa et culpa
									duis.
								</p>
							</section>
						</ScrollAnimation>
					</div>
				</div>
			</div>
		);
	};
}

export default ProjectDescription;

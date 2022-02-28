import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	const [theme, setTheme] = useState("dark");
	const [screenWidth, setSeceenWidth] = useState(window.innerWidth);
	const [navhandler, setNavHandler] = useState(false);
	const [checked, setChecked] = useState(false);

	const themeHandler = (event) => {
		setChecked(!checked);
		checked ? setTheme("dark") : setTheme("light");
	};
	const resizeWindow = () => {
		setSeceenWidth(window.innerWidth);
	};

	useEffect(() => {
		resizeWindow();
		window.addEventListener("resize", resizeWindow);
		return () => {
			window.removeEventListener("resize", resizeWindow);
		};
	});

	const nav = () => {
		if (screenWidth > 767 || navhandler) {
			return (
				<ul className='nav'>
					<li className='nav-item'>
						<HashLink to='#about'>About</HashLink>
					</li>
					<li className='nav-item'>
						<HashLink to='#work'>Work</HashLink>
					</li>
					<li className='nav-item'>
						<HashLink to='#contact'>Contact</HashLink>
					</li>
					<li className=' nav-item'>
						<a
							href='/data/resume.pdf'
							target='_blank'
							rel='noreferrer'
							className='button'>
							Resume
						</a>
					</li>
					<li>
						<label class='switch'>
							<input
								checked={checked}
								type='checkbox'
								onChange={themeHandler}
							/>
							<span class='slider round'></span>
						</label>
					</li>
				</ul>
			);
		}
	};

	return (
		<div className='navbar'>
			{}
			<Link to='/home'>
				<img
					src={theme === "light" ? "./image/light.png" : "./image/dark.png"}
					alt='logo'
					className='brand-logo'
				/>
			</Link>

			<FaBars
				style={{
					color: theme === "light" ? "#e2c890" : "#ffc107",
					display: screenWidth < 767 ? "" : "none",
				}}
				className='left'
				size='1.8em'
				onClick={() => {
					setNavHandler(!navhandler);
				}}
			/>
			{nav()}

			{theme === "light" ? (
				<Helmet>
					<link href='/css/light.css' rel='stylesheet' />
				</Helmet>
			) : (
				<Helmet>
					<link href='/css/dark.css' rel='stylesheet' />
				</Helmet>
			)}
		</div>
	);
};

export default Navbar;

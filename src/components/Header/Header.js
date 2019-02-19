import React from "react";
import logo from "../../logo.svg";
import classes from "../../GlobalCSS//main.module.css";

const header = props => {
	return (
		<header className={classes.header}>
			<img src={logo} className={classes.logo} alt="logo" />
			<p>{props.title}</p>
			<a
				className={classes.header_link}
				href="https://github.github.com/gfm/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Github gfm spec
			</a>
		</header>
	);
};

export default header;

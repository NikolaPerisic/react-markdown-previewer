import React from "react";
import logo from "../../logo.svg";
import classes from "../../GlobalCSS//main.module.css";

const header = props => {
	return (
		<header className={classes.header}>
			<img src={logo} className={classes.logo} alt="logo" />
			<p>React Markdown Previewer</p>
			<a
				className={classes.header_link}
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	);
};

export default header;

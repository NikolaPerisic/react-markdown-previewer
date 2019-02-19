import React from "react";
import classes from "../../GlobalCSS/main.module.css";
import ReactMarkdown from "react-markdown";

const preview = props => {
	return (
		<div className={classes.PreviewBox}>
			<ReactMarkdown source={props.outputMarkup} className={classes.Output} />
		</div>
	);
};

export default preview;

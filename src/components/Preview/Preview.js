import React from "react";
import classes from "../../GlobalCSS/main.module.css";

const preview = props => {
	return (
		<div className={classes.PreviewBox}>
			<p>{props.outputMarkup}</p>
		</div>
	);
};

export default preview;

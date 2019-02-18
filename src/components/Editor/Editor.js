import React from "react";
import classes from "../../GlobalCSS/main.module.css";

const editor = props => {
	return (
		<div>
			<textarea
				type="text"
				className={classes.Editor_textarea}
				defaultValue={props.text}
				onChange={props.editText}
			/>
		</div>
	);
};

export default editor;

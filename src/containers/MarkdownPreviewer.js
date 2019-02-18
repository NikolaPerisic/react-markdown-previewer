import React, { Component } from "react";
import classes from "../GlobalCSS/main.module.css";
import Header from "../components/Header/Header";
import Editor from "../components/Editor/Editor";
import Preview from "../components/Preview/Preview";
import Aux from "../Aux/Aux";

class MarkdownPreviewer extends Component {
	state = {
		headerText: "Header Text",
		placeholder: "Lorem Ipsum Dolor Sit Amet..."
	};
	markupEditHandler = el => {
		const markupText = el.target.value;
		this.setState({ placeholder: markupText });
		console.log(this.state.placeholder);
		return markupText;
	};
	render() {
		return (
			<Aux>
				<Header />
				<div className={classes.Wrapper}>
					<Editor
						text={this.state.placeholder}
						editText={this.markupEditHandler}
					/>
					<Preview outputMarkup={this.state.placeholder} />
				</div>
			</Aux>
		);
	}
}

export default MarkdownPreviewer;

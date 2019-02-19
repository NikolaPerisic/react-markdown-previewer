import React, { Component } from "react";
import classes from "../GlobalCSS/main.module.css";
import Header from "../components/Header/Header";
import Editor from "../components/Editor/Editor";
import Preview from "../components/Preview/Preview";
import Aux from "../Aux/Aux";

class MarkdownPreviewer extends Component {
	state = {
		headerText: "Header Text",
		markup: "# This is a header\n\nAnd this is a paragraph"
	};
	markupEditHandler = el => {
		const markupText = el.target.value;
		this.setState({ markup: markupText });
		console.log(this.state.markup);
		return markupText;
	};
	render() {
		return (
			<Aux>
				<Header />
				<div className={classes.Wrapper}>
					<Editor text={this.state.markup} editText={this.markupEditHandler} />
					<Preview outputMarkup={this.state.markup} />
				</div>
			</Aux>
		);
	}
}

export default MarkdownPreviewer;

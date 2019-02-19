import React, { Component } from "react";
import classes from "../GlobalCSS/main.module.css";
import Header from "../components/Header/Header";
import Editor from "../components/Editor/Editor";
import Preview from "../components/Preview/Preview";
import Footer from "../components/Footer/Footer";
import Aux from "../Aux/Aux";
import Markup from "../assets/markup/markup";

class MarkdownPreviewer extends Component {
	state = {
		headerText: "React Markdown Previewer",
		markup: Markup
	};
	markupEditHandler = el => {
		const markupText = el.target.value;
		this.setState({ markup: markupText });
		return markupText;
	};
	render() {
		return (
			<Aux>
				<Header title={this.state.headerText} />
				<div className={classes.Wrapper}>
					<Editor text={this.state.markup} editText={this.markupEditHandler} />
					<Preview outputMarkup={this.state.markup} />
				</div>
				<Footer />
			</Aux>
		);
	}
}

export default MarkdownPreviewer;

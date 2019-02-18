import React, { Component } from "react";
import Header from "../components/Header/Header";

class MarkdownPreviewer extends Component {
	state = {
		headerText: "Header Text",
		placeholder: "Lorem Ipsum Dolor Sit Amet..."
	};
	render() {
		return (
			<div>
				<Header />
				<p>some text</p>
			</div>
		);
	}
}

export default MarkdownPreviewer;

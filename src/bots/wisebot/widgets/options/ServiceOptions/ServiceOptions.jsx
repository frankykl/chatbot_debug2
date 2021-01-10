import React from "react";
import Options from "../Options/Options";

const ServiceOptions = props => {
	const options = [
		{
			name: "Option1",
			handler: props.actionProvider.toMyPage,
			id: 1,
		},
	];
  return <Options options={options} />; };

export default ServiceOptions;

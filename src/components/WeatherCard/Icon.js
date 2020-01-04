import React from "react";
import styled from "@emotion/styled";

const Icon = props => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (props.condition) {
    case value:
      icon = "";
      break;

    default:
      break;
  }

  return <Icon src="./img/Cloudy.png" alt="Weather Icon" />;
};

export default Icon;

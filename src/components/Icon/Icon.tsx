import * as React from "react";
import styled from "react-emotion";

export interface IIcon {
  /**
   * The Icon SVG
   */
  source: string;
}

const StyledIcon = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: middle;
`;

export default (props: IIcon) => <StyledIcon src={props.source} />;

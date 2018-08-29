import * as React from "react";
import styled from "react-emotion";
import Icon, { IIcon } from "../Icon/Icon";

export interface INavItem {
  /**
   * The NavItem ID
   */
  id: string;

  /**
   * The NavItem Name
   */
  name: string;

  /**
   * The NavItem Icon
   */
  icon: IIcon;

  /**
   * The NavItem Name
   */
  isCollapsed?: boolean;

  /**
   * The NavItem Link
   */
  link: string;
}

const StyledAnchor = styled.a`
  text-decoration: none;
  display: block;
  color: #2d3436;
  font-family: Helvetica;
  font-weight: 300px;
  font-size: large;
  width: 100%;
  padding: 0.5em;
  margin: 0;
  &:hover {
    background-color: #dfe6e9;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
`;

const StyledSpan = styled.span`
  margin-left: 20px;
`;

export default (props: INavItem) => (
  <StyledAnchor href={props.link}>
    <Icon source={props.icon.source} />
    <StyledSpan hidden={props.isCollapsed}> {props.name} </StyledSpan>
  </StyledAnchor>
);

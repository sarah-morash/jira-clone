import { prependOnceListener } from "cluster";
import { css } from "emotion";
import * as React from "react";
import styled from "react-emotion";
import chevronleft from "../../assets/Icons/chevronleft.svg";
import chevronright from "../../assets/Icons/chevronright.svg";
import project from "../../assets/Icons/project.svg";
import Icon, { IIcon } from "../Icon/Icon";
import NavItem, { INavItem } from "../NavItem/NavItem";

interface ISidebarProps {
  /**
   * The Project ID
   */
  id: string;

  /**
   * The Project Name
   */
  name: string;

  /**
   * The Project Icon
   */
  icon?: string;

  /**
   * The Project Icon
   */
  navItems: INavItem[];
}

interface ISidebarState {
  /**
   *
   */
  isCollapsed: boolean;
}

const StyledText = styled.p`
  color: #00cec9;
  font-size: 36px;
  padding: 5px;
  text-align: center;
  font-family: Helvetica;
  font-weight: 300;
  margin: 0;
`;

const Drawer = styled.div`
  background-color: #fff;
  height: 100%;
  width: fit-content;
  overflow: auto;
  display: block;
  z-index: 5;
  border-right: 1px solid #b2bec3;
  box-shadow: 1px 1px 1px 1px #dfe6e9;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  height: 100%;
`;

const Project = styled.div`
  font-family: Helvetica;
  border-bottom: 2px solid #b2bec3;
  box-shadow: 1px 1px 1px 1px #dfe6e9;
  display: inline-block;
  display: block;
  margin: 0 auto;
  padding: 5px;
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const HideDetails = styled.img`
  bottom: 0;
  text-decoration: none;
  display: block;
  color: #2d3436;
  font-family: Helvetica;
  font-weight: 300px;
  line-height: 1em;
  width: 100%;
  padding: 0.5em;
  margin: 0;
  &:hover {
    background-color: #b2bec3;
    transition: 0.2s ease-in;
  }
`;

const projectIcon = css({
  display: "block",
  height: "36px",
  margin: "0 auto",
  padding: "5px",
  width: "36px"
});

const backIcon = css({
  bottom: "0",
  cursor: "pointer",
  display: "block",
  height: "36px",
  marginLeft: "auto",
  padding: "10px",
  position: "sticky",
  width: "36px"
});

class Sidebar extends React.Component<ISidebarProps, ISidebarState> {
  constructor(props: ISidebarProps) {
    super(props);
    this.state = {
      isCollapsed: false
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  public onInputChange() {
    const isCollapsed = !this.state.isCollapsed;
    this.setState({ ...this.state, isCollapsed });
  }
  public render() {
    return (
      <Drawer>
        <Project>
          <StyledText hidden={this.state.isCollapsed}>
            {" "}
            {this.props.name}{" "}
          </StyledText>
          <img className={projectIcon} src={project} />
        </Project>
        <List>
          {this.props.navItems.map((navItem: INavItem) => (
            <NavItem
              key={navItem.id}
              {...navItem}
              isCollapsed={this.state.isCollapsed}
            />
          ))}
        </List>
        {this.state.isCollapsed ? (
          <img
            className={backIcon}
            src={chevronleft}
            onClick={event => this.onInputChange()}
          />
        ) : (
          <img
            className={backIcon}
            src={chevronright}
            onClick={event => this.onInputChange()}
          />
        )}
      </Drawer>
    );
  }
}

export default Sidebar;

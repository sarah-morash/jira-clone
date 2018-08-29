import * as React from "react";
import styled from "react-emotion";
import Swimlane, { ISwimlane } from "../Swimlane/Swimlane";

interface IBoard {
  /**
   * The header component
   * to be rendered atop
   * the board
   */
  header: JSX.Element;

  /**
   * List of Swimlane components
   * to be rendered
   */
  swimlanes: ISwimlane[];
}

const BoardWrapper = styled.div`
  padding: 20px;
  display: flex;
  min-height: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100%;
`;

const SwimlanesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ISwimlaneWrapper {
  /**
   * Number of swimlanes
   */
  numberLanes: number;
}

const SwimlaneWrapper = styled.div`
  flex: ${(props: ISwimlaneWrapper) =>
    `1 1 calc( 100% / ${props.numberLanes})`};

  &:nth-child(n + 2) {
    padding-left: 10px;
  }
`;

export default (props: IBoard) => (
  <BoardWrapper>
    {props.header}
    <SwimlanesWrapper>
      {props.swimlanes.map((swimlane: ISwimlane) => (
        <SwimlaneWrapper key={swimlane.id} numberLanes={props.swimlanes.length}>
          <Swimlane {...swimlane} />
        </SwimlaneWrapper>
      ))}
    </SwimlanesWrapper>
  </BoardWrapper>
);

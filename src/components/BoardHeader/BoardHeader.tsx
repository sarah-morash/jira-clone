import * as React from "react";
import styled from "react-emotion";

interface IBoardHeader {
  /**
   * The name of the board
   */
  title: string;

  /**
   * Description of the board
   */
  description: string;
}

const BoardHeaderWrapper = styled.div`
  padding-bottom: 20px;
`;

const BoardTitle = styled.h1`
  margin: 0;
`;

const BoardDescription = styled.p`
  margin: 0;
  padding-top: 5px;
`;

export default (props: IBoardHeader) => (
  <BoardHeaderWrapper>
    <BoardTitle> {props.title} </BoardTitle>
    <BoardDescription> {props.description} </BoardDescription>
  </BoardHeaderWrapper>
);

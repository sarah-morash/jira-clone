import { Card } from "@material-ui/core";
import * as React from "react";
import styled from "react-emotion";

export interface ITicket {
  /**
   * The Ticket ID
   */
  id: string;

  /**
   * The description of
   * the ticket
   */
  description: string;

  /**
   * The name of the person
   * assigned to a ticket
   */
  assignedTo?: string;

  /**
   * The original time estimate
   * of the ticket
   */
  estimatedTime: number;

  /**
   * The time logged against
   * this ticket
   */
  loggedTime: number;
}

const CardContentWrapper = styled.div`
  padding: 10px;
`;

const CardIdWrapper = styled.div`
  padding-bottom: 5px;
`;

const CardDescriptionWrapper = styled.div`
  padding: 5px 0;
`;

const CardMetaDataWrapper = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default (props: ITicket) => (
  <Card>
    <CardContentWrapper>
      <CardIdWrapper>{props.id}</CardIdWrapper>
      <CardDescriptionWrapper> {props.description} </CardDescriptionWrapper>
      <CardMetaDataWrapper>
        <div> {props.assignedTo ? props.assignedTo : "Unassigned"} </div>
        <div> {props.estimatedTime - props.loggedTime} </div>
      </CardMetaDataWrapper>
    </CardContentWrapper>
  </Card>
);

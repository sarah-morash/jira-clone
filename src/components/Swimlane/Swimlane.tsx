import * as React from "react";
import styled from "react-emotion";
import Ticket, { ITicket } from "../Ticket/Ticket";

export interface ISwimlane {
  /**
   * Id
   */
  id: string;

  /**
   * Title
   */
  title: string;

  /**
   * Tickets
   */
  tickets: ITicket[];
}

const TicketWrapper = styled.div`
  &:nth-child(n + 2) {
    padding-top: 10px;
  }
`;

const SwimlaneWrapper = styled.div`
  background-color: #eeeeee;
  padding: 10px 5px;
`;

export default (props: ISwimlane) => (
  <SwimlaneWrapper>
    <div>{props.title.toUpperCase()}</div>
    {props.tickets.map((ticket: ITicket) => (
      <TicketWrapper key={ticket.id}>
        <Ticket {...ticket} />
      </TicketWrapper>
    ))}
  </SwimlaneWrapper>
);

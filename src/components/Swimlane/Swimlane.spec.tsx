import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import Ticket, { ITicket } from "../Ticket/Ticket";
import Swimlane from "./Swimlane";

describe("Swimlane", () => {
  let wrapper: ShallowWrapper;
  const sampleTickets: ITicket[] = [
    {
      id: "abc",
      description: "Some",
      estimatedTime: 20,
      loggedTime: 10
    },
    {
      id: "bc",
      description: "Some",
      estimatedTime: 20,
      loggedTime: 10
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Swimlane id="ABC" title="Sample Title" tickets={sampleTickets} />
    );
  });

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  /**
   * Title
   */
  it("Should render its title in uppercase", () => {
    wrapper.setProps({ title: "swimlane title" });
    expect(wrapper.html()).toMatch("SWIMLANE TITLE");
  });

  /**
   * tickets
   */
  it("Should render each ticket passed to its tickets prop", () => {
    expect(wrapper.find(Ticket)).toHaveLength(2);
  });
});

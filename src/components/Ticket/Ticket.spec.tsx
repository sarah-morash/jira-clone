import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import Ticket from "./Ticket";

describe("Ticket Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Ticket
        id="KGSM-123"
        description="Some Description"
        assignedTo="K.G. OHearon"
        estimatedTime={20}
        loggedTime={10}
      />
    );
  });

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  /**
   * Ticket ID
   */
  it("Should clearly display a ticket number", () => {
    expect(wrapper.html()).toMatch("KGSM-123");
  });

  /**
   * Description
   */
  it("Should clearly display the ticket description", () => {
    expect(wrapper.html()).toMatch("Some Description");
  });

  it("Should trim the description to a maximum of 50 characters", () => {
    const longDescription = new Array(56).join("A");
    expect(wrapper.html()).toMatch(longDescription.slice(55, 1));
  });

  /**
   * Assinged To
   */
  it("Should display the name of the person to whom the ticket is assigned, should it be provided", () => {
    expect(wrapper.html()).toMatch("K.G. OHearon");
  });

  it("Should display the text 'Unassigned' should the ticket currently be unassigned", () => {
    wrapper.setProps({ assignedTo: undefined });
    expect(wrapper.html()).toMatch("Unassigned");
  });

  /**
   * Time Remaining
   */
  it("Should display the time remaining based on the original estimate prop and time logged prop", () => {
    wrapper.setProps({ timeEstimate: 20, timeLogged: 10 });
    expect(wrapper.html()).toMatch("10");

    wrapper.setProps({ timeEstimate: 10, timeLogged: 10 });
    expect(wrapper.html()).toMatch("0");
  });
});

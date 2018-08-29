import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import BoardHeader from "./BoardHeader";

describe("Board Header", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BoardHeader title="some name" description="some great description" />
    );
  });

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  /**
   * Board Name
   */
  it("Should clearly render its name within an h1 tag", () => {
    wrapper.setProps({ title: "HELLO" });
    expect(wrapper.html()).toMatch("HELLO");
  });

  /**
   * Description
   */
  it("Should clearly display its description", () => {
    wrapper.setProps({ description: "some description" });
    expect(wrapper.html()).toMatch("some description");
  });
});

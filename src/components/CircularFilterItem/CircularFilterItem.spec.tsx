import { Button } from "@material-ui/core";
// tslint:disable-next-line
import { ButtonProps } from "@material-ui/core/Button";
import * as emotion from "emotion";
import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import { createMatchers, createSerializer } from "jest-emotion";
import * as React from "react";
import * as sinon from "sinon";
import CircularFilterItem, { ICircularFilterItem } from "./CircularFilterItem";

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(createMatchers(emotion));

describe("Circular Filter Item", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CircularFilterItem
        id="123"
        filterText="filter"
        onClickFunction={() => {
          return;
        }}
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
   * Filter Text
   */
  it("Should clearly display its text", () => {
    wrapper.setProps({ filterText: "text" });
    expect(wrapper.html()).toMatch("text");
  });

  /**
   * Selected
   */
  it("Should have a default value of false for its selected prop", () => {
    expect((wrapper.props() as ICircularFilterItem).selected).toBeFalsy();
  });

  it("Should render a text button of type text when its selected prop is false", () => {
    expect((wrapper.find(Button).props() as ButtonProps).variant).toMatch(
      "text"
    );
  });

  it("Should render a contained button should its selected prop be true", () => {
    wrapper.setProps({ selected: true });
    expect((wrapper.find(Button).props() as ButtonProps).variant).toMatch(
      "contained"
    );
  });

  /**
   * onClick Function
   */
  it("Should call its onClickFunction function when clicked", () => {
    const sampleFunction = sinon.spy();
    wrapper = shallow(
      <CircularFilterItem
        id="123"
        filterText="filter"
        onClickFunction={sampleFunction}
      />
    );
    wrapper.simulate("click");
    expect(sampleFunction).toHaveProperty("callCount", 1);
  });

  it("Should call its onClickFunction passing as arguments its id", () => {
    const sampleFunction = sinon.spy();
    wrapper = shallow(
      <CircularFilterItem
        id="abc"
        filterText="filter"
        onClickFunction={sampleFunction}
      />
    );
    wrapper.simulate("click");
    expect(sampleFunction.getCall(0).args[0]).toMatch("abc");
  });
});

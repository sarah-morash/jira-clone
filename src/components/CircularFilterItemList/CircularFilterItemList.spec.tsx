import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import * as sinon from "sinon";
import CircularFilterItem from "../CircularFilterItem/CircularFilterItem";
import CircularFilterItemList, { IFilter } from "./CircularFilterItemList";

describe("Circular Filter List", () => {
  let wrapper: ShallowWrapper;
  const sampleFilters: IFilter[] = [
    {
      selected: false,
      id: "abc",
      filterText: "Filter 1"
    },
    {
      selected: false,
      id: "def",
      filterText: "Filter 2"
    }
  ];
  beforeEach(() => {
    wrapper = shallow(
      <CircularFilterItemList
        filters={sampleFilters}
        onChangeFilterFunction={() => {
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
   * Rendering List of Items
   */
  it("Should render a <CircularFilterItem /> for each item within its filters prop", () => {
    expect(wrapper.find(CircularFilterItem)).toHaveLength(2);
  });

  /**
   * Passing its callback to each item
   */
  it("Should call its onFilterChangeFunction function when the user clicks upon a filter", () => {
    const sampleFunction = sinon.spy();
    const mounted = mount(
      <CircularFilterItemList
        filters={sampleFilters}
        onChangeFilterFunction={sampleFunction}
      />
    );
    mounted
      .find(CircularFilterItem)
      .first()
      .simulate("click");
    expect(sampleFunction).toHaveProperty("callCount", 1);
  });

  it("Should call its onFilterChangeFunction function with the id of the filter clicked", () => {
    const sampleFunction = sinon.spy();
    const mounted = mount(
      <CircularFilterItemList
        filters={sampleFilters}
        onChangeFilterFunction={sampleFunction}
      />
    );
    mounted
      .find(CircularFilterItem)
      .first()
      .simulate("click");
    expect(sampleFunction.getCall(0).args[0]).toMatch(sampleFilters[0].id);
  });
});

import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";
import BoardHeader from "../BoardHeader/BoardHeader";
import Swimlane, { ISwimlane } from "../Swimlane/Swimlane";
import Board from "./Board";

describe("Board Component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const sampleHeader = (
      <BoardHeader title="Sample Title" description="Sample Description" />
    );
    const sampleSwimlanes: ISwimlane[] = [
      {
        id: "abc",
        title: "Swimlane 1",
        tickets: [
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
        ]
      },
      {
        id: "def",
        title: "Swimlane 2",
        tickets: [
          {
            id: "c",
            description: "Some",
            estimatedTime: 20,
            loggedTime: 10
          },
          {
            id: "d",
            description: "Some",
            estimatedTime: 20,
            loggedTime: 10
          }
        ]
      }
    ];

    wrapper = shallow(
      <Board header={sampleHeader} swimlanes={sampleSwimlanes} />
    );
  });

  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  /**
   * Header
   */
  it("Should display its header component atop the page", () => {
    expect(wrapper.find(BoardHeader)).toHaveLength(1);
  });

  /**
   * Swimlanes
   */
  it("Should create a <Swimlane /> component for each swimlane provided to its swimlanes prop", () => {
    expect(wrapper.find(Swimlane)).toHaveLength(2);
  });
});

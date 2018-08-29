import * as React from "react";
import styled from "react-emotion";
import CircularFilterItem from "../CircularFilterItem/CircularFilterItem";

export interface IFilter {
  id: string;
  selected: boolean;
  filterText: string;
}

interface ICircularFilterItemList {
  /**
   * List of filters
   */
  filters: IFilter[];

  /**
   * Function to be invoked
   * when the user clickes a
   * filter
   */
  onChangeFilterFunction: (clickedFilterId: string) => void;
}

const CircularFilterItemWrapper = styled.div`
  display: inline-block;
  &:nth-child(n + 2) {
    padding-left: 5px;
  }
`;
export default (props: ICircularFilterItemList) => (
  <div>
    {props.filters.map((filter: IFilter) => (
      <CircularFilterItemWrapper key={filter.id}>
        <CircularFilterItem
          {...filter}
          onClickFunction={(filterId: string) =>
            props.onChangeFilterFunction(filterId)
          }
        />
      </CircularFilterItemWrapper>
    ))}
  </div>
);

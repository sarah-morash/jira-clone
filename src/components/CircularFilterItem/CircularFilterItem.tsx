import { Button } from "@material-ui/core";
import * as React from "react";

export interface ICircularFilterItem {
  /**
   * The id of this filter item
   */
  id: string;

  /**
   * Determining if this item
   * is currently selected
   */
  selected?: boolean;

  /**
   * The test ot appear within
   * this filter item
   */
  filterText: string;

  /**
   * Function to be called
   * when the item is clicked
   * upon
   */
  onClickFunction: (filterId: string) => void;
}

export default (props: ICircularFilterItem) => (
  <Button
    variant={props.selected ? "contained" : "text"}
    color="primary"
    onClick={() => props.onClickFunction(props.id)}>
    {props.filterText}
  </Button>
);

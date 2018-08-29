import * as React from "react";
import styled from "react-emotion";
import activesprints from "./assets/Icons/activesprints.svg";
import backlog from "./assets/Icons/backlog.svg";
import components from "./assets/Icons/components.svg";
import issues from "./assets/Icons/issues.svg";
import project from "./assets/Icons/project.svg";
import releases from "./assets/Icons/releases.svg";
import reports from "./assets/Icons/reports.svg";
import Board from "./components/Board/Board";
import BoardHeader from "./components/BoardHeader/BoardHeader";
import CircularFilterItemList, {
  IFilter
} from "./components/CircularFilterItemList/CircularFilterItemList";
import Sidebar from "./components/Sidebar/Sidebar";

const sampleSwimlanes = [
  {
    id: "todo_123",
    title: "To Do",
    tickets: [
      {
        id: "MNC-123",
        description: "As a user I want to...",
        estimatedTime: 20,
        loggedTime: 10
      },
      {
        id: "MNC-345",
        description: "As a user I want to...",
        estimatedTime: 20,
        loggedTime: 10
      }
    ]
  },
  {
    id: "inprogress_123",
    title: "In Progress",
    tickets: [
      {
        id: "MNC-678",
        description: "As a user I want to...",
        assignedTo: "KG O'Hearon",
        estimatedTime: 20,
        loggedTime: 10
      },
      {
        id: "MNC-987",
        description: "As a user I want to...",
        assignedTo: "Sarah Morash",
        estimatedTime: 20,
        loggedTime: 10
      }
    ]
  },
  {
    id: "code_review_123",
    title: "Code Review",
    tickets: [
      {
        id: "MNC-84",
        description: "As a user I want to...",
        assignedTo: "Sarah Morash",
        estimatedTime: 20,
        loggedTime: 10
      },
      {
        id: "MNC-26",
        description: "As a user I want to...",
        assignedTo: "Sarah Morash",
        estimatedTime: 20,
        loggedTime: 10
      }
    ]
  },
  {
    id: "done_123",
    title: "Done",
    tickets: [
      {
        id: "MNC-384",
        description: "As a user I want to...",
        assignedTo: "Sarah Morash",
        estimatedTime: 20,
        loggedTime: 10
      },
      {
        id: "MNC-256",
        description: "As a user I want to...",
        assignedTo: "Sarah Morash",
        estimatedTime: 20,
        loggedTime: 10
      }
    ]
  }
];

interface IAppState {
  filters: IFilter[];
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      filters: [
        {
          id: "1",
          filterText: "Assigned To Me",
          selected: false
        },
        {
          id: "2",
          filterText: "Sarah Morash",
          selected: false
        }
      ]
    };
    this._handleSelect = this._handleSelect.bind(this);
  }

  public _handleSelect(id: string) {
    this.setState({
      ...this.state,
      filters: this.state.filters.map((filterItem: IFilter) => {
        if (filterItem.id === id) {
          return { ...filterItem, selected: !filterItem.selected };
        }
        return filterItem;
      })
    });
  }
  public render() {
    const sampleHeader = (
      <div>
        <BoardHeader
          title="Medavie Health Services"
          description="Create a Rule"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", paddingRight: "10px" }}>
            Quick Filters
          </span>
          <CircularFilterItemList
            onChangeFilterFunction={(filterId: string) =>
              this._handleSelect(filterId)
            }
            filters={this.state.filters}
          />
        </div>
      </div>
    );

    return (
      <div
        style={{
          backgroundColor: "#eeeeee",
          display: "flex",
          minHeight: "100%"
        }}>
        <Sidebar
          id="1"
          name="Cannabis"
          icon={project}
          navItems={[
            {
              icon: {
                source: activesprints
              },
              id: "1",
              link: "#",
              name: "Active Sprints"
            },
            {
              icon: {
                source: backlog
              },
              id: "2",
              link: "#",
              name: "Backlog"
            },
            {
              icon: {
                source: components
              },
              id: "3",
              link: "#",
              name: "Components"
            },
            {
              icon: {
                source: issues
              },
              id: "4",
              link: "#",
              name: "Issues"
            },
            {
              icon: {
                source: releases
              },
              id: "5",
              link: "#",
              name: "Releases"
            },
            {
              icon: {
                source: reports
              },
              id: "6",
              link: "#",
              name: "Reports"
            }
          ]}
        />
        <Board header={sampleHeader} swimlanes={sampleSwimlanes} />
      </div>
    );
  }
}

<!-- prettier- ignore -->
```
const sampleHeader = (
  <BoardHeader title="Sample Title" description="Sample Description" />
);

const sampleSwimlanes = [
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

<Board header={sampleHeader} swimlanes={sampleSwimlanes} />
```

```
initialState = {
  filters: [
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
  ]
};

<CircularFilterItemList filters={state.filters}
  onChangeFilterFunction={(id) =>
  setState( {filters: state.filters.map( filter => {
    if (filter.id === id)
    {
      return Object.assign({}, filter, {selected: !filter.selected})
    }
    return filter;
  })})}
/>
```

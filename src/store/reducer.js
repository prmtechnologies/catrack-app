const initialState = {
  MasterMenu: [
    { key: 1, value: "Veg", refKey: 0, level: 1 },
    { key: 2, value: "Non Veg", refKey: 0, level: 1 },

    { key: 3, value: "Breakfast", refKey: 1, level: 2 },
    { key: 4, value: "Child B'day", refKey: 1, level: 2 },
    { key: 5, value: "Navratra", refKey: 1, level: 2 },
    { key: 6, value: "English High Tea", refKey: 1, level: 2 },

    { key: 7, value: "Good Morning", refKey: 3, level: 3 },
    { key: 8, value: "Sandwich and Panini", refKey: 3, level: 3 },
    { key: 9, value: "Creperie", refKey: 3, level: 3 },
    { key: 10, value: "South Indian Fare", refKey: 3, level: 3 },
    { key: 11, value: "Chilla", refKey: 3, level: 3 },
    {
      key: 12,
      value: "National Favourite Street Breakfast",
      refKey: 3,
      level: 1
    },
    { key: 13, value: "Waffles & Pan Cakes", refKey: 3, level: 3 },

    { key: 14, value: "Cereals", refKey: 7, level: 4, selected: false },
    { key: 15, value: "Dairy", refKey: 7, level: 4, selected: false },
    {
      key: 16,
      value: "Morning Bakery",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 17,
      value: "Seasonal Juice",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 18,
      value: "Hot & Cold Beverages",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 19,
      value: "Assorted International Cheese Platter",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 20,
      value: "Crudités With Assorted Dips",
      refKey: 7,
      level: 4,
      selected: false
    },

    {
      key: 21,
      value: "Vegetarian Club Tkac",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 22,
      value: "Ratatouille ",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 23,
      value: "Sunrise Croissant Sandwich",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 24,
      value: "Chili Edam Panini",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 25,
      value: "Mini Vegetable Burger With Aged Cheddar Cheese",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 26,
      value: "Falafel Panini",
      refKey: 8,
      level: 4,
      selected: false
    }
  ],
  MenuItems: [
    { key: 1, value: "Veg", refKey: 0, level: 1, selected: false },
    { key: 2, value: "Non Veg", refKey: 0, level: 1, selected: false },
    { key: 3, value: "Breakfast", refKey: 1, level: 2, selected: false },
    { key: 4, value: "Child B'day", refKey: 1, level: 2, selected: false },
    { key: 5, value: "Navratra", refKey: 1, level: 2, selected: false },
    { key: 6, value: "English High Tea", refKey: 1, level: 2, selected: false },
    { key: 7, value: "Good Morning", refKey: 3, level: 3, selected: false },
    {
      key: 8,
      value: "Sandwich and Panini",
      refKey: 3,
      level: 3,
      selected: false
    },
    { key: 9, value: "Creperie", refKey: 3, level: 3, selected: false },
    {
      key: 10,
      value: "South Indian Fare",
      refKey: 3,
      level: 3,
      selected: false
    },
    { key: 11, value: "Chilla", refKey: 3, level: 3, selected: false },
    {
      key: 12,
      value: "National Favourite Street Breakfast",
      refKey: 3,
      level: 3,
      selected: false
    },
    {
      key: 13,
      value: "Waffles & Pan Cakes",
      refKey: 3,
      level: 3,
      selected: false
    },
    { key: 14, value: "Cereals", refKey: 7, level: 4, selected: false },
    { key: 15, value: "Dairy", refKey: 7, level: 4, selected: false },
    {
      key: 16,
      value: "Morning Bakery",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 17,
      value: "Seasonal Juice",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 18,
      value: "Hot & Cold Beverages",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 19,
      value: "Assorted International Cheese Platter",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 20,
      value: "Crudités With Assorted Dips",
      refKey: 7,
      level: 4,
      selected: false
    },
    {
      key: 21,
      value: "Vegetarian Club Tkac",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 22,
      value: "Ratatouille ",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 23,
      value: "Sunrise Croissant Sandwich",
      refKey: 8,
      level: 4,
      selected: false
    },
    {
      key: 24,
      value: "Chili Edam Panini",
      refKey: 8,
      level: 4,
      selected: true
    },
    {
      key: 25,
      value: "Mini Vegetable Burger With Aged Cheddar Cheese",
      refKey: 8,
      level: 4,
      selected: true
    },
    {
      key: 26,
      value: "Falafel Panini",
      refKey: 8,
      level: 4,
      selected: true
    }
  ]
};

function toggleMenuItems(arr, refKey, selected) {
  arr.filter(item => item.refKey == refKey).map(item => {
    item.selected = selected;
    toggleMenuItems(arr, item.key, selected);
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MENUITEM":
      debugger;
      let newMenuItems = [...state.MenuItems];
      const elIdx = newMenuItems.findIndex(el => el.key == action.menuKey);
      const selected = !newMenuItems[elIdx].selected;
      newMenuItems[elIdx].selected = selected;

      toggleMenuItems(newMenuItems, action.menuKey, selected);

      return {
        ...state,
        MenuItems: newMenuItems
      };
    default:
      return state;
  }
};

export default reducer;

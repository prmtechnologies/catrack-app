const initialState = {
  MenuItems: [
    { key: 1, value: "Veg", refKey: 0, level: 1, selected: false },
    { key: 2, value: "Non Veg", refKey: 0, level: 1, selected: false },
    { key: 3, value: "Breakfast", refKey: 1, level: 2, selected: false },
    { key: 4, value: "Child B'day", refKey: 1, level: 2, selected: false },
    { key: 5, value: "Navratra", refKey: 1, level: 2, selected: false },
    { key: 6, value: "English High Tea", refKey: 1, level: 2, selected: false }
  ],
  sidemenu: false,
  redirectPath: "",
  loggedIn: true
};

function toggleMenuItems(arr, refKey, selected) {
  arr.filter(item => item.refKey === refKey).map(item => {
    item.selected = selected;
    toggleMenuItems(arr, item.key, selected);
  });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MENUITEM":
      debugger;
      let newMenuItems = [...state.MenuItems];
      const elIdx = newMenuItems.findIndex(el => el.key === action.menuKey);
      const selected = !newMenuItems[elIdx].selected;
      newMenuItems[elIdx].selected = selected;

      toggleMenuItems(newMenuItems, action.menuKey, selected);

      return {
        ...state,
        MenuItems: newMenuItems
      };

    case "TOGGLE_SIDEMENU":
      return { ...state, sidemenu: action.openState };
    case "REDIRECT_TO":
      return { ...state, redirectPath: action.redirectPath, sidemenu: false };
    default:
      return state;
  }
};

export default reducer;

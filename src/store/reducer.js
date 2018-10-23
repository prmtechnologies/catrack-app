const initialState = {
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
    }
  ],
  MenuItems2: [
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
    }
  ],

  DishMaster: [
    {
      value: "Cereals",
      desc:
        "Muesli | Kellogg’s corn flakes | Oatmeal porridge | rice krispies |raisin bran",
      selected: false,
      dishId: 1
    },
    {
      value: "Dairy",
      desc:
        "Fresh milk |skimmed milk  |margarine| herb butter | flavored yogurts | plain yoghurt",
      selected: false,
      dishId: 2
    },
    {
      value: "Morning Bakery",
      desc:
        "Garlic bread | croissant | brioche | brown bread | sour dough bread | multi grain bread ",
      selected: false,
      dishId: 3
    },
    {
      value: "Seasonal Juice",
      desc:
        "Freshly squeezed seasonal fruit and vegetable juice | orange | grape fruit |strawberry | tangerine| pineapple| kiwi | anar| carrot and orange | cucumber and mint ",
      selected: false,
      dishId: 4
    },
    {
      value: "Hot & Cold Beverages",
      desc:
        "Chamomile | Ceylon green| masala | jasmine | freshly brewed coffee |decaffeinated instant coffee | hot chocolate | Cappuccino | Latte |Espresso",
      selected: false,
      dishId: 5
    },
    {
      value: "Assorted International Cheese Platter",
      desc:
        "Gouda | Camembert | Danish blue | Gruyere | cheddar | cream cheese | Bavarian smoked cheese | Edam | assorted condiments| Melba, grapes, olives & crackers",
      selected: false,
      dishId: 6
    },
    {
      value: "Crudités With Assorted Dips",
      desc:
        "Carrots | tomatoes | cucumber | lettuce leaves |blanched broccoli | radish | hung yoghurt | peppercorn yoghurt | spicy mayonnaise",
      selected: false,
      dishId: 7
    },
    {
      value: "Vegetarian Club Tkac",
      desc:
        "Roasted chilies, grilled onions, grated cheddar cheese, in a toasted brown bread and topped with hot Mexican salsa and sour cream",
      selected: false,
      dishId: 8
    },
    {
      value: "Ratatouille ",
      desc:
        "Vegetables in tomato salsa, hash brown potato, and mustard mayonnaise in a bun",
      selected: false,
      dishId: 9
    },
    {
      value: "Sunrise Croissant Sandwich",
      desc:
        "Melted white cheddar, tomato, a smidge of garlic aioli sandwiched in a croissant",
      selected: false,
      dishId: 10
    },
    {
      value: "Chili Edam Panini",
      desc:
        "Double grilled sandwich in sour dough bread with chili Edam, tomato, onion ",
      selected: false,
      dishId: 11
    },
    {
      value: "Mini Vegetable Burger With Aged Cheddar Cheese",
      desc:
        "Grilled baby vegetable burger stuffed in toasted brioche with iceberg lettuce, tomato & remoulade dressing",
      selected: false,
      dishId: 12
    },
    {
      value: "Falafel Panini",
      desc: "Falafel stuffed in pitta with garlic sauce & roasted pepper sauce",
      selected: false,
      dishId: 13
    }
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

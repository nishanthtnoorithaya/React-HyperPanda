"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clearItems = exports.removeItems = exports.addItems = void 0;

var _toolkit = require("@reduxjs/toolkit");

var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: {
    item: []
  },
  reducers: {
    addItems: function addItems(state, action) {
      // Vanilla Redux Immutatble State (Immer behind the Scence Convert to this) 
      // const newState = [state];
      // newState.item.push(action.payload);
      // return newState; 
      // Now New Redux Toolkit State is Mutable, We can directly Modify the State.  
      state.item.push(action.payload);
    },
    removeItems: function removeItems(state) {
      state.item.pop();
    },
    clearItems: function clearItems() {
      // state.item.length = 0; 
      return {
        item: []
      }; //Return the Empty Item List 
      // return [] this will make your Whole Cart State empty cause an Error. 
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    addItems = _cartSlice$actions.addItems,
    removeItems = _cartSlice$actions.removeItems,
    clearItems = _cartSlice$actions.clearItems;
exports.clearItems = clearItems;
exports.removeItems = removeItems;
exports.addItems = addItems;
var _default = cartSlice.reducer;
exports["default"] = _default;
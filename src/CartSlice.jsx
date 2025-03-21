import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
            state.quantity++
        } else {
            state.items.push({ name, image, cost, quantity: 1});
            state.quantity++;
        }
    },
    removeItem: (state, action) => {
        const { name } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
            
        }
    },
    decrementQuantity: (state, action) => {
        const { name, quantity} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem && existingItem.quantity >= 1) {
            existingItem.quantity--;
        }
    },
    incrementQuantity: (state, action) => {
        const { name, quantity} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        }
    }
  },
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;

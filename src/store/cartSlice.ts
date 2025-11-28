import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../types/cart";

const loadCartFromStorage = (): CartState => {
  try {
    const savedCart = localStorage.getItem("paranoid-brewery-cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error("Failed to load cart from storage:", error);
  }

  return {
    items: [],
    total: 0,
    itemCount: 0
  };
};

const saveCartToStorage = (state: CartState) => {
  try {
    localStorage.setItem("paranoid-brewery-cart", JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save cart to storage:", error);
  }
};

const initialState: CartState = loadCartFromStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "id" | "quantity">>) => {
      const { productId, volume } = action.payload;

      const existingItem = state.items.find(
        item => item.productId === productId && item.volume === volume
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: CartItem = {
          id: Date.now(),
          ...action.payload,
          quantity: 1,
        };
        state.items.push(newItem);
      }

      state.total = state.items.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);

      saveCartToStorage(state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = state.items.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);

      saveCartToStorage(state);
    },

    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }

      state.total = state.items.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
      state.itemCount = state.items.reduce((count, item) => count + item.quantity, 0);

      saveCartToStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
      localStorage.removeItem("paranoid-brewery-cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
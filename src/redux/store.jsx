import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Xətanı kəsmək üçün müvəqqəti olaraq bunu yaz:
    bookStore: (state = {}) => state, 
  },
})
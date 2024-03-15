import { createContext } from 'react'

export const ToastContext = createContext()

export function ToastProvider({ children }) {
  return <ToastContext.Provider value={}></ToastContext.Provider>
}

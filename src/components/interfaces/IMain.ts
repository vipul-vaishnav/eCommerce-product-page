import { Dispatch, SetStateAction } from 'react'

export interface IMain {
  cartCount: number
  setCartCount: Dispatch<SetStateAction<number>>
}

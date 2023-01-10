import { Dispatch, SetStateAction } from 'react'

export interface IOverlay {
  setShowSidebar: Dispatch<SetStateAction<boolean>>
}

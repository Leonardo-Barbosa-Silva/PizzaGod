import React from 'react'

import { NavLinkProps } from '../NavLink/types'

export interface MenuItemProps extends NavLinkProps {
  icon: React.ElementType
  label: string
  className?: string
}

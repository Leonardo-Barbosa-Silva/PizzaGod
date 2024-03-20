import React from 'react'

import { NavLinkProps } from '../NavLink'

export interface MenuItemProps extends NavLinkProps {
  icon: React.ElementType
  label: string
  className?: string
  linkClassName?: string
}

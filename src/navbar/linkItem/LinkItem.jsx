import React from 'react'
import { LinkStyled } from './LinkItemStyled'

const LinkItem = ({to, children}) => {
  return (
    <LinkStyled to={to}>
      {children}
    </LinkStyled>
  )
}

export default LinkItem
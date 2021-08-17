import React, { memo } from 'react'

import PropTypes from 'prop-types'

import {
  HeaderWrapper
} from './style'



function ZYThemeHeaderSmall(props) {
  const { title, more } = props
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/#">{more}</a>
    </HeaderWrapper>
  )
}

ZYThemeHeaderSmall.defaultProps = {
  title:"",
  more:""
}

ZYThemeHeaderSmall.propTypes = {
  title:PropTypes.string.isRequired,
  more:PropTypes.string
}


export default memo(ZYThemeHeaderSmall)


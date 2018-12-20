import styled from 'styled-components'
import { colors } from '../styles'

const Break = styled.hr<{
  verticalSpacing: number | undefined
  width: string | undefined
  invisible: boolean | undefined
}>`
  margin: ${props => props.verticalSpacing} 0px;
  width: ${props => props.width};
  border: 1px solid ${props => (props.invisible ? 'transparent' : colors.grey)};
  opacity: 0.4;
`

Break.defaultProps = {
  verticalSpacing: '15px',
  width: '90%',
  invisible: false
}

export default Break

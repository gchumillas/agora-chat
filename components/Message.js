import tw, { styled } from 'twin.macro'
import cn from 'tailwindcss-classnames'

const Message = ({
  sender,
  text,
  align = 'left' // left | righg
}) => {
  return <StyledDiv className={cn(align)}>
    <label>{sender} wrote:</label>
    <div>{text}</div>
  </StyledDiv>
}

const StyledDiv = styled.div`
  ${tw`border-2 py-2 px-3`}

  label {
    ${tw`text-grey-500 font-semibold`}
  }

  &.right {
    ${tw`self-end`}
  }
`

export default Message
import * as k from './styles'

type Props = {
    text: string
}

const Button = ({text}:Props) => {
  return (
    <k.Container className='btn--container'>
    <k.Button>{text}</k.Button>
    </k.Container>
  )
}

export default Button
/* eslint-disable react/prop-types */
import './Button.css'

const Button= ({reset}) => {

  return (
    <div className='buttonReset'>
      <button onClick={reset}>Reiniciar</button>
    </div>
  )
}

export default Button
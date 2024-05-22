import './Order.css'
// eslint-disable-next-line react/prop-types
function Order({order}) {
  return (
    <div className='order'>
      <p>Valor a ordenar: <span>{order}</span></p>
    </div>
  )
}

export default Order
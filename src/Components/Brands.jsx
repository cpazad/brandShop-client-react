import PropTypes from 'prop-types'

const Brands = ({brand}) => {
    const {name, logo } = brand
  return (
    <div className="card bg-base-100 rounded-sm flex flex-col justify-center items-center">
        <img className="w-24" src={logo} alt="car" />
        <h3 className="text-2xl font-bold"> {name} </h3>
    </div>
  )
}

export default Brands

Brands.propTypes = {
    brand:PropTypes.object
}
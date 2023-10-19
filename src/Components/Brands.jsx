import PropTypes from 'prop-types'

const Brands = ({brand}) => {
    const {brandname, logo } = brand
  return (
    <div className="card p-5 bg-base-100 rounded-sm flex flex-col justify-center items-center">
        <img className="w-24" src={logo} alt="car" />
        <h3 className="text-2xl font-bold uppercase"> {brandname} </h3>
    </div>
  )
}

export default Brands

Brands.propTypes = {
    brand:PropTypes.object
}
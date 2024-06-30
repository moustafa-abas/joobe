import { Spinner } from "react-bootstrap"

const SpinnerLoad = () => {
  return (
    <div className="spinner position-absolute top-0 bottom-0 start-0 end-0 ">
    <Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
    </div>  )
}

export default SpinnerLoad
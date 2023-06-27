import { useState } from "react"

const SingleTour = ({ id, name, image, info, price, removeTour }) => {
  const [readmore,setReadMore]=useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} className=" img" />
            <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readmore ? info : `${info.substring(0, 200)}.....`}
          <button className="info-btn" type="button" onClick={() => setReadMore(!readmore)}>{ readmore ? "show less" :"show more"}</button></p>
        <button className="btn btn-block delete-btn" type="button" onClick={()=>removeTour(id)}>Not interested</button>

      </div>
    </article>
  )
}
export default SingleTour
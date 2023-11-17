import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className ="max-container">
       <h3 className="font-palanquin text-center text-4xl font-bold">What Our
       <span className="text-coral-red"> Costumers </span>
        say?
       </h3>
       <p className="info-text m-auto mt-4 max-w-lg text-center">Hear the geniune stories form our satisfied customers about their excepional experiences with us.</p>
       <div className="mt-24 flex  flex-1 justify-evenly items-center max-lg:flex-col gap-14">
         {reviews.map((review)=>(
          <ReviewCard key={review.customerName} imgURL={review.imgURL} costumerName ={review.customerName} feedback = {review.feedback} rating = {review.rating}/>
         ))}
       </div>
    </section>
  )
}

export default CustomerReviews
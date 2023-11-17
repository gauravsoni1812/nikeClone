import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/button"
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
       <div className="flex-1">
          <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
       </div>
       


       <div className="flex flex-1 flex-col">

        <h2 className='font-palanquin text-4xl capitalize  font-bold'>
          <br />
          <span className='text-coral-red'>Special </span>
          {/* <span className='text-coral-red'>Quality</span> */}
          Offer Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
         Embark on a shopping journey that redefines your experiences with unbeatable deals. From prermier selections to incredible savings , we offer unparalled value that sets us apart  
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate the realm of posibilities designed to fullfill your unique desires, surpassing the lofiest expectations .Your journey with us is nothing short of exceptional</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop Now' iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor = "bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
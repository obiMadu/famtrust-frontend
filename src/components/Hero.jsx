
import imageright from "/heroright.png";
import ellipse from "/ellipseimage.png"
// import ellip from "/Ellipse.png"


const Hero = () => {
  return (
    <div className='md:flex
     mt-4 gap-8 px-6 justify-between'>
      <div className='md:px-16 px-6'>
        <h1 className='font-lato md:text-4xl text-4xl font-bold md:pt-11 pb-6 text-black text-'>Empower Your <br /> <span className='text-txtblue '>Family&apos;s Financial <br /></span> Future</h1>
        <p className='font-lato md:text-xl text-[13px] font-semibold text-black '>Experience real-time alerts and streamline your family&apos;s finances with FamTrust. Effortlessly manage all your family’s banking needs in one place.</p>
        <div className='md:py-8 py-6'>
            <button className='bg-bluey px-5 py-2 rounded-lg text-white'>Start Free Trial Today</button>
        </div>

      </div>
    <div className=' w-[100%] mb-6 md:mb-1 '>
        <img className="text-center mx-auto z-10" src={ellipse} alt="imageright" />
      </div>
    </div>
  )
}

export default Hero

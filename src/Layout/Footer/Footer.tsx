import logo from "../../assets/images/nav-logo.svg";
import facebook from "../../assets/images/nav-facebook.svg";
import twitter from "../../assets/images/nav-twitter.svg";
import instagram from "../../assets/images/nav-linkedin.svg";


const Footer = () => {
  return (
    <>
      <div className='bg-[#882190] pb-[60px]'>
          <div className='flex justify-center lg:absolute left-[270px]  '>
            <img src={logo} className='w-[66px] lg:w-[80px] border-4 border-white mt-10 bg-white rounded-full '/>
          </div>
          <h2 className='text-center text-[16px] lg:text-[24px] lg:pt-[60px] text-white font-[500] mt-8'>Garden Your Relatonship</h2>
          <div className='lg:flex justify-center'>
            <p className='text-center text-[14px] lg:text-[20px] lg:w-[560px] text-white font-[400] mt-8'>Unlock the power of love and join our workshop for an extraordinary
             journey of growth and connection.</p>
          </div>
          <div className='flex justify-center mt-7 lg:mt-12 cursor-pointer'>
            <div className='w-[150px] h-[35px] bg-[#c992d1] rounded-l-3xl flex justify center items-center'>
              <input className='font-[400] text-[14px] pl-4 text- bg-transparent placeholder-white text-white ' placeholder='example@mail.com'  />
            </div>
            <div className='w-[130px] h-[35px] bg-white rounded-r-3xl'>
              <button className='text-[#941B9D] text-[16px] ml-5 text-center pt-2'>GET STARTED</button>
            </div>
          </div>
          <div className='flex justify-center mt-8 lg:mt-12 cursor-pointer'>
            <img className='px-5' src={facebook} />
            <img className='px-5' src={twitter} />
            <img className='px-5' src={instagram} />
          </div>
          <div className='lg:flex justify-center'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-white font-[600] text-[25px] mt-8'>About Us</h2>
              <p className='text-center font-[500] text-[14px] w-[358px] lg:w-[200px] text-white'>Answers to common questions about our workshop, 
                how it works, and more.</p>
            </div>
            <div className='flex flex-col justify-center items-center lg:ml-[100px] lg:mr-[50px]'>
              <h2 className='text-center text-white font-[600] text-[25px] mt-8'>Workshop</h2>
              <p className='text-center font-[500] text-[14px] w-[270px] lg:w-[160px] text-white'>Learn how to built emotional intimacy . 
                How to create conscious relationship</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-center text-white font-[600] text-[25px] mt-8'>Services</h2>
              <p className='text-center font-[500] text-[14px] w-[270px] text-white'>Couples Choaching 
              <br/> Life Coaching <br/> Wellness Coaching <br/> Online Workshop</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer
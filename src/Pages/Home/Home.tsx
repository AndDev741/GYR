import treeMain from "../../assets/images/Tree-SVG 1.svg";
import handLeft from "../../assets/images/handLeft.png";
import handRigth from "../../assets/images/handRigth.png";
import PCLeft from "../../assets/images/PCLeft.png";
import PCRigth from "../../assets/images/PCRigth.png";
import gardener from "../../assets/images/gardener.svg";
//icon
import { BsFillStarFill } from 'react-icons/bs'

const Home = () => {
  return (
    <>
    <div>
      <div className='lg:flex flex-row-reverse justify-around mt-[60px]'>
        <div className='bg-[#fdeeff] h-[35vh] lg:h-[40vh] lg:w-[620px]'>
        </div>
        <div>
          <h1 className='text-center text-[25px] lg:text-[28px] lg:w-[35vw] font-[700] text-[#882190] mt-12'>Like a garden, your relationships need to be cultivated</h1>
          <p className='text-center text-[16px] font-[400] text-[#040415] mt-8 '>New age workshop for couples</p>
          <div className='flex justify-center mt-9'>
          <button className='w-[163px] h-[45px] rounded-[10px] bg-[#882190] text-white text-[18px] font-[700]'>Join Us</button>
          </div> 
      </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[85vw] h-[80px] mt-12 bg-[#fbe365] rounded-[52px] flex items-center justify-center'>
          <p className='text-center w-[60vw] text-[#882190] font-[700] text-[20px]'>Have you watered your relationship garden</p>
        </div>
      </div>
      <div className='lg:grid-cols-3'>
        <div className='flex flex-col  lg:col-start-2 row-start-1'>
          <div className='flex justify-center mt-11'>
            <img src={treeMain} className='lg:w-[608px]' />
          </div>
          <div className='flex justify-center'>
            <div className='border-2 border-[#882190] w-[239px] h-[35px] mt-12 rounded-[52px] flex justify-center'>
              <p className='text-[16px]   mt-1 font-[700] text-[#882190]'>Look Into the Garden</p>
            </div>
          </div>
        </div>
        <div className='flex overflow-x-scroll lg:overflow-visible justify-start mt-12 pb-12'>
          <div className='w-[351px] h-[130px] min-w-[351px] lg:min-w-0 mx-5 ml-12 rounded-[10px] bg-[#fbe1ff] flex justify-center items-center lg:absolute top-[580px] '>
            <p className='text-[14px] text-center'><strong>Honesty and Responsibility</strong> <br/>
                Highlighting personal dynamics the theory of two worlds coming together in relationships.</p>
          </div>
          <div className='w-[351px] min-w-[351px] lg:min-w-0 mx-5 h-[130px] rounded-[10px] bg-[#fbe1ff] flex justify-center items-center lg:absolute left-[20px] top-[980px]'>
            <p className='text-[14px] text-center'><strong>Fairness and Negotiation</strong> <br/>
            Communication verbal and non verbal, love language, emotional regulation.</p>
          </div>
          <div className='w-[351px] min-w-[351px] lg:min-w-0 mx-5 h-[130px] rounded-[10px] bg-[#fbe1ff] flex justify-center items-center lg:absolute  top-[980px] left-[70%]'>
            <p className='text-[14px] text-center'><strong>Open Communication</strong> <br/>
            It is key to any relationship. We discuss open communication and what it takes!</p>
          </div>
          <div className='w-[351px] min-w-[351px] lg:min-w-0 mx-5 h-[130px] rounded-[10px] bg-[#fbe1ff] flex justify-center items-center lg:absolute top-[580px] left-[70%]'>
            <p className='text-[14px] text-center'><strong>Intimacy</strong> <br/>
            Self awareness, honoring and respecting others body, heart to heart connect.</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='w-[85vw] h-[80px] mt-12 bg-[#fbe365] rounded-[52px] flex items-center justify-center'>
            <p className='text-center w-[70vw] text-[#882190] font-[700] text-[20px]'>Create a healthy relationship garden</p>
        </div>
      </div>


        <div className='flex justify-center space-x-7 mt-12'>
          <img src={handLeft} className='w-[176px] lg:hidden'/>
          <img src={handRigth} className='w-[176px] lg:hidden '/>
        </div>
          <div className='flex justify-between w-[100vw]'>
            <img src={PCLeft} className='hidden lg:block ml-[45px]'/>
            <img src={PCRigth} className='hidden lg:block mr-[45px] '/>
          </div>
        <div className='lg:flex flex-col  lg:relative bottom-[400px]'>
          <div className='flex justify-center '>
            <div className='bg-[#fbe1ff] w-[90vw] lg:w-[30vw] lg:rounded-[12px] h-[35vh] mt-12 flex items-center justify-center'>
              <p className='font-[700] text-[19px] text-center text-[#882190] leading-[4rem]'>Make time for new memories<br/> 
                Be prepared to be surprised <br/> 
                Focus on the present, not the past <br/>
                Relationships aren’t 50/50—they’re 100/100</p>
            </div>
          </div>
          <div className='flex justify-center mt-9'>
            <button className='w-[163px] h-[45px] rounded-[10px] bg-[#882190] text-white text-[18px] font-[700]'>Join Us</button>
          </div> 
        </div>


      <div className='flex justify-center '>
        <div className='w-[85vw] h-[60px] mt-12 lg:mt-[-120px] bg-[#fbe365] rounded-[52px] flex items-center justify-center'>
            <p className='text-center w-[70vw] text-[#882190] font-[700] text-[20px]'>Meet our gardeners</p>
        </div>
      </div>


      <div className='flex overflow-x-scroll lg:overflow-x-auto justify-start mt-12 pb-12 lg:flex justify-around'>
        <div className='w-[351px]  min-w-[351px] mx-5 ml-12 rounded-[12px] shadow-xl '>
          <div className='flex justify-center'>
            <img src={gardener} className='w-[120px]' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[18px] font-[700]'>Arti Ahuja <br/>
                Psycologist</h2>
            <p className='w-[330px] text-center text-[15px] font-[400]'>Aarti Ahuja is an independent practicing psychologist
               based in New Delhi . She is pursuing her PhD in 
               social and health psychology with an expertise in 
               stress management , grief and loss counseling , 
               family and relationship counseling.</p>
          </div>
          <div className='flex justify-center mt-3 mb-3'>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
          </div>
        </div>
        <div className='w-[351px] min-w-[351px] mx-5 ml-12 rounded-[12px] shadow-xl '>
          <div className='flex justify-center'>
            <img src={gardener} className='w-[120px]' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[18px] font-[700]'>Arti Ahuja <br/>
                Psycologist</h2>
            <p className='w-[330px]  text-center text-[15px] font-[400]'>Aarti Ahuja is an independent practicing psychologist
               based in New Delhi . She is pursuing her PhD in 
               social and health psychology with an expertise in 
               stress management , grief and loss counseling , 
               family and relationship counseling.</p>
          </div>
          <div className='flex justify-center mt-3 mb-3'>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
          </div>
        </div>
        <div className='w-[351px] min-w-[351px] mx-5 ml-12 rounded-[12px] shadow-xl '>
          <div className='flex justify-center'>
            <img src={gardener} className='w-[120px]' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[18px] font-[700]'>Arti Ahuja <br/>
                Psycologist</h2>
            <p className='w-[330px]  text-center text-[15px] font-[400]'>Aarti Ahuja is an independent practicing psychologist
               based in New Delhi . She is pursuing her PhD in 
               social and health psychology with an expertise in 
               stress management , grief and loss counseling , 
               family and relationship counseling.</p>
          </div>
          <div className='flex justify-center mt-3 mb-3'>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
            <span className='text-[20px] text-[#882190] mx-3'><BsFillStarFill/></span>
          </div>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='w-[85vw] h-[60px] mt-12 bg-[#fbe365] rounded-[52px] flex items-center justify-center'>
            <p className='text-center w-[70vw] text-[#882190] font-[700] text-[20px]'>Visual Chronicles</p>
        </div>
      </div>
      <div>
        <h2 className='text-center mt-[70px] mb-[70px] text-[#882190] font-[700] text-[25px]'>Soon</h2>
      </div>
    </div>
    </>
  )
}

export default Home
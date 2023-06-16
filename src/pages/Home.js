import React from 'react'
import Header from '../components/Header'
import background from '../assets/DSC_8632.JPG'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import data from '../components/data'
import img from '../assets/1.png'
import OutlinedTimeline from '../components/timeline';
import ImageCarousel from '../components/carousel'
import Example from '../components/timeline';
import Footer from '../components/Footer';
function Home() {
  return (
    <div >
      <Header/>
      <div     
      style={{
        backgroundImage:`url(${background})`,
        height:600,
        width:'100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position:'relative',
        
      }}
      >
        {/* <div className='text-3xl tex text-black '>
        Welcome to st Alexandro University institute
        </div> */}
      </div>
      
      <div  className='px-12'>
      <div className='py-10  mt-5 lg:flex'>
        <div className='p-10'>
          <div className='text-5xl py-7'> Learning</div>
          <div className='text-lg'> We, at St Alessandro University Institute offer supportive and inspirational environments for young enquiring minds to learn and grow with us. Our passion for learning means we achieve more than outstanding results. We strive to build confident and creative thinkers and aim at delivering an education that is truly relevant to their future. </div>
           </div>
           <div className='p-12'>
           <div
              style={{
                background: '#71a22f',
                height: '6px',
                width:'70px',
                borderRadius:'3px'
              }}
            />
           <div className='py-7 text-lg'>
           We are an early learning academy focused on social-emotional development and early literacy and numeracy. Our students walk out with the character and confidence to make their mark in the world, equipped with the knowledge and real-world skills that take them way ahead in the industry they may serve.
           </div>
           </div>
      </div>
      <div className=''>
        <hr class="h-px my-8 bg-[#71a22f] border-0 dark:bg-[#71a22f]"></hr>
      </div>
      <img
      src=''

      />
      <div className=''>
        <FormatQuoteIcon size="medium`" color="#71a22f"/>
        <div className='text-4xl py-10 decoration-2 italic font-medium font-serif'>
        We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys of life.
        </div>
      </div>
      <div className=' text-4xl py-10 decoration-2 font-medium font-serif'>
          <div> Curriculum Overview  </div>
      </div>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-5'>
        {data.map((item)=>(
        <div className='items-center justify-center py-2'>
          <img src ={item.image}
          style={{
            height:300,
            width:300,
            borderRadius:'10%'
          }}
          />
        <div className='text-2xl p-3 decoration-2 font-medium capitalize '>
          {item.name}
        </div>
        </div>
              ))}
      </div> 
      <div className='py-10 text-5xl text-center decoration-2 italic font-medium font-serif'> Our Campus </div>
      <ImageCarousel/>
      <div className='lg:flex items-center justify-center py-10 '>
      <img src ={img}
          style={{
            height:300,
            width:300,
            borderRadius:'10%'
          }}
          />
        <div className='text-xl decoration-2 italic font-medium left-5  '>
        <div
              style={{
                background: '#71a22f',
                height: '6px',
                width:'70px',
                borderRadius:'3px'
              }}
            />
          <div className='text-3xl text-gray-400 py-5'> Our Co-curricular Activities </div>
          <Example/>
        </div> 
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import data from '../components/data'
import Footer from '../components/Footer'
import bgr from '../assets/medium-shot-health-worker-with-copy-space.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
 

function About() {
  const data = [
    {
      label: "Our Mission",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Our Value",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
 
    {
      label: "Our History",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
 
    
 
];
  return (
    <div className='bg-[#F1F4FA]'>
    
    <Header/>
    <div
    style={{
      backgroundImage:`url(${bgr})`,
      height:'500px',
      width:'100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      resize:'horizontal'
    }}
    >
    {/* <div     
    className='lg:w-1/2  sm:1 m-10 pt-5 pb-10 '>
            <span className='text-gray-800 text-left text-7xl '>
            About Us
        </span><br/>
        <span className='font-serif tracking-tight text-gray-800 text-left lg:text-xl md:text-lg pt-5 sm:text-sm'>
        ST ALESSANDRO CLINIC & UNIVERSITY INSTITUTE DOUALA 
                created in August 2021 and named after late Professor Alessandro Faldini, a father who has done great things  in the field of orthopedic surgery. Help those who are physically challenged and the underprivileged in developing countries was his concern. We are thus continuing from where he left us. We are out to offer to the population of Cameroon and beyond, high level of medical care and training at affordable cost.
        </span>
        </div> */}
            </div>

            <div className='lg:flex justify-center items-center content-center  py-5 '>
              
              
                <div className=' lg:w-1/2'>
                <CardBody>
                  <Typography variant="h6" color="blue" className="uppercase mb-4">About Us</Typography>
                  <Typography variant="h4" color="blue-gray" className="mb-2 text-2xl">
                    Welcome To Our University
                  </Typography>
                  <Typography color="gray" className="font-normal ">
                  St Alessandro University Institute is a distinctive anglo-saxon university with future international reputation for higher standards of achievements and innovations in all areas of professionalism, arts, sciences and technology. If you are looking for a life-changing experience that will equip you with the knowledge and skills you will need to meet the future with confidence, we are sure that you will find it Here. As a graduate or postgraduate student in St Alessandro University Institute , you will study in modern surroundings that boast exceptionally well-equipped studios, workshops and facilities.
                  </Typography>
                  <a href="#" className="inline-block">
                  
                  </a>
                </CardBody>
                </div>
               
               <div className='lg:w-1/2'>
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="image" 
                  className="w-full h-full object-cover"
                />
               </div>
            </div>
            <div className='lg:flex justify-center items-center content-center  py-5 '>
               <div >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="image" 
                  className="w-full h-full object-cover"
                />
               </div>
               <div>
                <div>
                <CardBody>
                  <Typography variant="h6" color="blue" className="uppercase mb-4">Founding</Typography>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Lyft launching cross-platform service this week
                  </Typography>
                  <Typography color="gray" className="font-normal ">
                  ST ALESSANDRO CLINIC & UNIVERSITY INSTITUTE DOUALA created in August 2021 and named after late Professor Alessandro Faldini, a father who has done great things in the field of orthopedic surgery. Help those who are physically challenged and the underprivileged in developing countries was his concern. We are thus continuing from where he left us. We are out to offer to the population of Cameroon and beyond, high level of medical care and training at affordable cost.           
                  </Typography>
                  <a href="#" className="inline-block">
                  
                  </a>
                </CardBody>
                </div>
               </div>
            </div>

            <div>
            <Tabs id="custom-animation" value="html">
                <TabsHeader>
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
        
        <Footer/>
    </div>
  )
}

export default About
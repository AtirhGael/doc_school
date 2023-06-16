import React from 'react'
import Header from '../components/Header'
import data from '../components/data'
import data2 from '../components/data2'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Footer from '../components/Footer';
 


function Services() {
  return (
    <div>
      <div>
        <Header/>
      </div>
        <div className='bg-[#71a22f] text-5xl py-20 text-center  '>
        Academics
        
      </div>
      <div className='py-5 '>
    <div className='text-2xl py-7 px-10 '> Our Curriculum Overview</div>
    <div className=' text-5xl py-7 px-10'> A Commitment to Excellence</div>
           <div className='px-10'>
           <div
            className='px-10 text-xl '
              style={{
                background: '#71a22f',
                height: '6px',
                width:'70px',
                borderRadius:'3px',
              
              }}
            />
           </div>
              <div className='lg:flex px-12 '>
                <div className=' p-4 text-lg  px-12'>The St Alessandro University Institute aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life</div>
                <div className=' p-4 text-lg  px-12'>
                  Whether it is our books or hands-on training, we make sure each student gets personal attention to cope up and flourish in every subject for better scores and a brighter future.</div>
              </div>
        <div className='grid lg:grid-cols-3 p-10 md:grid-cols-2 justify-center gap-5'>
             {data2.map((item)=>(
              <div>
              
              <Card variant="gradient" className="w-full max-w-[20rem] p-8 bg-[#71a22f] ">
                    <CardHeader
                      floated={false}
                      shadow={false}
                      color="transparent"
                      className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                    >
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase text-black text-xl"
                      >
                        {item.title}
                      </Typography>
                     
                    </CardHeader>
                    <div className='p-0'>
                      <ul>
                        <li className="font-normal text-black text-2xl underline">{item.text}</li>
                        <li className="font-normal text-black text-lg">{item.one}</li>
                        <li className="font-normal text-black text-lg">{item.two}</li>
                        <li className="font-normal text-black text-lg">{item.three}</li>
                        <li className="font-normal text-black text-lg">{item.four}</li>
                        <li className="font-normal text-black text-lg">{item.five}</li>
                        <li className="font-normal text-black text-lg">{item.six}</li>
                        <li className="font-normal text-black text-lg">{item.seven}</li>
                        <li className="font-normal text-black text-lg">{item.eight}</li>
                        <li className="font-normal text-black text-lg">{item.nine}</li>
                        <li className="font-normal text-black text-2xl">{item.fee}</li>
                      </ul>
                    </div>
                   
                  </Card>
              </div>
             ))}
        </div>
        <div className='bg-[#e5e5eb] py-10 px-12 gap-2 '>
          {data.map((item)=>(
            <div className='lg:flex gap-10 py-5 items-center'>
           <div className='lg:w-1/3'>
           <img src={item.image}
            style={{
              height:350,
              width:400,
              borderRadius:'5%'
            }}
            />
           </div>
            <div className='lg:w-2/3'>
              <p className='text-3xl capitalize '> {item.name} </p>
              <p className='text-2xl'> {item.description} </p>
              <ul>
                <li className='text-xl'>{item.courses}</li>
              </ul>
            </div>
            </div>
          ))}
          </div>     
      </div>
      <Footer/>
    </div>
  )
}

export default Services
import React, { useState,useRef } from 'react'
import Header from '../components/Header'
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea ,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";

import map from '../assets/map-pin.svg'
import call from '../assets/phone.svg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from '@emailjs/browser';
import GoogleMapReact from 'google-map-react';
import Footer from '../components/Footer';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact() {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    const form = useRef();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [massage, setMassage] = useState('')



    function onSubmitForm(e){
        e.preventDefault()


        emailjs.sendForm('service_hfilc7m', 'template_xhazprm', form.current, 'cHLSrM45b67DHDAxn')
        .then((result) => {
            console.log("success "+result.text);

        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div>
        <Header/>
        <div>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-full">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
     <div className='lg:flex justify-between px-20 '>
        <div>
        <Card  variant="gradient" className="w-full max-w-[20rem] p-8 bg-[#71a22f]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
       
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl"> Contact Info</span>
          
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
            <img src={map}/>
            </span>
            <Typography className="font-normal text-white">Bonaberi-Douala Oposite Brigarde de Recheche</Typography>
          </li>
            <div className='text-white'> English</div>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <img src={call}/>
            </span>
            <Typography className="font-normal text-white">+237 673409309 (call)</Typography>
            
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <WhatsAppIcon strokeWidth={1} className="h-2 w-1" />
            </span>
            <Typography className="font-normal text-white">+237 696894215 (WhatsApp)</Typography>
            
          </li>
          <div className='text-white'> French</div>
          
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
            <img src={call}/>
            </span>
            <Typography className="font-normal text-white">+237 690548477 (call)</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
            <WhatsAppIcon strokeWidth={1} className="h-2 w-1" />
            </span>
            <Typography className="font-normal text-white">+237 677658745 (WhatsApp)</Typography>
          </li>
          
        </ul>
      </CardBody>
     
    </Card>
        </div>
        <div>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="">
        Send Us A Massage
      </Typography>
     
      <form ref={form}
      onSubmit={onSubmitForm}
       className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" name='user_name'  value={name}  onChange={(e)=>setName(e.target.value)}/>
          <Input size="lg" label="Email" name='user_email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <div className="w-96">
            <Textarea label="Message" name='massage' value={massage} onChange={(e)=>setMassage(e.target.value)} />
            </div>
        </div>
        
        <Button type='submit' className="mt-6 bg-[#71a22f] " fullWidth>
         Send
        </Button>
        
      </form>
    </Card>
        </div>
     </div>
  </div>
</section>
<div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
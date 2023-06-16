import React from 'react'
import map from '../assets/map-pin.svg'
import mail from '../assets/mail.svg'
import call from '../assets/phone.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import { Link } from 'react-router-dom'
import logo from '../assets/logos.jpg'


function Footer() {
  return (
    <div className='bg-[#71a22f]'>
        <div className='lg:flex gap-10 p-10 justify-between' >
            <div>
                <div> <img src={logo}
              style={{
                height:40,
                width:40,
                borderRadius:20,
                resize:'none'
              }}/></div>
                <div className='flex gap-5 py-5'><img src={facebook} /> <img src={twitter} /> </div>
                <span className='text-black  text-sm'> Copyright@2023 St Alessandro university Institute</span>
            </div>
            <div className='lg:flex gap-20 justify-between mr-20 '>
            <div>
                <span className='text-black  text-xl underline'> Quick Link</span><br/>
                <Link to='/' className='text-lg text-black' > Home</Link><br/>
                <Link to='/service' className='text-lg text-black'> Academics</Link><br/>
                <Link to='/about' className='text-lg text-black'> About Us</Link><br/>
                <Link to='/contact' className='text-lg text-black' > Contact</Link><br/>
            </div>
            <div>
                <span className='text-black  text-xl underline'> Contact Info</span>
                    <ul>
                        <li className='flex gap-2 py-2 text-black'><img src={map} /> Bonaberi-Douala Oposite Brigarde de Recheche</li>
                        <li  className='flex gap-2 py-2 text-black'><img src={mail}  /> alexandro@gmail.com</li>
                        <li  className='flex gap-2 py-2 text-black'><img src={call} />+237 673409309</li>
                        
                    </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
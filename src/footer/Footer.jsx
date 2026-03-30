import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { SlEnvolopeLetter } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
  {/* Top Section */}
  <div className="max-w-7xl mx-auto px-7 py-12 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
    
    {/* Brand */}
    <div className="">
      <h2 className="text-white text-xl font-semibold mb-3">
        CS — Ticket System
      </h2>
      <p className="text-sm leading-relaxed">
      A smart ticket management platform that helps support teams organize tasks, 
      resolve issues faster, and deliver better customer experiences.
      </p>
    </div>

    {/* Company */}
    <div>
      <h6 className="text-white font-semibold mb-3">Company</h6>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Our Mission</li>
        <li className="hover:text-white cursor-pointer">Contact Sales</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h6 className="text-white font-semibold mb-3">Services</h6>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer">Products & Services</li>
        <li className="hover:text-white cursor-pointer">Customer Stories</li>
        <li className="hover:text-white cursor-pointer">Download Apps</li>
      </ul>
    </div>

    {/* Information */}
    <div>
      <h6 className="text-white font-semibold mb-3">Information</h6>
      <ul className="space-y-2 text-sm">
        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
        <li className="hover:text-white cursor-pointer">Join Us</li>
      </ul>
    </div>

    <div>
        <h6 className="text-white font-semibold mb-4">Social Links</h6>

        <ul className="space-y-4 text-sm text-gray-400">
          
          <li className="flex items-center gap-3 hover:text-white transition">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white">
              <BsTwitterX className="text-xs text-black" />
            </span>
            <span>@CS — Ticket System</span>
          </li>

          <li className="flex items-center gap-3 hover:text-white transition">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white">
              <FaLinkedinIn className="text-xs text-black" />
            </span>
            <span>@CS — Ticket System</span>
          </li>

          <li className="flex items-center gap-3 hover:text-white transition">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white">
              <FaFacebookF className="text-xs text-black" />
            </span>
            <span>@CS — Ticket System</span>
          </li>

          <li className="flex items-center gap-3 hover:text-white transition">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white">
              <SlEnvolopeLetter className="text-xs text-black" />
            </span>
            <span>support@cst.com</span>
          </li>

        </ul>
    </div>

      
  </div>

  {/* Divider */}
  <div className="border-t border-gray-800 max-w-7xl mx-auto"></div>

  {/* Bottom Section */}
  <div className="max-w-7xl mx-auto px-10 py-4 sm:text-center text-sm">
    
    {/* Copyright */}
    <p>
      © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer

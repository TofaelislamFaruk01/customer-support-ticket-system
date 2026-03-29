import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
  {/* Top Section */}
  <div className="max-w-7xl mx-auto px-10 py-12 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
    
    {/* Brand */}
    <div className="">
      <h2 className="text-white text-xl font-semibold mb-3">
        CS — Ticket System
      </h2>
      <p className="text-sm leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
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

    {/* Social Links */}
    <div>
      <h6 className="text-white font-semibold mb-3">Social Links</h6>
      <ul className="space-y-3 text-sm">
        <li>𝕏 @ CS — Ticket System</li>
        <li>📸 @ CS — Ticket System</li>
        <li>📘 CS — Ticket System</li>
        <li>✉️ support@cst.com</li>
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
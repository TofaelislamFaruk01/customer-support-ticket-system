import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        
        {/* In-Progress Card */}
        <div className="card text-white shadow-xl bg-gradient-to-r from-purple-600 to-indigo-500 ">
          <div className="card-body items-center justify-center text-center py-10 lg:h-[250px]">
            <div>
            <h2 className="text-lg opacity-80">In-Progress</h2>
            <p className="text-5xl font-bold">0</p>
            </div>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="card text-white shadow-xl bg-gradient-to-r from-green-400 to-teal-600 ">
          <div className="card-body items-center justify-center text-center py-10 lg:h-[250px]">
            <div>
            <h2 className="text-lg opacity-80">Resolved</h2>
            <p className="text-5xl font-bold">0</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Banner;
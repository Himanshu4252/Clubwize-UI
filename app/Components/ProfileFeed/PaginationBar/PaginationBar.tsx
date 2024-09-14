import React from 'react'

const PaginationBar = () => {
  return (
    <div className="mt-6 text-center flex items-center justify-center p-6">
            <span className="text-gray-500 text-xs">Total 85 Members</span>
            <div className="flex items-center ml-4 hover:bg-[#FFFFFF00]">
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">&lt;</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">1</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">...</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">4</button>
              <button className="px-4 py-3.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs"></button>
              <button className="px-4 py-3.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs"></button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">&gt;</button>

              <select className="px-3 py-2 ml-4 border rounded w-32 text-xs">
                <option value="" disabled selected>10 / page</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <label className="ml-2 text-xs">Go to</label>
              <input
                type="number"
                placeholder=""
                className="px-3 py-1.5 border rounded w-20 text-xs"
              />
            </div>
          </div>
  )
}

export default PaginationBar
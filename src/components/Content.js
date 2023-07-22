import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Content = ({item}) => {
    const [like, setLikes] = useState();

  return (
     <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                          <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-60 text-white'>
                                  <p className='whitespace-normal text-xs flex justify-center items-center font-bold h-full text-center'> {item.title }</p>
                                  <p>
                                      {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                                  </p>
                     
                              </div>
                          </div>
  )
}

export default Content
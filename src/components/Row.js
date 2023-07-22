import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {MdChevronLeft,  MdChevronRight} from 'react-icons/md'

import Content from './Content';
const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        axios.get(fetchURL)
            .then((res) => {
            setMovies(res.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
}
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
}
    

  return (
      <>
          <h2 className='text-white font-bold md:text-xl p-4'> {title} </h2>
          <div className='relative flex items-center group'>
              <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block' size={ 40} />
              <div id={'slider' + rowID } className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative'>
                
                  {movies.map((item, id) => {
                      return (
                          <Content key={id} item={item} />
                      )
                     })}
              </div>
              <MdChevronRight onClick={slideRight} className= 'bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer right-0 hidden group-hover:block' size={40}/>
          </div>
      </>
  )
}
export default Row
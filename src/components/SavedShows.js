import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

const SavedShows = () => {
    const {user} = UserAuth()
    const [movies, setMovies] = useState([]); 

    const slideLeft = () => {
        var slider = document.getElementById('slider' );
        slider.scrollLeft = slider.scrollLeft - 500;
}
    const slideRight = () => {
        var slider = document.getElementById('slider' );
        slider.scrollLeft = slider.scrollLeft + 500;
}
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
                setMovies(doc.data()?.savedShows)
            })
    },[user?.email])
  return (
      <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Favorites </h2>
          <div className='relative flex items-center group'>
              <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block' size={ 40} />
              <div id={'slider'} className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide relative'>
                
                  {movies.map((item, id) => {
                      return (
                          <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                          <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-60 text-white'>
                                  <p className='whitespace-normal text-xs flex justify-center items-center font-bold h-full text-center'> {item.title }</p>
                                 
                     
                              </div>
                          </div>
                      )
                     })}
              </div>
              <MdChevronRight onClick={slideRight} className= 'bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer right-0 hidden group-hover:block' size={40}/>
          </div> 
    </>
  )
}

export default SavedShows
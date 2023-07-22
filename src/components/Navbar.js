import React from 'react'

const Navbar = () => {
  return (
      <section>
        
{/* <nav >
  <div className="max-w-max flex  z-50  absolute items-center justify-between  ">

    
   <div className=" flex justify-between items-center " id="navbar-default">
     
    </div>
  </div>
</nav> */}
      
      <section>
        <div className='w-full flex  z-50 absolute  items-center justify-between'>
          <div className=' py-7 px-8 lg:px-[120px]'>
              <a href='/'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className=" h-[22px] lg:h-9  " alt="Flowbite Logo" />
              </a>
          </div>
          <div>
                <ul className="font-medium inline-flex justify-between items-start  text-white    ">
                   <li className='px-5 lg:px-[120px]' >
                         <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-[3px] text-sm px-3 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900   ">Sign In</button>
                  </li>
                 </ul>
          </div>

        </div>
        
    </section>










    </section>
  )
}

export default Navbar
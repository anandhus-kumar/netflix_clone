import React, { useEffect, useState } from 'react'
import SavedShows from '../components/SavedShows'
import { UserAuth } from '../context/AuthContext'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Account = () => {
  const { user } = UserAuth();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      const userDoc = doc(db, 'users', `${user?.email}`);
      try {
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
          console.log(username)
        } else {
          // If the document doesn't exist or the username field is not present
          setUsername("Default Username"); // Set a default username or handle the scenario as needed
        }
      } catch (error) {
        console.log("Error getting username:", error);
      }
    };

    if (user?.email) {
      getUsername();
    }
  }, [user?.email]);
  
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg" alt="" />
        <div className='absolute w-full h-[500px] top-0 left-0 bg-black/60 '></div>
        <div className='absolute top-[25%] p-4 md:p-7  w-full h-[200px] text-center '>
          <h1 className='py-7 font-bold uppercase text-3xl'>hello</h1>
            <h1 className='font-bold text-5xl'>{`${username}`}</h1> 
        </div>

        <SavedShows/>
      </div>
    </>
  )
}

export default Account
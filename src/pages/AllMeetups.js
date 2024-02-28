import {useState,useEffect} from 'react';

import MeetupList from "../components/meetups/MeetupList";


let AllMeetupsPage=()=>{
  let [isLoading,setIsLoading]=useState(true)
  let [loadedMeetups,setLoadedMeetups]=useState([])

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://advproject-19fad-default-rtdb.firebaseio.com/meetups.json').then((response)=>{return response.json()}).then((data)=>{
      const meetups=[]
      for(let key in data){
       const meetup={
          id:key,
          ...data[key]
        }
        meetups.push(meetup)
      }
    setIsLoading(false);
    setLoadedMeetups(meetups)})
  },[]);
  
  if(isLoading){
    return <section>
      <p>Loading...</p>
    </section>
  }

  console.log(loadedMeetups)
  return(
    <section>
        <h1>AllMeetupsPage</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>
    )
}

export default AllMeetupsPage;
import React, { useState } from 'react'
import Image from 'next/image';
import styles from './Actevity.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import profile from './Assets/Rectangle 3070 (23).svg'
import icon1 from './Assets/visibility.svg'
import icon2 from './Assets/Group 633662.svg'
import del from './Assets/dropdown-menu (1).svg'
import { styleText } from 'util';

function Actevity() {

    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [id, setId] = useState<number | null>(null);
  
    const [todays,setTodays] = useState([
  
      {id:0,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (24).svg'},
      {id:1,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (25).svg'},
      {id:2,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (26).svg'},
      {id:3,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (27).svg'},
      {id:4,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (28).svg'},
      {id:5,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (29).svg'},
  ])
  
  
  
    const yestaday = [
  
      {id:0,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (24).svg'},
      {id:1,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (25).svg'},
      {id:2,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (26).svg'},
      {id:3,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (27).svg'},
      {id:4,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (28).svg'},
      {id:5,notification1:'You like',notification2:'Cameron Willinsone',notification3:'post in',notification4:'save tree',notification5:'club',time:'12:36 PM - 2 min ago',img:'/Image/Rectangle 3070 (29).svg'},
  ]
  
  const anyday = [
    {id: 0, notification1: 'You like', notification2: 'Cameron Willinsone', notification3: 'post in', notification4: 'Save Tree Club', notification5: 'club', time: '12:36 PM - 2 min ago', img: '/Image/Rectangle 3070 (24).svg'},
    {id: 1, notification1: 'You like', notification2: 'John Doe', notification3: 'post in', notification4: 'Animal Welfare', notification5: 'club', time: '12:38 PM - 4 min ago', img: '/Image/Rectangle 3070 (25).svg'},
    {id: 2, notification1: 'You like', notification2: 'Raghu Kumar', notification3: 'post in', notification4: 'Green Earth', notification5: 'club', time: '12:40 PM - 6 min ago', img: '/Image/Rectangle 3070 (26).svg'},
    {id: 3, notification1: 'You like', notification2: 'Jane Smith', notification3: 'post in', notification4: 'Fitness Enthusiasts', notification5: 'club', time: '12:42 PM - 8 min ago', img: '/Image/Rectangle 3070 (27).svg'},
    {id: 4, notification1: 'You like', notification2: 'Emily Johnson', notification3: 'post in', notification4: 'Book Club', notification5: 'club', time: '12:44 PM - 10 min ago', img: '/Image/Rectangle 3070 (28).svg'},
    {id: 5, notification1: 'You like', notification2: 'Michael Brown', notification3: 'post in', notification4: 'Music Lovers', notification5: 'club', time: '12:46 PM - 12 min ago', img: '/Image/Rectangle 3070 (29).svg'},
    {id: 6, notification1: 'You like', notification2: 'Olivia Garcia', notification3: 'post in', notification4: 'Tech Geeks', notification5: 'club', time: '12:48 PM - 14 min ago', img: '/Image/Rectangle 3070 (30).svg'},
    {id: 7, notification1: 'You like', notification2: 'Liam Davis', notification3: 'post in', notification4: 'Travel Diaries', notification5: 'club', time: '12:50 PM - 16 min ago', img: '/Image/Rectangle 3070 (31).svg'},
    {id: 8, notification1: 'You like', notification2: 'Sophia Martinez', notification3: 'post in', notification4: 'Cooking Masters', notification5: 'club', time: '12:52 PM - 18 min ago', img: '/Image/Rectangle 3070 (32).svg'},
    {id: 9, notification1: 'You like', notification2: 'James Wilson', notification3: 'post in', notification4: 'Photography Club', notification5: 'club', time: '12:54 PM - 20 min ago', img: '/Image/Rectangle 3070 (24).svg'},
    {id: 10, notification1: 'You like', notification2: 'Cameron Willinsone', notification3: 'post in', notification4: 'Save Tree Club', notification5: 'club', time: '12:56 PM - 22 min ago', img: '/Image/Rectangle 3070 (25).svg'},
    {id: 11, notification1: 'You like', notification2: 'John Doe', notification3: 'post in', notification4: 'Animal Welfare', notification5: 'club', time: '12:58 PM - 24 min ago', img: '/Image/Rectangle 3070 (26).svg'},
    {id: 12, notification1: 'You like', notification2: 'Raghu Kumar', notification3: 'post in', notification4: 'Green Earth', notification5: 'club', time: '1:00 PM - 26 min ago', img: '/Image/Rectangle 3070 (27).svg'},
    {id: 13, notification1: 'You like', notification2: 'Jane Smith', notification3: 'post in', notification4: 'Fitness Enthusiasts', notification5: 'club', time: '1:02 PM - 28 min ago', img: '/Image/Rectangle 3070 (28).svg'},
    {id: 14, notification1: 'You like', notification2: 'Emily Johnson', notification3: 'post in', notification4: 'Book Club', notification5: 'club', time: '1:04 PM - 30 min ago', img: '/Image/Rectangle 3070 (29).svg'},
    {id: 15, notification1: 'You like', notification2: 'Michael Brown', notification3: 'post in', notification4: 'Music Lovers', notification5: 'club', time: '1:06 PM - 32 min ago', img: '/Image/Rectangle 3070 (30).svg'},
    {id: 16, notification1: 'You like', notification2: 'Olivia Garcia', notification3: 'post in', notification4: 'Tech Geeks', notification5: 'club', time: '1:08 PM - 34 min ago', img: '/Image/Rectangle 3070 (31).svg'},
    {id: 17, notification1: 'You like', notification2: 'Liam Davis', notification3: 'post in', notification4: 'Travel Diaries', notification5: 'club', time: '1:10 PM - 36 min ago', img: '/Image/Rectangle 3070 (32).svg'},
    {id: 18, notification1: 'You like', notification2: 'Sophia Martinez', notification3: 'post in', notification4: 'Cooking Masters', notification5: 'club', time: '1:12 PM - 38 min ago', img: '/Image/Rectangle 3070 (24).svg'},
    {id: 19, notification1: 'You like', notification2: 'James Wilson', notification3: 'post in', notification4: 'Photography Club', notification5: 'club', time: '1:14 PM - 40 min ago', img: '/Image/Rectangle 3070 (25).svg'},
    {id: 20, notification1: 'You like', notification2: 'Cameron Willinsone', notification3: 'post in', notification4: 'Save Tree Club', notification5: 'club', time: '1:16 PM - 42 min ago', img: '/Image/Rectangle 3070 (26).svg'},
    {id: 21, notification1: 'You like', notification2: 'John Doe', notification3: 'post in', notification4: 'Animal Welfare', notification5: 'club', time: '1:18 PM - 44 min ago', img: '/Image/Rectangle 3070 (27).svg'},
    {id: 22, notification1: 'You like', notification2: 'Raghu Kumar', notification3: 'post in', notification4: 'Green Earth', notification5: 'club', time: '1:20 PM - 46 min ago', img: '/Image/Rectangle 3070 (28).svg'},
    {id: 23, notification1: 'You like', notification2: 'Jane Smith', notification3: 'post in', notification4: 'Fitness Enthusiasts', notification5: 'club', time: '1:22 PM - 48 min ago', img: '/Image/Rectangle 3070 (29).svg'},
    {id: 24, notification1: 'You like', notification2: 'Emily Johnson', notification3: 'post in', notification4: 'Book Club', notification5: 'club', time: '1:24 PM - 50 min ago', img: '/Image/Rectangle 3070 (30).svg'},
    {id: 25, notification1: 'You like', notification2: 'Michael Brown', notification3: 'post in', notification4: 'Music Lovers', notification5: 'club', time: '1:26 PM - 52 min ago', img: '/Image/Rectangle 3070 (31).svg'},
    {id: 26, notification1: 'You like', notification2: 'Olivia Garcia', notification3: 'post in', notification4: 'Tech Geeks', notification5: 'club', time: '1:28 PM - 54 min ago', img: '/Image/Rectangle 3070 (32).svg'},
    {id: 27, notification1: 'You like', notification2: 'Liam Davis', notification3: 'post in', notification4: 'Travel Diaries', notification5: 'club', time: '1:30 PM - 56 min ago', img: '/Image/Rectangle 3070 (24).svg'},
    {id: 28, notification1: 'You like', notification2: 'Sophia Martinez', notification3: 'post in', notification4: 'Cooking Masters', notification5: 'club', time: '1:32 PM - 58 min ago', img: '/Image/Rectangle 3070 (25).svg'},
   
  ]
    
    
  
    const [today,setToday] = useState(todays)
    const [yestadays,setYestadays] = useState(yestaday)
    const [anydays,setanydays] = useState(anyday)
  
    const resetDates = () => {
      setStartDate(undefined);
      setEndDate(undefined);
    };
  
  
    const Pop_up_id = (id:number)=>{
      
         setId((prev) => (prev === id ? null : id))
         
  
    }
  
    const  handleClick = (ind:number)=>{
      
      const updatedToday = [...today];  // Create a copy of the array
      updatedToday.splice(ind, 1);  // Apply splice on the copied array
      console.log(updatedToday);
    
      setToday(updatedToday);  // Update state with the new array
      Pop_up_id(ind);
      
  
    }
  
    const  handleClick2 = (ind:number)=>{
      
      yestaday.splice(ind,1)
      
      setYestadays(yestaday)
      Pop_up_id(ind)
      
  
    }
  
    const  handleClick3 = (ind:number)=>{
      
      anyday.splice(ind,1)
      
      setanydays(anyday)
      Pop_up_id(ind)
      
  
    }
  
    const  handleClick4 = (ind:number)=>{
      
  
      anyday.splice(ind,1)
      
      setanydays(anyday)
      Pop_up_id(ind)
      
  
    }





  return (
    <div className={styles.activity_cnt}>
      <div className={styles.upper_cnt}>
              <div className={styles.text_cnt}>
                <h1>Activity feed</h1>
                 <h2>Lorem ipsum dolor sit amet . Beatae, tempore?</h2>
              </div>
              <div className={styles.cln_box}>
                 
                 <div className={styles.date_range_picker}>
      <div className={styles.date_picker_wrapper}>
        <FaCalendarAlt className={styles.calendar_icon} />
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date ?? undefined)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          isClearable={false} // Disable internal clear, using custom clear
          maxDate={new Date()}
        />
        <span> - </span>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date ?? undefined)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
          isClearable={false}
          maxDate={new Date()}
        />
        
        {startDate && endDate && (
          <FaTimes className={styles.close_icon} onClick={resetDates} />
        )}
      </div>

      {/* {startDate && endDate && (
        <p>
          Selected range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </p>
      )} */}
    </div>
                 
              </div>
      </div>

      {startDate && endDate ? 
      
      <div className={`${styles.lower_cnt} no-scrollbar `}>

<div className={styles.box_cnt}>
       {anydays.map((data,index)=>(
 
 <div className={styles.text_box} key={index}>
 <div className={styles.img_cnt}>
 <Image src={data.img} alt='img' width={40} height={40}/>
 </div>
 <div className={styles.text_main_box}>
 <p>{data.notification1}&nbsp;<span className={styles.span_1}>{data.notification2}</span>&nbsp;{data.notification3}&nbsp;<span className={styles.span_2}>{data.notification4}</span>&nbsp;{todays[0].notification5}</p>
 <p>{todays[0].time}</p>
 </div>
 <div className={styles.icon_txt}>
     <Image src={icon1} alt='image' style={{cursor:'pointer'}}/>
     <Image src={icon2} alt='image' style={{cursor:'pointer'}} onClick={()=>{Pop_up_id(data.id)}} />
 
 </div>
 {id === data.id && (
    <div className={styles.delete_pop_up}>

<Image style={{cursor:'pointer'}}  src={del} alt='img' width={120} height={50} onClick={()=>{handleClick4(data.id)}}/>


    </div>
  )}


 
 
 </div>
 
            
 
       ))}
 
       
 
      </div>


        
      </div>
      
      
      : 
      <div className={`${styles.lower_cnt} no-scrollbar `}>

      <h1>Today</h1>
 
      <div className={styles.box_cnt}>
       {today.map((data,index)=>(
 
 <div className={styles.text_box} key={index}>
 <div className={styles.img_cnt}>
   <Image src={data.img} alt='img' width={40} height={40}/> 
 </div>
 <div className={styles.text_main_box}>
 <p>{data.notification1}&nbsp;<span className={styles.span_1}>{data.notification2}</span>&nbsp;{data.notification3}&nbsp;<span className={styles.span_2}>{data.notification4}</span>&nbsp;{todays[0].notification5}</p>
 <p>{todays[0].time}</p>
 </div>
 <div className={styles.icon_txt}>
     <Image src={icon1} alt='image' style={{cursor:'pointer'}} />
     <Image src={icon2} alt='image' style={{cursor:'pointer'}} onClick={()=>{Pop_up_id(data.id)}} />
 
 </div>
  
  {id === data.id && (
    <div className={styles.delete_pop_up}>

<Image style={{cursor:'pointer'}}  src={del} alt='img' width={120} height={50} onClick={()=>{handleClick(data.id)}}/>


    </div>
  )}
 
 
 </div>
            
 
       ))}
 
       
 
      </div>
 
      <h1>Yastaday</h1>
 
      <div className={styles.box_cnt}>
       {yestadays.map((data,index)=>(
 
 <div className={styles.text_box} key={index}>
 <div className={styles.img_cnt}>
 <Image src={data.img} alt='img' width={40} height={40}/> 
 </div>
 <div className={styles.text_main_box}>
 <p>{data.notification1}&nbsp;<span className={styles.span_1}>{data.notification2}</span>&nbsp;{data.notification3}&nbsp;<span className={styles.span_2}>{data.notification4}</span>&nbsp;{todays[0].notification5}</p>
 <p>{todays[0].time}</p>
 </div>
 <div className={styles.icon_txt}>
     <Image src={icon1} alt='image' style={{cursor:'pointer'}}/>
     <Image src={icon2} alt='image' style={{cursor:'pointer'}} onClick={()=>{Pop_up_id(data.id)}} />
 
 </div>
 {id === data.id && (
    <div className={styles.delete_pop_up}>

<Image style={{cursor:'pointer'}}  src={del} alt='img' width={120} height={50} onClick={()=>{handleClick2(data.id)}}/>


    </div>
  )}
 
 
 </div>
            
 
       ))}
 
       
 
      </div>
 
      <h1>Before yestaday</h1>
      <div className={styles.box_cnt}>
       {anydays.map((data,index)=>(
 
 <div className={styles.text_box} key={index}>
 <div className={styles.img_cnt}>
 <Image src={data.img} alt='img' width={40} height={40}/>
 </div>
 <div className={styles.text_main_box}>
 <p>{data.notification1}&nbsp;<span className={styles.span_1}>{data.notification2}</span>&nbsp;{data.notification3}&nbsp;<span className={styles.span_2}>{data.notification4}</span>&nbsp;{todays[0].notification5}</p>
 <p>{todays[0].time}</p>
 </div>
 <div className={styles.icon_txt}>
     <Image src={icon1} alt='image' style={{cursor:'pointer'}}/>
     <Image src={icon2} alt='image' style={{cursor:'pointer'}} onClick={()=>{Pop_up_id(data.id)}}/>
 
 </div>
 {id === data.id && (
    <div className={styles.delete_pop_up}>

<Image style={{cursor:'pointer'}}  src={del} alt='img' width={120} height={50} onClick={()=>{handleClick3(data.id)}}/>


    </div>
  )}
 
 
 </div>
            
 
       ))}
 
       
 
      </div>
          
       </div>
      
      
      }

    
    </div>
  )
}

export default Actevity

import axios from 'axios'
import React, { useEffect } from 'react'

export default function ProjectDetails() {
    const [data, setdata] = useState([])

    const getDetails=async()=>{
        const url=`http://localhost:5000/${id}`
        const {data}=await axios.get(url)
        console.log(data);
        setdata(data)
    }
    useEffect(() => {
    getDetails()
    }, [])
    ()
  return (
    <div className='text-light'>ProjectDetails</div>
  )
}

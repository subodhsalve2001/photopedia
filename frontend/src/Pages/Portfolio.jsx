// import axios from 'axios'
// import { AiFillEye } from 'react-icons/ai'
// import { Link } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import { motion, useScroll } from 'framer-motion'
// import '../css/portfolio.css'
// export default function Portfolio() {
// const [data, setdata] = useState([])
// const [limit, setlimit] = useState(6)
// const [total, settotal] = useState(10)
// const [page, setpage] = useState(1)
//     const [loading, setloading] = useState(false)
//     const { scrollYProgress } = useScroll()
//     const getData = async () => {
// setloading(true)
//         const result = await axios.get("http://localhost:5000/projects", {
//             params: { _limit: limit, _page: page }
//         })
// settotal(Math.ceil(result.headers['x-total-count'] / limit))
// setdata(result.data)
// setloading(false)
//     }
//     useEffect(() => {
//         getData()
//     }, [limit, page])
// useEffect(() => {
//     setpage(1)
// }, [limit])
//     return (
// <>
//     <section id="portfolio" class="portfolio py-4">
//         <div class="container">
//             <div class="section-title text-center text-light">
//                 <h1 className='text-center text-warning'>PORTFOLIO</h1>
//                 <p>My Works</p>
//             </div>
//             <div className="row">
//                 {loading ? (
//                     <div className='d-flex justify-content-center align-content-center'>
//                         <div class="spinner-border text-primary"></div>{" "}
//                     </div>
//                 ) : (
//                     <>
//                         {data.map((item, i) => {
//                             return (
//                                 <div class="col-md-4 col-sm-6 ">
//                                     <div
//                                         class="box my-4  ">
//                                         <img src={item.img} />
//                                         <div class="box-content">
//                                             <h3 class="title">
//                                                 {item.title}
//                                             </h3>
//                                         </div>
//                                         <ul class="icon">
//                                             <li><a href={item.link}> <AiFillEye /></a></li>
//                                             {/* <Link to={`/projectdetails/${item.id}`}>
//                       <button className='btn btn-success  '>View</button>

//                     </Link> */}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             );
//                         })}

//                     </>
//                 )}
//             </div>
//         </div>
//         {/* <div className="pg d-flex align-items-center justify-content-center">
//             {
//                 page > 1 && <button type="button" onClick={e => setpage(page - 1)} class="btn btn-primary">Prev </button>
//             }
//             {[...Array(total).keys()].map((item) => (<>

//                 <button
//                     type="button"
//                     onClick={(e) => setpage(item + 1)}
//                     class={page === item + 1 ? "btn btn-primary mx-1" : "btn btn-outline-primary mx-1"}
//                 >
//                     {item + 1}
//                 </button>

//             </>

//             ))}
//             {
//                 page < total && <button type="button" onClick={e => setpage(page + 1)} class="btn btn-primary">Next</button>
//             }

//         </div> */}

//     </section>
// </>
//     )
// }




import React, { useEffect, useState } from 'react'
import '../css/portfolio.css'
import { AiFillEye } from 'react-icons/ai'
import axios from 'axios'
export default function Portfolio() {
    const [data, setdata] = useState([])
    const [limit, setlimit] = useState(6)
    const [total, settotal] = useState(5)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [projects, setprojects] = useState([])
    const getAllProjects = async () => {
        setloading(true)
        const { data } = await axios.get('http://localhost:5000/projects', {
            // params: { _limit: limit, _page: page }
        })
        setprojects(data.result)
        // settotal(Math.ceil(data.headers['x-total-count'] / limit))
        setloading(false)
    }
    useEffect(() => {
        getAllProjects()
    }, [/*limit, page*/])
    // useEffect(() => {
    //     setpage(1)
    // }, [limit])
    
    return (

        <>
            <section id="portfolio" class="portfolio py-4">
                <div class="container">
                    <div class="section-title text-center text-light">
                        <h1 className='text-center text-warning'>PORTFOLIO</h1>
                        <p>My Works</p>
                    </div>
                    <div className="row">
                        {loading ? (
                            <div className='d-flex justify-content-center align-content-center'>
                                <div class="spinner-border text-primary"></div>
                            </div>
                        ) : (
                            <>
                                {projects && projects.map((item, i) => {
                                    return (
                                        <div class="col-md-4 col-sm-6 " key={item._id} >
                                            <div
                                                class="box my-4  ">
                                                <img src={item.img} />
                                                <div class="box-content">
                                                    <h3 class="title">
                                                        {item.title}
                                                    </h3>
                                                    <p>{item.desc}</p>
                                                </div>
                                                <ul class="icon">
                                                    <li><a href={item.link}> <AiFillEye /></a></li>
                                                    {/* <Link to={`/projectdetails/${item.id}`}>
                              <button className='btn btn-success  '>View</button>
                            </Link> */}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}

                            </>
                        )}
                    </div>
                </div>
                {/* {<div className="pg d-flex align-items-center justify-content-center">
                        {
                            page > 1 && <button type="button" onClick={e => setpage(page - 1)} class="btn btn-primary">Prev </button>
                        }
                        {[...Array(total).keys()].map((item) => (<>

                            <button
                                type="button"
                                onClick={(e) => setpage(item + 1)}
                                class={page === item + 1 ? "btn btn-primary mx-1" : "btn btn-outline-primary mx-1"}
                            >
                                {item + 1}
                            </button>

                        </>

                        ))}
                        {
                            page < total && <button type="button" onClick={e => setpage(page + 1)} class="btn btn-primary">Next</button>
                        }

                    </div>} */}

            </section>
        </>


    )
}

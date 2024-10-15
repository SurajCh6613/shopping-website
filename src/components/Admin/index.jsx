import React from 'react'
import { useState } from 'react'

const Admin = () => {

    const [size,setSize] = useState(280)
    const[accountMenu,setAccountMenu] = useState(false);

  return (
    <div>
        <aside className='h-full bg-indigo-600 fixed top-0 left-0' style={{width:size,transition:'0.3s'}}></aside>
        <section className='bg-gray-100 h-screen' style={{marginLeft:size,transition:'0.3s'}}>

            <nav className='bg-white p-6 shadow flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <button onClick={()=>setSize(size === 280 ? 0: 280)} className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8'>
                    <i className='ri-menu-2-line text-xl'></i>
                    </button>
                    <h1>ShopCode</h1>
                </div>
                <div>
                    <button className='relative'>
                        <img onClick={()=>setAccountMenu(!accountMenu)} src="./images/images.jpg" alt=""  className='w-10 h-10 rounded-full'/>
                        {
                            accountMenu && 
                            <div className='absolute top-18 right-0 bg-white shadow p-6 w-[200px]'>
                            <div>
                                <h1 className='text-lg font-semibold'>Suraj Chaudhary</h1>
                                <p className='text-gray-500'>suraj@gmail.com</p>
                                <div className='h-px bg-gray-200 my-4'>
                                    <button>
                                        <i className='ri-logout-circle-r-line'></i>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                        }
                       
                    </button>
                </div>
            </nav>
        </section>
    </div>
  )
}

export default Admin
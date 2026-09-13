import React from 'react'

function Card({username,detiles}){
    return(
        <div className='flex justify-center mb-5'>
   <figure className='inline-block w-auto h-auto bg-slate-100 rounded-xl p-8 md:pd-0 dark:bg-slate-800 item'>
        
        <div className=" flex items-center flex-col  p-7 rounded-2xl">
          <div>
            <img className="size-48 shadow-xl" alt="" src="https://imgs.search.brave.com/pjBTV6BFCwUO4KXix3sTRDAPKCw2GQ3y2fbCxCLMi4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wNC9ab3Jy/by10aGUtY2F0LWNv/bXByZXNzZWQtMjQw/eDE4MC5qcGc_dmVy/PTE3ODgxNDYwNTI" />
          </div>
          <div className="flex flex-col">
            <span>{username}</span>
            <span>{detiles}</span>
            <span className="flex">
              <span>No. 4</span>
              <span>·</span>
              <span>2025</span>
            </span>
          </div>
        </div>
      </figure>
    </div>

    )
}

export default Card
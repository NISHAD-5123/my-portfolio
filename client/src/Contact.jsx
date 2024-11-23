import React from 'react'
import { useState } from 'react';
const Contact = () => {
const[data, setData] = useState({
  "name":"",
  "subject":"",
  "message":""
})

const handleInput = (e)=>{
  const{name, value} = e.target;
  setData({
    ...data,
    [name]:value
  })
}

const submitForm = async(e)=>{
  e.preventDefault();
  const res = await fetch('http://localhost:5000/contact',{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      'Content-Type':'application/json',
    }
  })

  if(!res.ok){
    alert(`${res.status}`)
  }
  const val = await res.json();
  console.log(val)
  setData({
    "email":"",
    "subject":"",
    "message":""
  })
}


return (
<>
  <section class="bg-white dark:bg-gray-900">
  <h1 className="text-red-500 text-3xl font-bold max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" id="Contact">Contact me</h1>
  <hr className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-t-4 border-red-500" />
  <div class="max-w-screen-xl mx-auto p-4">
      <p class="my-4 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Having some doubt or want to build some crazy project with me? Let me know.</p>
      <form onSubmit={submitForm} class="space-y-8 ">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" value={data.email} onChange={handleInput} name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" value={data.subject} onChange={handleInput} name="subject" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" value={data.message} onChange={handleInput} name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-red-500 dark:bg-red-500  dark:focus:ring-red-500 hover:bg red-600">Send message</button>
      </form>
  </div>
</section>
  </>
  )
}

export default Contact;

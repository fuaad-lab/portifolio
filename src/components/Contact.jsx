import React from 'react'

const Contact = () => {
  return (
    <section className='py-20 bg-gray-100 '>
        <div className='max-w-3xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold text-gray-800'>Contact me</h2>
            <p className='text-gray-500 mt-2'>
                Have a question or want to work together? Send me a message!
            </p>
            <form className='mt-10 flex flex-col gap-4' >
                <input type="text"
                placeholder='Your Name'
                className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500' />
                <input type="email"
                placeholder='Your Email'
                className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500' />
                <button type='submit'
                className='mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition'>
                    Send Message
                </button>
            </form>
            <div className='flex justify-center gap-6 mt-8'>
                <a href="#" className='text-gray-700 hover:underline'>
                    GitHub
                </a>
                <a href="#" className='text-pink-500 hover:underline'>
                    Twitter
                </a>
                <a href="#" className='text-blue-600 hover:underline'>
                    LinkedIN
                </a>
            </div>
        </div>
      
    </section>
  )
}

export default Contact;

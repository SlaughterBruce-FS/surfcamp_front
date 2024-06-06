'use client'
import axios from 'axios'
import React, { useState } from 'react'

function Subscribe() {
    const [email, setEmail] = useState('')
    const [hasSignedUp, setHasSignedUp] = useState(false)
    const [showError, setShowError] = useState(false)

    const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(e.target.value)
    }

    const onSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log(email)
        try {
            if (email.length) {

                // send email to strapi 
                await axios.post(`${process.env.NEXT_PUBLIC_STARPI_URL}api/newsletter-signups`, {
                    "data": {
                        email
                    }
                })
            }
            setHasSignedUp(true)
        } catch (e) {
            console.log(e)
            setShowError(true)
        }

    }


    return (
        <section className='newsletter flex justify-center flex-col md:flex-row bg-[#d7c094] mt-40 '>

            {hasSignedUp ? (
                <h4 className='text-4xl'>thank you for signing up for our newsletter </h4>
            ) : (
                <>
                    <div className='mb-10 md:mb-0'>
                        <h4 className='text-5xl mb-10'>Subscribe to our newsletter</h4>
                        <p className='text-3xl'>Unlock the insight and stay in the know subscribe to our newsletter today to always stay in touch</p>
                    </div>
                    <form className='flex items-center md:ml-16' onSubmit={onSubmit}>
                        <input
                            className='h-16 w-[35rem] rounded-l-2xl pl-10 text-2xl'
                            type='text'
                            placeholder='Enter you email address'
                            value={email}
                            onChange={onChange}
                        />
                        <button className='text-3xl h-16 px-10 bg-teal-400 py-3 text-white rounded-r-2xl '>
                            Subscribe
                        </button>
                    </form>
                </>

            )}


        </section>
    )
}

export default Subscribe
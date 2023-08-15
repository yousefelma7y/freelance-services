import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='home-page row w-100 p-0 m-0'>
      <div className='col-12 col-md-6 row p-0 m-0 justify-content-center'>
        <img src='./images/home.svg' className='col-9 m-5' />
      </div>
      <div className='col-12 col-md-6 row pt-md-5 mt-md-5 p-3 m-0 justify-content-center text-center'>

        <div>

          <h1 className='header p-4'>
            SMART
          </h1>
          <p className='text-start'>
            In the realm of innovation and boundless possibilities,
            Welcome to Smart, where brilliance finds its ease.
            A digital domain where dreams come alive,
            Our mission is to empower, inspire, and thrive.

            With cutting-edge tech and a visionary approach,
            We revolutionize businesses, unleashing their growth.
            From students to doctors, we're here by your side,
            To ignite your potential and take you on a joyride.

            At Smart, we believe in the power of connection,
            Linking minds and ideas, forging perfection.
            With tailored solutions and strategies profound,
            Together, we'll conquer any challenge we've found.

            Our team of experts, fueled by passion and skill,
            Harnesses the digital landscape, your goals to fulfill.
            We'll craft a stunning web presence, unique and sleek,
            Ensuring your brand's voice is strong and unique.

            From captivating designs to seamless functionality,
            We'll build your online presence with utmost agility.
            With SEO mastery and conversion-driven tactics,
            We'll elevate your business to new heights and optics.

            So join us on this journey, let's embark hand in hand,
            Unleash your potential in this vast digital land.
            With Smart as your partner, success is assured,
            Together, we'll create a future that's truly secured
          </p>
          <h4 className='p-3 '>
            For Educational Services
          </h4>

          <div>
            <button className='more-btn p-2 px-4' onClick={() => { window.location.href = "/#services" }}>
              Learn More
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home

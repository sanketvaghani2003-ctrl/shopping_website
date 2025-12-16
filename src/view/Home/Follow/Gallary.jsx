import './Gallary.css'


const Gallary = () => {






    return (<>

        <section className='gallary-animation'>
            <div className='gallary-container'>
                <h5 className='gallary-title'>Follow Us On Instagram</h5>
                <p className="gallary-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            </div>


            <div className='insta-slider'>
                <div className='gallary-row d-flex'>
                    <div className='gallary-part '>
                        <img src="/Gallary/gallary1.png" className=' img-fluid gallary-img ' alt="" />
                    </div>
                    <div>
                        <img src="/Gallary/gallary2.png" className='img-fluid w-100' alt="" />
                    </div>

                    <div className='gallary-part'>
                        <img src="/Gallary/gallary3.png" className='img-fluid  w-100' alt="" />
                    </div>
                    <div>
                        <img src="/Gallary/gallary4.png" className='img-fluid w-100' alt="" />
                    </div>
                    <div className='gallary-part'>
                        <img src="/Gallary/gallary5.png" className='img-fluid w-100' alt="" />
                    </div>
                    <div>
                        <img src="/Gallary/gallary6.png" className='img-fluid w-100' alt="" />
                    </div>

                    <div className='gallary-part'>
                        <img src="/Gallary/gallary7.png" className='img-fluid w-100' alt="" />
                    </div>

                    {/* copy  */}

                    <div className='gallary-part '>
                        <img src="/Gallary/gallary1.png" className=' img-fluid gallary-img ' alt="" />
                    </div>
                    <div>
                        <img src="/Gallary/gallary2.png" className='img-fluid w-100' alt="" />
                    </div>

                    <div className='gallary-part'>
                        <img src="/Gallary/gallary3.png" className='img-fluid  w-100' alt="" />
                    </div>
                    <div>
                        <img src="/Gallary/gallary4.png" className='img-fluid w-100' alt="" />
                    </div>
                    <div className='gallary-part'>
                        <img src="/Gallary/gallary5.png" className='img-fluid w-100' alt="" />
                    </div>
                    <div>
                        <img src="/Gallary/gallary6.png" className='img-fluid w-100' alt="" />
                    </div>

                    <div className='gallary-part'>
                        <img src="/Gallary/gallary7.png" className='img-fluid w-100' alt="" />
                    </div>



                </div>






            </div>

        </section>

    </>)
}
export default Gallary;
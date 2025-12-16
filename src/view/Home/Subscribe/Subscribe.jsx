import './Subscribe.css'

const Subscribe = () => {

    return (<>

        <section className="subscribe-section">
            <div className="subscribe-wrapper ">
                <div className='subscribe-banner '>
                    <div className='d-flex  justify-content-center'>

                        <div className='subscribe-img '>
                            <img src="/subscribe/sub1.png" alt="" />
                        </div>

                        <div className='subscribe-center'>
                            <div className='subscribe-title'>Subscribe To Our Newsletter</div>
                            <div className='subscribe-description text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </div>

                            <div className='mail-contect'>
                                michael@ymail.com
                            </div>

                            <button type="button" className='subscribe-now'>Subscribe Now</button>


                        </div>


                        <div className='promo-img'>
                            <img src="/subscribe/sub2.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </>)
}
export default Subscribe;   
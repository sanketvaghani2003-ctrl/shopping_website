import './Newsletter.css'

const Newsletter = () => {

    return (<>
        <div className="newsletter">
            <div className="newsletter-left">
                <h2>Sign Up For Newsletters</h2>
                <p>
                    Get E-mail updates about our latest shop and
                    <span> special offers.</span>
                </p>
            </div>

            <div className="newsletter-right">
                <input type="email" placeholder="Your email address" />
                <button>Sign Up</button>
            </div>
        </div>

    </>)
}
export default Newsletter;
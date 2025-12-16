import Newsletter from '../newsletter/Newsletter';
import './About.css'
import Aboutcontent from '../aboutcontent/aboutcontent';
import Footer from '../footer/Footer';

const About = () => {



    return (<>


        <div className='about-section'>
            <div className='about-conatiner'>
                <div className='about-banner'>
                    <h2 class="banner-text">#KnowUs</h2>
                    <p className='about-banner-title'>Discover our journey and what makes us unique.</p>
                </div>
            </div>
        </div>

        <Aboutcontent />
        <Newsletter />
        <Footer />

    </>)

}
export default About;
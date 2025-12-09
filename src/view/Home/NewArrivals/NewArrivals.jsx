import ArrivalsProduct from './ArrivalsProduct';
import './NewArrivals.css'

const NewArrivals = () => {
    return (<>

        <section className="new-arrivals" id='newArrivals'>
            <div className="container">
                <div className="arrivals-title">
                    New Arrivals
                </div>
                <div className="arrivals-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                    ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
                </div>

                <div className="category-nav ">
                    <button className="category-name">Men's Fashion</button>
                    <button className="category-name">Women's Fashion</button>
                    <button className="category-name">Women Accessories</button>
                    <button className="category-name">Men Accessories</button>
                    <button className="category-name">Discount Deals</button>
                </div>

                <div className="category-section">
                    <div className="category-content">
                        <div className="row">


                            <ArrivalsProduct image="/public/NewArrivals/dress1.png" title="Shiny Dress" subtitle="Al Karam" star="/public/NewArrivals/star.png" review="(4.1k) Customer Reviews" price="$95.50" soldout="Almost Sold Out" />
                            <ArrivalsProduct image="/public/NewArrivals/dress2.png" title="Long Dress" subtitle="Al Karam" star="/public/NewArrivals/star.png" review="(4.1k) Customer Reviews" price="$95.50" soldout="Almost Sold Out" />
                            <ArrivalsProduct image="/public/NewArrivals/dress3.png" title="Full Sweater" subtitle="Al Karam" star="/public/NewArrivals/star.png" review="(4.1k) Customer Reviews" price="$95.50" soldout="Almost Sold Out" />
                            <ArrivalsProduct image="/public/NewArrivals/dress4.png" title="White Dress" subtitle="Al Karam" star="/public/NewArrivals/star.png" review="(4.1k) Customer Reviews" price="$95.50" soldout="Almost Sold Out" />
                            <ArrivalsProduct image="/public/NewArrivals/dress5.png" title="Colorful Dress" subtitle="Al Karam" star="/public/NewArrivals/star.png" review="(4.1k) Customer Reviews" price="$95.50" soldout="Almost Sold Out" />
                            <ArrivalsProduct image="/public/NewArrivals/dress6.png" title="White Shirt" subtitle="Al Karam" star="/public/NewArrivals/star.png" review="(4.1k) Customer Reviews" price="$95.50" soldout="Almost Sold Out" />




                        </div>{/* end row */}

                        <button type="button" className='more-product'>View More</button>


                    </div>
                </div>
            </div>
        </section>

    </>)
}
export default NewArrivals;
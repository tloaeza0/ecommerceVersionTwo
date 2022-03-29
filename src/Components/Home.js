import React from 'react'

const Home = () => {
    return (
        <div>
            <section className="hero">
        <div className="container">
            <div className="info">
                <h1>Earths Haven</h1>
                <p>Explore different varieties of plants ranging from low light to rare plants.</p>
                <a href="products.html">Start Exploring</a>
            </div>
        </div>
    </section>

    <main className="about">
        <h2>About Me</h2>
        <div className="aboutdiv">
            <img src="https://images.pexels.com/photos/7616943/pexels-photo-7616943.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="woman watering plants"/>
        </div>
        <aside className="asideabout">
            <p>My name is Teresa and I started Earths Haven to share the love I have for plants with other people in the plant community. During COVID I started getting more and more into plants and thats where the love I have for plants started. So I created this website for the plant community to enjoy and buy affordable plants.</p>
        </aside>


    </main>
    <section className="infoboxes">
        <div className="information">
            <h3>Shipping Policy</h3>
            <p> Our team ships orders out every Monday but order processing time takes about a week. Please allow up to two weeks for your order to be delivered to your address. Contact shipping@earthshaven.com for any questions regarding your order.</p>
        </div>
        <div className="information">
            <h3>Satisfaction Guranteed</h3>
            <p>Our plants are grown in our green house with love. We package our products with care to ensure they get to you safely. Every purchase comes with a care card to ensure you know how to take good care of your new plant baby. </p>
        </div>
    </section>

        <div className="maindiv">
         
        </div>

        <section className="newsletter">
            <h4>Subscribe</h4>
            <p>Subscribe and recieve 20% off your first order.</p>
            <form>
                <input type="email" id="subscribe" name="newsletter" placeholder="Email"/>
                <input type="submit" id="letterbtn"/>
            </form>   
        </section>
        </div>
    )
}

export default Home

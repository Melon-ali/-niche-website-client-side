import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [home, setHome] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setHome(data.slice(0, 6)));
    } ,[])
    return (
        <div>
            <Banner></Banner>
            <div className="post">
                <h1>Popular <span className="spa">Products</span></h1>
            </div>
            <div className="card-container">
                {
                    home.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="post">
                <h1>Featured <span className="spa">Posts</span></h1>
            </div>
            <div className="card-container container">
                <div className="card">
                    <img src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxblog/img/pt/4.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-text text-center"><small className="text-muted">Posted on Sep 28, 2021 at 00:00</small></p>
                    <h5 className="card-title">The role of Blog on eCommerce site</h5>
                    <p className="card-text">Blogging is a great way to inform your audience about your product. In a blog post, you can show how to use a product and why people should buy it. You can also tell your visitors about yourself and your company. And you’ll be able to tell the story of your products from your perspective..</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxblog/img/pt/3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-text text-center"><small className="text-muted">Posted on Sep 25, 2021 at 00:00</small></p>
                    <h5 className="card-title">Top 3 solutions to create an easily navigable website</h5>
                    <p className="card-text">Among a great variety of PrestaShop modules for all needs, it is necessary to highlight the modules responsible for increasing the interest in products what is quite important in business online..</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxblog/img/pt/2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className="card-text text-center"><small className="text-muted">Posted on Sep 30, 2021 at 00:00</small></p>
                    <h5 className="card-title">Succeed in selling with PrestaShop modules</h5>
                    <p className="card-text">The larger the site, the more important it is to provide clear navigation. If the navigation is clear, visitors will stay and have a good experience, which ultimately leads to more business for you. Without proper navigation, a Web site becomes just a useless jumble of content..</p>
                    </div>
                </div>
                <div>
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default Home;
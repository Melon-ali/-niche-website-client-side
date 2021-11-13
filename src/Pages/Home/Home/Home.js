import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="post">
                <h1>Popular <span className="spa">Products</span></h1>
            </div>
            <Services></Services>
            <div className="post">
                <h1>Featured <span className="spa">Posts</span></h1>
            </div>
            <div class="card-container container">
                <div class="card">
                    <img src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxblog/img/pt/4.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text text-center"><small class="text-muted">Posted on Sep 28, 2021 at 00:00</small></p>
                    <h5 class="card-title">The role of Blog on eCommerce site</h5>
                    <p class="card-text">Blogging is a great way to inform your audience about your product. In a blog post, you can show how to use a product and why people should buy it. You can also tell your visitors about yourself and your company. And you’ll be able to tell the story of your products from your perspective..</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxblog/img/pt/3.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text text-center"><small class="text-muted">Posted on Sep 25, 2021 at 00:00</small></p>
                    <h5 class="card-title">Top 3 solutions to create an easily navigable website</h5>
                    <p class="card-text">Among a great variety of PrestaShop modules for all needs, it is necessary to highlight the modules responsible for increasing the interest in products what is quite important in business online..</p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://ld-prestashop.template-help.com/prestashop_eze_255/modules/jxblog/img/pt/2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <p class="card-text text-center"><small class="text-muted">Posted on Sep 30, 2021 at 00:00</small></p>
                    <h5 class="card-title">Succeed in selling with PrestaShop modules</h5>
                    <p class="card-text">The larger the site, the more important it is to provide clear navigation. If the navigation is clear, visitors will stay and have a good experience, which ultimately leads to more business for you. Without proper navigation, a Web site becomes just a useless jumble of content..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
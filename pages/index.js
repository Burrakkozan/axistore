import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h1>Ladies handbags</h1>
      <br />
      <p>Ladies handbags are a must-have for any woman.They can be used for a variety of purposes,from carrying your essentials to dressing up your look.
        There are a variety of styles and colors to choose from, so you can find the perfect bag for you.
        Some of the most popular ladies handbags include totes, crossbody bags, and shoulder bags.Totes are great for carrying everything you need, while crossbody bags are perfect for carrying your phone, wallet, and other essentials.Shoulder bags are a popular choice for women who want to look professional and stylish.
        The tote bag is a versatile and popular bag for carrying your belongings. They come in a variety of styles, sizes, and colors, so there's sure to be one that will fit your needs. 
        </p>
        
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
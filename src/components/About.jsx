import React from "react";



function About(){
  const aboutStyle = {
    boxSizing: 'border-box',
    width: '100%',
    height: 500,
    backgroundColor: '#ffead1',
    padding: 20,
    textAlign: 'justify',
  }
  return (
    <div style={aboutStyle}>
      <h3>We're about super fresh veggies. Super. Fresh.</h3>
      <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
    </div>
  );
}

export default About;

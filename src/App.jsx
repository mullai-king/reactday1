import React from 'react';
import Display from './Component/Display';

const App = () => {
  const priceCardDetails = [
    {
      membership: "FREE",
      price: "$0",
      features: [
        { featureList: "Single User", access: "true" },
        { featureList: "50GB Storage", access: "true" },
        { featureList: "Unlimited Public projects", access: "true" },
        { featureList: "Community Access", access: "true" },
        { featureList: "Unlimited Private Projects", access: "false" },
        { featureList: "Dedicated Phone Support", access: "false" },
        { featureList: "Free Subdomain", access: "false" },
        { featureList: "Monthly Status Reports", access: "false" }
      ]
    },
    {
      membership: "PLUS",
      price: "$9",
      features: [
        { featureList: "5 Users", access: "true" },
        { featureList: "50GB Storage", access: "true" },
        { featureList: "Unlimited Public projects", access: "true" },
        { featureList: "Community Access", access: "true" },
        { featureList: "Unlimited Private Projects", access: "true" },
        { featureList: "Dedicated Phone Support", access: "true" },
        { featureList: "Free Subdomain", access: "true" },
        { featureList: "Monthly Status Reports", access: "false" }
      ]
    },
    {
      membership: "PRO",
      price: "$49",
      features: [
        { featureList: "Unlimited Users", access: "true" },
        { featureList: "50GB Storage", access: "true" },
        { featureList: "Unlimited Public projects", access: "true" },
        { featureList: "Community Access", access: "true" },
        { featureList: "Unlimited Private Projects", access: "true" },
        { featureList: "Dedicated Phone Support", access: "true" },
        { featureList: "Free Subdomain", access: "true" },
        { featureList: "Monthly Status Reports", access: "true" }
      ]
    }

  ]
  return (
    <div>
      <Display priceCardDetails={priceCardDetails}/>
    </div>
  );
};

export default App;
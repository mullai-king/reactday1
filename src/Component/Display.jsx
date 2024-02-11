import React from 'react';
import './css/Display.css'

const Display = ({ priceCardDetails }) => {
  return (
    <div class="my-5 container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2  row-cols-lg-3 g-4 py-2">
        {
          priceCardDetails.map((item, index) => {
            return (
              <div>
                <div class="col">
                  <div class="card p-3">
                    <div class="card-body">
                      <h6 class="card-title text-center membership">{item.membership}</h6>
                      <h1 class="card-text text-center">{item.price}<span class="period">/Month</span></h1>
                      <hr></hr>
                      {item.features.map((item, index) => {
                        if(item.access == "true"){
                          return (
                            <p class="card-text text-unhiden">{'\u2714'} {item.featureList}</p>
                          )
                        }
                        return (
                          <p class="card-text text-hide">{'\u2716'}  {item.featureList}</p>
                        )
                      })
                      }
                    </div>
                    <button class="btn btn-primary text-uppercase">Button</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Display;
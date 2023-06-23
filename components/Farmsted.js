import React from 'react';
import imagePaths from './imagePaths.js';

let redCross_icon = "assets/images/redCross.png";

function FarmestedCurios()  {

    return(
        <div className="wrapper-row">
              <div className="wrapper-curio">          
                  Gleaming Shards
                  <img src={imagePaths.curios.gleamingShards.path} />
              </div>
              <div className="wrapper-without-cleansing">
                      <div className="item-without-cleansing">
                          <img src={redCross_icon}/>
                      </div>
              </div>
              <div> 
                  <div className="items-cleansing">
                      <img src={imagePaths.activators.shard.path} /> Shards x5-15.
                      Glittering crystals spill onto the ground.
                  </div>  
              </div>
          </div>
      
    );

}

export default FarmestedCurios;
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className="container" key={i}>
        <div className="my-5">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <Skeleton height={250} width={200} />
            </div>
            <div className="col-12 col-md-6 offset-md-2">
                    <div className="row d-flex justify-content-center text-center">
                    <Skeleton height={40} width={200} />
                    </div>
                    <div className="row d-flex justify-content-center">
                    <Skeleton height={40} width={150} />
                    </div>
                    <div className="row d-flex justify-content-center">
                    <Skeleton height={40} width={150} />
                    </div>
              
              
             
            </div>
          </div>
        </div>
      </div>
    ));
}

export default CardSkeleton;

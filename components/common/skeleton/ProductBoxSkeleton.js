import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";

const ProductBoxSkeleton = ({ boxCount, home, activeProductViewMode }) => {

    let browserWidth = 0;
    
    if(typeof window !== 'undefined') {
        browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    
    const [boxCountValue, setBoxCountValue] = useState(8);

    useEffect(() => {
        var result = boxCount.filter(boxCount => boxCount.breakpoint >= browserWidth).reverse();
        if(result.length > 0) {
            setBoxCountValue(result[0].value);
        }
    }, [browserWidth]);

    return (
        <div className={`row product-skeleton-row ${activeProductViewMode === 'list' ? 'product-list-view' : ''}`}>
            {Array(boxCountValue || 8)
                .fill()
                .map((item, index) => (
                    <div className={`col-lg-2 ${home ? 'home' : ''}`} key={index}>
                        <div className="single-product-box single-product-box-2">
                            <div className="single-product-image-wrapper">
                                <div className="single-product-image">
                                    <Skeleton height={`100%`} width={`100%`} />
                                </div>
                            </div>
                            <div className="single-product-details">
                                <Skeleton count={4} />
                            </div>
                        </div>
                    </div>                
                ))}
        </div>
    );
};
export default ProductBoxSkeleton;

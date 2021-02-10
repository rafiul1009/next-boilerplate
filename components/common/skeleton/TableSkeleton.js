import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";

const TableSkeleton = ({ row = 6, col = 5 }) => {

    let browserWidth = 0;

    if (typeof window !== 'undefined') {
        browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    const [rowValue, setRowValue] = useState(6);
    const [colValue, setColValue] = useState(5);

    useEffect(() => {
        if (browserWidth < 768) {
            setRowValue(5);
            setColValue(3);
        } else {
            setRowValue(row);
            setColValue(col);
        }
    }, [browserWidth]);

    return (
        <div className="table-skeleton-area">
            <div className="table-skeleton-search-print">
                <div className="search loading-skeleton-wrapper">
                    <Skeleton height={25} width={`100%`} />
                </div>
                <div className="print loading-skeleton-wrapper">
                    <Skeleton height={25} width={`100%`} />
                </div>
            </div>
            
            {Array(rowValue)
                .fill()
                .map((rowItem, rowIndex) => {
                    return (
                        <div className={`table-skeleton-row`} key={rowIndex}>
                            {Array(colValue)
                                .fill()
                                .map((colItem, colIndex) => {
                                    return (
                                        <div className="table-skeleton-col" key={colIndex}>
                                            <div className="loading-skeleton-wrapper">
                                                <Skeleton height={25} width={`100%`} />
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    )
                })

            }
        </div>
    );
};
export default TableSkeleton;

import React from 'react';
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'), { ssr: false });

const HtmlFormatedText = ({ text }) => {
    return (<div className="loading-skeleton-wrapper">
        {< div className="common-page-details-content" dangerouslySetInnerHTML={{ __html: text }
        }></div > || <Skeleton count={10} />}
    </div>)
}

export default HtmlFormatedText;
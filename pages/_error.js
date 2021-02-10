// pages/404.js
import React from 'react';
import Head from '../components/common/head/Head';
// const Head = dynamic(import('../components/Head'));
// import { FormattedMessage, useIntl } from 'react-intl';
import Link from 'next/link';
function Custom404({
    titleId = 'page_not_found',
    messageId = 'page_not_found',
    imageSrc = '/static/img/blank.png',
    linkUrl = '/',
    linkTextId = 'go_to_homepage',
    isLink = true,
    isLinkShow = true,
    isDownload = false,
    isFull = true,
    statusCode
}) {

    // const intl = useIntl();

    return (
        <div className={`${isFull ? 'header-fixed-content-layout' : ''}`}>
            <Head title="Message _error" />
            <div className={`${isFull ? 'container mh-80 error-page' : ''} d-flex align-items-center justify-content-center`}>
                <div className="empty-content-box">
                    <div className="empty-content-box-icon">
                        <img src={imageSrc} alt="{intl.formatMessage({ id: messageId })}" />
                    </div>
                    <div className="empty-content-box-message">
                        {Array.isArray(messageId) ?
                            messageId.length > 0 ?
                                messageId.map((message, i) => (
                                    <div key={i}>
                                        Message _error
                                    </div>
                                ))
                                :
                                "Link 4"
                            :
                            "Link 3"
                        }

                    </div>
                    {isLinkShow &&
                        <div>
                            {isLink ?
                                <Link href={linkUrl}>
                                    <a>Link</a>
                                </Link> :
                                <a>Link 2</a>}

                        </div>}
                    {isDownload && <a href={linkUrl} download>Link 3</a>}
                </div>
            </div>
        </div>
    );
}

Custom404.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Custom404
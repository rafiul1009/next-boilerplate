import NextHead from 'next/head';

import { baseUrl } from '../../../config/config';

const Head = ({
    title = '',
    titleId = '',
    description = '',
    keywords = '',
    url = '',
    image = '',
}) => {
    
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{(titleId ? titleId : title) || 'Echelon'}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <link rel="icon" type="image/png" sizes="16x16" href={baseUrl + "/static/favicon-16x16.png"} />
            <link rel="icon" type="image/png" sizes="32x32" href={baseUrl + "/static/favicon-32x32.png"} />
            <link rel="apple-touch-icon" sizes="180x180" href={baseUrl + "/static/apple-touch-icon.png"} />
            <link rel="mask-icon" href={baseUrl + "/static/favicon-mask.svg"} color="#000000" />
            <link rel="shortcut icon" href={baseUrl + "/static/favicon.ico"} type="image/x-icon" />

            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:site" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />            
        </NextHead>
    )
}

export default Head;

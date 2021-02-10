//default layout
import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../header/Header';

const Skeleton = dynamic(import('react-loading-skeleton'), { ssr: false });
const Footer = dynamic(()=>import('../footer/footer'), {
    loading: () => <Skeleton count={50} />,
    ssr: false
});

const DefaultLayout = ({ children }) => {
    return (
        <div id="__echelon">
            <Header />
            <div id="__layout">
                <main className="main">{children}</main>
                <Footer />
            </div>            
        </div>
    );
}

export default DefaultLayout;

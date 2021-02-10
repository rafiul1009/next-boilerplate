import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/static/css/bundle.css';
import '../public/static/css/style.css';
import '../public/static/css/responsive.css';


import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Provider as ReduxProvider } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import store from '../redux/store';
import { connect } from 'react-redux';

import { appWithTranslation } from '../i18n';


const MainLayout = dynamic(() => import('../components/common/layouts/MainLayout'), { loading: () => "" });
const DefaultLayout = dynamic(() => import('../components/common/layouts/DefaultLayout'), { loading: () => "" });


class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {
            domLoading: true
        };
    }

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps: pageProps };
    }

    componentDidMount() {
        // if(typeof window !== 'undefined') {
        //     //console.log('componentDidMount');
        //     window.addEventListener("load", this.handleDomLoaded);
        // } else {
        //     this.handleDomLoaded();
        // }
    }

    componentWillUnmount() {
        // if(typeof window !== 'undefined') {
        //     //console.log('componentWillUnmount');
        //     window.removeEventListener("load", this.handleDomLoaded);
        // } else {
        //     this.handleDomLoaded();
        // }
    }
    handleDomLoaded = e => {
        this.setState({
            domLoading: false
        });
    };

    onError = (e) => {
        if (e.code = ReactIntlErrorCode.MISSING_DATA) {
            return
        }
        console.error(e)
    }

    render() {
        const { Component, pageProps } = this.props;
        const Layout = Component.Layout || DefaultLayout;
        
        return (<>            
            <ReduxProvider store={store}>
                <MainLayout>
                    <Head>
                        <title>Echelon</title>
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MainLayout>
            </ReduxProvider>
        </>);
    }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore)


export default wrapper.withRedux(connect(null, null)(appWithTranslation(MyApp)));
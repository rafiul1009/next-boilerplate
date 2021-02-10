import React, { useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { i18n, withTranslation, Link } from '../../../i18n';
import { I18nContext } from 'next-i18next';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

const Skeleton = dynamic(import('react-loading-skeleton'), { ssr: false });

const Header = ({ t, auth }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const { i18n: { language } } = useContext(I18nContext);
    //console.log('auth', auth);
    
    const toggle = () => {
        setDropdownOpen(prevState => !prevState);
    }

    const swithLanguage = (language) => {
        i18n.changeLanguage(language);
        setDropdownOpen(false);
    }

    return (
        <header id="header-area">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>{language === 'en' ? 'English' : 'বাংলা'}</DropdownToggle>
                <DropdownMenu>
                    {language === 'en' ? 
                    <button type="button" onClick={(language) => swithLanguage('bn')}>বাংলা</button>: 
                    <button type="button" onClick={(language) => swithLanguage('en')}>English</button>}
                </DropdownMenu>
            </Dropdown>
            <div className="login-btn">
                <Link href="/login"><a>{ t('common:login') }</a></Link>
            </div>
        </header>
    );
}

Header.getInitialProps = async () => {
    return {
        namespacesRequired: ['common']
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    };
};


export default connect(mapStateToProps, { checkRedux })(withTranslation()(Header));
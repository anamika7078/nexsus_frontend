import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title} | Nexsus Cyber Solutions</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Nexsus Cyber Solutions',
    description: 'Advanced AI-driven cybersecurity solutions for modern businesses. Protect your digital infrastructure with military-grade encryption.',
    keywords: 'cybersecurity, network security, AI threat detection, data protection, SOC monitoring'
};

export default SEO;

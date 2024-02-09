import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 3rem auto 1rem auto;
`;

type Props = {
    nameAuthorFooter: string;
};

const Footer = ({ nameAuthorFooter }: Props) => {
    return (
        <FooterStyle>
            <span>{nameAuthorFooter}</span>
        </FooterStyle>
    );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    background: #4f5052;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center !important;
    color: #fafafa !important;

    padding: 3rem;
    width: 100%;

    box-shadow: 0 0 0.3rem #fafafa;
`;

const H2Style = styled.h2`
    color: #fafafa !important;
`;

type Props = {
    nameHeader: string;
};

const Header = ({ nameHeader }: Props) => {
    return (
        <HeaderStyle>
            <H2Style>{nameHeader}</H2Style>
        </HeaderStyle>
    );
};

export default Header;

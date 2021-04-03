import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#5DA0C2;
    height: 90px;
`
const FooterItem = styled.div`
text-decoration: none;
font-size: 16px;
color:#1A678F;
font-weight: bold;
`

export default function footer() {
    return (
        <React.Fragment>
            <Footer>
                <FooterItem>
                    Aula sobre Styled Components
                        </FooterItem>
            </Footer>

        </React.Fragment>

    );
}
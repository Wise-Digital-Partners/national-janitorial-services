import React from "react";
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledCTA = styled(BackgroundImage)`
    padding-top: ${({paddingTopMobile}) => { return paddingTopMobile }};
    padding-bottom: ${({paddingBottomMobile}) => { return paddingBottomMobile }};
    @media (min-width: 768px) {
        padding-top: ${({paddingTopDesktop}) => { return paddingTopDesktop }};
        padding-bottom: ${({paddingBottomDesktop}) => { return paddingBottomDesktop }};
    }
`

const CTA = (
    {
        children,
        className,
        paddingTopDesktop,
        paddingTopMobile,
        paddingBottomDesktop,
        paddingBottomMobile
    }
) => {
     
    return (
        <StyledCTA 
            className={`realtive ${className}`}
            paddingTopDesktop={paddingTopDesktop}
            paddingTopMobile={paddingTopMobile}
            paddingBottomDesktop={paddingBottomDesktop}
            paddingBottomMobile={paddingBottomMobile}
        >
            <div className="container">
                {children}
            </div>
        </StyledCTA>
    );
}

export default CTA;
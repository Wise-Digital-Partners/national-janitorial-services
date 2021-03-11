import React from 'react'
import { bool, func } from 'prop-types';
import styled from '@emotion/styled';
import tw from 'twin.macro'

const StyledBurger = styled.button`
    ${tw`flex flex-col justify-between w-auto h-4 bg-transparent border-0 cursor-pointer relative z-30`}
    &:focus {
        ${tw`outline-none`}
    }
    .line {
        ${({headerStyle}) => headerStyle === 'overlap' ? 
		    tw`bg-white` : tw`bg-gray-900`
        };
        ${({scrolled}) => scrolled  ? 
		    tw`bg-gray-900` : null
        };
        ${tw`relative w-6 h-0.5 z-10 transition-all duration-300 ease-linear`}
        transform-origin: 1px;
        &:first-of-type {
            transform: ${({offcanvasOpen}) => offcanvasOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-of-type(2) {
            opacity: ${({offcanvasOpen}) => offcanvasOpen ? '0' : '1'};
            transform: ${({offcanvasOpen}) => offcanvasOpen ? 'translateX(20px)' : 'translateX(0)'};
        }
        &:nth-of-type(3) {
            transform: ${({offcanvasOpen}) => offcanvasOpen ? 'translateY(2px) rotate(-45deg)' : 'rotate(0)'};
        }
        @media (max-width: 1023px) {
            ${({headerStyle}) => headerStyle === 'overlap' ? 
		        tw`bg-white` : null
            };
            ${({scrolled}) => scrolled  ? 
		        tw`bg-gray-900` : null
            };
            ${({offcanvasOpen}) => offcanvasOpen  ? 
                tw`bg-white` : null
            };            
        }        
    }
`

const Burger = ({ offcanvasOpen, setOffcanvasOpen, headerStyle, scrolled, ...props }) => {
    const isExpanded = offcanvasOpen ? true : false;
    return (
        <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} offcanvasOpen={offcanvasOpen} onClick={() => setOffcanvasOpen(!offcanvasOpen)} headerStyle={headerStyle} scrolled={scrolled} {...props}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </StyledBurger>
    );
}

Burger.propTypes = {
    offcanvasOpen: bool.isRequired,
    setOffcanvasOpen: func.isRequired,
};

export default Burger;
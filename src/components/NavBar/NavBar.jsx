import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <WrapperBar>
      <StyledBar>
        <StyledBarItem>
          <StyledBarLink to="/">Home</StyledBarLink>
        </StyledBarItem>
        <StyledBarItem>
          <StyledBarLink to="/movies">Movies</StyledBarLink>
        </StyledBarItem>
      </StyledBar>
    </WrapperBar>
  );
};

const WrapperBar = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledBar = styled.ul`
  border-radius: 25px;
  height: fit-content;
  display: inline-flex;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0 10px;
  margin: 50px 0 0 0;
`;

const StyledBarItem = styled.li`
        list-style: none;
        color: white;
  		padding: 12px 16px;
  		margin: 0 8px;
  		position: relative;
  		cursor: pointer;
  		white-space: nowrap;
  		&::before {
  			content: " ";
  			position: absolute;
  			top: 0;
  			left:0;
  			height:100%;
  			width: 100%;
  			z-index:-1;
  			transition: .2s;
  			border-radius: 25px;
  		}
  			&:hover {
  				&::before {
  					background: linear-gradient(to bottom, #e8edec, #d2d1d3);
  						box-shadow: 0px 3px 20px 0px black;
  						transform: scale(1.2);
  				}
  				color: black;
  		}
  	}
  }
`;

const StyledBarLink = styled(NavLink)`
  color: inherit;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: none;
  &.${props => props.activeClassName} {
    color: red;
  }
`;

// .menu-bar {
// 	border-radius: 25px;
// 	height: fit-content;
// 	display: inline-flex;
// 	background-color: rgba(0, 0, 0, .4);
// 	-webkit-backdrop-filter: blur(10px);
//   backdrop-filter: blur(10px);
// 	align-items: center;
// 	padding: 0 10px;
// 	margin: 50px 0 0 0;
// 	li {
// 		list-style: none;
// 		color: white;
// 		font-family: sans-serif;
// 		font-weight: bold;
// 		padding: 12px 16px;
// 		margin: 0 8px;
// 		position: relative;
// 		cursor: pointer;
// 		white-space: nowrap;
// 		&::before {
// 			content: " ";
// 			position: absolute;
// 			top: 0;
// 			left:0;
// 			height:100%;
// 			width: 100%;
// 			z-index:-1;
// 			transition: .2s;
// 			border-radius: 25px;
// 		}
// 			&:hover {
// 				&::before {
// 					background: linear-gradient(to bottom, #e8edec, #d2d1d3);
// 						box-shadow: 0px 3px 20px 0px black;
// 						transform: scale(1.2);
// 				}
// 				color: black;
// 		}
// 	}
// }

export default NavBar;
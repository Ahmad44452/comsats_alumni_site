import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButtonYellow = styled(Link)`
  background-color: #ffd702;
  text-align: center;
  border: 1px solid #ffd702;
  outline: none;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all .3s;

  &:link,&:visited{
    color: #162b6f;
  }

  &:hover{
    background-color: #162b6f;
    color: #ffd702;
  }
  
`

export const StyledLoadMoreButton = styled(Link)`
  display: inline-block;
  text-align: center;
  border: 1px solid #162b6f;
  outline: none;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all .3s;

  &:link,&:visited{
    color: #162b6f;
  }

  &:hover{
    background-color: #162b6f;
    color: #fff;
  }
  
`
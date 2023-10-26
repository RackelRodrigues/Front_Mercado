import styled from "styled-components";


export const LabelStyle = styled.label`
 color: ${(props) => props.color || 'black'}; 
 font-weight: 100;
 font-family: 'Lato', sem serifa;
 font-size: 17px;
 padding-left: 5px;
`;
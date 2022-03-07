import styled from 'styled-components';

export const Placeholder = styled.div`
        font-family: airbnb_cereal_book;
        color: ${props => props.isNull ? '#717171' : 'black'};
        font-size: 14px;
        font-weight: ${props => props.isNull ? '100' : '600'};
    `
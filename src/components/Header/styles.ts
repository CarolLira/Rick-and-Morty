import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Navbar = styled.nav`
    width: calc(100% - 100px);
`;

export const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    margin-right: 0.875rem;
`;
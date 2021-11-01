import React, { useState } from 'react';
import RickAndMortyLogo from '../../assets/rickAndMorty.png';
import { ITab } from './interfaces';

import {
    Container,
    Image,
    List,
    Item,
    Navbar
} from './styles';

const Header: React.FC = () => {
    const [tabs, setTabs] = useState<ITab[]>(['Home', 'Personagens']);

    return (
        <Container>
            <Image
                src={RickAndMortyLogo}
                alt="Logo Rick and Morty"></Image>
            <Navbar>
                <List>
                    {tabs.map((tab, index) => (
                        <Item key={index}>{tab}</Item>
                    ))}
                </List>
            </Navbar>
        </Container>
    );
}

export default Header;
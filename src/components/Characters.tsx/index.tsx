import React from 'react';
import { useEffect, useState } from "react";
import api from "../../services/api";

import { ICharacter } from './interfaces';

import {
    Container,
    Image
} from './styles';

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        api.get('').then(
            response => {
                const results = response.data.results;
                const newCharacters = results.map((value: ICharacter) => {
                    return {
                        id: value.id,
                        name: value.name,
                        image: value.image
                    }
                });
                setCharacters(newCharacters);
            }
        ).catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <p>Carregando...</p>
        );
    }

    return (
        <Container>
            {characters.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <Image src={item.image} alt={item.name}></Image>
                </div>
            ))}
        </Container>
    );
}

export default Characters;
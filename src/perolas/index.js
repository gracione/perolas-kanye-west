import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Card, Header } from './styles';

export default function Logon() {
    const [user, setUser] = useState();

    useEffect(() => {
        api
            .get()
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    return (
        <Header>
            <Card>
                {user?.quote}
            </Card>
        </Header>
    );
}
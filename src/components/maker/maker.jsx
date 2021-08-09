import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';



const Maker = ({authService}) => {

    const [cards, setCards] = useState([
        {
            id : '1',
            name: 'Junho',
            company: 'apple',
            theme: 'dark',
            title: 'software Engineer',
            email: 'juno0218@naver.com',
            message: 'go for it',
            fileName: 'juno',
            fileIRL: 'null'
        },
        {
            id : '2',
            name: 'Junho2',
            company: 'apple',
            theme: 'colorful',
            title: 'software Engineer',
            email: 'juno0218@naver.com',
            message: 'go for it',
            fileName: 'juno',
            fileIRL: 'null'
        },
        {
            id : '3',
            name: 'Junho3',
            company: 'apple',
            theme: 'light',
            title: 'software Engineer',
            email: 'juno0218@naver.com',
            message: 'go for it',
            fileName: 'juno',
            fileIRL: 'juno.png'
        }
    ])
    const history = useHistory()
    const onLogout = () => {
        authService.logout()
    }

    useEffect(()=> {
        authService.onAuthChange(user => {
        if(!user){
            history.push('/')
        }
        })
    })

    const addCard = card => {
        const updated = [...cards, card]
        setCards(updated)
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
}

export default Maker;
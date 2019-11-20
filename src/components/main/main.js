import React from 'react'
import Footer from '../footer/footer'
import './main.css'
export default class Main extends React.Component {
    render () {
        return (
            <React.Fragment>
            <div className='mainPage'>
                <h1>Добро пожаловать!</h1>
                <p>Меня зовут Борис и я  Junior Frontend разработчик</p>
                <p>Технологии, библиотеки которыми я владею:</p>
                <ul className='main_list'>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next js</li>
                    <li>Node js</li>
                    <li>Webpack</li>
                    <li>Git</li>
                    <li>NoSQL</li>
                    <li>MySQL</li>
                    <li>HTML/CSS</li>
                    <li>Semantic/Bootstrap/Jquery</li>
                    <li>Google</li>
                </ul>
                <p>За годы в свободном полете я успел поработать на фрилансе, прокладывал слаботочные кабеля, отслужил в армии. Получил первоночальные знания о Frontend на <a href='http://geekbrains.ru/'>Geekbrains</a>, впоследствии выпустил комерческий сайт.   </p>
                <p>Своей самой лучшими чертами в разработке считаю умение пользоваться Google, стараюсь сделать как можно лучше и желания развивать себя и свой код. </p>
               
                
            </div>
            <Footer />
            </React.Fragment>
        )
    }
}
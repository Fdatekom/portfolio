import React from 'react'
import './footer.css'
import teleg from './telegram.png'
import email from './email.png'
import phone from './phone.png'
import git from './github@1X.png'

export default class Footer extends React.Component{
    render () {
        return(
            <div className='footer'>
               <div className='footer_block'><img src={teleg} alt='telegram' /> <a href='https://t.me/fdatekom' className='footer_text'>@fdatekom</a></div>
               <div className='footer_block'><img src={email} alt='Email' /> <span className='footer_text'>fdatekom@gmail.com</span></div>
               <div className='footer_block'><img src={phone} alt='Phone' />  <span className='footer_text'>+7-(916)-081-34-17</span></div>
               <div className='footer_block'><img src={git} alt='github' /> <a href='http://github.com/Fdatekom/' className='footer_text'>Github.Fdatekom</a></div>
            </div>
        )
    }
} 
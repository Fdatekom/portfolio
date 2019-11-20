import React from 'react';
import image from './loading.gif'
import './style.css'
function withLoader (Component) {

    class LoadScrin extends React.Component {
     

        render (){
            const {isLoad, ...props} = this.props;

             return (
                  isLoad ? <Component {...props} /> : <section> <div className='hoc_load'><img src={image} alt='load' /><p className='hoc_text'>Loading</p></div></section> 
             )
        }
    }
    LoadScrin.displayName = `LoadScrin(${Component.displayName || Component.name || 'Component'})`;
    return LoadScrin
}
export default withLoader;
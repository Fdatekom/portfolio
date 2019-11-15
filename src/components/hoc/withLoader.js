import React from 'react';

function withLoader (Component) {

    class LoadScrin extends React.Component {
     

        render (){
            const {isLoad, ...props} = this.props;

             return (
                  isLoad ? <Component {...props} /> : <div> Загрузка </div> 
             )
        }
    }
    LoadScrin.displayName = `LoadScrin(${Component.displayName || Component.name || 'Component'})`;
    return LoadScrin
}
export default withLoader;
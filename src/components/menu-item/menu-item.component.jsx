import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>{

    const pushToHistry = ( )=>{
        console.log(`${match.url}${linkUrl}`)
       history.push(`${match.url}${linkUrl}`);
    }
    return (
        <div onClick={()=>pushToHistry()} style = {{backgroundImage:`url(${imageUrl})`}} className={`${size} menu-item`}>
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    )
}

export default withRouter(MenuItem);

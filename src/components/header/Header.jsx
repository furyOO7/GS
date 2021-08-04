import React from 'react';
import './Header.css'
    import { ReactComponent as Search } from '../../assets/svgs/search.svg';
const Header = (props) => {
    return ( 
        <div className="header">
          <div className="h-logo">
              <img src="/Assets/Images/gs-logo.jpg" alt="gs-logo" />
          </div>
          <div className='h-search'>
            <Search/>
            <input className="searchtext"
                   type="text"
                   placeholder="Ask a Question"
            />
        </div>
        </div>
     );
}
 
export default Header;
import React, { Component } from 'react';
import NotFound from '../../images/t.png';

class Notfound extends Component {
    render() {
        return (
            <div className='text-center'>
                
                <h1>Not Found</h1>
                <img src={NotFound} alt='' className='w-100'></img>
            </div>
        );
    }
}

export default Notfound;
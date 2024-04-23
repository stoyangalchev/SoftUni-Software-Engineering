import React, { useState, useEffect } from 'react';
import './Spinner.css';
const Spinner = (props) => {
 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLoading(false);
         
        }, 5000)
        return () => clearInterval(timerId);
    }, []);
   
  
    return (
        <div className="spinnerDiv">
            {loading ? (
                <>
                    <h1 className='titleSpinner'>Loading...</h1>
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </>
            ) : (
                <h1 className='helloWorld'>Hello World</h1> // replace this with the content you want to show
            )}
        </div>
    )
}

export default Spinner;

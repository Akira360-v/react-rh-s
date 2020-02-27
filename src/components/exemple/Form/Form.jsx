import React from 'react';
import Weather from './Weather';

const Form = (props) => {
    return (
        <div>
            <h3>My posts</h3>
            <Weather />
            <form action="" onSubmit='this.props'>
              <input type="text" name="sity" placeholder="gorod"/>
              <button>получить погоду</button>
            </form>
        </div>
    )
}

export default Form;

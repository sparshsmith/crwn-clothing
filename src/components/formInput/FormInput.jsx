import React from 'react';

import './FormInput.scss';

const FormInput = ({ hadnleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input
                className='form-input'
                onChange={hadnleChange}
                {...otherProps} />
            {
                label ?
                    (
                        <label
                            className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                            {label}
                        </label>
                    ) : null
            }

        </div>
    )
}

export default FormInput;
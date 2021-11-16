import React from 'react'

export default function FormError({ message }) {
    return (
        <div className="row form-group">
            <div className="col">
                <div className="formError h5">
                    {message}
                </div>
            </div>
        </div>
    )
}
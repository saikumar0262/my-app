import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Forgotten = () =>
{
    const navigate = useNavigate()
    return (
        <div className='forgotten-container'>
            <div>
                <p>new password</p>
                <input className="pass"  />
            </div>
            <div>
                <p>conform password</p>
                <input className="pass" />
            </div>
            <button className='btn' onClick={ () => navigate( -1 ) }>submit</button>
        </div>
    )
}

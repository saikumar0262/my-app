import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export const RequiedAuth = ( { children } ) =>
{
    const Auth = useAuth()

    if ( !Auth.user )
    {
        return <Navigate to='/Login' />
    }
    return children
}




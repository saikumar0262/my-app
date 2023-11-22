import { ContactSupport } from '@mui/icons-material';
import { Box, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom'

// get data from local storage
const getDataFromLs = () =>
{
    const data = localStorage.getItem( 'loginDetails' )
    console.log( data, 'data' )
    if ( data )
    {
        console.log( data, 'data out' )
        return JSON.parse( data );
    }
    else
    {
        return []
    }
}

// functional component
const Login = () =>
{
    const [ open, setOpen ] = useState( false )
    const [ signUpList, setSignUpList ] = useState( getDataFromLs() )

    //create account input state
    const [ users, setUsers ] = useState( {

        firstName: '',
        surName: '',
        moblieName: '',
        password: '',
    } )

    //login account input state
    const [ loginUser, setLoginUser ] = useState( {

        phoneNumber: '',
        password: '',
    } )


    //import the useAuth component
    const auth = useAuth()

    //inport the use Navigate from react-router-dom
    const navigate = useNavigate()


    //on submit function from create account 
    const onSignUpSubmit = ( e ) =>
    {
        e.preventDefault()
        const newSignUp = {
            id: v4(),
            firstName: users.firstName,
            surName: users.surName,
            moblieName: users.moblieName,
            password: users.password,
        }


        const newSi = [ ...signUpList, newSignUp ]


        setUsers( ( prevState ) => ( {

            firstName: '',
            surName: '',
            moblieName: '',
            password: '',
        } ) )
        handleClose()
        setSignUpList( newSi )
        console.log( newSi, "listofdata" )
    }

    console.log( signUpList, "signUpList" )


    //login accout functionality
    const userCheck = ( loginUser ) =>
    {
        const { phoneNumber, password } = loginUser
        const checkUser = signUpList.find( user => ( user.moblieName === phoneNumber && user.password === password ) )
        console.log( checkUser, 'user check' )

        if ( checkUser )
        {
            console.log( "login successful" )
            navigate( '/' )
        } else
        {
            console.log( 'wrong pass and user' )
        }
    }

    //login account input function
    // const changeHandler = ( event ) =>
    // {
    //     setLoginUser( { ...loginUser, [ event.target.name ]: event.target.value } )
    // }
    console.log()
    //login account submit function
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        console.log( "form data is", loginUser )
        userCheck( loginUser )
        auth.login( loginUser )

    }


    //create account use effect function
    useEffect( () =>
    {

        localStorage.setItem( 'loginDetails', JSON.stringify( signUpList ) )
    }, [ signUpList ] )


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        minHeight: 280,
        bgcolor: 'white',
        border: '0',
        borderRadius: "5px",
        color: 'gray',
        boxShadow: 24,
        p: 4,

    };
    const handleOpen = ( e ) =>
    {
        e.preventDefault()
        setOpen( true );
    }
    const handleClose = () => setOpen( false );
    console.log( open, 'open' )





    return (
        <>
            { !auth.user && (

                <Box>
                    <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
                        <div className='login-page'>

                            <div className='login'>

                                <h1 className='head1'> facebook</h1>
                                <h2 className='head2'>Facebook helps you connect and share with the people in your life.</h2>

                            </div>
                            <div className='form-container'>
                                <form onSubmit={ handleSubmit }>

                                    <input
                                        onChange={ e => setLoginUser( ( prevState ) => { return { ...prevState, phoneNumber: e.target.value } } ) }
                                        name="phoneNUmber"
                                        value={ loginUser.phoneNumber }
                                        placeholder="Email address or phone nunber"
                                        variant="filled"
                                        className='input'
                                    />
                                    <input
                                        onChange={ e => setLoginUser( ( prevState ) => { return { ...prevState, password: e.target.value } } ) }
                                        value={ loginUser.password }
                                        type="password"
                                        placeholder="Password"
                                        variant="filled"
                                        name="password"
                                        className='input'

                                    />

                                    <button type='submit' className='button'>Login </button>
                                </form>
                                {/* <Typography className='text' onClick={ () => navigate( 'forgotten' ) }>Forgotten password?</Typography> */ }
                                <div className='text'>
                                    <a href='forgotten'> Forgotten password?</a>
                                </div>
                                <div className='bt'>
                                    <button className='create' onClick={ handleOpen }>Create New Account</button>
                                </div>
                            </div>

                        </div>
                    </Box>
                    <Box sx={ { display: { xs: 'block', sm: 'none' } } }>
                        <div className='small-container'>
                            <div className='form-container'>
                                <form onSubmit={ handleSubmit }>
                                    <h1 className='head1'> facebook</h1>
                                    <input
                                        onChange={ e => setLoginUser( ( prevState ) => { return { ...prevState, phoneNumber: e.target.value } } ) }
                                        value={ loginUser.phoneNumber }
                                        name="phoneNUmber"
                                        placeholder="Email address or phone nunber"

                                        className='input'
                                        required
                                    />
                                    <input

                                        onChange={ e => setLoginUser( ( prevState ) => { return { ...prevState, password: e.target.value } } ) }
                                        value={ loginUser.password }
                                        placeholder="Password"
                                        name="password"
                                        className='input'
                                        required

                                    />

                                    <button type="submit" className='button'>Login </button>
                                </form>
                                <Typography className='text'>Forgotten password?</Typography>

                                <hr />
                                <div className='bt'>

                                    <button className='create' onClick={ handleOpen }>Create New Account</button>
                                </div>
                            </div>
                        </div>

                    </Box>
                </Box>
            ) }
            <Modal

                open={ open }
                onClose={ handleClose }
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={ style }>


                    <Typography sx={ { color: "black" } } variant="h6" component="h2">
                        Sign Up
                    </Typography>
                    <Typography  >
                        It's quick and easy.
                    </Typography>
                    <hr />
                    <form onSubmit={ onSignUpSubmit }>
                        <div className='text-box'>
                            <TextField sx={ { mb: 2, mr: 2 } }
                                size='small'
                                placeholder='First name'
                                value={ users.firstName }
                                onChange={ e => setUsers( ( prevState ) => { return { ...prevState, firstName: e.target.value } } ) }
                            />
                            <TextField sx={ { mb: 2 } }

                                size='small'
                                placeholder='sur name'
                                value={ users.surName }
                                onChange={ e => setUsers( ( prevState ) => { return { ...prevState, surName: e.target.value } } ) }

                            />
                        </div>
                        <TextField sx={ { mb: 2 } }
                            fullWidth

                            size='small'
                            placeholder='Email address or phone nunber'
                            value={ users.moblieName }
                            onChange={ e => setUsers( ( prevState ) => { return { ...prevState, moblieName: e.target.value } } ) }
                        />
                        <TextField sx={ { mb: 2 } }
                            fullWidth

                            size='small'
                            type='password'
                            placeholder='password'
                            value={ users.password }
                            onChange={ e => setUsers( ( prevState ) => { return { ...prevState, password: e.target.value } } ) }
                        />

                        <Typography>Date Of Birth<ContactSupport sx={ { height: 15 } } /></Typography>
                        <div>
                            <select name="day" id="day" className='select'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="month" id="month" className='select'>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apl">Apl</option>
                                <option value="May">MAy</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct">Oct</option>

                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>

                            </select>
                            <select name="year" id="year" className='select'>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>

                                <option value="2021">2021</option>
                                <option value="2022">2022</option>

                            </select>


                        </div>
                        <Typography>Gender<ContactSupport sx={ { height: 15 } } /></Typography>
                        <select name="gender" id="gender" className='select'>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Custom">Custom</option>
                        </select>
                        <div className='bt'>
                            <button type='submit' className='sign'>Sign Up</button>
                        </div>
                    </form>
                </Box>
            </Modal>

        </>
    )
}

export default Login
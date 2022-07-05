import { singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials } from "./authSlice"

export const checkingAuthenticacion = (email,password)=>{
    return async( dispatch )=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = ( email, password )=>{
    return async( dispatch ) =>{
        dispatch( checkingCredentials() );
        const result = await singInWithGoogle();
        console.log({result})
    }
}
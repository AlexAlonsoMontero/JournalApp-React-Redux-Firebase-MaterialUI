import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider;

export const singInWithGoogle = async()=>{

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid }= result.user
        
        return{
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage= error.errorMessage;

        return {
            ok: false
        }
    }
}
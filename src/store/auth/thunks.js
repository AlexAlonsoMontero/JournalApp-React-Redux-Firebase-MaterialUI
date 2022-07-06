import { async } from "@firebase/util"
import { singInWithGoogle, registerUserWithEmailPassWord } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./authSlice"

export const checkingAuthenticacion = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if (!result.ok) dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage  } = await registerUserWithEmailPassWord({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch( login ({uid, displayName, email, photoURL} ) )
    }
}
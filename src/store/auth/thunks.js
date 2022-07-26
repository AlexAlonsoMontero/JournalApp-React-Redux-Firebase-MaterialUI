import { singInWithGoogle, registerUserWithEmailPassWord, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
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

        if (!result.ok) return dispatch(logout(result.errorMessage || 'User no logado'));
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassWord({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLoginWithEmailpassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({ email, password })

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }

}


export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch( clearNotesLogout())
        dispatch ( logout() )
    }
}

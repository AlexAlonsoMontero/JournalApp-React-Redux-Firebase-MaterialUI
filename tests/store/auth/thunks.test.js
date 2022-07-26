import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthenticacion, startGoogleSignIn, startLoginWithEmailpassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal/journalSlice"
import { demoUser } from "../../fixtures/authFixtures"
jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn()

    beforeEach(()=>jest.clearAllMocks() );

    test('Debe invocar al checking credentials', async() => {
        await checkingAuthenticacion()(dispatch)
        expect (dispatch).toBeCalledWith(checkingCredentials())
    })

    test('startGoogleSignIn debe llamar a checking credentials', async()=>{
        const loginData = {
            ok: true,
            errorMessage: 'errorMessage'
        };
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch)

        expect(dispatch).toBeCalledWith(checkingCredentials());
        expect(dispatch).toBeCalledWith(login(loginData));
    });
    test('startGoogleSigIn debe llamar a checking credentials y logout - Error', async()=>{
        const loginData = {
            ok: false,
            errorMessage: 'Un error en Google'
        };
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        // expect( dispatch ).lastCalledWith(checkingCredentials())
        expect( dispatch ).lastCalledWith(logout(loginData.errorMessage))

    });

    test ('startLoginWithEmailPassword debe llamar checkingCredentials y login - Exito',async()=>{
        const loginData = { ok: true, ...demoUser};
        const formData = {email:demoUser.email, password: '123456'};

        await loginWithEmailPassword.mockResolvedValue( loginData );
        await startLoginWithEmailpassword(formData)(dispatch);

        expect (dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect (dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test ('startlLogout debe de llamar a logoutFirebase, clearnotes y logout',async()=>{
        await startLogout()(dispatch);
        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch ).toHaveBeenCalledWith( logout() );
    })
})
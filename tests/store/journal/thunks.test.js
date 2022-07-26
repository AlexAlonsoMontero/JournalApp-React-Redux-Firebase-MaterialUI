// import { addNewEmptyNote } from "../../../src/store/journal/journalSlice";
// import { startNewNote } from "../../../src/store/journal/thunsk";
// describe('pruebas de thunks.js',()=>{

//     const dispatch = jest.fn();
//     const getState = jest.fn();

//     beforeEach( ()=> jest.clearAllMocks())

//     test('startNewNote, debe de crear una nueva nota en blanco', async ()=>{
//         const uid = 'TEST-UID';
//         getState.mockReturnValue({
//             auth:{uid: uid}
//         })
//         await startNewNote()(dispatch, getState);
//         expect ( dispatch ).toHaveBeenCalledWith( savingNewNote() );
//         expect  ( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
//             body: '',
//             title: '',
//             id: expect.any( String ),
//             date: expect.any( Number )
//         }));

//         //Borrar colección en la base de datos
//         const colletionRef = colleciont (FirebaseDb, `${uid}/journal/notes`)


//     })
// })

test('Hasta que revise Firebase',  ()=>{

})
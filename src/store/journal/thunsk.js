import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirbaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote())

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(FirbaseDB, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote)

        newNote.id = newDoc.id;

        //dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote))


    }


}
export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error ('La uid del usuario no existe');

        const notes = await loadNotes(uid);
        dispatch(setNotes( notes ))
    }

}

export const startSaveNote = () => {

    return async( dispatch, getState) => {

        dispatch( setSaving() )
        const { uid } = getState().auth;
        const { active: note} = getState().journal
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        //Firebase
        const docRef = doc( FirbaseDB, `${uid}/journal/notes/${note.id}`)
        //Merge si hay campos en firestore que no están en  nuestra nota, se mantienenen
        const save = await setDoc(docRef, noteToFirestore, {merge: true})
        dispatch (updateNote( note))
        
    }
}
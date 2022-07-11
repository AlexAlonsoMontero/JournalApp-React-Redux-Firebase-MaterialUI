import { DeleteOutline, SaveOutlined, UploadOutlined, } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGalery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunsk";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'



export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);



    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return new Date(newDate).toUTCString()
    }, [date])

    const fileInputref = useRef();

    useEffect(() => {

        dispatch(setActiveNote(formState))

    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
    }, [messageSaved])


    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));

    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid container direction='row' justifyContent={'space-between'} sx={{ mb: 1 }} alignItems='center' className="animate__animated animate__fadeIn">
            <Grid item>
                <Typography fontSize={39} fontWeight>{dateString}</Typography>
            </Grid>
            <Grid item>

                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: "none" }}
                    ref={fileInputref}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputref.current.click()}
                >
                    <UploadOutlined />
                </IconButton>
                <Button
                    disabled={isSaving}
                    color="primary"
                    sx={{ padding: 2 }}
                    onClick={onSaveNote}

                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder="Pon un título"
                    label="Título"
                    sx={{ bordere: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder="¿Que sucedió hoy?"
                    label="Hechos"
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                </Button>
            </Grid>
                <ImageGalery images={note.imageUrls} />

        </Grid>
    )
}

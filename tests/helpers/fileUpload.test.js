import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';
{
    cloudinary.config({
        cloud_name:'imgalex',
        api_key: '955293821819719',
        api_secret: 'lCU4tfeNg_Py-NnZMpGTYQIRXMo',
        secure: true
    })
}

//TODO Ver funcionamiento de variables de entorno y el testing

describe('Pruebas en fileUpload', ()=>{
    test('Debe subir el archivo correctamente a cloudinary',async()=>{
        const imageUrl = 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg';


        const resp = await fetch(imageUrl)
        const blob = await resp.blob();

        const file= new File([blob],'testimage.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        //BORRADO DE FICHERO
        const segments = url.split('/');
        const imagId = segments [ segments.length -1].replace('.jpg','');
        try {
            await cloudinary.api.delete_resources(['journal-app/' + imagId]);

        } catch (error) {
            console.log(error)
        }

    });
    test ('debe retornal null?',async()=>{
        const file = new File([], 'testing.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );
    });
    
})
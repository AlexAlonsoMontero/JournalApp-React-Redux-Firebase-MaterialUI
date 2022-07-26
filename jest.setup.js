// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';

//ponemos el path en el que se situan las variables de entorno
require('dotenv').config({
    path: '.env'
})
//Creamos un mock con todas las variables de entorno
jest.mock('./src/helpers/getEnviroments',()=>({
    getEnviroments: () => ({...process.env})
}))
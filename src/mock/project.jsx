import {GiSelfLove } from "react-icons/gi";
import { RiGameLine } from "react-icons/ri";
import { FaChalkboardTeacher, FaRegHandSpock } from "react-icons/fa";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";

const project = [
    {
        id:0,
        project:'Betty SexShop',
        description:'Stop! solo para mayores de 18 años',
        technologies:'React js, Javascript, Firebase, SASS',
        link:'https://betty-juguetes2-xi.vercel.app/',
        image:'./betty.png',
        icon:<GiSelfLove/>
    },
    {
        id:1,
        project:'Laprinsumos 3D',
        description:'Web catalogo de impresión 3D',
        technologies:'HtML, CSS, Bootstrap, Figma',
        link:'https://laprinsumosfinal.vercel.app/',
        image:'./laprinsumos.png',
        icon:<RiGameLine/>
    },
    {
        id:2,
        project:'ItEnseño',
        description:'Tutorias en IT. Compartimos el conocimiento.',
        technologies:'Figma, React JS, Javascript, SASS, Node JS, React Bootstrap, Monongose.',
        link:'https://s5-06-mern.vercel.app/',
        image:'./ITenseño.png',
        icon:<FaChalkboardTeacher/>
    },
    {
        id:3,
        project:'SantaFe Más',
        description:'Proyecto programa Provincial Santa Fe Mas',
        technologies:'HTML, CSS, Bootstrap, SASS',
        link:'https://santa-fe-mas.vercel.app/',
        image:'./santaFemas.jpg',
        icon:<MdOutlineEmojiPeople/>
    },
    {
        id:4,
        project:'Autosescuela',
        description:'Web App construida en Vainilla JS',
        technologies:'Javascript, HTML, SASS',
        link:'https://autoescuela.vercel.app/',
        image:'./autoEscuela',
        icon:<IoCarSportOutline/>
    },
    {
        id:5,
        project:'UnLimited',
        description:'App Mobile Nativa. Para no descargarla podes mirar este lindo Gif',
        technologies:'React Native, Node Js, Mongo DB',
        link:'exp://exp.host/@maiten18/C7-43?release-channel=default',
        image:'./unlimited.png',
        video:'./unLimited2.gif',
        icon:<FaRegHandSpock/>
    }             
]


export const  getAllProjects =() =>  new Promise ((resolve, reject) => {
    let condition = true
            if (condition){
                resolve(project)
            } else {
                reject ("algo salio mal")
            }
        })
    
        export const getProject=(id) =>  new Promise ((resolve) => {
            let condition = true
                if (condition){
                    resolve(projects.find(project => project.id === parseInt(id)))
                }
                      
            })
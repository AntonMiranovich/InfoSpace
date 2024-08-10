import style from "./style.module.scss";
import { Link, useParams } from "react-router-dom";
import imgMercury from '../../assets/imgInfo/merc.png'
import imgVenus from '../../assets/imgInfo/vener.png'
import imgEarth from '../../assets/imgInfo/zeml.png'
import imgMars from '../../assets/imgInfo/mars.png'
import imgJupiter from '../../assets/imgInfo/upit.png'
import imgSaturn from '../../assets/imgInfo/satu.png'
import imgUranus from '../../assets/imgInfo/uran.png'
import imgNeptune from '../../assets/imgInfo/neptun.png'
import imgPluto from '../../assets/imgInfo/plut.png'
import { useState } from "react";


function Home() {
    const { planetName } = useParams()

    const [infoPlanets] = useState([{
        id: 1,
        title: "Mercury",
        discription: "test",
        img: imgMercury
    }, {
        id: 2,
        title: "Venus",
        discription: "test",
        img: imgVenus
    }, {
        id: 3,
        title: "Earth",
        discription: "test",
        img: imgEarth
    }, {
        id: 4,
        title: "Mars",
        discription: "test",
        img: imgMars
    }, {
        id: 5,
        title: "Jupiter",
        discription: "test",
        img: imgJupiter
    }, {
        id: 6,
        title: "Saturn",
        discription: "test",
        img: imgSaturn
    }, {
        id: 7,
        title: "Uranus",
        discription: "test",
        img: imgUranus
    }, {
        id: 8,
        title: "Neptune",
        discription: "test",
        img: imgNeptune
    }, {
        id: 9,
        title: "Pluto",
        discription: "test",
        img: imgPluto
    }])

    const platenInfoPage = infoPlanets.filter(el => el.title == planetName)


    return (
        <div className={style.wrapper}>
            <img className={style.imgWrapper} src={platenInfoPage[0].img} alt="rimg" />

        </div>
    );
}

export default Home;
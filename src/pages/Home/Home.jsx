import style from "./style.module.scss";
import { Link } from "react-router-dom";
import imgMercury from '../../assets/Mercury.jpg'
import imgVenus from '../../assets/Venus.jpg'
import imgEarth from '../../assets/Earth.jpg'
import imgMars from '../../assets/Mars.jpg'
import imgJupiter from '../../assets/Jupiter.jpg'
import imgSaturn from '../../assets/Saturn.jpg'
import imgUranus from '../../assets/Uranus.jpg'
import imgNeptune from '../../assets/Neptune.jpg'
import imgPluto from '../../assets/Pluto.jpg'
import { useState } from "react";

function Home() {
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

    return (
        <div className={style.wrapper}>
            {infoPlanets.map((el) => <div ><img className={style.imgWrapper} src={el.img} alt="rimg" /></div>)}
        </div>
    );
}

export default Home;
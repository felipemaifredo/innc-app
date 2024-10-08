import styles from "./styles/hero.module.css"
import imgMedicos from "../assets/img_1_hero.webp"
import { BtnSchedule } from "../components/BtnSchedule"

export const Hero = () => {
    return (
        <section id="hero_section" className={styles.hero_section}>
            <div className={styles.content_hero}>
                <h1>Há mais de 20 anos cuidando de pessoas, fazendo parte da evolução da Neurologia e compartilhando conhecimento.</h1>
                <h2>Há mais de 20 anos cuidando de pessoas, fazendo parte da evolução da Neurologia e compartilhando conhecimento.</h2>
                <BtnSchedule />
            </div>
            <img className={styles.img_hero} src={imgMedicos} alt="Imagem Home" />
        </section>
    )
}

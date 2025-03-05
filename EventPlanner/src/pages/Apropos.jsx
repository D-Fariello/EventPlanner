import React from "react";
import { Link } from "react-router-dom";

const Apropos = () => {
  return (
    <div className="container">
      {/* Section 1: Image Left, Text Right */}
      <div className="section-reverse">
        <img
          src="/images/homeImage.png"
          alt="About us"
          className="image-about-me"
        />
        <div className="text-container">
          <h2 className="title"> Bonjour, je m’appelle Dalila </h2>
          <p className="paragraph">
            Italienne et toujours animée par une énergie débordante, j’ai un
            esprit curieux et une nature profondément sociable. Passionnée de
            sport et d’aventures, j’ai eu la chance de vivre dans plusieurs
            pays, une expérience qui m’a ouvert les yeux sur les défis, mais
            aussi les richesses de la vie à l’étranger. C’est avec cette
            ouverture et cette envie de créer du lien que j’ai décidé de lancer
            un site d’événements. Mon objectif ? Offrir des expériences uniques
            où les gens peuvent se rencontrer, partager et vivre des moments
            inoubliables. Que ce soit pour une soirée conviviale, une activité
            sportive ou un atelier inspirant, chaque événement est pensé pour
            créer des connexions authentiques.
          </p>
          <button>
            <Link className="contact-button" to="/contact">
              Prendre rendez-vous
            </Link>
          </button>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="section">
        <img
          src="/images/homeImage.png"
          alt="Our mission"
          className="image-about-me"
        />
        <div className="text-container">
          <h2 className="title">Mon approche</h2>
          <p className="paragraph">
            Organiser un événement, c’est bien plus qu’une simple planification
            : c’est créer une atmosphère, provoquer des rencontres et laisser
            place à des instants uniques. Mon approche repose sur trois piliers
            essentiels : convivialité, spontanéité et expérience. Avec mon
            énergie naturelle et mon amour du partage, je veux que chaque
            événement soit une parenthèse hors du temps, où chacun se sente à
            l’aise et libre d’être soi-même. Ayant vécu à l’étranger, je sais à
            quel point il est important de se sentir connecté aux autres, de
            créer des liens sincères et de vivre pleinement chaque moment. Que
            vous soyez à la recherche d’une soirée festive, d’une activité
            bien-être ou d’une aventure immersive, mon objectif est de vous
            offrir des expériences authentiques, originales et adaptées à vos
            envies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apropos;

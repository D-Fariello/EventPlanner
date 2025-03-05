import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* First Section */}
      <section className="home-first-section">
        <h2 className="home-first-section-title">Votre guide inspiré pour</h2>
        <h3 className="home-first-section-subtitle">
          Des expériences uniques et des souvenirs inoubliables
        </h3>
      </section>

      {/* Image Section */}
      <section className="home-second-section">
        <img
          className="home-img"
          src="/images/homeImage.png"
          alt="Inspiring Experiences"
        />
      </section>

      {/* CHOISISSEZ Riviera Féminine Section */}
      <section className="home-third-section">
        <h2 className="home-third-section-title">
          Choisissez Riviera Féminine
        </h2>

        {/* Row 1: Expériences sur mesure */}
        <div className="home-row">
          <div className="home-column">
            <h3 className="home-column-title">Expériences sur mesure</h3>
            <p className="home-column-text">
              Le choix idéal pour des événements privés et personnalisés,
              adaptés à vos envies et à votre style de vie.
            </p>
            <a href="/en-savoir-plus" className="home-link">
              En savoir plus
            </a>
          </div>

          {/* Row 2: Sorties & Rencontres */}
          <div className="home-column">
            <h3 className="home-column-title">SORTIES & RENCONTRES</h3>
            <p className="home-column-text">
              Découvrez des événements exclusifs pour partager des moments
              uniques et créer de nouvelles connexions.
            </p>
            <a href="/en-savoir-plus" className="home-link">
              En savoir plus
            </a>
          </div>

          {/* Row 3: Événements en direct */}
          <div className="home-column">
            <h3 className="home-column-title">ÉVÉNEMENTS EN DIRECT</h3>
            <p className="home-column-text">
              Plongez dans des expériences inoubliables avec nos soirées,
              ateliers et escapades spécialement conçus pour vous.
            </p>
            <a href="/en-savoir-plus" className="home-link">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="home-event-planning-section">
        <div className="home-event-planning-row">
          <h3 className="home-event-planning-right-title">
            Organisez un événement privé inoubliable
          </h3>
        </div>

        <div className="event-options">
          <div className="image-div">
            <img
              className="home-event-planning-image-left-img"
              src="/images/eatingFood.png"
              alt="Event Planning"
            />
          </div>
          {/* Tentez une nouvelle expérience Section */}
          <div className="event-options-column">
            <h3 className="event-options-column-title">
              Tentez une nouvelle expérience
            </h3>
            <p className="event-options-column-text">
              Envie d’un moment unique entre amies ou en famille ? Laissez-vous
              inspirer par mes idées d’événements privés : dîners élégants,
              journées en mer, ateliers créatifs… Faites de chaque occasion un
              souvenir mémorable.
            </p>
            <a
              href="/decouvrir-des-idees-evenements"
              className="home-event-planning-link"
            >
              Découvrir des idées d’événements
            </a>
          </div>
          {/* Un événement sur mesure Section */}
          <div className="event-options-column">
            <h3 className="event-options-column-title">
              Un événement sur mesure
            </h3>
            <p className="event-options-column-text">
              Que ce soit un anniversaire, une soirée bien-être ou une escapade
              exclusive, je vous aide à organiser l’expérience parfaite, adaptée
              à vos envies et à votre budget.
            </p>
            <a
              href="/decouvrir-des-idees-evenements"
              className="home-event-planning-link"
            >
              Découvrir des idées d’événements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

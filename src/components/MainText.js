import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const MainText = () => (
  <div>
    <p>
      Nous sommes des parents d’enfants scolarisés à l’école élémentaire
      Béranger, candidats pour vous représenter. Nous défendons deux principes :
      la communication et le fonctionnement collectif dans l’intérêt quotidien
      de nos enfants. Nos valeurs sont celles de l’école publique et de la
      République.
    </p>

    <p>
      Notre rôle est de relayer vos interrogations et suggestions, de vous
      informer de l’actualité de l’établissement. Nous intervenons pour vous
      auprès de l’école, de la mairie, de l’académie pour l’intérêt de nos
      enfants et siégeons au conseil d’école.
    </p>

    <div className="quote">
      « Il faut tout un village pour élever un enfant. »
    </div>

    <p>
      L’école est à l’image d’un village, elle associe différents adultes
      (directrice, enseignant.e.s, animateur.rice.s, personnels, parents) pour
      aider les enfants à poursuivre une scolarité réussie et épanouie, à
      grandir et devenir des citoyens éduqués et éveillés.
    </p>

    <p>
      Des questions, des suggestions, <a href="/contact">contactez-nous</a>.
    </p>
  </div>
);

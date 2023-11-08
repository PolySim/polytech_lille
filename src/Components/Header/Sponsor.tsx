import { SponsorStyled } from "./headerStyled.ts";

const Sponsor = () => {
  return (
    <SponsorStyled>
      <div>
        <a href="https://www.polytech-reseau.org//">
          <img src="/polytech.png" alt="Small logo Polytech" />
        </a>
      </div>
      <div>
        <a href="https://www.univ-lille.fr/">
          <img src="/ulille.png" alt="Lille University" />
        </a>
      </div>
      <div>
        <a href="https://www.polytech-lille.fr/ecole/presentation-de-lecole/">
          <img src="/cti.png" alt="CTI Logo" />
        </a>
      </div>
      <div>
        <a href="https://www.polytech-lille.fr/ecole/la-politique-qualite-2013-de-polytech-lille/">
          <img src="/afaq.png" alt="Afao logo" />
        </a>
      </div>
    </SponsorStyled>
  );
};

export default Sponsor;

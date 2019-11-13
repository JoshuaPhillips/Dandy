import React from "react";

import classes from "./Sandbox.module.scss";
import Lorem from "../Lorem/Lorem";
import Quote from "../Quote/Quote";
import CharacterBio from "../CharacterBio/CharacterBio";
import PartySplit from "../PartySplit/PartySplit";
import PartySplitSection from "../PartySplit/PartySplitSection/PartySplitSection";

const sandbox = props => {
  return (
    <div className={classes.Sandbox}>
      <PartySplit>
        <PartySplitSection characters={["Zyllana", "Anton"]}>
          <Lorem />
        </PartySplitSection>
        <PartySplitSection characters={["Ilro", "Faelthys"]}>
          <Lorem />
        </PartySplitSection>
      </PartySplit>
      <CharacterBio>
        <Lorem />
      </CharacterBio>
      <Quote author="Zyllana, to Anton">Praytime's over.</Quote>
    </div>
  );
};

export default sandbox;

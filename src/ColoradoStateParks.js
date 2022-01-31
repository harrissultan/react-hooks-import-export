import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerdePark from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  return (
    <div>
{console.log(howManyParks())}
      {console.log(RMFunctions.trees)}
      {RMFunctions.wildlife()}
      <MesaVerdePark />
    </div>
  );
}
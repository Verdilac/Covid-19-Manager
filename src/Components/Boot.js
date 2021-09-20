import React from "react";
import "./Note.css";




function Boot() {
  return (
    <div class="note">
      <h1>Who is Currently being vaccinated ?</h1>
      <p>
        Health care & other front line workers involved in COVID-19 [revention & control Activites,
        Elderly population, People with chronic illness, Pregnant mothers in all trimesters can receive except Sputnik-V
      </p>

      <h1>Who is not eligible for the vaccine ?</h1>
      <p>
        Those allergic to any component of the vaccine, Those with severe allergy to a previous doses of the same vaccine,
        Those with previous severe allergic reaction to any vaccine, medicine or food requiring hospitalization.
      </p>


      <h1>After Vaccination...</h1>
      <p>
      To ensure your safety and wellbeing, you will be observed for 20 minutes after  vaccination at the centre,
      To obtain maximum protection, the number of recommended doses for that  specific vaccine must be received.
      As with all vaccines, side effects are possible.
 
      </p>


      {/* <h1>What are the Benefits of getting vaccinated ?</h1>
      <p>
      The COVID-19 vaccines produce protection against the disease, as a result of developing an immune response to the SARS-Cov-2 virus.
        Developing immunity through vaccination means there is a reduced risk of developing the  illness and its consequences.
         This immunity helps you fight the virus if exposed. Getting vaccinated may also protect people around you, 
         because if you are protected from getting infected and from disease, you are less likely to infect someone else. 
         This is particularly important to protect people at increased risk for severe illness from COVID-19, such as healthcare providers, 
         older or elderly adults, and people with other medical conditions.
 
      </p> */}

    </div>
  );
}

export default Boot;
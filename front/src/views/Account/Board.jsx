import React from "react";
import Summary from "./Summary/Summary";
import GeneralEntries from "./GeneralEntries/GeneralEntries";
import FormModal from "./FormModal/FormModal";

const Board = () => {
  const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item.",
    },
  ];

  /*   const date =new  Date();
  console.log(date.toLocaleString());


 */
  const today = new Date();
  const f = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "full",
    // dayPeriod: "long"
  });

  // console.log(f.format(today));

  const Today = f.format(today);

  return (
    <div className="row h-screen p-2 border shadow-sm">
      <h1 className="text-center p-1 font-bold">ADMIN ACCOUNT </h1>

      <Summary />
      <FormModal />
      <h3 className="fixed right-0 bottom-0 text-gray-600 pr-3">{Today}</h3>
    </div>
  );
};

export default Board;

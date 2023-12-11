import React from "react";
import Summary from "./Summary/Summary";

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

  const Form = () => {
    return (
      <>
        <div>
          <h1 className="text-center p-1 font-bold">BALANCE SHEET</h1>
          <form action="">
            <div className="bg-white">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">


 

              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  return (
    <div className="row  p-2 border shadow-sm">
      <h1 className="text-center p-1 font-bold">ADMIN ACCOUNT </h1>

      <Summary />

      {<Form />}
    </div>
  );
};

export default Board;

import { useState } from "react";
import Tooth from "../Tooth";
import ToothModal from "../ToothModalForm";

interface Props {}
const Odontogram = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const teethDiagram = {
    topLeft: {
      babyTeeth: [61, 62, 63, 64, 65],
      permanentTeeth: [21, 22, 23, 24, 25, 26, 27, 28],
    },
    bottomLeft: {
      babyTeeth: [71, 72, 73, 74, 75],
      permanentTeeth: [31, 32, 33, 34, 35, 36, 37, 38],
    },
    topRight: {
      babyTeeth: [51, 52, 53, 54, 55],
      permanentTeeth: [11, 12, 13, 14, 15, 16, 17, 18],
    },
    bottomRight: {
      babyTeeth: [81, 82, 83, 84, 85],
      permanentTeeth: [41, 42, 43, 44, 45, 46, 47, 48],
    },
  };
  return (
    <>
      <ToothModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="relative grid grid-cols-2 grid-rows-4 gap-6">
        <div className="flex flex-row-reverse gap-8">
          {teethDiagram.topRight.permanentTeeth.map((tooth) => (
            <Tooth position={tooth} onClick={() => setIsOpen(true)} />
          ))}
        </div>
        <div className="flex justify-start gap-8">
          {teethDiagram.topLeft.permanentTeeth.map((tooth) => (
            <Tooth position={tooth} />
          ))}
        </div>
        <div className="flex flex-row-reverse gap-8">
          {teethDiagram.topRight.babyTeeth.map((tooth) => (
            <Tooth position={tooth} />
          ))}
        </div>
        <div className="flex justify-start gap-8">
          {teethDiagram.topLeft.babyTeeth.map((tooth) => (
            <Tooth position={tooth} />
          ))}
        </div>
        <div className="flex flex-row-reverse gap-8">
          {teethDiagram.bottomRight.babyTeeth.map((tooth) => (
            <Tooth position={tooth} />
          ))}
        </div>
        <div className="flex justify-start gap-8">
          {teethDiagram.bottomLeft.babyTeeth.map((tooth) => (
            <Tooth position={tooth} />
          ))}
        </div>
        <div className="flex flex-row-reverse gap-8">
          {teethDiagram.bottomRight.permanentTeeth.map((tooth) => (
            <Tooth position={tooth} />
          ))}
        </div>
        <div className="flex justify-start gap-8">
          {teethDiagram.bottomLeft.permanentTeeth.map((tooth) => (
            <Tooth position={tooth} />
          ))}
        </div>

        <div className="absolute top-1/2 h-[1px] w-full border border-slate-400"></div>
        <div className="absolute left-1/2 h-full w-[1px] border border-slate-400"></div>
      </div>
    </>
  );
};
export default Odontogram;

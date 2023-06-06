import Select from "@/components/Select";
import { useState } from "react";

interface Props {}
const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];
const PatientList = (props: Props) => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div className="h-[200vh]">
      <Select
        options={people}
        getOptionLabel="name"
        // getOptionLabel={(option) => <>{`${option.name}`}</>}
        value={value}
        onChange={setValue}
        placeholder="Select"
        multiple
      />
    </div>
  );
};
export { PatientList };

import * as React from "react";

interface IPowerBIProps {}

const PowerBI: React.FunctionComponent<IPowerBIProps> = (props) => {
  return (
    <div className="h-[calc(100vh-4rem)] min-w-full">
      <iframe
        className="min-h-full min-w-full"
        src="https://datastudio.vietteldmp.vn/public/dashboard/8cc99f46-8490-4c8b-b7b9-e86f96c881e7/?disable_header=true&height=1296"
      />
    </div>
  );
};

export default PowerBI;

import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col  gap-4">
      <section className="flex flex-col gap-4 px-6">
        <Workflow
          name="Test Workflow"
          description="Creating a test workflow"
          id="1"
          publish={true}
        />
      </section>
    </div>
  );
};

export default Workflows;

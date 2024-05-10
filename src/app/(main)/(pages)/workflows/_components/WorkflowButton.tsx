"use client";

import Workflowform from "@/components/forms/Workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

function WorkflowButton({}: Props) {
  const { setOpen, setClose } = useModal();
  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a workflow automation"
        subheading="Workflows are powerfull that help you automate task"
      >
        <Workflowform />
      </CustomModal>
    );
  };
  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
}

export default WorkflowButton;

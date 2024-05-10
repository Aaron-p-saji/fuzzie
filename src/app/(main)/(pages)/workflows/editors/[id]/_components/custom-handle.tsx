import { useEditor } from "@/providers/editor-provider";
import React, { CSSProperties } from "react";
import { Handle, HandleProps, useStore } from "reactflow";

type Props = HandleProps & { style?: CSSProperties };

const selectors = (s: any) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

const CustomHandle = (props: Props) => {
  const { state } = useEditor();
  //   const { nodeInternals, edges } = useStore(selectors);

  return (
    <Handle
      {...props}
      isValidConnection={(e) => {
        const sourceFromHandleInState = state.editor.edges.filter(
          (edge) => edge.source == e.source
        ).length;
        const souceNode = state.editor.elements.find(
          (node) => node.id === e.source
        );
        const targetFromHandleInState = state.editor.edges.filter(
          (edge) => edge.target == e.target
        ).length;

        if (targetFromHandleInState === 1) return false;
        if (souceNode?.type === "Condition") return true;
        if (sourceFromHandleInState < 1) return true;
        return false;
      }}
      className="!-bottom-2 !h-4 !w-4 dark:bg-neutral-800"
    />
  );
};

export default CustomHandle;

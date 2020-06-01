import React, { useContext } from "react";
import MemoriesContext from "../data/memories-context";
import MemoriesContent from "../components/MemoriesContent";
const BadMemories: React.FC = () => {
  const MemoriesCtx = useContext(MemoriesContext);
  const badMemories = MemoriesCtx.memories.filter(
    (memory) => memory.type === "bad"
  );

  return (
    <MemoriesContent
      title="Bad Memories"
      fallbackText="No bad memories found!"
      memories={badMemories}
    />
  );
};

export default BadMemories;

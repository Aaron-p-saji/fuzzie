import { CONNECTIONS } from "@/lib/constants";
import React from "react";
import ConnectionCard from "./_components/ConnectionCard";

type Props = {
  searchParam?: { [key: string]: string | undefined };
};

// WIP: connected

const Page = ({ searchParam }: Props) => {
  return (
    <div className="relative flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your app directly from here.You may need to connect these
          regularly to refresh verification
          {CONNECTIONS.map((connections) => (
            <ConnectionCard
              key={connections.title}
              description={connections.description}
              icon={connections.image}
              type={connections.title}
              title={connections.title}
              // connected={connections}
            />
          ))}
        </section>
        c
      </div>
    </div>
  );
};

export default Page;

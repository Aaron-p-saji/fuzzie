import React from "react";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <div className='w-ful'>{props.children}</div>
    </div>
  );
};

import React from "react";

interface ContainerProp {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProp) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

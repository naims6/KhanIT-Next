import React from "react";

export default function Title({title, description, tag} : {title: string, description: string, tag: string}) {
  return (
    <div className="text-center mb-16">
      <span className="badge">{tag}</span>
      <h2 className="title mt-6 mb-4">{title}</h2>
      <p className="sub-title text-lg">{description}</p>
    </div>
  );
}

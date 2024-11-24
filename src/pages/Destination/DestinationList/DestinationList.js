import React from "react";

export default function DestinationList({ content, flag }) {
  return (
    <>
      {flag && (
        <p style={{ marginBottom: "10px", textAlign: "justify" }}>{content}</p>
      )}
    </>
  );
}

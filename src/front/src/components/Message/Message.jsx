import { memo } from "react";

const Message = ({ text, user, mine }) => {
  const addClasses = mine
    ? "d-flex flex-column justify-content-end align-items-end"
    : "";
  return (
    <div className={addClasses}>
      <div
        className={addClasses}
        style={{
          backgroundColor: "#A5CCD1",
          borderRadius: "1em",
          padding: "0.5em",
          margin: "1em",
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
        }}
      >
        <span style={{ color: "#3454D1", margin: "0 0.5em", width: "auto" }}>
          {user}
        </span>
        <span
          style={{
            color: "black",
            margin: "0.3em 1em",
            lineBreak: "strict",
            width: "auto",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default memo(Message);

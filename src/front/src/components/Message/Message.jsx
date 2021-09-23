import {memo} from "react";

const Message = ({text, user, mine}) => {
    const addClasses = mine
        ? ""
        : " flex-row-reverse ";
    return (
        <div className={addClasses}>
            <div
                className={"w-100 my-2 d-flex justify-content-end align-items-center" + addClasses}
                style={{
                    width: "fit-content",
                }}
            >
        <span style={{color: "gray", margin: "0 0.5em", width: "auto"}}>
          {user}
        </span>
                <div style={{
                    backgroundColor: "#A5CCD1", borderRadius: ".5em", padding: "0.5em",

                }}>
                    <span
                        style={{
                            color: "black",
                            width: "auto",
                        }}
                    >
          {text}
        </span>
                </div>


            </div>
        </div>
    );
};

export default memo(Message);

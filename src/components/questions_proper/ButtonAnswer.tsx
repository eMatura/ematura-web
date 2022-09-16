import { Button } from "@mui/material";
import React from "react";

export default function ButtonAnswer(props: { index: number; 
                                              aText: string; 
                                              isSelected: boolean
                                              handleClick: (idx: number, action: "deselect" | "select") => void }) {
    return (

        <Button variant={props.isSelected ? "contained" : "outlined"} 
                onClick={() => props.handleClick(props.index, props.isSelected ? "deselect" : "select")}>
            {props.aText}
        </Button>

    )

}
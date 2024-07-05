import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function InsertItem(props) {
    const itemRef = useRef();
    let newPosition = props.selectedItem.position.value;

    useFrame((state) => {
        if (props.selectedItem.value != undefined) {
            newPosition[0] += (props.move.value === 'ArrowRight' ?  1 : (props.move.value === 'ArrowLeft' ? -1 : 0));
            newPosition[2] += (props.move.value === 'ArrowDown' ?  1 : (props.move.value=== 'ArrowUp' ? -1 : 0));
            props.move.setter(undefined);
            props.selectedItem.position.setter(newPosition);
            itemRef.current.position.set(newPosition[0], newPosition[1], newPosition[2]);
        }
    });
    return (
        <group ref={itemRef}>
            {props.selectedItem.value}
        </group>
    );
}
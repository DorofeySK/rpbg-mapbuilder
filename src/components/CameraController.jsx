import { useEffect } from "react";
import {PointerLockControls} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function CameraController(props) {
    useFrame((state) => {
        state.camera.position.x += (props.move.value === 'd' ?  0.2 : (props.move.value === 'a' ? -0.2 : 0));
        state.camera.position.y += (props.move.value === 'q' ?  0.2 : (props.move.value === 'e' ? -0.2 : 0));
        state.camera.position.z += (props.move.value === 's' ?  0.2 : (props.move.value === 'w' ? -0.2 : 0));
        props.move.setter(undefined);
    });

    return (
        <PointerLockControls selector="#camera_button"/>
    );
}
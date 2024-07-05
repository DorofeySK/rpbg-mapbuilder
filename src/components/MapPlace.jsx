import { Canvas} from "@react-three/fiber";
import CameraController from "./CameraController.jsx";
import { useEffect, useRef, useState } from "react";
import InsertItem from "./InsertItem.jsx";

export default function MapPlace(props) {
  const [item, setItem] = useState(undefined);
  const camera_button = useRef(null);
  useEffect(() => {
    const pageProcesses = (event) => {
      if (event.key === 'c') {
        camera_button.current.click();
      }
    }

    document.addEventListener('keydown', pageProcesses);
    return () => {
      document.removeEventListener('keydown', pageProcesses);
    };
  }, []);

  useEffect(() => {
    setItem(<InsertItem selectedItem={props.selectedItem} move={props.move} map={props.map}/>);
  }, [props.move.value, props.selectedItem.value]);

  return (
    <div className="w-9/12 h-full">
      <button hidden id='camera_button' ref={camera_button}>Enter</button>
      <Canvas camera={{position: [0, 4, 0]}}>
        <CameraController move={props.move}/>
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        {item}
        {props.map.surface.value}
      </Canvas>
    </div>
  );
}
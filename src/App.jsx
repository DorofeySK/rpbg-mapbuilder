import { useState } from "react";
import MapPlace from "./components/MapPlace";
import SidePanel from "./components/SidePanel";
import KeyController from "./components/KeyController";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [selectedItemPosition, setSelectedItemPosition] = useState([0, 0, 0]);
  const [move, setMove] = useState(undefined);
  const [surface, pushSurface] = useState([]);
  const [surfacePos, setSurfacePos] = useState(0);
  const [decore, pushDecore] = useState({});

  return (
    <div className="w-full h-full flex flex-row divide-x-2 divide-slate-950">
      <KeyController setMove={setMove}/>
      <MapPlace insertObject={selectedItem} 
        move={{
          value: move, 
          setter: setMove
        }} 
        selectedItem={{
          value: selectedItem,
          setter: setSelectedItem,
          position: {
            value: selectedItemPosition,
            setter: setSelectedItemPosition
          }
        }}
        map={{
          surface: {
            pos: {
              value: surfacePos, 
              setter: setSurfacePos
            },
            value: surface,
            push: pushSurface
          },
          decore: {
            value: decore,
            push: pushDecore
          }
        }}
      />
      <SidePanel selectedItem={{
          value: selectedItem,
          setter: setSelectedItem,
          position: {
            value: selectedItemPosition,
            setter: setSelectedItemPosition
          }
        }}
      />
    </div>
  );
}
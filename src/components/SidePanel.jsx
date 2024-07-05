import Block from "./Blocks/Block";
import Area from "./Blocks/Area";
import SidePanelBar from "./SidePanelBar";
import ObjectButton from "./ObjectButton";
import InfoPanel from "./InfoPanel";

export default function SidePanel(props) {
    let elems = [
        <ObjectButton 
            key="1" 
            name="Area" 
            item={<Area position={props.selectedItem.position.value}/>} 
            setSelectedItem={props.selectedItem.setter}
        />,
        <ObjectButton 
            key="2" 
            name="Block" 
            item={<Block position={props.selectedItem.position.value}/>} 
            setSelectedItem={props.selectedItem.setter}
        />
    ];
    return (
        
        <div className="w-3/12 h-full flex flex-col gap-4 bg-slate-200">
            <div className="w-full h-1/3">
                <InfoPanel />
            </div>
            <div className="w-full h-2/3">
                <SidePanelBar name="Blocks" elems={elems}/>
            </div>
        </div>
    );
}
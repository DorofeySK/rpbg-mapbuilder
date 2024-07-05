export default function SidePanelBar(props) {
    return (
        <div className="w-full flex flex-col gap-4 items-center">
            <h1 className="w-full p-2 border-2 text-center text-2xl">{props.name}</h1>
            {props.elems}
        </div>
    );
}
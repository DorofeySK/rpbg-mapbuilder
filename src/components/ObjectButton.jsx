export default function ObjectButton(props) {

    return(
        <div className="w-11/12 rounded-lg bg-slate-400 p-2 hover:bg-slate-500" onClick={() => {
            props.setSelectedItem(props.item);
        }}>
            {props.name}
        </div>
    );
}
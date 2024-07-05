import { useEffect } from "react";

export default function KeyController(props) {
    let move = undefined;
    useEffect(() => {
        const catchKey = (event) => {
            console.log('User pressed: ', event.key);
            move = event.key;
            props.setMove(move);
        };
        document.addEventListener('keydown', catchKey);
        return () => {
            document.removeEventListener('keydown', catchKey);
        }
    }, []);
}
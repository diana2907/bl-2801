import { setFilter } from "redux/filterSlice";
import { useDispatch } from "react-redux";


export function Filter() {
    const dispatch = useDispatch();

    return <input onChange={(e) => dispatch(setFilter(e.target.value))} type="text" />
}
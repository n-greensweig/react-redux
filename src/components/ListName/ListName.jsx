import { useState } from "react";

// Step 1: import
import { useDispatch } from "react-redux";

function ListName() {

    // Step 2: This is commonly missed
    const dispatch = useDispatch();
    const [newListName, setNewListName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Step 3: Dispatch an action
        const action = { type: 'SET_LIST_NAME', payload: newListName }
        dispatch(action);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={newListName} onChange={e => setNewListName(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )

}

export default ListName;
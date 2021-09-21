import { NewNoteInput } from './NewNoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from '../../notesReducer';
import { addNote } from '../../actions';

function Notes() {
    const notes = useSelector<NotesState, NotesState['notes']>(state => state.notes);
    const dispatch = useDispatch();

    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    };

    return (
        <div>
            <NewNoteInput addNote={onAddNote} />
            <hr />
            <ul>
                {notes.map(note => {
                    return <li key={note}>{note}</li>;
                })}
            </ul>
        </div>
    );
}

export default Notes;

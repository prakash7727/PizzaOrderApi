import { useState } from 'react';
import Button from '../../Button';
import { useDispatch } from "react-redux";
import { updateName } from '../../userSlice';
import { useNavigate} from "react-router-dom";


function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='m-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input className="w-70 input mb-8"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
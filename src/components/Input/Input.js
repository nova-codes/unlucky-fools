import './Input.css';

const Input = () => {
    return (
        <div className='input-container'>
            <h1 className='uf-title'> Enter Their Names </h1>

            <input id='names' className='input-field' type='text' placeholder='Each name separated by a comma' />

            <button id='fate' className='he-btn btn-round btn-indigo'>seal their fate</button>
        </div>
    )
}

export default Input;
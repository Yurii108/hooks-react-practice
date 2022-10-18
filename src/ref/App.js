import { Container } from 'react-bootstrap';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from 'react';

const Form = () => {
    const [text, setText] = useState('');
    const myRef = useRef(1);


    // componentDidMount() {
    //     this.myRef.current.focus();
    // }

    // const onFirstWin = () => {
    //     myRef.current.focus();
    // }

    useEffect(() => {
    console.log(myRef.current)
    })

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea onClick={() => myRef.current + 1} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}


// class TextInput extends Component {
//     doSmth = () => {
//         console.log('smth')
//     }

// }

function App() {
    return (
        <Form />
    );
}

export default App;

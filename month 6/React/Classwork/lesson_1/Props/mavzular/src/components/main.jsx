import { useMemo, useState } from "react";

const bigCounter = number => {
    console.log('render')
    let i = 0;
    while (i < 1000) i++;
    return number * 2
}


const User = () => {


    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         counter: 0,
    //         age: '',
    //         isLogin: false,
    //     }
    // }


    const [counter, setCounter] = useState(0);
    const [active, setActive] = useState(true)
    const onIncrement = () => setCounter(prev => prev + 1)
    const colors = {
        fontWeight: 'bold',
        color: active ? 'green' : 'yellow',
    }

    const onToggle = () => {
        setActive(prev => !prev)
    }

    // const counterGenerate = useCallback(() => {
    //     return new Array(counter).fill('').map((_, id) => `counter number ${id + 1}`)
    // }, [counter])
    // const inDeccrement = () => {
    //     setCounter(counter - 1)
    // }
    // onIncrement = () => {
    //     this.setState(prev => ({ counter: prev.counter + 1 }))
    // }
    // inDeccrement = () => this.setState(prev => ({ counter: prev.counter - 1 }))
    // changeHandler = (e) => this.setState({ age: e.target.value })
    // componentDidMount() {
    //     console.log('clear')
    // }
    // onToggleLogin = () => {
    //     this.setState(prev => ({ isLogin: !prev.isLogin }))
    // }
    // componentDidUpdate() {
    //     document.title = `counter ${this.state.counter}`
    //     console.log('updating')
    // }


    const number = useMemo(() => bigCounter(counter), [counter])
    return (
        <div className="w-50 mx-auto" >
            <div className="border p-3 mt-5">
                <p className="text-center" style={colors}>{number}</p>
                <div className="d-flex justify-content-center gap-3">
                    <button className='btn btn-success' onClick={onIncrement} style={colors}>increment</button>

                    <button className="btn btn-outline-danger" onClick={onToggle}>bg-danger</button>
                </div>
                {/* <CounterItem counterGenerate={counterGenerate} /> */}
            </div>
        </div>
    )
}




export default User;



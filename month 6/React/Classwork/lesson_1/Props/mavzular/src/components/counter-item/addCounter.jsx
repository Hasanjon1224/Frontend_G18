import { useState } from "react";


export default function AddCounter() {
    const [counters, setCounters] = useState([]);



    const addCounter = () => {
        setCounters([...counters, { id: Date.now(), count: 0 }])
    }

    const updateCount = (id, delta) => {
        setCounters(counters.map((counter) => (
            counter.id === id ? { ...counter, count: counter.count + delta }: counter
        )))
    }

    return (
        <>
            <div className="p-4">
                <button className="btn btn-outline-info" onClick={addCounter}>
                    add counter
                </button>

                <div className='m-4'>
                    {counters.map(counter => (
                        <div className="d-flex align-items-center">
                            <button onClick={() => updateCount(counter.id, 1)}>
                                +
                            </button>

                            <span className="text-center">{counter.count}</span>
                            <button onClick={() => updateCount(counter.id, -1)}>
                                -
                            </button>

                        </div>



                    ))}
                </div>

            </div>

        </>
    )
}
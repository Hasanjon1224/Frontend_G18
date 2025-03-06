import { useRef, useState } from "react"
const User = () => {
    const cvcRef = useRef(null)
    const dataRef = useRef(null);
    const [cardNumber, setCardNumber] = useState()
    const [cvcDataNumber, setDataCvcNumber] = useState();


    const handleInput = e => {

        const val = e.target.value;
        setCardNumber(val)

        if (val.length === 16) {
            cvcRef.current.focus();
        }
    }

    const dataHandleInput = (e) => {
        const res = e.target.value;
        setDataCvcNumber(res)
        if (res.length === 4) {
            dataRef.current.focus()
        }
    }


    return (

        <div className="w-50 mx-auto">
            <div className="border p-3 mt-5">
                <input ref={cvcRef} type="text" placeholder="enter your phone number" className="form-control" onChange={handleInput} value={cardNumber} />
                <input ref={cvcRef} type="text" placeholder="enter your secure number" className="form-control mt-2" onChange={dataHandleInput} value={cvcDataNumber} />
                <input ref={dataRef} type="text" placeholder="month/year" className="form-control mt-2"   />
            </div>
        </div>


    )
}


export default User
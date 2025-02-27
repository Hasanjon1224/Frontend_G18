// import React, { Component } from 'react';

// import './movies-add-form.css';

// class MoviesAddForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: '',
//             views: '',
//         };
//     }

//     changeHandleInput = (e) => {
//         const { name, value } = e.target;
//         this.setState({
//             [name]: name === 'views' ? value.replace(/\D/, '') : value,
//         });
//     };

//     addFormHandler = (e) => {
//         e.preventDefault();
//         const { name, views } = this.state;

//         if (name.trim() === '' || views.trim() === '') {
//             alert("Iltimos, barcha maydonlarni to‘ldiring!");
//             return;
//         }

//         this.props.addForm({ name, viewers: Number(views) });

//         this.setState({ name: '', views: '' });
//     };

//     render() {
//         const { name, views } = this.state;

//         return (
//             <div className="movies-add-form">
//                 <form className="add-form d-flex" onSubmit={this.addFormHandler}>
//                     <input
//                         type="text"
//                         className="form-control new-post-label"
//                         placeholder="Qanday kino?"
//                         onChange={this.changeHandleInput}
//                         name="name"
//                         value={name}
//                     />
//                     <input
//                         type="number"
//                         className="form-control new-post-label"
//                         placeholder="Necha marotaba ko‘rilgan?"
//                         onChange={this.changeHandleInput}
//                         value={views}
//                         name="views"
//                     />
//                     <button className="btn btn-outline-primary" type="submit">
//                         Qo‘shish
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default MoviesAddForm;

import React, { useState } from 'react';
import './movies-add-form.css';

const MoviesAddForm = ({ addForm }) => {
    const [name, setName] = useState('');
    const [views, setViews] = useState('');
    const [error, setError] = useState('');

    const changeHandleInput = (e) => {
        const { name, value } = e.target;

        if (name === 'views') {
            if (!/^\d*$/.test(value)) return; // Faqat raqamlarni qabul qiladi
            setViews(value);
        } else {
            setName(value);
        }
    };

    const addFormHandler = (e) => {
        e.preventDefault();

        if (name.trim() === '' || views.trim() === '') {
            setError("Iltimos, barcha maydonlarni to‘ldiring!");
            return;
        }

        addForm({ name, viewers: Number(views) });

        setName('');
        setViews('');
        setError('');
    };

    return (
        <div className="movies-add-form">
            <form className="add-form d-flex" onSubmit={addFormHandler}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Qanday kino?"
                    onChange={changeHandleInput}
                    name="name"
                    value={name}
                />
                <input
                    type="number" // type="number" ishlatildi
                    className="form-control new-post-label"
                    placeholder="Necha marotaba ko‘rilgan?"
                    onChange={changeHandleInput}
                    value={views}
                    name="views"
                />
                <button className="btn btn-outline-primary" type="submit">
                    Qo‘shish
                </button>
            </form>

            {error && <div className="error-message">{error}</div>} {/* Xatolik xabarini chiqarish */}
        </div>
    );
};

export default MoviesAddForm;



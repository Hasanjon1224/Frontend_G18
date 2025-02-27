
import "./Movies-list-item.css";
// class MoviesListItem extends Component {
//   constructor(props) {
//     super(props)

//     this.state = { favourite: false, like: false }

//   }

//   onFavoruite = () => {
//     this.setState(({ favourite }) => ({
//       favourite: !favourite,
//     }))

//   }

//   onLike = () => {
//     this.setState(({ like }) => ({
//       like: !like,
//     }))
//   }
//   render() {

//     return (
//       <>
//         <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
//           <span className="list-group-item-label" onClick={onToggleProp} data-toggle='like'>{name}</span>
//           <input type="number" className="list-group-item-input" defaultValue={viewers} />
//           <div className="d-flex align-items-center justify-content-center">
//             <button className="btn-cookie btn-sm" type='submit' onClick={onToggleProp} data-toggle='favourite'><i className="fas fa-cookie"></i></button>
//             <button className="btn-trash btn-sm" onClick={onDelete}>
//               <i className="fas fa-trash"></i>
//             </button>
//             <i className="fas fa-star"></i>
//           </div>
//         </li>

//       </>
//     )
//   }
// }


const MoviesListItem = (props) => {

  const { name, viewers, onDelete, onToggleProp, like, favourite } = props;
  return (
    <>
      <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
        <span className="list-group-item-label" onClick={onToggleProp} data-toggle='like'>{name}</span>
        <input type="number" className="list-group-item-input" defaultValue={viewers} />
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn-cookie btn-sm" type='submit' onClick={onToggleProp} data-toggle='favourite'><i className="fas fa-cookie"></i></button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>

    </>
  )
};

export default MoviesListItem;

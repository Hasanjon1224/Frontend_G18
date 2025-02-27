import './movie-list.css'
import MoviesListItem from '../MoviesListItem/MoviesListItem'
const MovieList = ({ data, onDelete, onToggleProp }) => {
    return (
        <ul className='movies-list'>
            {data.map((item) => {
                return (
                    <MoviesListItem
                        key={item.id}
                        name={item.name}
                        viewers={item.viewers}
                        favourite={item.favourite}
                        like={item.like}
                        onDelete={() => onDelete(item.id)}
                        onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}

                    />
                )
            })}
        </ul>
    )
}

export default MovieList
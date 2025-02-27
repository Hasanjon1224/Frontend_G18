
import './app-filter.css'
const AppFilter = ({ updateFilterHandler, filter }) => {

  const btnsArr = [

    {
      name: "all", label: "Barcha kinolar",

    },

    {
      name: "popular", label: "Mashxur kinolar",
    },

    {
      name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar",
    }
  ]


  return (

    <div className="btn-group">

      {btnsArr.map(item => (
        <button key={item.name} className={`btn ${filter === item.name ? 'btn-success' : 'btn-outline-success'}`} type='button' onClick={() => updateFilterHandler(item.name)}>
          {item.label}
        </button>
      ))
      }

      {/* 
    <button className="btn btn-outline-success" type='button'>
      Mashxur kinolar
    </button>

    <button className="btn btn-outline-success" type='button'>
      Eng ko`p kurilgan kinolar
    </button> */}
    </div >
  )
};

export default AppFilter;

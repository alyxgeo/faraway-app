
export default function Stats({ items }) {


    //early return feacture
    if (!items.length) {
      return (
        <p className="stats"><em>start adding something</em></p>
      )
    }
  
  
    //derived state
    const numItems = items.length
    const numPacked = items.filter((item) => (item.packed)).length
    const percentage = Math.round((numPacked / numItems) * 100)
  
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100 ? 'you got every thing ! ready to go' :
            `you have ${numItems} items on your list,
        and you already packed ${numPacked},(${percentage}%)`
          }
        </em>
      </footer>
    );
  }
  
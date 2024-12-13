const Ingredient = ({ ingredient, index, functionName, arrow }) => {
  let colorStyle = 'background-color:'
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button id={index} onClick={functionName}>
        {arrow}
      </button>
    </li>
  )
}

export default Ingredient

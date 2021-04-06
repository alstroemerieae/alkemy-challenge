const HeaderExpenseItem = ({title, value}) => {
  return (
  <div className="App-header__total-expense">
    <div className="App-header__total-expense--title">{title}</div>
    <div className="App-header__total-expense--value">-{value}</div>
  </div>
  );
}

export default HeaderExpenseItem;
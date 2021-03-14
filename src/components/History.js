// import { useState, useEffect } from "react";
import { useEffect } from "react";
import OperationDataService from "../services/OperationDataService";
// import { Link } from "react-router-dom";

const History = ({operations, setOperations, incomesArray, expensesArray, handleUpdate, handleDelete}) => {

  useEffect(() => {
    retrieveOperations();
  }, []);

  const retrieveOperations = () => {
    OperationDataService.getAll()
      .then(response => {
        setOperations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  console.log(incomesArray);
  console.log(expensesArray);

  return (
    <div className="App-history">
      <div className="App-history__income">
        <h3 className="App-history__income--title">Ingresos</h3>
        {incomesArray.map(operation => (
          <div className="App-history__income-item" key={ operation.id }>
            <p className="App-history__income-item--date">{ operation.date }</p>
            <p className="App-history__income-item--amount">${ operation.amount }</p>
            <p className="App-history__income-item--concept">{ operation.concept }</p>
            <button className="btn-update" onClick={() => handleUpdate(operations, operation)}>Modificar</button>
            <button className="btn-delete" onClick={() => handleDelete(operations, operation.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="App-history__expense">
        <h3 className="App-history__expense--title">Egresos</h3>
        {expensesArray.map(operation => (
          <div className="App-history__expense-item" key={ operation.id }>
            <p className="App-history__expense-item--date">{ operation.date }</p>
            <p className="App-history__expense-item--amount">${ operation.amount }</p>
            <p className="App-history__expense-item--concept">{ operation.concept }</p>
            <button className="btn-update" onClick={() => handleUpdate(operations, operation)}>Modificar</button>
            <button className="btn-delete" onClick={() => handleDelete(operations, operation.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;

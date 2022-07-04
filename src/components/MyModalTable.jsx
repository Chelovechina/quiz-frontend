import React from 'react';

const MyModalTable = ({ name, difficluty, time, required_score_to_pass }) => {
  return (
    <div>
      <h4>
        Вы уверенны, что хотите пройти тест "<b>{name}</b>"?
      </h4>
      <div className="text-muted">
        <table className="table">
          <tbody>
            <tr>
              <td>Сложность:</td>
              <td>
                <b>{difficluty}</b>
              </td>
            </tr>
            <tr>
              <td>Время на завершение:</td>
              <td>
                <b>{time} мин.</b>
              </td>
            </tr>
            <tr>
              <td>Счет, чтобы пройти:</td>
              <td>
                <b>{required_score_to_pass}%</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyModalTable;

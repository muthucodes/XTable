// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// const table = [
//   { date: "2022-09-01", views: 100, article: "Article 1" },
//   { date: "2023-09-01", views: 100, article: "Article 1" },
//   { date: "2023-09-02", views: 150, article: "Article 2" },
//   { date: "2023-09-02", views: 120, article: "Article 3" },
//   { date: "2020-09-03", views: 200, article: "Article 4" },
// ];

function App() {
  const [table, setTable] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const clickHandler = (sortType) => {
    const sortedTable = table.slice();

    if (sortType === "date") {
      console.log("Sorting by date");
      sortedTable.sort((a, b) => {
        const bDate = new Date(b.date).getTime();
        const aDate = new Date(a.date).getTime();
        // console.log(new Date(b.date).getTime(), new Date(a.date).getTime());
        if (bDate === aDate) {
          // console.log("dates are matching");
          return b.views - a.views;
        } else {
          // console.log("dates are not matching");
          return bDate - aDate;
        }
      });
    }
    // console.log(sortedTable);
    if (sortType === "views") {
      console.log("Sorting by views");
      sortedTable.sort((a, b) => {
        const bDate = new Date(b.date).getTime();
        const aDate = new Date(a.date).getTime();
        // console.log(new Date(b.date).getTime(), new Date(a.date).getTime());
        if (a.views === b.views) {
          // console.log("views are matching");
          return bDate - aDate;
        } else {
          // console.log("views are not matching");
          return b.views - a.views;
        }
      });
    }
    setTable(sortedTable);
  };

  return (
    <div className="App">
      <h1>Data and Views Table</h1>

      <button onClick={() => clickHandler("date")}>Sort by Date</button>
      <button onClick={() => clickHandler("views")}>Sort by views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => {
            return (
              <tr>
                <td>{row.date}</td>
                <td>{row.views}</td>
                <td>{row.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

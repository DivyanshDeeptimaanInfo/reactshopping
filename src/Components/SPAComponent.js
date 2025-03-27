import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const SPAComponent = () => {
  function HTML() {
    return (
      <main>
        <h2>HTML</h2>
        <p>This is a markup language</p>
      </main>
    );
  }
  return (
    <div className=" container-fluid">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/html">HTML</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
            </li>
            <li>
              <Link to="/js">Javascript</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="html" element={<HTML />} />
          <Route
            path="css"
            element={
              <main>
                <h2>CSS</h2>
                <p>This is a Style Sheet</p>
              </main>
            }
          />
          <Route
            path="js"
            element={
              <main>
                <h2>Javascript</h2>
                <p>This is a language</p>
              </main>
            }
          />
          <Route
            path="/"
            element={
              <main>
                <h2>Tutorial</h2>
                <p>This is a documents</p>
              </main>
            }
          />
          <Route
            path="*"
            element={
              <main>
                <h2>Sorry</h2>
                <code>OOPs! something went wrong </code>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default SPAComponent;

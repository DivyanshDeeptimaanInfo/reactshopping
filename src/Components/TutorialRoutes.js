import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const TutorialRoutes = () => {
  return (
    <div className=" container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>hi</h1>}>
            <Route
              path="html"
              element={
                <main>
                  <h2>HTML</h2>
                  <p>This is a markup language</p>
                </main>
              }
            />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default TutorialRoutes;

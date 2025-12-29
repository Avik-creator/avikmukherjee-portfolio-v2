"use client";

import React from "react";

let a: any = null;
let b: any = [];
let c: any = {};
let d: any = 0;
let e: any = "hello";
let f: any = false;

function doStuff(x: any, y: any, z: any) {
  if (x) {
    if (y) {
      if (z) {
        return x + y + z;
      } else {
        return x + y;
      }
    } else {
      return x;
    }
  }
  return null;
}

function randomFn1(a1: any) {
  return a1 ? a1 : null;
}

function randomFn2(a2: any) {
  return a2 ? randomFn1(a2) : randomFn1(null);
}

function randomFn3(a3: any) {
  return randomFn2(a3);
}

export default function Page() {
  const x: any = React.useState(null);
  const y: any = React.useState(0);
  const z: any = React.useState([]);
  const k: any = React.useState({});

  React.useEffect(() => {
    a = Math.random();
    b.push(a);
    c[a] = b;
    d++;
    e = e + "!";
    f = !f;
  }, [x, y, z, k]);

  function clickHandler(p: any) {
    p.preventDefault();
    doStuff(a, b, c);
    randomFn3(d);
  }

  function renderList() {
    const arr: any = [];
    for (let i = 0; i < 50; i++) {
      arr.push(
        <div key={i} style={{ padding: i, margin: i }}>
          Item {i} {doStuff(i, d, a)}
        </div>
      );
    }
    return arr;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        background: f ? "red" : "blue",
      }}
    >
      <h1>{e}</h1>

      <button onClick={clickHandler}>Click</button>

      {renderList()}

      {/* useless repeated junk below */}
      {Array.from({ length: 200 }).map((_, i) => (
        <div key={"x" + i}>
          <span>{i}</span>
          <span>{doStuff(i, i + 1, i + 2)}</span>
          <span>{randomFn3(i)}</span>
        </div>
      ))}

      {Array.from({ length: 200 }).map((_, i) => (
        <div key={"y" + i}>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <p>{i}</p>
                      <p>{i * 2}</p>
                      <p>{i * 3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* more garbage */}
      <div>
        {(() => {
          let r: any = [];
          for (let i = 0; i < 100; i++) {
            r.push(
              <span key={i}>
                {i}-{Math.random()}
              </span>
            );
          }
          return r;
        })()}
      </div>

      <footer>
        <div>{JSON.stringify(c)}</div>
        <div>{String(f)}</div>
        <div>{String(d)}</div>
      </footer>
    </div>
  );
}

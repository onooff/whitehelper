import { useState, useEffect } from "react";

export default function Dummy() {
  const styles = [{}, { backgroundImage: "linear-gradient(to bottom, red, orange, yellow, green, blue, indigo, purple, black)" }];
  const [style, setStyle] = useState(0);
  const [height, setHeight] = useState(50);
  const [contents, setContents] = useState([]);
  // let contents = [];


  const changeHeight = (event) => { setHeight((prev) => parseInt(event.target.value) || 0) }
  useEffect(() => {
    let newContents = [];
    for (let index = 1; index < 1 + height; index++) {
      newContents.push(<div key={index}>{index}</div>);
    }
    setContents((prev) => newContents);
    // contents = newContents;
  }, [height]);

  const changeStyle = (event) => { setStyle((prev) => prev === 0 ? 1 : 0) }

  return (
    <div style={styles[style]}>
      <input type="checkbox" onChange={changeStyle} />
      <input type="number" value={height} onChange={changeHeight} />
      {contents}
    </div >
  );
}
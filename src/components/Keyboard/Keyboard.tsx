import Key from "./Key";

const Keyboard = () => {
  const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const line3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const Line1 = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: 0,
          }}
        >
          {line1.map((char, index) => (
            <Key key={index} letter={char} isMainButton={false} />
          ))}
        </div>
      </>
    );
  };

  const Line2 = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: 0,
          }}
        >
          {line2.map((char, index) => (
            <Key key={index} letter={char} isMainButton={false} />
          ))}
        </div>
      </>
    );
  };
  const Line3 = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: 0,
          }}
        >
          <Key letter={"Enter"} isMainButton={true} />
          {line3.map((char, index) => (
            <Key key={index} letter={char} isMainButton={false} />
          ))}
          <Key letter={"Delete"} isMainButton={true} />
        </div>
      </>
    );
  };
  return (
    <>
      <Line1 />
      <Line2 />
      <Line3 />
    </>
  );
};

export default Keyboard;

import styles from "./index.module.scss";

const MyTrip = () => {
  return (
    <div className={styles.MyTrip}>
      <div className="MyTrip">
        <h3>My trip in: Palermo</h3>
        <div className="TodoTrip">
          <ul>
            <li>Art and Culture </li>
            <ul>
              {" "}
              <li className="firstchild"> oogabooga</li>
              <li> ching chong</li>
              <li> bangojango</li>
            </ul>

            <li> Tour</li>
            <ul>
              <li>Palermo is burning</li>
            </ul>

            <li>By Night </li>
            <ul>
              {" "}
              <li> Palermo è provincia(le)</li>
            </ul>
            <li> Adventures </li>
            <ul>
              {" "}
              <li>Le bizzare avventure del Papireto</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTrip;

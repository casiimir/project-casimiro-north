import styles from "./index.module.scss";

const CityMainSection = () => {
  const arrayActivities = [
    { id: 1, title: "arte e cultura" },
    { id: 2, title: "arte e cultura" },
    { id: 3, title: "arte e cultura" },
    { id: 4, title: "arte e cultura" },
    { id: 5, title: "arte e cultura" },
    { id: 6, title: "arte e cultura" },
    { id: 7, title: "arte e cultura" },
    { id: 8, title: "arte e cultura" },
    { id: 9, title: "arte e cultura" },
    { id: 10, title: "arte e cultura" },
  ];

  return (
    <div className={styles.CityMainSection}>
      <p className={styles.description}>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
      <div className={styles.activitiesDiv}>
        <h3 className={styles.title}>Activities in nomeCittà</h3>
        <div className={styles.activitiesList}>
          {arrayActivities.map((data) => (
            <div className={styles.activity} key={data.id}>
              <a href="">{data.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityMainSection;

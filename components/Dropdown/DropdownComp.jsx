import styles from "./index.module.scss";

const DropdownComp = (classType) => {
  return (
    <div className={styles.Dropdown} classType={classType}>
      <CatDiv />
    </div>
  );
};

export default DropdownComp;

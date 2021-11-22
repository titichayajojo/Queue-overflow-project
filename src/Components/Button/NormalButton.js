import classes from "./NormalButton.module.css";
const NormalButton = (props) => {
  return (
    <div
      className={classes.button}
      style={{
        ...props.item.style,
      }}
    >
      <div
        style={{
          color: props.item.fontColor,

          fontWeight: "bold",
        }}
      >
        {props.item.name}
      </div>
    </div>
  );
};
export default NormalButton;

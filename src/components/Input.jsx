const Input = (props) => {
  const { ...rest } = props;
  return (
    <>
      <label htmlFor="" style={{ margin: "5px 0" }}>
        {rest.label}
      </label>
      {rest?.inputType === "textarea" ? (
        <textarea
          placeholder={rest.name}
          onChange={(e) => rest.setData(e.target.value)}
          className={rest?.classStyle}
        />
      ) : (
        <input
          type="text"
          placeholder={rest.name}
          onChange={(e) => rest.setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;

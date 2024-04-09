export const CardRedirector = ({ children }: { children: any }) => {
  return (
    <button
      style={{
        background: "none",
        color: "inherit",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
      }}
    >
      {children}
    </button>
  );
};

export default CardRedirector;

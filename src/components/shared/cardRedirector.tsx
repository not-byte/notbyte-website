export const CardRedirector = ({
  children,
  shouldAddClick,
}: {
  children: any;
  shouldAddClick?: true;
}) => {
  const onCardClick = () => {
    const currentBodyHeight = document.body.scrollHeight;
    document.body.style.minHeight = `${currentBodyHeight}px`;
  };

  return (
    <button
      onClick={shouldAddClick ? onCardClick : undefined}
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

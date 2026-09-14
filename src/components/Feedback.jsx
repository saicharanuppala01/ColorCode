function Feedback({ feedback }) {
  return (
    <div className="feedback">

      {feedback.map((item, index) => (
        <span
          key={index}
          className={`feedback-dot ${item.type}`}
          aria-label={
            item.type === "exact"
              ? "Correct color and position"
              : "Correct color but wrong position"
          }
        >
          {item.type === "exact" ? "●" : "○"}
        </span>
      ))}

    </div>
  );
}

export default Feedback;
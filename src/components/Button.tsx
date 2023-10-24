import clsx from "clsx";

export default function Button({ children, disabled = false }) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "bg-[#016CB9]  font-semibold text-white rounded-md py-3.5 px-6",
        disabled && "opacity-30 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}

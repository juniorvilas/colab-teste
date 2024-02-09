import { PulseLoader } from "react-spinners";
import { Loading } from "../Loading";
import { type ButtonProps } from "./types";

function Button({ children, type, loading, ...rest }: ButtonProps) {
  return (
    <button
      type={type || "button"}
      className="rounded-md w-full px-4 py-2 border border-primary-900 bg-primary-900 hover:border-primary-700 hover:bg-primary-700 text-white"
      {...rest}
    >
      {loading ? (
        <Loading icon={PulseLoader} color="#caf0f8" size={10} />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;

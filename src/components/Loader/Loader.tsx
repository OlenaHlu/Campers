import { BarLoader } from "react-spinners";

type LoaderProps = {
  height?: number;
  width?: number;
  color?: string;
  loading?: boolean;
};

const Loader = ({
  height = 4,
  width = 100,
  color = "#e44848",
  loading = true,
}: LoaderProps) => {
  return (
    <BarLoader
      color={color}
      loading={loading}
      height={height}
      width={width}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;

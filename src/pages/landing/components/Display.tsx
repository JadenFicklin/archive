interface DisplayProps {
  name?: string;
}

export const Display: React.FC<DisplayProps> = ({ name }) => {
  return (
    <div className="mx-auto mt-9 w-11/12">
      <h1 className="text-4xl font-bold text-gray dark:text-white">
        {name
          ?.split(" ")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(" ")}
      </h1>
    </div>
  );
};

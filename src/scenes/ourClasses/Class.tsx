type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `absolute flex h-full w-full flex-col items-center justify-center whitespace-normal
  bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 p-5`;

  return (
    <li className="relative">
      <div className={overlayStyles}>
        <p className="text-lg sm:text-xl md:text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={name} />
    </li>
  );
};

export default Class;

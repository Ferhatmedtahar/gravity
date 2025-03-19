type GridItemProps = {
  title: string;
  description: string;
  style?: string;
};
export default function GridItem({
  title,
  description,
  style = "",
}: GridItemProps) {
  return (
    <div
      className={` min-h-[10rem] max-h-[10rem] cursor-default rounded-xs flexCenter flex-col gap-3  p-10 border-primary hover:btn-gradient transition-colors duration-500 ease-in-out ${style}`}
    >
      <h3 className="text-2xl sm:text-4xl font-medium  lg:text-2xl ">
        {title}
      </h3>
      <p className={`text-xs sm:text-xl max-w-[15ch]  font-light text-center`}>
        {description}
      </p>
    </div>
  );
}

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
  const textColor = style.includes("btn-gradient")
    ? "text-slate-100"
    : "text-slate-300";

  return (
    <div
      className={`rounded-xs flexCenter flex-col gap-2 px-1.5 py-1 sm:py-1.5  sm:px-2 md:py-2 md:px-1  min-h-28 ${style}`}
    >
      <h3 className="text-lg sm:text-xl  lg:text-2xl font-normal">{title}</h3>
      <p className={`text-xs sm:text-sm  font-normal    ${textColor} `}>
        {description}
      </p>
    </div>
  );
}

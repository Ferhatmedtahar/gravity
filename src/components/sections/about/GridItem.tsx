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
      className={`rounded-xs flexCenter flex-col px-1.5 py-1 sm:py-1.5  sm:px-2 md:py-2 md:px-3.5   ${style}`}
    >
      <h3 className="text-base md:text-2xl font-normal">{title}</h3>
      <p className="text-xs md:text-sm text-slate-100 font-normal max-w-32 ">
        {description}
      </p>
    </div>
  );
}

import clsx from "clsx";

export default function HeaderComponent({ title, subtitle, ...props }) {
  return (
    <div className={clsx("flex flex-col items-center", props.className)}>
      <p className="display-lg">{title}</p>
      <p className="mt-8 xl:headline-sm max-w-[858px] text-center title-md font-normal">
        {subtitle}
      </p>
    </div>
  );
}

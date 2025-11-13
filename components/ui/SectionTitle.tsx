export const SectionTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-5 items-start w-fit ">
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10  bg-accent-danger rounded" />
        <p className="font-semibold text-accent-danger">{title}</p>
      </div>
      {children}
    </div>
  );
};

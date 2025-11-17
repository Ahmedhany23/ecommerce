export const SectionTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-fit flex-col items-start gap-5">
      <div className="flex items-center gap-4">
        <div className="bg-accent-danger h-10 w-5 rounded" />
        <p className="text-accent-danger font-semibold font-inter">{title}</p>
      </div>
      {children}
    </div>
  );
};

export default function Work() {
  return (
    <div className={`h-[300vh]`}>
      <div className={`flex flex-col gap-4`}>
        {[0, 1, 2].map((i) => {
          return (
            <div key={i} className={`h-[50vh] w-3/4 mx-auto bg-[green]`} />
          );
        })}
      </div>
    </div>
  );
}

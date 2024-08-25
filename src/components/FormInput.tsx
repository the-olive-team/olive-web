import clsx from 'clsx';

interface FormInputProps {
  // The type is from Heroicons
  icon?: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  name: string;
  className?: string;
}

export default function FormInput({
  icon: Icon,
  name,
  className,
}: FormInputProps) {
  return (
    <>
      <label htmlFor={name.toLowerCase()} className="sr-only">
        {name}
      </label>
      <div
        className={clsx(
          'w-full flex items-center mb-3 bg-white rounded has-[:focus]:outline has-[:focus]:outline-2 has-[:focus]:outline-lime-800/50',
          className
        )}
      >
        {Icon && (
          <div className="px-3 py-1 border-r border-neutral-300">
            <Icon className="size-4 text-lime-800" />
          </div>
        )}
        <input
          type="text"
          id={name.toLowerCase()}
          name={name.toLowerCase()}
          placeholder={name}
          className="outline-none px-3 py-2 flex-grow"
        />
      </div>
    </>
  );
}

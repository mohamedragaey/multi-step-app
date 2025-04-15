import ErrorMessage from "@/components/ErrorMessage";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type RadioGroupProps<TFieldValues extends FieldValues> = {
    name: Path<TFieldValues>;
    label: string;
    options: { label: string; value: string }[]; // Options for the radio buttons
    register: UseFormRegister<TFieldValues>;
    error?: string;
};

const RadioGroup = <TFieldValues extends Record<string, unknown>>(
    props: RadioGroupProps<TFieldValues>
) => {
    return (
        <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300">
                {props.label}
            </label>
            <div className="space-y-2 mt-2">
                {props.options.map((option) => (
                    <div key={option.value} className="flex items-center">
                        <input
                            id={option.value}
                            type="radio"
                            value={option.value}
                            {...props.register(props.name)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500"
                        />
                        <label htmlFor={option.value} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {!!props.error && <ErrorMessage message={props.error} />}
        </div>
    );
};

export default RadioGroup;

import ErrorMessage from "@/components/ErrorMessage";
import HintMessage from "@/components/HintMessage";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValues extends FieldValues> = {
    name: Path<TFieldValues>;
    label: string
    id: string;
    type: string;
    register: UseFormRegister<TFieldValues>;
    error?: string;
    hint?: string;
}

const Input = <TFieldValues extends FieldValues>(props: InputProps<TFieldValues>) => {

    return (
        <div>
            <div className="relative z-0">
                <input id={props.id}
                    type={props.type}
                    {...props.register(props.name)}
                    className={`${props.error ? 'border-red-600 dark:border-red-500 dark:focus:border-red-500 focus:border-red-600' : ''} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " />
                <label htmlFor={props.id} className={`${props.error ? 'text-red-600 dark:text-red-500' : ''} absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}>{props.label}</label>
            </div>
            {!!props.hint && <HintMessage message={props.hint} />}
            {!!props.error && <ErrorMessage message={props.error} />}
        </div>
    );
};

export default Input;

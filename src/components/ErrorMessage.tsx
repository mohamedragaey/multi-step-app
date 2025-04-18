interface ErrorMessageProps {
    message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {

    return (
        <span className="text-red-500 text-xs">{props.message}</span>
    );
};

export default ErrorMessage;

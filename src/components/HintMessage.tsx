interface HintMessageProps {
    message: string
}

const HintMessage: React.FC<HintMessageProps> = (props) => {

    return (
        <span className="text-xs italic text-gray-600 dark:text-gray-400 block">{props.message}</span>
    );
};

export default HintMessage;

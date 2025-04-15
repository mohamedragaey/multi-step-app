interface StepTitleProps {
    title: string;
}

const StepTitle: React.FC<StepTitleProps> = (props) => {

    return (
        <h2 className="text-2xl font-semibold text-center border-b border-solid border-gray-400/40 dark:text-white pb-3 mb-6">{props.title}</h2>
    );
};

export default StepTitle;


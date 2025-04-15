import StepTitle from "@/components/StepTitle";

const SuccessCard = () => {
    return (
        <>
            <StepTitle title="Success!" />
            <div className="flex flex-col items-center justify-center gap-4 min-h-80 dark:text-white text-center">
                <p>Your information has been submitted successfully.</p>
                <p>You will be redirect soon to the first step and the form will reset.</p>
            </div>
        </>
    );
};

export default SuccessCard;

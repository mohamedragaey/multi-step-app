import { resetForm } from '@/features/form/formSlice';
import { RootState } from '@/store/store';
import { clearFormStorage } from '@/utils/storage';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ConfirmationStep = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { basicInfo, additionalInfo } = useSelector((state: RootState) => state.form);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        // Simulate form submission
        // For now, we’ll just reset
        setIsSubmitted(true); // Set to true to display success message
        setTimeout(() => {
            clearFormStorage();
            dispatch(resetForm());
            navigate('/step1'); // Redirect back to Step 1 after a short delay
        }, 2000);
    };

    const handleBack = () => {
        navigate('/step2'); // Go back to Step 2 if user wants to edit
    };

    return (
        <div>
            {isSubmitted ? (
                <div className="text-green-600 font-semibold">
                    <h3 className="text-xl">Success!</h3>
                    <p>Your information has been submitted successfully.</p>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold mb-4">Step 3: Review and Confirm</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Basic Information</h3>
                            <p>Name: {basicInfo.name}</p>
                            <p>Email: {basicInfo.email}</p>
                            <p>Account Type: {basicInfo.accountType}</p>
                        </div>

                        <div>
                            <h3 className="font-medium">Additional Information</h3>
                            <p>Address: {additionalInfo.address}</p>

                            <p>Preferred Topics: {additionalInfo.preferredTopics}</p>

                            {basicInfo.accountType === 'Company' && (
                                <p>Company Name: {additionalInfo.companyName}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-between pt-4">
                        <button
                            onClick={handleBack}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ConfirmationStep;

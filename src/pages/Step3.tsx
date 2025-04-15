import Button from '@/components/Button';
import StepTitle from '@/components/StepTitle';
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
                    <StepTitle title='Review and Confirm' />

                    <div className="flex flex-col gap-6 mb-6">
                        <div>
                            <h3 className="font-semibold mb-2">Basic Information</h3>
                            <div className='pl-6 flex flex-col gap-1'>
                                <p><span className='font-medium'>Name:</span> {basicInfo.name}</p>
                                <p><span className='font-medium'>Email:</span> {basicInfo.email}</p>
                                <p><span className='font-medium'>Account Type:</span> {basicInfo.accountType}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Additional Information</h3>
                            <div className='pl-6 flex flex-col gap-1'>
                                <p><span className='font-medium'>Address:</span> {additionalInfo.address}</p>
                                <p><span className='font-medium'>Preferred Topics:</span> {additionalInfo.preferredTopics}</p>
                                {basicInfo.accountType === 'Company' && (
                                    <p><span className='font-medium'>Company Name:</span> {additionalInfo.companyName}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between pt-4">
                        <Button
                            label='Back'
                            type='button'
                            variant='secondary'
                            onClick={handleBack}
                        />
                        <Button
                            label='Submit'
                            type='submit'
                            variant='success'
                            onClick={handleSubmit}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ConfirmationStep;

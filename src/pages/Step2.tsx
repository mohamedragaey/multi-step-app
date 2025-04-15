import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAdditionalInfo, setStep } from '../features/form/formSlice';
import { RootState } from '../store/store';
import { AdditionalInfo, RequiredAdditionalInfo } from '../features/form/types';

const createDynamicSchema = (isKeyRequired: boolean) => {
    const baseSchema = z.object({
        address: z.string().min(1, 'Address is required'),
        preferredTopics: z.string().min(1),
    });

    return isKeyRequired
        ? baseSchema.extend({
            companyName: z.string().min(1, 'Company name required'),
        })
        : baseSchema.extend({
            companyName: z.string().optional()
        });
};

// Union type for FormData
type FormData = AdditionalInfo | RequiredAdditionalInfo;

const AdditionalInfoStep = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const storedValues = useSelector((state: RootState) => state.form.additionalInfo);
    const accountType = useSelector((state: RootState) => state.form.basicInfo.accountType);
    const isCompany = accountType === 'Company';

    const schema = createDynamicSchema(isCompany);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            address: storedValues.address,
            preferredTopics: storedValues.preferredTopics,
            companyName: storedValues.companyName,
        },
    });


    const onSubmit = (data: FormData) => {
        dispatch(setAdditionalInfo(data));
        dispatch(setStep(3));
        navigate('/step3');
    };

    const handleBack = () => {
        dispatch(setStep(1));
        navigate('/step1');
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Step 2: Additional Info</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor='address' className="block text-sm font-medium">Address</label>
                    <input
                        id='address'
                        type="text"
                        {...register('address')}
                        className="w-full mt-1 p-2 border rounded"
                    />
                    {errors.address && (
                        <p className="text-red-500 text-sm">{errors.address.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor='preferredTopics' className="block text-sm font-medium">Preferred Topics</label>
                    <input
                        id='preferredTopics'
                        type="text"
                        {...register('preferredTopics')}
                        className="w-full mt-1 p-2 border rounded"
                    />
                    {errors.preferredTopics && (
                        <p className="text-red-500 text-sm">{errors.preferredTopics.message}</p>
                    )}
                </div>

                {isCompany && (
                    <div>
                        <label htmlFor='CompanyName' className="block text-sm font-medium">Company Name</label>
                        <input
                            id='CompanyName'
                            type="text"
                            {...register('companyName')}
                            className="w-full mt-1 p-2 border rounded"
                        />
                        {errors.companyName && (
                            <p className="text-red-500 text-sm">{errors?.companyName?.message}</p>
                        )}
                    </div>
                )}


                <div className="flex justify-between pt-4">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                        disabled={!isValid}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdditionalInfoStep;

import Button from '@/components/Button';
import Input from '@/components/Input';
import { setAdditionalInfo, setStep } from '@/features/form/formSlice';
import { AdditionalInfo, RequiredAdditionalInfo } from '@/features/form/types';
import { RootState } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

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
                <Input
                    name='address'
                    label="Address"
                    id="address"
                    type="text"
                    register={register}
                    error={errors?.address?.message}
                />
                <Input
                    name='preferredTopics'
                    label="Preferred Topics"
                    id="preferredTopics"
                    type="text"
                    register={register}
                    error={errors?.preferredTopics?.message}
                />

                {isCompany && (
                    <Input
                        name='companyName'
                        label="Company Name"
                        id="companyName"
                        type="text"
                        register={register}
                        error={errors?.companyName?.message}
                    />
                )}


                <div className="flex justify-between pt-4">
                    <Button
                        label='Back'
                        type='button'
                        variant='secondary'
                        onClick={handleBack}
                    />
                    <Button
                        label='Next'
                        type='submit'
                        disabled={!isValid}
                        variant='primary'
                    />
                </div>
            </form>
        </div>
    );
};

export default AdditionalInfoStep;

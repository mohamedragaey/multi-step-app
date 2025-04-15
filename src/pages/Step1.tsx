import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioGroup from '@/components/RadioButton';
import StepTitle from '@/components/StepTitle';
import { setBasicInfo, setStep } from '@/features/form/formSlice';
import { RootState } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    accountType: z.enum(['Individual', 'Company'], {
        required_error: 'Please select an account type',
    }),
});

type FormData = z.infer<typeof schema>;

const BasicInfoStep = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storedValues = useSelector((state: RootState) => state.form.basicInfo);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'onChange',
        resolver: zodResolver(schema),
        defaultValues: {
            name: storedValues.name,
            email: storedValues.email,
            accountType: storedValues.accountType,
        },
    });

    const onSubmit = (data: FormData) => {
        dispatch(setBasicInfo(data));
        dispatch(setStep(2));
        navigate('/step2');
    };

    return (
        <>
            <StepTitle title='Basic Info' />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <Input
                    name='name'
                    label="Name"
                    id="name"
                    type="text"
                    register={register}
                    error={errors?.name?.message}
                />
                <Input
                    name='email'
                    label="Email"
                    id="email"
                    type="email"
                    register={register}
                    error={errors?.email?.message}
                />
                <RadioGroup
                    name="accountType"
                    label="Account Type"
                    options={[
                        { label: "Individual", value: "Individual" },
                        { label: "Company", value: "Company" },
                    ]}
                    register={register}
                    error={errors.accountType?.message}
                />

                <Button
                    label='Next'
                    type='submit'
                    disabled={!isValid}
                    variant='primary'
                />
            </form>
        </>
    );
};

export default BasicInfoStep;

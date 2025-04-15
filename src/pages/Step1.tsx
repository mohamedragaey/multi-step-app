import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBasicInfo, setStep } from '../features/form/formSlice';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
});

type FormData = z.infer<typeof schema>;

const BasicInfoStep = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'onChange',
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        dispatch(setBasicInfo(data));
        dispatch(setStep(2));
        navigate('/step2');
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Info</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor='name' className="block text-sm font-medium">Name</label>
                    <input
                        id='name'
                        type="text"
                        {...register('name')}
                        className="w-full mt-1 p-2 border rounded"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor='email' className="block text-sm font-medium">Email</label>
                    <input
                        id='email'
                        type="email"
                        {...register('email')}
                        className="w-full mt-1 p-2 border rounded"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                    disabled={!isValid}
                >
                    Next
                </button>
            </form>
        </div>
    );
};

export default BasicInfoStep;

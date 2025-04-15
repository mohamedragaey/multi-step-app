import BasicInfoStep from '@/pages/Step1';
import AdditionalInfoStep from '@/pages/Step2';
import ConfirmationStep from '@/pages/Step3';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const AppRoutes = () => {
    const formState = useSelector((state: RootState) => state.form);
    const location = useLocation();

    // Simple step guard logic
    const isStep1Complete = formState.basicInfo.name !== '' && formState.basicInfo.email !== '';
    const isStep2Complete = formState.additionalInfo.address !== '';

    return (
        <Routes location={location}>
            <Route path="/" element={<Navigate to="/step1" />} />
            <Route path="/step1" element={<BasicInfoStep />} />
            <Route
                path="/step2"
                element={isStep1Complete ? <AdditionalInfoStep /> : <Navigate to="/step1" />}
            />
            <Route
                path="/step3"
                element={isStep1Complete && isStep2Complete ? <ConfirmationStep /> : <Navigate to="/step1" />}
            />
            <Route path="*" element={<Navigate to="/step1" />} />
        </Routes>
    );
};

export default AppRoutes;

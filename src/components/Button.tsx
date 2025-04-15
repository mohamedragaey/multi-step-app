interface ButtonProps {
    label: string;
    disabled?: boolean;
    type: "submit" | "reset" | "button";
    variant: 'primary' | 'secondary' | 'success';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    // Mapping variants to class names
    const variantClasses = {
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-gray-300 text-gray-800',
        success: 'bg-green-600 text-white',
    };

    // Combining the base styles with the variant class and disabled styles
    const buttonClass = `${variantClasses[props.variant] || ''} px-12 py-1.5 rounded ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
        <button
            type={props.type}
            className={buttonClass}
            disabled={props.disabled}
            onClick={props.disabled ? undefined : props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;


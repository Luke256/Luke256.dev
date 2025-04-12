
type Props = {
    important?: boolean;
};

const CareerDot = ({ important }: Props) => {
    return (
        /* 中央に円環、その上下に線 */
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="0" x2="12" y2="9" stroke="#4B5563" strokeWidth="2" />
            <line x1="12" y1="15" x2="12" y2="26" stroke="#4B5563" strokeWidth="2" />
            {
                important ?
                    <circle cx="12" cy="12" r="4" stroke="#FBBF24" strokeWidth="1" fill="none" /> :
                    <circle cx="12" cy="12" r="3" stroke="#4B5563" strokeWidth="2" fill="none" />
            }
            {important &&
                <circle cx="12" cy="12" r="2" fill="#4B5563" />
            }
        </svg>
    )
}

export default CareerDot;
interface RedAsterictProps {
    active: boolean;
}

const RedAsterict: React.FC<RedAsterictProps> = ({ active }) => {
    if (active)
        return (
            <span className="text-red-500"> *</span>
        );
}

export default RedAsterict;
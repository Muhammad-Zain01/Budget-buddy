

type ComponentProps = {
    amount: string;
    size?: number;
    weight?: number;
}
const Amount: React.FC<ComponentProps> = ({ amount, size=15, weight=500 }) => {
    const currenySign = "$";
    return (
        <span style={{fontSize: size, fontWeight: weight}}>{currenySign}{amount}</span>
    )
}

export default Amount;
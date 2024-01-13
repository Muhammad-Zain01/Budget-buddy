import { AmountSpan } from "@/styles/global";


type ComponentProps = {
    amount: string;
}
const Amount: React.FC<ComponentProps> = ({ amount }) => {
    const currenySign = "$";
    return (
        <AmountSpan>{currenySign} {amount}</AmountSpan>
    )
}

export default Amount;
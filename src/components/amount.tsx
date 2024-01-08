import { AmountSpan } from "@/styles/global";


type ComponentProps = {
    amount: string;
}
const Amount: React.FC<ComponentProps> = ({ amount }) => {
    const currenySign = "PKR";
    return (
        <AmountSpan>{currenySign} {amount}</AmountSpan>
    )
}

export default Amount;
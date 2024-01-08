import TransactionCard from "@/components/transaction-card";
import { TransactionWrapper } from "@/styles/transaction";
export default function Transaction() {
  const data = [
    {
      icon: 'bank', title: "Bank", detail: 'Transfer Cash > UBL', amount: "-10000", date: '10-10-2021', description: 'My Description,My Description,v,My Description,My DescriptionMy DescriptionMy DescriptionMy DescriptionMy Description', 
      tags: [
        "Sales", "Expenses"
      ]
    },
    
    {
      icon: 'bank', title: "Bank", detail: 'Transfer Cash > UBL', amount: "-10000", date: '10-10-2021'
    },
  ]
  return (
    <>
      <TransactionWrapper>
        {data.map((item, index) => <TransactionCard key={index} data={item} />)}
      </TransactionWrapper>
    </>
  )
}


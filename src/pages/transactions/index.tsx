import AddTransactionModal from "@/components/add-transaction-modal";
import { Add } from "@/components/icon";
import TransactionCard from "@/components/transaction-card";
import { AddButton } from "@/styles/global";
import { TransactionWrapper } from "@/styles/transaction";
import { useState } from "react";
export default function Transaction() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <AddButton type='primary' icon={<Add size={18} />} onClick={() => setIsOpen(true)}>Add Transaction</AddButton>
      </div>
      <TransactionWrapper>
        {data.map((item, index) => <TransactionCard key={index} data={item} />)}
      </TransactionWrapper>
      <AddTransactionModal open={isOpen} setOpen={setIsOpen} />
    </>
  )
}


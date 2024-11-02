import React from 'react'
import Card from './Card'

export default function CardList() {
    const cardData = [
        {
          name: "CITI DOUBLE CASH® CARD",
          imageSrc: "https://online.citi.com/JRS/banners/modules/M1_M7_560x315.jpg", // Replace with the image URL if available
          altText: "CITI DOUBLE CASH® CARD",
          description:
            "Earn $200 cash back after spending $1,500 on purchases in the first 6 months of account opening. Plus, earn 2% cash back on every purchase: 1% when you buy and 1% as you pay.",
          linkText: "Pricing and Information",
        },
        {
          name: "Low Intro APR Plus No Annual Fee*",
          imageSrc: "https://online.citi.com/JRS/banners/modules/9475_Module_3UP_DP.jpg", // Replace with the image URL if available
          altText: "CITI DIAMOND PREFERRED®",
          description:
            "Our lowest Intro APR on Balance Transfers and Purchases until 2025 with Diamond Preferred®",
          linkText: "Pricing and Information",
        },
        {
          name: "Open. Deposit. Earn $325.",
          imageSrc: "https://online.citi.com/JRS/banners/modules/HP_11514_3UP.jpg", // Replace with the image URL if available
          altText: "CITI® CHECKING ACCOUNTS",
          description:
            "Earn a bonus when you open an eligible checking account with Enhanced Direct Deposits & required activities.",
          linkText: "Pricing and Information",
        },
      ];
    
  return (
    <div>
        <div className="grid -translate-y-10 wrapper grid-cols-3 gap-4">
            {cardData.map((card) => (
                <Card card={card}/>
            ))}
        </div>
       
    </div>
  )
}

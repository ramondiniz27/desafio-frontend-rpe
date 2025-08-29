import React from 'react';
import { SectionCard } from '../../components/SectionCard';
import {
  OfferCard,
  OfferCardContent,
  OfferCardFooter,
} from '../../components/OfferCard';
import { CreditCard } from '../../components/CreditCard';
import { PrimaryButton } from '../../components/Button';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col p-8 h-screen justify-center items-center">
      <SectionCard
        className="min-h-[500px] p-3"
        customId="section-card-test-id"
      >
        <OfferCard className="flex w-[300px] items-center">
          {
            <CreditCard
              nome="Joao das Coves"
              numero="123456789123"
              validade="10/2050"
            />
          }
          <OfferCardContent className="mt-3 ">
            <div className="flex flex-start flex-col gap-1">
              <div className=" w-full flex flex-row justify-between mt-3">
                <div className="font-semibold text-sm">Nome da Loja: </div>
                <div className="text-[14px]">Loja Venda Certa</div>
              </div>
              <div className=" w-full flex flex-row justify-between mt-3">
                <div className="font-semibold text-sm">Limite Máximo: </div>
                <div className="text-[14px]">R$2.000,00</div>
              </div>
              <div className=" w-full flex flex-row justify-between mt-3">
                <div className="font-semibold text-sm">Cobertura: </div>
                <div className="text-[14px]">Nacional</div>
              </div>
            </div>
          </OfferCardContent>
          <OfferCardFooter
            className="w-full flex mt-24"
            customId="offercard-footer-test-id"
          >
            <PrimaryButton
              label="Solicite o seu!!"
              onClick={() => console.log('enviado')}
            />
          </OfferCardFooter>
        </OfferCard>
      </SectionCard>
    </div>
  );
}

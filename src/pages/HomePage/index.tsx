/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { SectionCard } from '../../components/SectionCard';
import {
  OfferCard,
  OfferCardContent,
  OfferCardFooter,
} from '../../components/OfferCard';
import { CreditCard } from '../../components/CreditCard';
import { PrimaryButton } from '../../components/Button';
import { getCardData } from '../../services/CardService';
import { CardData } from '../../interfaces/CardData';

export default function HomePage() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCards();
  }, [loading]);

  const getCards = async () => {
    try {
      const response = await getCardData();
      setCards(response);
    } catch (error) {
      console.error('Failed to fetch cards:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col p-8 h-screen justify-center items-center">
      <SectionCard
        className="min-h-[500px] p-3 flex flex-row gap-4"
        customId="section-card-test-id"
      >
        <div className="flex w-full flex-row items-center justify-center">
          {cards &&
            cards.map((card, index) => (
              <OfferCard key={index} className="flex w-[300px] items-center">
                {
                  <CreditCard
                    nome={card.nome}
                    numero={card.numero}
                    validade={card.validade}
                  />
                }
                <OfferCardContent className="mt-3 ">
                  <div className="flex flex-start flex-col gap-1">
                    <div className=" w-full flex flex-row justify-between mt-3">
                      <div className="font-semibold text-sm">
                        Nome da Loja:{' '}
                      </div>
                      <div className="text-[14px]">{card.nomeLoja}</div>
                    </div>
                    <div className=" w-full flex flex-row justify-between mt-3">
                      <div className="font-semibold text-sm">
                        Limite Máximo:{' '}
                      </div>
                      <div className="text-[14px]">{`R$ ${card.limite}`}</div>
                    </div>
                    <div className=" w-full flex flex-row justify-between mt-3">
                      <div className="font-semibold text-sm">Cobertura: </div>
                      <div className="text-[14px]">{card.cobertura}</div>
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
            ))}
        </div>
      </SectionCard>
    </div>
  );
}

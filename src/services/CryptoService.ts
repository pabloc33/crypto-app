import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schema/cripto-schema";
import { Pair } from "../types/types";

export async function getCryptos() {
  const cryptoUrl = import.meta.env.VITE_API_URL;
  const url = `${cryptoUrl}/data/top/mktcapfull?limit=20&tsym=USD`;

  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const cryptoUrl = import.meta.env.VITE_API_URL;
  const url = `${cryptoUrl}/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);

  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.criptocurrency][pair.currency]
  );

  if (result.success) {
    return result.data;
  }
}

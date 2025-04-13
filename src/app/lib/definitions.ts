export type Stock = {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
};

export type News = {
  category: string,
  datetime: number,
  headline: string,
  id: number,
  image: string,
  related: string,
  source: string,
  summary: string,
  url: string
}

export type CompanyProfile = {
  country: string,
  currency: string,
  exchange: string,
  ipo: string,
  marketCapitalization: number,
  name: string,
  phone: string,
  shareOutstanding: number,
  ticker: string,
  weburl: string,
  logo: string,
  finnhubIndustry: string
}

export type Country = {
  code2: string,
  code3: string,
  codeNo: string,
  country: string,
  countryRiskPremium: number,
  currency: string,
  currencyCode: string,
  defaultSpread: number,
  equityRiskPremium: number,
  rating: string,
  region: string,
  subRegion: string
}
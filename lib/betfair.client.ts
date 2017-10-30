const superagent = require("superagent");
import * as BetfairEnum from "./betfair.enum";
export * from "./betfair.enum";
export { BetfairEnum };
const debug = require("debug")("betting-server:betfair");
const request = require("request-promise");

export type MarketType = string;
export type Venue = string;
export type MarketId = string;
export type SelectionId = number;
export type Handicap = number;
export type EventId = string;
export type EventTypeId = string;
export type CountryCode = string;
export type ExchangeId = string;
export type CompetitionId = string;
export type Price = number;
export type Size = number;
export type BetId = string;
export type MatchId = string;
export type CustomerOrderRef = string;
export type CustomerStrategyRef = string;

export interface MarketFilter {
  textQuery?: string;
  exchangeIds?: Array<String>;
  eventTypeIds?: Array<String>;
  eventIds?: Array<String>;
  competitionIds?: Array<String>;
  marketIds?: Array<String>;
  venues?: Array<String>;
  bspOnly?: boolean;
  turnInPlayEnabled?: boolean;
  inPlayOnly?: boolean;
  marketBettingTypes?: Array<BetfairEnum.MarketBettingType>;
  marketCountries?: Array<String>;
  marketTypeCodes?: Array<String>;
  marketStartTime?: TimeRange;
  withOrders?: Array<BetfairEnum.OrderStatus>;
}

export interface MarketCatalogue {
  marketId: string;
  marketName: string;
  marketStartTime?: Date;
  description?: MarketDescription;
  totalMatched?: number;
  runners?: Array<RunnerCatalog>;
  eventType?: EventType;
  competition?: Competition;
  event?: Event;
}

export interface MarketBook {
  marketId: string;
  isMarketDataDelayed: boolean;
  status?: BetfairEnum.MarketStatus;
  betDelay?: number;
  bspReconciled?: boolean;
  complete?: boolean;
  numberOfWinners?: number;
  numberOfRunners?: number;
  numberOfActiveRunners?: number;
  lastMatchTime?: Date;
  totalMatched?: number;
  totalAvailable?: number;
  crossMatching?: boolean;
  runnersVoidable?: boolean;
  version?: number;
  runners?: Array<Runner>;
  keyLineDescription?: KeyLineDescription;
}

export interface RunnerCatalog {
  selectionId: number;
  runnerName: string;
  handicap: number;
  sortPriority: number;
  metadata: Map<string, string>;
}

export interface Runner {
  selectionId: number;
  handicap: number;
  status: BetfairEnum.RunnerStatus;
  adjustmentFactor: number;
  lastPriceTraded?: number;
  totalMatched?: number;
  removalDate?: Date;
  sp?: StartingPrices;
  ex?: ExchangePrices;
  orders?: Array<Order>;
  matches?: Array<Match>;
}

export interface StartingPrices {
  nearPrice?: number;
  farPrice?: number;
  backStakeTaken?: Array<PriceSize>;
  layLiabilityTaken?: Array<PriceSize>;
  actualSP?: number;
}

export interface ExchangePrices {
  availableToBack?: Array<PriceSize>;
  availableToLay?: Array<PriceSize>;
  tradedVolume?: Array<PriceSize>;
}

export interface Event {
  id?: string;
  name?: string;
  countryCode?: string;
  timezone?: string;
  venue?: string;
  openDate?: Date;
}

export interface EventResult {
  event?: Event;
  marketCount?: number;
}

export interface Competition {
  id?: string;
  name?: string;
}

export interface CompetitionResult {
  competition?: Competition;
  marketCount?: number;
  competitionRegion?: string;
}

export interface EventType {
  id?: string;
  name?: string;
}

export interface EventTypeResult {
  eventType?: EventType;
  marketCount?: number;
}

export interface MarketTypeResult {
  marketType?: string;
  marketCount?: number;
}

export interface CountryCodeResult {
  countryCode?: string;
  marketCount?: number;
}

export interface VenueResult {
  venue?: string;
  marketCount?: number;
}

export interface TimeRange {
  from?: Date;
  to?: Date;
}

export interface TimeRangeResult {
  timeRange?: TimeRange;
  marketCount?: number;
}

export interface Order {
  betId: string;
  orderType: BetfairEnum.OrderStatus;
  status: BetfairEnum.OrderStatus;
  persistenceType: BetfairEnum.PersistenceType;
  side: BetfairEnum.Side;
  price: number;
  size: number;
  bspLiability: number;
  placedDate: Date;
  avgPriceMatched?: number;
  sizeMatched?: number;
  sizeRemaining?: number;
  sizeLapsed?: number;
  sizeCancelled?: number;
  sizeVoided?: number;
  customerOrderRef?: CustomerOrderRef;
  customerStrategyRef?: CustomerStrategyRef;
}

export interface Match {
  betId?: string;
  matchId?: string;
  side: BetfairEnum.Side;
  price: number;
  size: number;
  matchDate?: Date;
}

export interface MarketVersion {
  version?: number;
}

export interface MarketDescription {
  persistenceEnabled: boolean;
  bspMarket: boolean;
  marketTime: Date;
  suspendTime: Date;
  settleTime?: Date;
  bettingType: BetfairEnum.MarketBettingType;
  turnInPlayEnabled: boolean;
  marketType: string;
  regulator: string;
  marketBaseRate: number;
  discountAllowed: boolean;
  wallet?: string;
  rules?: string;
  rulesHasDate?: boolean;
  eachWayDivisor?: number;
  clarifications?: string;
  lineRangeInfo?: MarketLineRangeInfo;
  priceLadderDescription?: PriceLadderDescription;
}

export interface MarketRates {
  marketBaseRate: number;
  discountAllowed: number;
}

export interface MarketLicence {
  wallet: string;
  rules?: string;
  rulesHasDate?: boolean;
  clarifications: string;
}

export interface MarketLineRangeInfo {
  maxUnitValue: number;
  minUnitValue: number;
  interval: number;
  marketUnit: string;
}

export interface PriceSize {
  price: number;
  size: number;
}

export interface ClearedOrderSummary {
  eventTypeId?: EventTypeId;
  eventId?: EventId;
  marketId?: MarketId;
  selectionId?: SelectionId;
  handicap?: Handicap;
  betId?: BetId;
  placedDate?: Date;
  persistenceType?: BetfairEnum.PersistenceType;
  orderType?: BetfairEnum.OrderType;
  side?: BetfairEnum.Side;
  itemDescription?: ItemDescription;
  betOutcome?: string;
  priceRequested?: Price;
  settledDate?: Date;
  lastMatchedDate?: Date;
  betCount?: number;
  commission?: Size;
  priceMatched?: Price;
  priceReduced?: boolean;
  sizeSettled?: Size;
  profit?: Size;
  sizeCancelled?: Size;
  customerOrderRef?: string;
  customerStrategyRef?: string;
}

export interface ClearedOrderSummaryReport {
  clearedOrders: Array<ClearedOrderSummary>;
  moreAvailable: boolean;
}

export interface ItemDescription {
  eventTypeDesc?: string;
  eventDesc?: string;
  marketDesc?: string;
  marketType?: string;
  marketStartTime?: Date;
  runnerDesc?: string;
  numberOfWinners?: number;
  eachWayDivisor?: number;
}

export interface RunnerId {
  marketId?: MarketId;
  selectionId?: SelectionId;
  handicap?: Handicap;
}

export interface CurrentOrderSummaryReport {
  currentOrders: Array<CurrentOrderSummary>;
  moreAvailable: boolean;
}

export interface CurrentOrderSummary {
  betId: string;
  marketId: string;
  selectionId: number;
  handicap: number;
  priceSize: PriceSize;
  bspLiability: number;
  side: BetfairEnum.Side;
  status: BetfairEnum.OrderStatus;
  persistenceType: BetfairEnum.PersistenceType;
  orderType: BetfairEnum.OrderType;
  placedDate: Date;
  matchedDate: Date;
  averagePriceMatched?: boolean;
  sizeMatched?: number;
  sizeRemaining?: number;
  sizeLapsed?: number;
  sizeCancelled?: number;
  sizeVoided?: number;
  regulatorAuthCode?: string;
  regulatorCode?: string;
  customerOrderRef?: string;
  customerStrategyRef?: string;
}

export interface PlaceInstruction {
  orderType: BetfairEnum.OrderType;
  selectionId: number;
  handicap?: number;
  side: BetfairEnum.Side;
  limitOrder?: LimitOrder;
  limitOnCloseOrder?: LimitOnCloseOrder;
  marketOnCloseOrder?: MarketOnCloseOrder;
  customerOrderRef?: string;
}

export interface PlaceExecutionReport {
  customerRef?: string;
  status: BetfairEnum.ExecutionReportStatus;
  errorCode?: BetfairEnum.ExecutionReportErrorCode;
  marketId?: string;
  instructionReports?: Array<PlaceInstructionReport>;
}

export interface LimitOrder {
  size: number;
  price: number;
  persistenceType: BetfairEnum.PersistenceType;
  timeInForce?: BetfairEnum.TimeInForce;
  minFillSize?: Size;
  betTargetType?: BetfairEnum.BetTargetType;
  betTargetSize?: Size;
}

export interface LimitOnCloseOrder {
  liability: number;
  price: number;
}

export interface MarketOnCloseOrder {
  liability: number;
}

export interface PlaceInstructionReport {
  status: BetfairEnum.InstructionReportStatus;
  errorCode?: BetfairEnum.InstructionReportErrorCode;
  orderStatus?: BetfairEnum.OrderStatus;
  instruction: PlaceInstruction;
  betId?: string;
  placedDate?: Date;
  averagePriceMatched?: Price;
  sizeMatched?: Size;
}

export interface CancelInstruction {
  betId: string;
  sizeReduction?: string;
}

export interface CancelExecutionReport {
  customerRef?: string;
  status: BetfairEnum.ExecutionReportStatus;
  errorCode?: BetfairEnum.ExecutionReportErrorCode;
  marketId?: string;
  instructionReports?: Array<CancelInstructionReport>;
}

export interface ReplaceInstruction {
  betId: string;
  newPrice: number;
}

export interface ReplaceExecutionReport {
  customerRef?: string;
  status: BetfairEnum.ExecutionReportStatus;
  errorCode?: BetfairEnum.ExecutionReportErrorCode;
  marketId?: string;
  instructionReports?: Array<ReplaceInstructionReport>;
}

export interface ReplaceInstructionReport {
  status: BetfairEnum.InstructionReportStatus;
  errorCode?: BetfairEnum.InstructionReportErrorCode;
  cancelInstructionReport?: CancelInstructionReport;
  placeInstructionReport?: PlaceInstructionReport;
}

export interface CancelInstructionReport {
  status: BetfairEnum.InstructionReportStatus;
  errorCode?: BetfairEnum.InstructionReportErrorCode;
  instruction?: CancelInstruction;
  sizeCancelled: number;
  cancelledDate?: Date;
}

export interface UpdateInstruction {
  betId: string;
  newPersistenceType: BetfairEnum.PersistenceType;
}

export interface UpdateExecutionReport {
  customerRef?: string;
  status: BetfairEnum.ExecutionReportStatus;
  errorCode?: BetfairEnum.ExecutionReportErrorCode;
  marketId?: string;
  instructionReports?: Array<UpdateInstructionReport>;
}

export interface UpdateInstructionReport {
  status: BetfairEnum.InstructionReportStatus;
  errorCode?: BetfairEnum.InstructionReportErrorCode;
  instruction: UpdateInstruction;
}

export interface PriceProjection {
  priceData?: Array<BetfairEnum.PriceData>;
  exBestOffersOverrides?: ExBestOffersOverrides;
  virtualise?: boolean;
  rolloverStakes?: boolean;
}

export interface ExBestOffersOverrides {
  bestPricesDepth?: Number;
  rollupModel?: BetfairEnum.RollupModel;
  rollupLimit?: Number;
  rollupLiabilityThreshold?: Number;
  rollupLiabilityFactor?: Number;
}

export interface MarketProfitAndLoss {
  marketId?: string;
  commissionApplied?: number;
  profitAndLosses?: Array<RunnerProfitAndLoss>;
}

export interface RunnerProfitAndLoss {
  selectionId?: SelectionId;
  ifWin?: number;
  ifLose?: number;
  ifPlace?: number;
}

export interface PriceLadderDescription {
  type?: BetfairEnum.PriceLadderType;
}

export interface KeyLineSelection {
  selectionId?: SelectionId;
  handicap?: Handicap;
}

export interface KeyLineDescription {
  keyLine?: Array<KeyLineSelection>;
}

export interface MarketBookParam {
  marketIds: Array<String>;
  priceProjection?: PriceProjection;
  orderProjection?: BetfairEnum.OrderProjection;
  matchProjection?: BetfairEnum.MatchProjection;
  includeOverallPosition?: boolean;
  partitionMatchedByStrategyRef?: boolean;
  customerStrategyRefs?: Array<String>;
  currencyCode?: String;
  locale?: String;
  matchedSince?: Date;
  betIds?: Array<String>;
}

export interface EventFilter {
  eventTypeIds: Array<String>;
}

export interface MarketCatalogueFilter {
  eventIds: Array<String>;
}

export class Betfair {
  public appKey: string;
  public sessionKey: string;
  headers: object;
  constructor(appKey: string) {
    this.appKey = appKey;
  }

  getBetfairHttp(url: string) {
    return superagent
      .post(url)
      .set("Accept", "application/json")
      .set("X-Authentication", this.sessionKey)
      .set("X-Application", this.appKey);
  }

  keepAlive() {
    return this.getBetfairHttp(
      "https://identitysso.betfair.com/api/keepAlive"
    ).send();
  }

  public async login(username: string, password: string) {
    this.username = username;
    this.password = password;
    const res = await request.post(
      "https://identitysso.betfair.com/api/login",
      {
        headers: {
          "X-Application": "Y3BriwvLob4aN4Jb",
          Accept: "application/json"
        },
        form: {
          username,
          password
        }
      }
    );
    debug("betfair login response", res);
    const jsonRes = JSON.parse(res);
    if (jsonRes.status != "SUCCESS") {
      throw new Error(JSON.parse(res).error);
    }
    debug(jsonRes);
    this.sessionKey = jsonRes.token;
    if (this.doIntervalFetch) {
      this.intervalFetch();
    }
    if (this.doKeepAlive) {
      await this.keepAlive();
    }
    return jsonRes;
  }

  public async listEventTypes(params: {
    filter: MarketFilter;
    Stringlocale?: string;
  }): Promise<Array<EventTypeResult>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listEventTypes/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }

  public async listCompetitions(params: {
    filter: MarketFilter;
    Stringlocale?: string;
  }): Promise<Array<CompetitionResult>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listCompetitions/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }

  public async listTimeRanges(params: {
    filter: MarketFilter;
    granularity: BetfairEnum.TimeGranularity;
  }): Promise<Array<TimeRangeResult>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listTimeRanges/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async listEvents(params: {
    filter: MarketFilter;
    Stringlocale?: string;
  }): Promise<Array<EventResult>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listEvents/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async listMarketTypes(params: {
    filter: MarketFilter;
    Stringlocale: string;
  }): Promise<MarketTypeResult> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listMarketTypes/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async listCountries(params: {
    filter: MarketFilter;
    Stringlocale?: string;
  }): Promise<Array<CountryCodeResult>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listCountries/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async listVenues(params: {
    filter: MarketFilter;
    Stringlocale?: string;
  }): Promise<Array<VenueResult>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listVenues/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async listMarketCatalogue(params: {
    filter: MarketFilter;
    maxResults: number;
    marketProjection?: Array<BetfairEnum.MarketProjection>;
    sort?: BetfairEnum.MarketSort;
    Stringlocale?: string;
  }): Promise<Array<MarketCatalogue>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listMarketCatalogue/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }

  public async listMarketBook(params: {
    marketIds: Array<string>;
    priceProjection?: PriceProjection;
    orderProjection?: BetfairEnum.OrderProjection;
    matchProjection?: BetfairEnum.MatchProjection;
    marketProjection?: [BetfairEnum.MarketProjection];
    includeOverallPosition?: boolean;
    partitionMatchedByStrategyRef?: boolean;
    customerStrategyRefs?: Array<string>;
    currencyCode?: string;
    locale?: string;
    matchedSince?: Date;
    betIds?: Array<BetId>;
  }): Promise<Array<MarketBook>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listMarketBook/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async listRunnerBook(params: {
    marketId: MarketId;
    selectionId: SelectionId;
    handicap?: number;
    priceProjection?: PriceProjection;
    orderProjection?: BetfairEnum.OrderProjection;
    matchProjection?: BetfairEnum.MatchProjection;
    includeOverallPosition?: boolean;
    partitionMatchedByStrategyRef?: boolean;
    customerStrategyRefs?: Array<string>;
    currencyCode?: string;
    locale?: string;
    matchedSince?: Date;
    betIds?: Array<BetId>;
  }): Promise<Array<MarketBook>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listRunnerBook/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }

  public async listMarketProfitAndLoss(params: {
    marketIds?: Array<MarketId>;
    includeSettledBets?: boolean;
    includeBspBets?: boolean;
    netOfCommission?: boolean;
  }): Promise<MarketProfitAndLoss> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listMarketProfitAndLoss/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async listCurrentOrders(params: {
    betIds?: Array<string>;
    marketIds?: Array<string>;
    orderProjection?: BetfairEnum.OrderProjection;
    customerOrderRefs?: Array<CustomerOrderRef>;
    customerStrategyRefs?: Array<CustomerStrategyRef>;
    dateRange?: TimeRange;
    orderBy?: BetfairEnum.OrderBy;
    sortDir?: BetfairEnum.SortDir;
    fromRecord?: number;
    recordCount?: number;
  }): Promise<Array<CurrentOrderSummaryReport>> {
    const betfairHttpClient = this.getBetfairHttp(
      "https://api.betfair.com/exchange/betting/rest/v1.0/listMarketProfitAndLoss/"
    );
    const res = await betfairHttpClient.send({ ...params });
    return res.body;
  }
  public async intervalFetch() {
    try {
      debug("session key", this.sessionKey);
      debug("app key", this.appKey);
      const data = await this.listEventTypes({ filter: {} });
    } catch (error) {
      debug((await this.login(this.username, this.password)).body);
      debug(error);
    }
  }
  public intervalFetchTime = 1000;
  public doIntervalFetch = true;
  public doKeepAlive = true;
  private username: string;
  private password: string;
}

const betfair = new Betfair("");

export default betfair;

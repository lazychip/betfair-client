"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarketProjection;
(function (MarketProjection) {
    MarketProjection["COMPETITION"] = "COMPETITION";
    MarketProjection["EVENT"] = "EVENT";
    MarketProjection["EVENT_TYPE"] = "EVENT_TYPE";
    MarketProjection["MARKET_START_TIME"] = "MARKET_START_TIME";
    MarketProjection["MARKET_DESCRIPTION"] = "MARKET_DESCRIPTION";
    MarketProjection["RUNNER_DESCRIPTION"] = "RUNNER_DESCRIPTION";
    MarketProjection["RUNNER_METADATA"] = "RUNNER_METADATA";
})(MarketProjection = exports.MarketProjection || (exports.MarketProjection = {}));
var PriceData;
(function (PriceData) {
    PriceData["SP_AVAILABLE"] = "SP_AVAILABLE";
    PriceData["SP_TRADED"] = "SP_TRADED";
    PriceData["EX_BEST_OFFERS"] = "EX_BEST_OFFERS";
    PriceData["EX_ALL_OFFERS"] = "EX_ALL_OFFERS";
    PriceData["EX_TRADED"] = "EX_TRADED";
})(PriceData = exports.PriceData || (exports.PriceData = {}));
var MatchProjection;
(function (MatchProjection) {
    MatchProjection["NO_ROLLUP"] = "NO_ROLLUP";
    MatchProjection["ROLLED_UP_BY_PRICE"] = "ROLLED_UP_BY_PRICE";
    MatchProjection["ROLLED_UP_BY_AVG_PRICE"] = "ROLLED_UP_BY_AVG_PRICE";
})(MatchProjection = exports.MatchProjection || (exports.MatchProjection = {}));
var OrderProjection;
(function (OrderProjection) {
    OrderProjection["ALL"] = "ALL";
    OrderProjection["EXECUTABLE"] = "EXECUTABLE";
    OrderProjection["EXECUTION_COMPLETE"] = "EXECUTION_COMPLETE";
})(OrderProjection = exports.OrderProjection || (exports.OrderProjection = {}));
var MarketStatus;
(function (MarketStatus) {
    MarketStatus["INACTIVE"] = "INACTIVE";
    MarketStatus["OPEN"] = "OPEN";
    MarketStatus["SUSPENDED"] = "SUSPENDED";
    MarketStatus["CLOSED"] = "CLOSED";
})(MarketStatus = exports.MarketStatus || (exports.MarketStatus = {}));
var RunnerStatus;
(function (RunnerStatus) {
    RunnerStatus["ACTIVE"] = "ACTIVE";
    RunnerStatus["WINNER"] = "WINNER";
    RunnerStatus["LOSER"] = "LOSER";
    RunnerStatus["PLACED"] = "PLACED";
    RunnerStatus["REMOVED_VACANT"] = "REMOVED_VACANT";
    RunnerStatus["REMOVED"] = "REMOVED";
    RunnerStatus["HIDDEN"] = "HIDDEN";
})(RunnerStatus = exports.RunnerStatus || (exports.RunnerStatus = {}));
var TimeGranularity;
(function (TimeGranularity) {
    TimeGranularity["DAYS"] = "DAYS";
    TimeGranularity["HOURS"] = "HOURS";
    TimeGranularity["MINUTES"] = "MINUTES";
})(TimeGranularity = exports.TimeGranularity || (exports.TimeGranularity = {}));
var Side;
(function (Side) {
    Side["BACK"] = "BACK";
    Side["LAY"] = "LAY";
})(Side = exports.Side || (exports.Side = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["EXECUTION_COMPLETE"] = "EXECUTION_COMPLETE";
    OrderStatus["EXECUTABLE"] = "EXECUTABLE";
    OrderStatus["EXPIRED"] = "EXPIRED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var OrderBy;
(function (OrderBy) {
    OrderBy["BY_BET"] = "BY_BET";
    OrderBy["BY_MARKET"] = "BY_MARKET";
    OrderBy["BY_MATCH_TIME"] = "BY_MATCH_TIME";
    OrderBy["BY_PLACE_TIME"] = "BY_PLACE_TIME";
    OrderBy["BY_SETTLED_TIME"] = "BY_SETTLED_TIME";
    OrderBy["BY_VOID_TIME"] = "BY_VOID_TIME";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
var SortDir;
(function (SortDir) {
    SortDir["EARLIEST_TO_LATEST"] = "EARLIEST_TO_LATEST";
    SortDir["LATEST_TO_EARLIEST"] = "LATEST_TO_EARLIEST";
})(SortDir = exports.SortDir || (exports.SortDir = {}));
var OrderType;
(function (OrderType) {
    OrderType["LIMIT"] = "LIMIT";
    OrderType["LIMIT_ON_CLOSE"] = "LIMIT_ON_CLOSE";
    OrderType["MARKET_ON_CLOSE"] = "MARKET_ON_CLOSE";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var MarketSort;
(function (MarketSort) {
    MarketSort["MINIMUM_TRADED"] = "MINIMUM_TRADED";
    MarketSort["MAXIMUM_TRADED"] = "MAXIMUM_TRADED";
    MarketSort["MINIMUM_AVAILABLE"] = "MINIMUM_AVAILABLE";
    MarketSort["MAXIMUM_AVAILABLE"] = "MAXIMUM_AVAILABLE";
    MarketSort["FIRST_TO_START"] = "FIRST_TO_START";
    MarketSort["LAST_TO_START"] = "LAST_TO_START";
})(MarketSort = exports.MarketSort || (exports.MarketSort = {}));
var MarketBettingType;
(function (MarketBettingType) {
    MarketBettingType["ODDS"] = "ODDS";
    MarketBettingType["LINE"] = "LINE";
    MarketBettingType["RANGE"] = "RANGE";
    MarketBettingType["ASIAN_HANDICAP_DOUBLE_LINE"] = "ASIAN_HANDICAP_DOUBLE_LINE";
    MarketBettingType["ASIAN_HANDICAP_SINGLE_LINE"] = "ASIAN_HANDICAP_SINGLE_LINE";
    MarketBettingType["FIXED_ODDS"] = "FIXED_ODDS";
})(MarketBettingType = exports.MarketBettingType || (exports.MarketBettingType = {}));
var ExecutionReportStatus;
(function (ExecutionReportStatus) {
    ExecutionReportStatus["SUCCESS"] = "SUCCESS";
    ExecutionReportStatus["FAILURE"] = "FAILURE";
    ExecutionReportStatus["PROCESSED_WITH_ERRORS"] = "PROCESSED_WITH_ERRORS";
    ExecutionReportStatus["TIMEOUT"] = "TIMEOUT";
})(ExecutionReportStatus = exports.ExecutionReportStatus || (exports.ExecutionReportStatus = {}));
var ExecutionReportErrorCode;
(function (ExecutionReportErrorCode) {
    ExecutionReportErrorCode["ERROR_IN_MATCHER"] = "ERROR_IN_MATCHER";
    ExecutionReportErrorCode["PROCESSED_WITH_ERRORS"] = "PROCESSED_WITH_ERRORS";
    ExecutionReportErrorCode["BET_ACTION_ERROR"] = "BET_ACTION_ERROR";
    ExecutionReportErrorCode["INVALID_ACCOUNT_STATE"] = "INVALID_ACCOUNT_STATE";
    ExecutionReportErrorCode["INVALID_WALLET_STATUS"] = "INVALID_WALLET_STATUS";
    ExecutionReportErrorCode["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    ExecutionReportErrorCode["LOSS_LIMIT_EXCEEDED"] = "LOSS_LIMIT_EXCEEDED";
    ExecutionReportErrorCode["MARKET_SUSPENDED"] = "MARKET_SUSPENDED";
    ExecutionReportErrorCode["MARKET_NOT_OPEN_FOR_BETTING"] = "MARKET_NOT_OPEN_FOR_BETTING";
    ExecutionReportErrorCode["DUPLICATE_TRANSACTION"] = "DUPLICATE_TRANSACTION";
    ExecutionReportErrorCode["INVALID_ORDER"] = "INVALID_ORDER";
    ExecutionReportErrorCode["INVALID_MARKET_ID"] = "INVALID_MARKET_ID";
    ExecutionReportErrorCode["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    ExecutionReportErrorCode["DUPLICATE_BETIDS"] = "DUPLICATE_BETIDS";
    ExecutionReportErrorCode["NO_ACTION_REQUIRED"] = "NO_ACTION_REQUIRED";
    ExecutionReportErrorCode["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    ExecutionReportErrorCode["REJECTED_BY_REGULATOR"] = "REJECTED_BY_REGULATOR";
    ExecutionReportErrorCode["NO_CHASING"] = "NO_CHASING";
    ExecutionReportErrorCode["REGULATOR_IS_NOT_AVAILABLE"] = "REGULATOR_IS_NOT_AVAILABLE";
    ExecutionReportErrorCode["TOO_MANY_INSTRUCTIONS"] = "TOO_MANY_INSTRUCTIONS";
    ExecutionReportErrorCode["INVALID_MARKET_VERSION"] = "INVALID_MARKET_VERSION";
})(ExecutionReportErrorCode = exports.ExecutionReportErrorCode || (exports.ExecutionReportErrorCode = {}));
var PersistenceType;
(function (PersistenceType) {
    PersistenceType["LAPSE"] = "LAPSE";
    PersistenceType["PERSIST"] = "PERSIST";
    PersistenceType["MARKET_ON_CLOSE"] = "MARKET_ON_CLOSE";
})(PersistenceType = exports.PersistenceType || (exports.PersistenceType = {}));
var InstructionReportStatus;
(function (InstructionReportStatus) {
    InstructionReportStatus["SUCCESS"] = "SUCCESS";
    InstructionReportStatus["FAILURE"] = "FAILURE";
    InstructionReportStatus["TIMEOUT"] = "TIMEOUT";
})(InstructionReportStatus = exports.InstructionReportStatus || (exports.InstructionReportStatus = {}));
var InstructionReportErrorCode;
(function (InstructionReportErrorCode) {
    InstructionReportErrorCode["INVALID_BET_SIZE"] = "INVALID_BET_SIZE";
    InstructionReportErrorCode["INVALID_RUNNER"] = "INVALID_RUNNER";
    InstructionReportErrorCode["BET_TAKEN_OR_LAPSED"] = "BET_TAKEN_OR_LAPSED";
    InstructionReportErrorCode["BET_IN_PROGRESS"] = "BET_IN_PROGRESS";
    InstructionReportErrorCode["RUNNER_REMOVED"] = "RUNNER_REMOVED";
    InstructionReportErrorCode["MARKET_NOT_OPEN_FOR_BETTING"] = "MARKET_NOT_OPEN_FOR_BETTING";
    InstructionReportErrorCode["LOSS_LIMIT_EXCEEDED"] = "LOSS_LIMIT_EXCEEDED";
    InstructionReportErrorCode["MARKET_NOT_OPEN_FOR_BSP_BETTING"] = "MARKET_NOT_OPEN_FOR_BSP_BETTING";
    InstructionReportErrorCode["INVALID_PRICE_EDIT"] = "INVALID_PRICE_EDIT";
    InstructionReportErrorCode["INVALID_ODDS"] = "INVALID_ODDS";
    InstructionReportErrorCode["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    InstructionReportErrorCode["INVALID_PERSISTENCE_TYPE"] = "INVALID_PERSISTENCE_TYPE";
    InstructionReportErrorCode["ERROR_IN_MATCHER"] = "ERROR_IN_MATCHER";
    InstructionReportErrorCode["INVALID_BACK_LAY_COMBINATION"] = "INVALID_BACK_LAY_COMBINATION";
    InstructionReportErrorCode["ERROR_IN_ORDER"] = "ERROR_IN_ORDER";
    InstructionReportErrorCode["INVALID_BID_TYPE"] = "INVALID_BID_TYPE";
    InstructionReportErrorCode["INVALID_BET_ID"] = "INVALID_BET_ID";
    InstructionReportErrorCode["CANCELLED_NOT_PLACED"] = "CANCELLED_NOT_PLACED";
    InstructionReportErrorCode["RELATED_ACTION_FAILED"] = "RELATED_ACTION_FAILED";
    InstructionReportErrorCode["NO_ACTION_REQUIRED"] = "NO_ACTION_REQUIRED";
    InstructionReportErrorCode["TIME_IN_FORCE_CONFLICT"] = "TIME_IN_FORCE_CONFLICT";
    InstructionReportErrorCode["UNEXPECTED_PERSISTENCE_TYPE"] = "UNEXPECTED_PERSISTENCE_TYPE";
    InstructionReportErrorCode["INVALID_ORDER_TYPE"] = "INVALID_ORDER_TYPE";
    InstructionReportErrorCode["UNEXPECTED_MIN_FILL_SIZE"] = "UNEXPECTED_MIN_FILL_SIZE";
    InstructionReportErrorCode["INVALID_CUSTOMER_ORDER_REF"] = "INVALID_CUSTOMER_ORDER_REF";
    InstructionReportErrorCode["INVALID_MIN_FILL_SIZE"] = "INVALID_MIN_FILL_SIZE";
})(InstructionReportErrorCode = exports.InstructionReportErrorCode || (exports.InstructionReportErrorCode = {}));
var RollupModel;
(function (RollupModel) {
    RollupModel["STAKE"] = "STAKE";
    RollupModel["PAYOUT"] = "PAYOUT";
    RollupModel["MANAGED_LIABILITY"] = "MANAGED_LIABILITY";
    RollupModel["NONE"] = "NONE";
})(RollupModel = exports.RollupModel || (exports.RollupModel = {}));
var GroupBy;
(function (GroupBy) {
    GroupBy["EVENT_TYPE"] = "EVENT_TYPE";
    GroupBy["EVENT"] = "EVENT";
    GroupBy["MARKET"] = "MARKET";
    GroupBy["SIDE"] = "SIDE";
    GroupBy["BET"] = "BET";
})(GroupBy = exports.GroupBy || (exports.GroupBy = {}));
var BetStatus;
(function (BetStatus) {
    BetStatus["SETTLED"] = "SETTLED";
    BetStatus["VOIDED"] = "VOIDED";
    BetStatus["LAPSED"] = "LAPSED";
    BetStatus["CANCELLED"] = "CANCELLED";
})(BetStatus = exports.BetStatus || (exports.BetStatus = {}));
var marketType;
(function (marketType) {
    marketType["A"] = "A";
    marketType["L"] = "L";
    marketType["O"] = "O";
    marketType["R"] = "R";
    marketType["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(marketType = exports.marketType || (exports.marketType = {}));
var TimeInForce;
(function (TimeInForce) {
    TimeInForce["FILL_OR_KILL"] = "FILL_OR_KILL";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
var BetTargetType;
(function (BetTargetType) {
    BetTargetType["BACKERS_PROFIT"] = "BACKERS_PROFIT";
    BetTargetType["PAYOUT"] = "PAYOUT";
})(BetTargetType = exports.BetTargetType || (exports.BetTargetType = {}));
var PriceLadderType;
(function (PriceLadderType) {
    PriceLadderType["CLASSIC"] = "CLASSIC";
    PriceLadderType["FINEST"] = "FINEST";
    PriceLadderType["LINE_RANGE"] = "LINE_RANGE";
})(PriceLadderType = exports.PriceLadderType || (exports.PriceLadderType = {}));

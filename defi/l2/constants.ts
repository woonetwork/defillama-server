import { Chain } from "@defillama/sdk/build/general";
import BigNumber from "bignumber.js";
import { ChainData } from "./types";
import cgSymbols from "../src/utils/symbols/symbols.json";

export const zero = BigNumber(0);
export const excludedTvlKeys = ["PK", "SK", "tvl"];
export const excludedTvlId = "5897";

export const geckoSymbols = cgSymbols as { [key: string]: string };

export const chainsWithoutCanonicalBridges: string[] = [
  "cronos",
  "kava",
  "bsc",
  "tron",
  "ethereum",
  "solana",
  // "sui",
  "aptos",
  // "stacks",
  "bitcoin",
  // "fantom",
  // "filecoin",
  // "near",
  // "aurora",
  "berachain",
];

export const canonicalBridgeIds: { [id: string]: Chain } = {
  "129": "xdai",
  "240": "polygon",
  // "295": "Stacks",
  "412": "thorchain",
  "349": "injective",
  // "801": "celo",
  "1272": "iotex",
  // "1501": "everscale",
  // "2081": "wanchain",
  // "2214": "kekchain",
  "2316": "meter",
  "3699": "elysium",
  "3777": "arbitrum",
  "3778": "nova",
  "3779": "avax",
  "3780": "base",
  "3781": "linea",
  "3782": "mantle",
  "3783": "metis",
  "3784": "optimism",
  "3785": "polygon_zkevm",
  "3786": "scroll",
  "3787": "starknet",
  "3788": "era",
  "3813": "alephium",
  "3861": "rsk",
  // "3866": "near",
  // "3866": "aurora",
  "3935": "boba",
  "3936": "zksync",
  "4032": "manta",
  "4141": "BSquared",
  "4236": "blast",
  "4237": "mode",
  "4335": "zklink",
  "4336": "kinto",
  "4384": "rss3_vsl",
  "4438": "degen",
  "4439": "pulsechain",
  "4440": "ronin",
  "4690": "lorenzo",
  "4692": "taiko",
  "4558": "BOB",
  "4796": "sanko",
  "4797": "xai",
  "4124": "merlin",
  "4937": "reya",
  // "5011": "lisk l2",
  "5055": "osmosis",
  "5011": "lisk",
  "5232": "sui",
  "5218": "mint",
  "5248": "fuel",
  "5303": "morph",
  "4481": "hyperliquid",
  "5375": "zircuit",
  "5382": "core",
  "5461": "apechain",
  "5513": "ink",
  "5538": "swellchain",
  "5552": "cronos_zkevm",
  "5564": "eclipse",
  "5565": "shape",
  "5566": "zora",
  "5609": "sophon",
  "5624": "soneium",
  "5683": "sonic",
  "5691": "abstract",
  "5692": "ancient8",
  "5693": "cyber",
  "5694": "fraxtal",
  "5695": "gravity",
  "5696": "karak",
  "5697": "kroma",
  "5698": "orderly",
  "5699": "rari",
  "5700": "redstone",
  "5701": "wc",
  "5702": "zero_network",
  // "5703": "zkfair",
  "5732": "sxr",
  "5735": "sorare",
  "5772": "unichain",
  "5833": "formnetwork",
  "5854": "hemi-l2",
};

export const protocolBridgeIds: { [chain: string]: Chain } = {
  "144": "dydx",
  "3139": "immutablex",
  "126": "loopring",
  "1878": "apex",
  "344": "zkswap",
  "5130": "polynomial",
  "5323": "exSat",
  "4947": "ignition-fbtc",
  "4702": "immutable zkevm",
};

export const allChainKeys: string[] = [
  ...chainsWithoutCanonicalBridges,
  ...Object.values(canonicalBridgeIds),
  ...Object.values(protocolBridgeIds),
];

export const tokenFlowCategories: (keyof ChainData)[] = ["outgoing", "canonical", "incoming", "native"];

export const ownTokens: { [chain: Chain]: { ticker: string; address: string } } = {
  "bitcoin": { ticker: "BTC", address: "coingecko:bitcoin" },
  "ethereum": { ticker: "ETH", address: "coingecko:ethereum" },
  "mantle": { ticker: "MNT", address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8" },
  "arbitrum": { ticker: "ARB", address: "0x912ce59144191c1204e64559fe8253a0e49e6548" },
  "nova": { ticker: "ARB", address: "0xf823c3cd3cebe0a1fa952ba88dc9eef8e0bf46ad" },
  "optimism": { ticker: "OP", address: "0x4200000000000000000000000000000000000042" },
  "polygon_zkevm": { ticker: "MATIC", address: "0xa2036f0538221a77a3937f1379699f44945018d0" },
  "starknet": { ticker: "STRK", address: "0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d" },
  "everscale": { ticker: "EVER", address: "coingecko:everscale" },
  "celo": { ticker: "CELO", address: "coingecko:celo" },
  "iotex": { ticker: "IOTX", address: "coingecko:iotex" },
  "wanchain": { ticker: "WAN", address: "coingecko:wanchain" },
  "xdai": { ticker: "GNO", address: "0x9c58bacc331c9aa871afd802db6379a98e80cedb" },
  "polygon": { ticker: "MATIC", address: "0x0000000000000000000000000000000000001010" },
  "avax": { ticker: "AVAX", address: "coingecko:avalanche-2" },
  "aurora": { ticker: "AURORA", address: "0x8bec47865ade3b172a928df8f990bc7f2a3b9f79" },
  "loopring": { ticker: "LRC", address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd" },
  "immutablex": { ticker: "IMX", address: "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff" },
  "immutable zkevm": { ticker: "IMX", address: "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff" },
  "metis": { ticker: "METIS", address: "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000" },
  "meter": { ticker: "MTRG", address: "coingecko:meter" },
  "boba": { ticker: "BOBA", address: "0xa18bf3994c0cc6e3b63ac420308e5383f53120d7" },
  "solana": { ticker: "SOL", address: "coingecko:solana" },
  "manta": { ticker: "MANTA", address: "0x95cef13441be50d20ca4558cc0a27b601ac544e5" },
  "zklink": { ticker: "ZKL", address: "coingecko:zklink" },
  "rss3_vsl": { ticker: "RSS3", address: "rss3" },
  "blast": { ticker: "BLAST", address: "0xb1a5700fa2358173fe465e6ea4ff52e36e88e2ad" },
  "mode": { ticker: "MODE", address: "0xdfc7c877a950e49d2610114102175a06c2e3167a" },
  "ronin": { ticker: "RON", address: "coingecko:ronin" },
  "near": { ticker: "NEAR", address: "coingecko:near" },
  "pulsechain": { ticker: "PLS", address: "coingecko:pulsechain" },
  "rootstock": { ticker: "RBTC", address: "coingecko:rootstock" },
  "stacks": { ticker: "STX", address: "coingecko:blockstack" },
  "fantom": { ticker: "FTM", address: "coingecko:fantom" },
  "thorchain": { ticker: "RUNE", address: "coingecko:thorchain" },
  "filecoin": { ticker: "FIL", address: "coingecko:filecoin" },
  "degen": { ticker: "DEGEN", address: "coingecko:degen-base" },
  "injective": { ticker: "INJ", address: "coingecko:injective-protocol" },
  // kekchain: { ticker: "" },
  "elysium": { ticker: "LAVA", address: "coingecko:lava" },
  "alephium": { ticker: "ALPH", address: "" },
  "rsk": { ticker: "RBTC", address: "coingecko:rootstock" },
  "cronos": { ticker: "CRO", address: "coingecko:crypto-com-chain" },
  "kava": { ticker: "KAVA", address: "coingecko:kava" },
  "bsc": { ticker: "BNB", address: "coingecko:binancecoin" },
  "tron": { ticker: "TRX", address: "coingecko:tron" },
  "kinto": { ticker: "KINTO", address: "" },
  "taiko": { ticker: "TAIKO", address: "0xa9d23408b9ba935c230493c40c73824df71a0975" },
  "sanko": { ticker: "DMT", address: "0x8B0E6f19Ee57089F7649A455D89D7bC6314D04e8" },
  "xai": { ticker: "XAI", address: "0x3fB787101DC6Be47cfe18aeEe15404dcC842e6AF" },
  "osmosis": { ticker: "OSMO", address: "uosmo" },
  "lisk": { ticker: "LSK", address: "0x6033f7f88332b8db6ad452b7c6d5bb643990ae3f" },
  "sui": { ticker: "SUI", address: "coingecko:sui" },
  "zkswap": { ticker: "ZF", address: "0x31c2c031fdc9d33e974f327ab0d9883eae06ca4a" },
  "merlin": { ticker: "MERL", address: "0x5c46bff4b38dc1eae09c5bac65872a1d8bc87378" },
  "zksync": { ticker: "ZK", address: "0x5a7d6b2f92c77fad6ccabd7ee0624e64907eaf3e" },
  "aptos": { ticker: "APT", address: "coingecko:aptos" },
  "hyperliquid": { ticker: "HYPE", address: "coingecko:hyperliquid" },
  "apechain": { ticker: "APE", address: "coingecko:apechain" },
  "scroll": { ticker: "SCR", address: "0xd29687c813d741e2f938f4ac377128810e217b1b" },
  "era": { ticker: "ZK", address: "0x5a7d6b2f92c77fad6ccabd7ee0624e64907eaf3e" },
  "fuel": { ticker: "FUEL", address: "coingecko:fuel-network" },
  "zircuit": { ticker: "ZRC", address: "0xfd418e42783382e86ae91e445406600ba144d162" },
  "core": { ticker: "CORE", address: "0x191e94fa59739e188dce837f7f6978d84727ad01" },
  "swellchain": { ticker: "SWELL", address: "coingecko:swell-network" },
  "cronos_zkevm": { ticker: "CRO", address: "coingecko:crypto-com-chain" },
  "sophon": { ticker: "SOPH", address: "coingecko:sophon" },
  "dydx": { ticker: "DYDX", address: "coingecko:dydx-chain" },
  "apex": { ticker: "APEX", address: "coingecko:apex-token-2" },
  "sonic": { ticker: "FTM", address: "coingecko:fantom" },
  //  "abstract": { ticker: "", address: "coingecko:" },
  "ancient8": { ticker: "A8", address: "coingecko:ancient8" },
  "cyber": { ticker: "CYBER", address: "coingecko:cyberconnect" },
  "fraxtal": { ticker: "FXS", address: "coingecko:frax-share" },
  "gravity": { ticker: "G", address: "coingecko:g-token" },
  // "5696": "karak",
  "kroma": { ticker: "KRO", address: "coingecko:kroma" },
  "orderly": { ticker: "ORDER", address: "coingecko:orderly-network" },
  //  "rari": { ticker: "", }
  // "5700": "redstone",
  "wc": { ticker: "WLD", address: "coingecko:worldcoin-wld" },
  // "5702": "zero_network",
  "zkfair": { ticker: "ZKF", address: "coingecko:zkfair" },
  "sxr": { ticker: "SX", address: "coingecko:sx-network-2" },
  "unichain": { ticker: "UNI", address: "coingecko:uniswap" },
  "berachain": { ticker: "BERA", address: "coingecko:berachain-bera" },
};

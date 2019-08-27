import {Coin} from "./coin";
import {Polis} from "./coins/polis";
import {Dash} from "./coins/dash";
import {Bitcoin} from "./coins/bitcoin";
import {Litecoin} from "./coins/litecoin";
import {Digibyte} from "./coins/digibyte";

export class CoinFactory {
    static coins: { [name: string]: Coin } = {
        POLIS: new Polis(),
        BTC: new Bitcoin(),
        DASH: new Dash(),
        LTC: new Litecoin(),
        DGB: new Digibyte(),
    };

    static coinList: Coin[] = [
        CoinFactory.coins.POLIS,
        CoinFactory.coins.BTC,
        CoinFactory.coins.DASH,
        CoinFactory.coins.LTC,
        CoinFactory.coins.DGB,
    ];

    static getCoinConfig(tag: string): Coin {
        tag = tag.toUpperCase();
        return this.coins[tag];
    }

    static getAvailableCoins(): Coin[] {
        return this.coinList;
    }
}

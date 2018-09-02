import { Constants } from "../Constants";
import { EncodedIChing } from "../EncodedIChing";

/**
 * @export
 * @class Encoder
 */
export class Encoder {
    /**
     * Creates an IChing code from provided content.
     *
     * @static
     * @param {string} content
     * @returns {EncodedIChing}
     */
    public static encode(content: string): EncodedIChing {
        const version: number = Constants.VERSION;
        const rows: number = Constants.SPECS.ROWS;
        const cols: number = Constants.SPECS.COLS;

        const data: number[] = [];
        for (let i = 0; i < rows * cols; i++) {
            data[i] = i;
        }

        data[0] = version;
        data[1] = content.length;

        for (let i = 0; i < content.length; i++) {
            data[i + 2] = Constants.MAPPING_TABLE[content.charCodeAt(i)];
        }

        return { version, rows, cols, data };
    }
}
import { readFile } from "node:fs/promises";
import { dirname } from "node:path";

export const readData =  async function (path:string) {
    const data:string = await readFile(`${dirname(import.meta.dirname)}/${path}`, "utf-8");
    console.log(data)
    return data;
}

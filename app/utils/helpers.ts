import fs from "fs";
import path from "path";

const binsFilePath = path.join(process.cwd(), "app/bins.json");

export function readFile(): Promise<Bin[]> {
	return new Promise((resolve, reject) => {
		fs.readFile(binsFilePath, "utf8", (err, data) => {
			if (err) {
				console.error(err);
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
		});
	});
}

export async function addNewBin(bin: Bin) {
	let data = await readFile();
	data.push(bin);

	fs.writeFileSync(binsFilePath, JSON.stringify(data), "utf8");

	console.log("Added new bin to data.json", bin.id);
}

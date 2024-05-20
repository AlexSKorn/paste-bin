import { readFile, addNewBin } from "../../utils/helpers";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	message: string;
};

export const GET = async (req: NextApiRequest) => {
	let bins = await readFile();
	if (req.query?.id) {
		bins = bins.filter((bin) => bin.id === Number(req.query.id));
	}
	return Response.json(bins, { status: 200 });
};

export const DELETE = async (req: NextApiRequest) => {
	let bins = await readFile();
	if (req.query.id) {
		let prevLength = bins.length;
		//make sure only the author can delete it
		if (bins.find((bin) => bin.authorId === Number(req.query.authorId))) {
			bins.filter((bin) => bin.id !== Number(req.query.id));
		}
		if (prevLength > bins.length) {
			return Response.json({ status: 204, message: "Bin deleted" });
		}
		return Response.json({ status: 404, message: "Bin not found" });
	}
};

export const POST = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) => {
	if (req.body) {
		await addNewBin(req.body);
		return Response.json({ status: 201, message: "new bin has been created" });
	} else {
		return Response.json({
			status: 201,
			message: "no bin added, no body found",
		});
	}
};

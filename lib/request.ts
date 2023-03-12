const request = async (url: string, method: string) => {
	const res = await fetch(url, {
		method,
		headers: {
			Authorization: `Basic ${Buffer.from(`${process.env.NAME}:${process.env.TOKEN}`).toString("base64")}`
		}
	});

	return res;
};

export default request;

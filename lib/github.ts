import request from "./request";

const CODE_URL = "https://api.github.com/repositories/612775458/contents/codes";
const contentCache = new Map<string, any>();

export const getLanguages = async () => {
	if (contentCache.has("codes")) return contentCache.get("codes") as string[];
	const res = await request(CODE_URL, "GET");
	const data = await res.json();

	const newData = Array.isArray(data) ? data.map((e) => e.name) : [];
	if (newData.length) contentCache.set("codes", newData);
	return newData;
};

type FileResponse = {
	name: string
	path: string
	sha: string
	size: number
	url: string
	html_url: string
	git_url: string
	download_url: string
	type: string
	_links: {
		self: string
		git: string
		html: string
	}
}

type CodeFile = {
	file: string
	dir: boolean
}

export async function getFiles(language: string): Promise<undefined | CodeFile[]> {
	if (contentCache.has(`codes_${language}`)) return contentCache.get(`codes_${language}`);
	const res = await request(`https://api.github.com/repositories/612775458/contents/codes/${encodeURIComponent(language)}`, "GET");

	if (!res.ok) return undefined;

	const data: FileResponse[] = await res.json();

	const newData: CodeFile[] = data.map((obj) => {
		return {
			file: obj.name,
			dir: obj.type !== "file"
		};
	});

	contentCache.set(`codes_${language}`, newData);

	return newData;
};

export const getContent = async (language: string, fileName: string) => {
	const res = await request(`https://raw.githubusercontent.com/BytesToBits/code-examples/main/codes/${encodeURIComponent(language)}/${encodeURIComponent(fileName)}`, "GET");

	if (res.status == 404) return undefined;

	const data = await res.text();

	return data;
};

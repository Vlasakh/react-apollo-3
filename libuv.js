const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 10;

const MAX_CALLS = 10;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
	console.log(`❗ UV_THREADPOOL_SIZE: ${process.env.UV_THREADPOOL_SIZE} | MAX_CALLS: ${MAX_CALLS}`);

	let start = Date.now();
	crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
	console.log(`Hash: 0`, Date.now() - start, "\n------");

	start = Date.now();

	for (let i = 0; i < MAX_CALLS; i++) {
		crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
			console.log(`Hash: ${i + 1}`, Date.now() - start);
		});
	}
}

main();

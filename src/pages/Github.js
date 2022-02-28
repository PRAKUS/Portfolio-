import React, { useEffect } from "react";
import axios from "axios";
function Github() {
	useEffect(() => {}, []);

	const fetch = async () => {
		let res = await axios.get("https://api.github.com/users/prakus");
		console.log("data", res.data);
	};

	return (
		<div>
			<button onClick={fetch}>fetch</button>
		</div>
	);
}

export default Github;

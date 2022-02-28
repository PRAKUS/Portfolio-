import React from "react";

function Tag(props) {
	return (
		<div style={{ backgroundColor: props.color }} className='tag'>
			<p style={{ margin: "0", fontSize: "10px" }}>#{props.tagname}</p>
		</div>
	);
}

export default Tag;

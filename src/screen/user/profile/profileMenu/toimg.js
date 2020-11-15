const base64ImageDecoder = require('b64-to-image');

const convertToimg = (data) => {
	const gambar = base64ImageDecoder.convertToimg(data)
	return gambar
}

export default convertToimg
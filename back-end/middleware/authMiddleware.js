import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1]; // Corrected token extraction
	if (!token) {
		return res.status(401).json({ message: 'Authorization JWT not found' });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(403).json({ message: 'Failed to process JWT token' });
		}

		req.userId = user.userId; 
		next();
	});
};

export default authenticateToken;
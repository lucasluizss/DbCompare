import app from './app';

const port = process.env.port || 3999;

app.listen(port, () => {
	console.log(`===> Application is running on port ${port}...`);
});

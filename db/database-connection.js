/**
 * @author: Izan Cuetara Diez (a.k.a. algorizan)
 * @version: v2.0 | 2022-07-06
 */

"use strict";

const { Client } = require('pg');

module.exports = {
	async getClient() {
		// Connect to Heroku Postgres database
		const client = new Client({
			connectionString: process.env.DATABASE_URL_BOTMARK,
			ssl: {
				rejectUnauthorized: false
			}
		});

		// // Connect to local Postgres database
		// const client = new Client({
		// 	host: 'localhost',
		// 	port: 5432,
		// 	user: 'postgres',
		// 	password: '1123581321',
		// 	database: 'discord_bots_db',
		// 	// connectionString: 'postgres://postgres:1123581321@localhost:5432/postgres',
		// 	ssl: false
		// });

		await client.connect();
		return client;
	},

};



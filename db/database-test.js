/* eslint-disable no-magic-numbers */
/**
 * @author: Izan Cuetara Diez (a.k.a. algorizan)
 * @version: v2.0 | 2022-07-07
 */

"use strict";

const db = require('./database-access');

(async () => {
	// const botid = '911410913138081863';
	const homeServer = '528382510455848963';

	const entries = await db.selectServer(homeServer);
	console.log(entries[0]?.name + '\n' + entries[0]?.serverid);
})();

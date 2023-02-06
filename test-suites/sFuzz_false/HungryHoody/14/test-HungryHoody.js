const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyUvoVjzA = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxxILtXL = BigInt("373")
		const addressDNYLBWu = accounts[2]
		const uintIVTqxp1 = BigInt("1841")
		const uintwQQvnY = BigInt("761")
		const uintdERHljs = BigInt("800")
		const addressa7wiZ9u = accounts[1]
		const addressNr2La1c = accounts[3]
		const uintUN2tBOg = BigInt("1719")
		const addresshHkfx1f = accounts[3]
		const uintD8osaUU = BigInt("1791")
		const addressa9P6Mq = accounts[0]
		const uintZYK8M6w = BigInt("913")
		const uintFZuZPt = BigInt("336")
		const boolonKb82S = await HungryHoodyUvoVjzA.transfer.call(addressDNYLBWu, uintxxILtXL, {from: accounts[3]});
		const uintANtiqnj = await HungryHoodyUvoVjzA.safeDiv.call(uintwQQvnY, uintIVTqxp1, {from: accounts[0]});
		const boolqpU2AXH = await HungryHoodyUvoVjzA.transferFrom.call(addressNr2La1c, addressa7wiZ9u, uintdERHljs, {from: accounts[3]});
		const boole0pDWmm = await HungryHoodyUvoVjzA.transfer.call(addresshHkfx1f, uintUN2tBOg, {from: accounts[1]});
		const boolMAG0Dwg = await HungryHoodyUvoVjzA.transfer.call(addressa9P6Mq, uintD8osaUU, {from: accounts[3]});
		const uintySvTKvG = await HungryHoodyUvoVjzA.safeMul.call(uintFZuZPt, uintZYK8M6w, {from: accounts[0]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyhdng71t = await HungryHoody.new({from: accounts[0]});
		const uintVYa0m8w = BigInt("80")
		const uinttlrs2ZI = BigInt("1461")
		const addressP5Ej4L = accounts[0]
		const uintG1eOwn1 = BigInt("1210")
		const uintNYUWG3J = BigInt("937")
		const addressWAyYHyl = accounts[1]
		const addressjrZ3h1 = accounts[4]
		const addressCr0eQwb = "0x0000000000000000000000000000000000000001"
		const uintigPEKst = await HungryHoodyhdng71t.safeSub.call(uinttlrs2ZI, uintVYa0m8w, {from: accounts[2]});
		const uintEw9XOyd = await HungryHoodyhdng71t.balanceOf.call(addressP5Ej4L, {from: accounts[1]});
		const uintpw0GDf = await HungryHoodyhdng71t.safeDiv.call(uintNYUWG3J, uintG1eOwn1, {from: accounts[1]});
		const uintbNAO8rC = await HungryHoodyhdng71t.balanceOf.call(addressWAyYHyl, {from: "0x0000000000000000000000000000000000000001"});
		const uintWOYgQk7 = await HungryHoodyhdng71t.allowance.call(addressCr0eQwb, addressjrZ3h1, {from: accounts[0]});

		assert.equal(uintEw9XOyd, BigInt("25000000000000000000"))
		assert.equal(uintWOYgQk7, BigInt("0"))
		assert.equal(uintbNAO8rC, BigInt("0"))
		assert.equal(uintigPEKst, BigInt("1381"))
		assert.equal(uintpw0GDf, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyDQgaGD6 = await HungryHoody.new({from: accounts[4]});
		const uintrodwYQn = BigInt("231")
		const addressrCnX8Ts = accounts[4]
		const addressvv8Y1JQ = accounts[2]
		const uintBkjzTw0 = BigInt("1541")
		const addressiYAAD6c = accounts[0]
		const addresskKntbxg = accounts[0]
		const boolNxFwWbs = await HungryHoodyDQgaGD6.approve.call(addressrCnX8Ts, uintrodwYQn, {from: accounts[4]});
		const uintw3ud4oH = await HungryHoodyDQgaGD6.balanceOf.call(addressvv8Y1JQ, {from: "0x0000000000000000000000000000000000000001"});
//		const booluougkjI = await HungryHoodyDQgaGD6.transferFrom.call(addresskKntbxg, addressiYAAD6c, uintBkjzTw0, {from: accounts[3]});
//		const uintpP2aVSM = await HungryHoodyDQgaGD6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNxFwWbs, true)
		assert.equal(uintw3ud4oH, BigInt("0"))
		await expect(HungryHoodyDQgaGD6.transferFrom.call(addresskKntbxg, addressiYAAD6c, uintBkjzTw0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodysGXVhQg = await HungryHoody.new({from: accounts[2]});
		const addresscU5U4Mz = accounts[4]
		const addressMaVPu5 = accounts[4]
		const addressaimY1q = accounts[0]
		const uintJwNpgCG = BigInt("871")
		const addressKNPGT4G = accounts[4]
		const uintUdxilik = BigInt("1965")
		const uintKkzjPn0 = BigInt("401")
		const uintnKjoSRg = await HungryHoodysGXVhQg.balanceOf.call(addresscU5U4Mz, {from: "0x0000000000000000000000000000000000000001"});
		const uintQgDOrY7 = await HungryHoodysGXVhQg.allowance.call(addressaimY1q, addressMaVPu5, {from: accounts[3]});
//		const booll5eDx54 = await HungryHoodysGXVhQg.transfer.call(addressKNPGT4G, uintJwNpgCG, {from: accounts[5]});
//		const uintNQXCyKs = await HungryHoodysGXVhQg.safeDiv.call(uintKkzjPn0, uintUdxilik, {from: accounts[4]});
//		const uintHoCLSk = await HungryHoodysGXVhQg.totalSupply.call({from: accounts[4]});

		assert.equal(uintQgDOrY7, BigInt("0"))
		assert.equal(uintnKjoSRg, BigInt("0"))
		await expect(HungryHoodysGXVhQg.transfer.call(addressKNPGT4G, uintJwNpgCG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyFwMl0j4 = await HungryHoody.new({from: accounts[2]});
		const uintdHIGkz = BigInt("12")
		const addressxdhMmtd = accounts[2]
		const uintDUr1QL5 = BigInt("918")
		const addressQu9Z3dw = "0x0000000000000000000000000000000000000001"
		const addresswg7Wvx = accounts[0]
		const uintRzyc6lm = BigInt("533")
		const uintCkoDG0x = BigInt("1650")
		const uintNnmbCC7 = await HungryHoodyFwMl0j4.totalSupply.call({from: accounts[4]});
		const boolKGfhGn6 = await HungryHoodyFwMl0j4.approve.call(addressxdhMmtd, uintdHIGkz, {from: accounts[0]});
//		const boolcjAsODx = await HungryHoodyFwMl0j4.transferFrom.call(addresswg7Wvx, addressQu9Z3dw, uintDUr1QL5, {from: accounts[1]});
//		const uintMby3XWC = await HungryHoodyFwMl0j4.safeDiv.call(uintCkoDG0x, uintRzyc6lm, {from: accounts[4]});

		assert.equal(boolKGfhGn6, true)
		assert.equal(uintNnmbCC7, BigInt("25000000000000000000"))
		await expect(HungryHoodyFwMl0j4.transferFrom.call(addresswg7Wvx, addressQu9Z3dw, uintDUr1QL5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoody4dEPx8 = await HungryHoody.new({from: accounts[0]});
		const address7o05ni = accounts[0]
		const addressBTqUOg = accounts[2]
		const uintnxpSe4N = BigInt("1892")
		const uintrx9ldsM = BigInt("118")
		const addressgLY5S1U = accounts[2]
		const addressGXDZYX2 = accounts[2]
		const addressdGth8YU = accounts[3]
		const uintnTIKo6 = BigInt("1448")
		const uintwV4Uq1V = BigInt("1405")
		const uinttufubM = await HungryHoody4dEPx8.allowance.call(addressBTqUOg, address7o05ni, {from: accounts[5]});
		const uintDI0W2Wr = await HungryHoody4dEPx8.safeMul.call(uintrx9ldsM, uintnxpSe4N, {from: accounts[0]});
		const uintIoJ9Yeu = await HungryHoody4dEPx8.allowance.call(addressGXDZYX2, addressgLY5S1U, {from: accounts[3]});
		const uintMmOiPOv = await HungryHoody4dEPx8.balanceOf.call(addressdGth8YU, {from: accounts[3]});
		const uintYgdxyRb = await HungryHoody4dEPx8.safeAdd.call(uintwV4Uq1V, uintnTIKo6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintDI0W2Wr, BigInt("223256"))
		assert.equal(uintIoJ9Yeu, BigInt("0"))
		assert.equal(uintMmOiPOv, BigInt("0"))
		assert.equal(uintYgdxyRb, BigInt("2853"))
		assert.equal(uinttufubM, BigInt("0"))
	});
})
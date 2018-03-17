function p0(ans, hypo) {
	return true;
}

function p1(ans, hypo) {
	if (ans == 'A') return hypo[4] == 'C';
	if (ans == 'B') return hypo[4] == 'D';
	if (ans == 'C') return hypo[4] == 'A';
	if (ans == 'D') return hypo[4] == 'B';
	return false;
}

function p2(ans, hypo) {
	if (ans == 'A') return hypo[2] != hypo[5] && hypo[2] != hypo[1] && hypo[2] != hypo[3];
	if (ans == 'B') return hypo[5] != hypo[2] && hypo[5] != hypo[1] && hypo[5] != hypo[4];
	if (ans == 'C') return hypo[1] != hypo[3] && hypo[1] != hypo[5] && hypo[1] != hypo[3];
	if (ans == 'D') return hypo[3] != hypo[2] && hypo[3] != hypo[5] && hypo[3] != hypo[1];
	return false;
}

function p3(ans, hypo) {
	if (ans == 'A') return hypo[0] == hypo[4];
	if (ans == 'B') return hypo[1] == hypo[6];
	if (ans == 'C') return hypo[0] == hypo[8];
	if (ans == 'D') return hypo[5] == hypo[9];
	return false;
}

function p4(ans, hypo) {
	if (ans == 'A') return hypo[4] == hypo[7];
	if (ans == 'B') return hypo[4] == hypo[3];
	if (ans == 'C') return hypo[4] == hypo[8];
	if (ans == 'D') return hypo[4] == hypo[6];
	return false;
}

function p5(ans, hypo) {
	if (ans == 'A') return hypo[7] == hypo[1] && hypo[7] == hypo[3];
	if (ans == 'B') return hypo[7] == hypo[0] && hypo[7] == hypo[5];
	if (ans == 'C') return hypo[7] == hypo[2] && hypo[7] == hypo[9];
	if (ans == 'D') return hypo[7] == hypo[4] && hypo[7] == hypo[8];
	return false;
}

function p6(ans, hypo) {
	var na = nb = nc = nd = 0;
	hypo.forEach(function(v) {
		if (v == 'A') na ++;
		if (v == 'B') nb ++;
		if (v == 'C') nc ++;
		if (v == 'D') nd ++;
	});

	min_opt = Math.min(na, nb, nc, nd);
	if (ans == 'A') return nc == min_opt;
	if (ans == 'B') return nb == min_opt;
	if (ans == 'C') return na == min_opt;
	if (ans == 'D') return nd == min_opt;
	return false;
}

function p7(ans, hypo) {
	var x = hypo[0].charCodeAt();
	if (ans == 'A') return Math.abs(x - hypo[6].charCodeAt()) != 1;
	if (ans == 'B') return Math.abs(x - hypo[4].charCodeAt()) != 1;
	if (ans == 'C') return Math.abs(x - hypo[1].charCodeAt()) != 1;
	if (ans == 'D') return Math.abs(x - hypo[9].charCodeAt()) != 1;
	return false;
}

function p8(ans, hypo) {
	var a = hypo[0] === hypo[5];
	if (ans == 'A') return a != (hypo[5] == hypo[4]);
	if (ans == 'B') return a != (hypo[9] == hypo[4]);
	if (ans == 'C') return a != (hypo[1] == hypo[4]);
	if (ans == 'D') return a != (hypo[8] == hypo[4]);
	return false;
}

function p9(ans, hypo) {
	var na = nb = nc = nd = 0;
	hypo.forEach(function(v) {
		if (v == 'A') na ++;
		if (v == 'B') nb ++;
		if (v == 'C') nc ++;
		if (v == 'D') nd ++;
	});

	delta = Math.max(na, nb, nc, nd) - Math.min(na, nb, nc, nd);
	if (ans == 'A') return delta == 3;
	if (ans == 'B') return delta == 2;
	if (ans == 'C') return delta == 4;
	if (ans == 'D') return delta == 1;
	return false;
}

function test_hupo(hypo) {
	for(var i = 0; i < hypo.length; i ++) {
		if (!problem_list[i](hypo[i], hypo)) {
			return false;
		}
	}
	return true;
}



var problem_list = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9];
(function(){
for (var v0 = 0; v0 < 4; v0 ++) {
	for (var v1 = 0; v1 < 4; v1 ++) {
		for (var v2 = 0; v2 < 4; v2 ++) {
			for (var v3 = 0; v3 < 4; v3 ++) {
				for (var v4 = 0; v4 < 4; v4 ++) {
					for(var v5 = 0; v5 < 4; v5 ++) {
						for (var v6 = 0; v6 < 4; v6 ++) {
							for (var v7 = 0; v7 < 4; v7 ++) {
								for(var v8 = 0; v8 < 4; v8 ++) {
									for(var v9 = 0; v9 < 4; v9 ++) {
										var hypo = [String.fromCharCode(v0 + 65), String.fromCharCode(v1 + 65), String.fromCharCode(v2 + 65), String.fromCharCode(v3 + 65), String.fromCharCode(v4 + 65), String.fromCharCode(v5 + 65), String.fromCharCode(v6 + 65), String.fromCharCode(v7 + 65), String.fromCharCode(v8 + 65), String.fromCharCode(v9 + 65)];
										if (test_hupo(hypo)) {
											console.log(hypo)
											break;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}})();

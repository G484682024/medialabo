//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

b = document.querySelector('button#show'); 
b.addEventListener('click' , show);

function show() {
	if (document.querySelector('p')) {
	let pp = document.querySelector('p');
	pp.remove();
	pp = document.querySelector('ul');
	pp.remove();
	}

	

	let p = document.createElement('p');
	p.textContent = campus.address;
	let h2 = document.querySelector('h2#addr');
	h2.insertAdjacentElement('afterend', p);

	let l;
	let u = document.createElement('ul');
	for (let n of gakka) {
	l = document.createElement('li');
    l.textContent = n.name;
    u.insertAdjacentElement('beforeend', l);
	}

	h2 = document.querySelector('h2#dept');
    h2.insertAdjacentElement('afterend', u); 

}


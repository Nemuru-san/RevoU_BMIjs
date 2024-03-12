window.onload = () => {
	let tombol = document.querySelector('#tombolHitung');
	tombol.addEventListener('click', CalculateBMI);
};

function CalculateBMI() {
	let tinggiBadan = document.querySelector('#tinggi').value;
	let beratBadan = document.querySelector('#berat').value;

	let namaUser = document.querySelector('#nama').value;
	console.log(namaUser);

	// let genderUser = document.querySelector('#gender').value;
	let genderUser = document.querySelector('input[name="gender"]:checked').value;
	console.log(genderUser);

	let hasil = document.querySelector('#hasilIndex');
	let hasilNama = document.querySelector('#outputNama');
	let hasilGender = document.querySelector('#gender');

	let BMI = (beratBadan / ((tinggiBadan * tinggiBadan) / 10000)).toFixed(2);

	if (BMI > 18.5) {
		hasilNama.innerHTML = `
            <span class="userNama">
                Nama kamu : ${namaUser}
            </span>
        `;
		hasilGender.innerHTML = `
            <p>Gender anda: ${genderUser}</p>
        `;
		hasil.innerHTML = `
            <p>BMI Anda: ${BMI}</p>
        `;
	}
}

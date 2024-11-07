document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Ambil data input
    let usia = document.getElementById("usia").value;
    let jenisKelamin = document.getElementById("jenisKelamin").value;
    let beratBadan = parseFloat(document.getElementById("beratBadan").value);
    let tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value) / 100; // Convert cm to meters
  
    // Validasi input
    if (!usia || !jenisKelamin || !beratBadan || !tinggiBadan) {
      alert("Harap isi semua data dengan benar.");
      return;
    }
  
    // Validasi jika berat badan atau tinggi badan negatif
    if (beratBadan <= 0 || tinggiBadan <= 0) {
      alert("Berat badan dan tinggi badan harus bernilai positif.");
      return;
    }
  
    // Hitung BMI
    let bmi = beratBadan / (tinggiBadan * tinggiBadan);
    bmi = bmi.toFixed(2); // Membatasi dua angka desimal
  
    // Tentukan status BMI
    let status = "";
    if (bmi < 18.5) {
      status = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      status = "Kelebihan berat badan";
    } else {
      status = "Obesitas";
    }
  
    // Tampilkan hasil BMI
    document.getElementById("bmiValue").textContent = `BMI: ${bmi}`;
    document.getElementById("status").textContent = status;
  });
  
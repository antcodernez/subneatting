function calcularIP()
    {
        const dataIP1 = document.getElementById("ipPT1");
        const dataIP2 = document.getElementById("ipPT2");
        const dataIP3 = document.getElementById("ipPT3");
        const dataIP4 = document.getElementById("ipPT4");
        const numeroHost = document.getElementById("numeroHost");
        const nuemroRed = document.getElementById("numeroRed");

        const valorHost = numeroHost.value;
        const valorRed = nuemroRed.value        
        const valorIP1 = dataIP1.value;
        const valorIP2 = dataIP2.value;
        const valorIP3 = dataIP3.value;
        const valorIP4 = dataIP4.value;

        // correccion de valors de string a number
        const valorIP1Numero = Math.floor(valorIP1);
        const valorIP2Numero = parseInt(valorIP2);
        const valorIP3Numero = Math.floor(valorIP3);
        const valorIP4Numero = parseInt(valorIP4);
        const valorHostNumero = parseInt(valorHost);
        const numeroDeRed = parseInt(valorRed);

        // rangos IPS segun el tipo de IP
        const rangoIPClaseA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,127];
        const rangoIPClaseB = [128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191];
        const rangoIPClaseC = [192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223];

        
         if(rangoIPClaseC.includes(valorIP1Numero) == true)
            {
                let valorCuartoOcteto = valorHostNumero * numeroDeRed;
                let broadcast = valorCuartoOcteto + (valorHostNumero - 1);
                let gateway1 = valorCuartoOcteto + 1;
                let gateway2 = broadcast - 1;
                    
                let ipRedResult = `Su ip de su red es: ${valorIP1}.${valorIP2}.${valorIP3}.${valorCuartoOcteto}`;
                
                let broadcastResult = `El brodcast de la red es: ${valorIP1}.${valorIP2}.${valorIP3}.${broadcast}`;

                let gateway1Result1 = `los gateway de su red son: ${valorIP1}.${valorIP2}.${valorIP3}.${gateway1}`;

                let gateway1Result2 = `los gateway de su red son: ${valorIP1}.${valorIP2}.${valorIP3}.${gateway2}`;

                const ipPrint = document.getElementById("result1");
                const ipPrint2 = document.getElementById("result2");
                const ipPrint3 = document.getElementById("result3");
                const ipPrint4 = document.getElementById("result4");

                ipPrint.innerText = ipRedResult;
                ipPrint2.innerText = broadcastResult;
                ipPrint3.innerText = gateway1Result1 ;
                ipPrint4.innerText = gateway1Result2 ;
            }
        else if (rangoIPClaseB.includes(valorIP1Numero) == true)
            {
                alert("Ingresaste un subneteo clase B, proximamente :D");
            }
        else if (rangoIPClaseA.includes(valorIP1Numero) == true)
            {
                alert("Ingresaste un subneteo calse A, proximamente :D");
            }
        else 
            {
                alert("Ingresa un valor valido por favor :D");
            }
    }

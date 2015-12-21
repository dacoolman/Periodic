//Listing all elements
var elements = {
//blue	
'H' : {number: 1, symbol: 'H', weight: "1.008", color: 'blue'},
'Li' : {number: 3, symbol: 'Li', weight: "6.94", color: 'blue'},
'Na' : {number: 11, symbol: 'Na', weight: "22.990", color: 'blue'},
'K' : {number: 19, symbol: 'K', weight: "39.098", color: 'blue'},
'Rb' : {number: 37, symbol: 'Rb', weight: "85.468", color: 'blue'},
'Cs' : {number: 55, symbol: 'Cs', weight: "132.91", color: 'blue'},
'Fr' : {number: 87, symbol: 'Fr', weight: "[233.02]", color: 'blue'},
'Be' : {number: 4, symbol: 'Be', weight: "9.0122", color: 'blue'},
'Mg' : {number: 12, symbol: 'Mg', weight: "24.305", color: 'blue'},
'Ca' : {number: 20, symbol: 'Ca', weight: "40.078", color: 'blue'},
'Sr' : {number: 38, symbol: 'Sr', weight: "87.62", color: 'blue'},
'Ba' : {number: 56, symbol: 'Ba', weight: "137.33", color: 'blue'},
'Ra' : {number: 88, symbol: 'Ra', weight: "226.03", color: 'blue'},
//pink
'Sc' : {number: 21, symbol: 'Sc', weight: "44.956", color: 'pink'},
'Y' : {number: 39, symbol: 'Y', weight: "88.906", color: 'pink'},
'Lu' : {number: 71, symbol: 'Lu', weight: "174.97", color: 'pink'},
'Lr' : {number: 103, symbol: 'Lr', weight: "[262.11]", color: 'pink'},
'Ti' : {number: 22, symbol: 'Ti', weight: "47.867", color: 'pink'},
'Zr' : {number: 40, symbol: 'Zr', weight: "91.224", color: 'pink'},
'Hf' : {number: 72, symbol: 'Hf', weight: "178.49", color: 'pink'},
'Rf' : {number: 104, symbol: 'Rf', weight: "[265.12]", color: 'pink'},
'V' : {number: 23, symbol: 'V', weight: "50.942", color: 'pink'},
'Nb' : {number: 41, symbol: 'Nb', weight: "92.906", color: 'pink'},
'Ta' : {number: 73, symbol: 'Ta', weight: "180.95", color: 'pink'},
'Db' : {number: 105, symbol: 'Db', weight: "[268.13]", color: 'pink'},
'Cr' : {number: 24, symbol: 'Cr', weight: "51.996", color: 'pink'},
'Mo' : {number: 42, symbol: 'Mo', weight: "95.96", color: 'pink'},
'W' : {number: 74, symbol: 'W', weight: "183.84", color: 'pink'},
'Sg' : {number: 106, symbol: 'Sg', weight: "[271.13]", color: 'pink'},
'Mn' : {number: 25, symbol: 'Mn', weight: "54.938", color: 'pink'},
'Tc' : {number: 43, symbol: 'Tc', weight: "[97.91]", color: 'pink'},
'Re' : {number: 75, symbol: 'Re', weight: "186.21", color: 'pink'},
'Bh' : {number: 107, symbol: 'Bh', weight: "[270]", color: 'pink'},
'Fe' : {number: 26, symbol: 'Fe', weight: "55.845", color: 'pink'},
'Ru' : {number: 44, symbol: 'Ru', weight: "101.07", color: 'pink'},
'Os' : {number: 76, symbol: 'Os', weight: "190.23", color: 'pink'},
'Hs' : {number: 108, symbol: 'Hs', weight: "[277.15]", color: 'pink'},
'Co' : {number: 27, symbol: 'Co', weight: "58.933", color: 'pink'},
'Rh' : {number: 45, symbol: 'Rh', weight: "102.91", color: 'pink'},
'Ir' : {number: 77, symbol: 'Ir', weight: "192.22", color: 'pink'},
'Mt' : {number: 109, symbol: 'Mt', weight: "[276.15]", color: 'pink'},
'Ni' : {number: 28, symbol: 'Ni', weight: "58.693", color: 'pink'},
'Pd' : {number: 46, symbol: 'Pd', weight: "106.42", color: 'pink'},
'Pt' : {number: 78, symbol: 'Pt', weight: "195.08", color: 'pink'},
'Ds' : {number: 110, symbol: 'Ds', weight: "[281.16]", color: 'pink'},
'Cu' : {number: 28, symbol: 'Cu', weight: "63.546", color: 'pink'},
'Ag' : {number: 47, symbol: 'Ag', weight: "107.87", color: 'pink'},
'Au' : {number: 79, symbol: 'Au', weight: "196.97", color: 'pink'},
'Rg' : {number: 111, symbol: 'Rg', weight: "[280.16]", color: 'pink'},
'Zn' : {number: 30, symbol: 'Zn', weight: "65.38", color: 'pink'},
'Cd' : {number: 48, symbol: 'Cd', weight: "112.41", color: 'pink'},
'Hg' : {number: 80, symbol: 'Hg', weight: "200.59", color: 'pink'},
'Cn' : {number: 112, symbol: 'Cn', weight: "[285.17]", color: 'pink'},
//yellow
'B' : {number: 5, symbol: 'B', weight: "10.81", color: 'yellow'},
'Al' : {number: 13, symbol: 'Al', weight: "26.982", color: 'yellow'},
'Ga' : {number: 31, symbol: 'Ga', weight: "69.723", color: 'yellow'},
'In' : {number: 49, symbol: 'In', weight: "114.82", color: 'yellow'},
'Tl' : {number: 81, symbol: 'Tl', weight: "204.38", color: 'yellow'},
'Uut' : {number: 113, symbol: 'Uut', weight: "[284.18]", color: 'yellow'},
'C' : {number: 6, symbol: 'C', weight: "12.011", color: 'yellow'},
'Si' : {number: 14, symbol: 'Si', weight: "28.085", color: 'yellow'},
'Ge' : {number: 32, symbol: 'Ge', weight: "72.63", color: 'yellow'},
'Sn' : {number: 50, symbol: 'Sn', weight: "118.71", color: 'yellow'},
'Pb' : {number: 82, symbol: 'Pb', weight: "207.2", color: 'yellow'},
'Fl' : {number: 114, symbol: 'Fl', weight: "[289.19]", color: 'yellow'},
'N' : {number: 7, symbol: 'N', weight: "14.007", color: 'yellow'},
'P' : {number: 15, symbol: 'P', weight: "30.974", color: 'yellow'},
'As' : {number: 33, symbol: 'As', weight: "74.922", color: 'yellow'},
'Sb' : {number: 51, symbol: 'Sb', weight: "121.76", color: 'yellow'},
'Bi' : {number: 83, symbol: 'Bi', weight: "208.98", color: 'yellow'},
'Uup' : {number: 115, symbol: 'Uup', weight: "[288.19]", color: 'yellow'},
'O' : {number: 8, symbol: 'O', weight: "15.999", color: 'yellow'},
'S' : {number: 16, symbol: 'S', weight: "32.06", color: 'yellow'},
'Se' : {number: 34, symbol: 'Se', weight: "78.96", color: 'yellow'},
'Te' : {number: 52, symbol: 'Te', weight: "127.60", color: 'yellow'},
'Po' : {number: 84, symbol: 'Po', weight: "[208.98]", color: 'yellow'},
'Lv' : {number: 116, symbol: 'Lv', weight: "293", color: 'yellow'},
'F' : {number: 9, symbol: 'F', weight: "18.998", color: 'yellow'},
'Cl' : {number: 17, symbol: 'Cl', weight: "35.45", color: 'yellow'},
'Br' : {number: 35, symbol: 'Br', weight: "79.904", color: 'yellow'},
'I' : {number: 53, symbol: 'I', weight: "126.90", color: 'yellow'},
'At' : {number: 85, symbol: 'At', weight: "[209.99]", color: 'yellow'},
'Uus' : {number: 117, symbol: 'Uus', weight: "[294]", color: 'yellow'},
'He' : {number: 2, symbol: 'He', weight: "4.0026", color: 'yellow'},
'Ne' : {number: 10, symbol: 'Ne', weight: "20.180", color: 'yellow'},
'Ar' : {number: 18, symbol: 'Ar', weight: "39.948", color: 'yellow'},
'Kr' : {number: 36, symbol: 'Kr', weight: "83.798", color: 'yellow'},
'Xe' : {number: 54, symbol: 'Xe', weight: "131.29", color: 'yellow'},
'Rn' : {number: 86, symbol: 'Rn', weight: "[222.02]", color: 'yellow'},
'Uuo' : {number: 118, symbol: 'Uuo', weight: "[294]", color: 'yellow'},
//green, Lanthanoids ordered by row
'La' : {number: 57, symbol: 'La', weight: "138.91", color: 'green'},
'Ce' : {number: 58, symbol: 'Ce', weight: "140.12", color: 'green'},
'Pr' : {number: 59, symbol: 'Pr', weight: "140.91", color: 'green'},
'Nd' : {number: 60, symbol: 'Nd', weight: "144.24", color: 'green'},
'Pm' : {number: 61, symbol: 'Pm', weight: "[144.91]", color: 'green'},
'Sm' : {number: 62, symbol: 'Sm', weight: "150.36", color: 'green'},
'Eu' : {number: 63, symbol: 'Eu', weight: "151.96", color: 'green'},
'Gd' : {number: 64, symbol: 'Gd', weight: "157.25", color: 'green'},
'Tb' : {number: 65, symbol: 'Tb', weight: "158.93", color: 'green'},
'Dy' : {number: 66, symbol: 'Dy', weight: "162.50", color: 'green'},
'Ho' : {number: 67, symbol: 'Ho', weight: "164.93", color: 'green'},
'Er' : {number: 68, symbol: 'Er', weight: "167.26", color: 'green'},
'Tm' : {number: 69, symbol: 'Tm', weight: "168.93", color: 'green'},
'Yb' : {number: 70, symbol: 'Yb', weight: "173.05", color: 'green'},
'Ac' : {number: 89, symbol: 'Ac', weight: "[227.03]", color: 'green'},
'Th' : {number: 90, symbol: 'Th', weight: "232.04", color: 'green'},
'Pa' : {number: 91, symbol: 'Pa', weight: "231.04", color: 'green'},
'U' : {number: 92, symbol: 'U', weight: "238.03", color: 'green'},
'Np' : {number: 93, symbol: 'Np', weight: "[237.05]", color: 'green'},
'Pu' : {number: 94, symbol: 'Pu', weight: "[244.06]", color: 'green'},
'Am' : {number: 95, symbol: 'Am', weight: "[243.06]", color: 'green'},
'Cm' : {number: 96, symbol: 'Cm', weight: "[247.07]", color: 'green'},
'Bk' : {number: 97, symbol: 'Bk', weight: "[247.07]", color: 'green'},
'Cf' : {number: 98, symbol: 'Cf', weight: "[251.08]", color: 'green'},
'Es' : {number: 99, symbol: 'Es', weight: "[252.08]", color: 'green'},
'Fm' : {number: 100, symbol: 'Fm', weight: "[257.10]", color: 'green'},
'Md' : {number: 101, symbol: 'Md', weight: "[258.10]", color: 'green'},
'No' : {number: 102, symbol: 'No', weight: "[259.10]", color: 'green'}};


//array to hold all elements
var array = ['A1','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A',
		 'A2','H',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'He',
		 'A2','Li','Be',0,0,0,0,0,0,0,0,0,0,'B','C','N','O','F','Ne',
		 'A2','Na','Mg',0,0,0,0,0,0,0,0,0,0,'Al','Si','P','S','Cl','Ar',
		 'A2','K','Ca','Sc','Ti','V','Cr','Mn','Tc','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr',
		 'A2','Rb','Sr','Y','Zr','Nb','Mo','Tc','Re','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I', 'Xe',
		 'A2','Cs','Ba','Lu','Hf','Ta','W','Re','Bh','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn',
		 'A2','Fr','Ra','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Uut','Fl','Uup','Lv','Uus','Uuo'];
//what row loop is on		 
var verticalcount = 1;

function generatehtml(myarray, divproperties, divcontents, afterspace){
	
	document.getElementById("wrapper").innerHTML += "<div class=" + elements[myarray[i]]['color'] + " style=\"top:" + (Math.floor(i/19)*45) + "px;left:"
	 + (Math.floor(i%19)*45 + 15) + "px\">" + elements[array[i]]['number'] + '<br><span class=\"letter\">' + array[i] + '</span><br>' + elements[array[i]]['weight'] 
	 + "</div>";
}

for (var i =0; i<array.length; i++)
{
		if (array[i] == 0 && i==21)
	{
	document.getElementById("wrapper").innerHTML += '<div class="test" style="top:' + (Math.floor(i/19)*45) + 'px;left:' + (Math.floor(i%19)*45) + 'px"></div>';}
	else if (array[i] == 0)
	{
	document.getElementById("wrapper").innerHTML += '<div class="test" style="top:' + (Math.floor(i/19)*45) + 'px;left:' + (Math.floor(i%19)*45 + 15) + 'px"></div>';}
else if (array[i] == 1)
{
	
	document.getElementById("wrapper").innerHTML += '<div class="blank" style="top:' + (Math.floor(i/19)*45) + 'px;left:' + (Math.floor(i%19)*45) + 'px"></div>';
}	
else if (array[i] === 'A1')
{
	document.getElementById("wrapper").innerHTML += '<span class="text" style="top:0px;left:0px;">Group' + '<br>period</span>';

}

else if (array[i] === 'A' )
{
	document.getElementById("wrapper").innerHTML += '<span class=\"count" style="top:' + (Math.floor(i/19)*45) + 'px;left:' + (Math.floor(i%19)*45 + 10) + 'px">' + i + '</span>';

}


else if(array[i] == 'A2')
{
document.getElementById("wrapper").innerHTML += '<span class=\"count" style="top:' + (Math.floor(i/19)*45) + 'px;left:' + (Math.floor(i%19)*45) + 'px">' + verticalcount + '</span>';	
	verticalcount++;
}

else if (array[i] == 'H' ||array[i] == 'Li' ||array[i] == 'Na' ||array[i] =='K'||array[i] =='Rb'||array[i] == 'Cs'||array[i] == 'Fr'||array[i] == 'Be'
||array[i] == 'Mg'||array[i] ==  'Ca'||array[i] == 'Sr'|| array[i] =='Ba'|| array[i] =='Ra'){
	document.getElementById("wrapper").innerHTML += "<div class=" + elements[array[i]]['color'] + " style=\"top:" + (Math.floor(i/19)*45) + "px;left:"
	 + (Math.floor(i%19)*45) + "px\">" + elements[array[i]]['number'] + '<br><span class=\"letter\">' + array[i] + '</span><br>' + elements[array[i]]['weight'] + "</div>";
	
	
	
}

else 
{	document.getElementById("wrapper").innerHTML += "<div class=" + elements[array[i]]['color'] + " style=\"top:" + (Math.floor(i/19)*45) + "px;left:"
	 + (Math.floor(i%19)*45 + 15) + "px\">" + elements[array[i]]['number'] + '<br><span class=\"letter\">' + array[i] + '</span><br>' + elements[array[i]]['weight'] 
	 + "</div>";
		
	
}

}

document.getElementById("wrapper").innerHTML += "<span class=\"text\" style=\"top: 380px; left: 30px\">*Lanthanoids &nbsp;&nbsp;&nbsp;&nbsp;*</span>";

document.getElementById("wrapper").innerHTML += "<span class=\"text\" style=\"top: 425px; left: 30px\">**Actinoids &nbsp;&nbsp;&nbsp;&nbsp;**</span>";



var arr2 = ['La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb',
			'Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No'];


for (i = 0; i<arr2.length; i++)
{
		document.getElementById("wrapper").innerHTML += "<div class=" + elements[arr2[i]]['color'] + " style=\"top:" + (Math.floor(i/14)*45 + 380) + "px;left:"
	 + (Math.floor(i%14)*45 +150) + "px\">" + elements[arr2[i]]['number'] + '<br><span class=\"letter\">' + arr2[i] + '</span><br>' + elements[arr2[i]]['weight'] + "</div>";
	 

		
	
	
}









var elementMap = [
	'G',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,
	1,'H','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','He',
	2,'Li','Be','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','B','C','N','O','F','Ne',
	3,'Na','Mg','SP','SP','SP','SP','SP','SP','SP','SP','SP','SP','Al','Si','P','S','Cl','Ar',
	4,'K','Ca','Sc','Ti','V','Cr','Mn','Tc','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr',
	5,'Rb','Sr','Y','Zr','Nb','Mo','Tc','Re','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I', 'Xe',
	6,'Cs','Ba','Lu','Hf','Ta','W','Re','Bh','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn',
	7,'Fr','Ra','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Uut','Fl','Uup','Lv','Uus','Uuo',
	'SP','LN','SP','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','SP','SP',
	'SP','AC','SP', 'Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','SP','SP'
];
var nonElementContent = {
	'G' : 'Group',
	'LN' : '*Lanthanoids',
	'AC' : '**Actinoids'
};
function addElement(elementClass, topOffset, leftOffset, content){
	content = content || '';
	document.getElementById("wrapper").innerHTML += '<div class="'+elementClass+'" style="top:'+topOffset+'px; left:'+leftOffset+'px;">'+content+'</div>';
}
function generateElementContent(number, symbol, weight){
	return number + '<br><span class="letter">' + symbol + '</span><br>' + weight;
}
document.addEventListener("DOMContentLoaded", function() {	 
	for (var i=0 ; i<elementMap.length ; i++) {
		var row = Math.floor(i/19);
		var column = Math.floor(i%19);
		var columnOffset = column>2 ? 15 : 0;
		var rowOffset = row>7 ? 20: 0;
		if (Number.isInteger(elementMap[i])) {
			// Display Number
			addElement('block heading', row*45, column*45 + columnOffset, elementMap[i]);
		}	
		else if (nonElementContent[elementMap[i]]) {
			// Display NonElement Content
			addElement('block heading', row*45 + rowOffset, column*45 + columnOffset, nonElementContent[elementMap[i]]);
		}
		else if (elementMap[i]!=='SP'){	
			// Add Element (empty spaces will be ignored)
			var content = generateElementContent(elements[elementMap[i]].number, elementMap[i], elements[elementMap[i]].weight);
			addElement('block element ' + elements[elementMap[i]].color, row*45 + rowOffset, column*45 + columnOffset, content);
		}
	}
});
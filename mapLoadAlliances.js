$('img[src="img/del.gif"]').parent().parent().remove();

allies = [];

var alliesList = [["61","#4986e7"],["1","#3c3c3c"],["14","#cc00cc"],["170","#f691b2"],["253","#fad165"],["60","#7bd148"],["32","#ff7537"],["194","#ff7537"],["367","#f691b2"],["37","#ff0000"],["33","#33ffff"],["423","#33ffff"],["378","#ffffff"]];

for (i = alliesList .length; i--;) {
  const ally = $('option[value=' + alliesList[i][0] + ']');
  addAlly(alliesList[i][0], alliesList[i][1], ally[ally.length - 1].text);
}

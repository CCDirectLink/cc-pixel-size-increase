document.body.addEventListener('modsLoaded', function() {
	const MAX_PIXEL_SIZE = 9;
	addPixelSizeOption(MAX_PIXEL_SIZE);
});

function addPixelSizeOption(number) {
	let group = ig.lang.labels.sc.gui.options["pixel-size"].group;
	let numberGap = number - group.length;
	if(numberGap <= 0)
		return;
	let baseNumber = group.length;
	let i = 1;
	while(numberGap > 0) {
		cc.sc.OPTIONS_DEFINITION["pixel-size"].data["BBB" + i] = baseNumber + i - 1;
		group.push((baseNumber + i).toString())
		i++;
		numberGap--;
	}
}
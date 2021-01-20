var browserName=navigator.appName;
var platformName=navigator.platform;
var userAgent=navigator.userAgent;
var screenW=screen.width;
var screenH=screen.height;
var specificBrowser;
var mapSizeX = 0;
var mapSizeY = 0;
var mountainTopSeeds = 0;
var numContinents = 0;
var goodSeedLocation = 0;
var mountainTopX = Math.round(mapSizeX / 2);
var mountainTopY = Math.round(mapSizeY / 2);
var mapArrayWorld = new Array(0);
var mapArrayMaster = new Array(0);
var mapArrayDev = new Array(0);
var mapArrayDev2 = new Array(0);
var growth = new Array(20);
var curve = new Array(20);
var slopeString = "";
var countInitializations = 0;
var landGrowthDiameter = 0;
var negativeLandGrowthDiameter = 0;
var iterationCount = 0;
var mapString = "";
var squareSource = "";
var j=0;
var k=0;
var p=0;
var q=0;
var x=0;
var y=0;
var z=0;
var landCharacter="";
var plotCount = 0;
var rangeDirection = "";
var oldRangeDirection = "";
var rangeSteps = 0;
var rangeLengthPct = 0;
var rangeLength = 0;
var directionApproved = 0;
var mountainosity = 0;
var numRanges = 0;
var rangeSpawnPointOkay = 0;
var circleShiftX = 0;
var circleShiftY = 0;
var waterLevel = 6;
var uniformity = 100;
var drillDown = 0;
var rangeFirstPreviousDirection = "";
var rangeSecondPreviousDirection = "";
var rangeThirdPreviousDirection = "";
var rangeFourthPreviousDirection = "";
var rangeFifthPreviousDirection = "NOTHING";
var checkboxChance = 50;
var continentsSelected = 0;
var noContinentsSelected = 0;
var drawResolutionFactor = 0;
var xvv;
var yvv;
var xbb;
var ybb;
var buttonAbout = 0;
var buttonCheckAllBoxes = 0;
var buttonCheckSlopeAngle = 0;
var buttonClearContinents = 0;
var buttonCreateShallows = 0;
var buttonCreateBeaches = 0;
var buttonAddRiver = 0;
var buttonCreateWorld = 0;
var buttonDisplayWaiting = 0;
var displayWaitingOn = 0;
var buttonDrawMap = 0;
var doDrawMap = 0;
var buttonEliminateRadicals = 0;
var buttonEraseShallows = 0;
var buttonInstructions = 0;
var buttonLowerWaterLevel = 0;
var buttonPresetWorld = 0;
var buttonRaiseWaterLevel = 0;
var buttonRandomLand = 0;
var growthCurveSet = 0;
var mountainRangesSeeded = 0;
var levelCompleted = 0;
var doClearSpaces = 0;
var spacesCleared = 0;
var doCheckForContinentSelection = 0;
var continentsAreSelected = 0;
var doGetValues = 0;
var gotValues = 0;
var doInitWorldArrays = 0;
var worldArraysInitialized = 0;
var doSetGrowthCurve = 0;
var growthCurveSet = 0;
var doSeedRanges = 0;
var mountainRangesSeeded = 0;
var doGrowMountain = 0;
var levelCreated = 0;
var doPrintMountain = 0;
var mountainPrinted = 0;
var turnOffWaiting = 0;
var doCreateWorld = 0;
var hoursStart = 0;
var minutesStart = 0;
var secondsStart = 0;
var worldInMemory = 0;
var onlyCheckingSlope = 0;
var setAPreset = 0;
var buttonPreset1 = 0;
var buttonPreset2 = 0;
var buttonPreset3 = 0;
var buttonPreset4 = 0;
var presetString = "";
var hillLengthFactor = 0;
var hillCurvynessFactor = 0;
var riverX = 0;
var riverY = 0;
var newRiverX = 0;
var newRiverY = 0;
var goodRiverStartPoint = 0;
var directionOkay = 0;
var riverCurvynessFactor = 0;
var hitWater = 0;
var maybeStuck = 0;
var landTile = "";
var landTileValue = 0;
var lastDirectionChosen = 0;
var numberOfShallows = 0;
var numberOfBeaches = 0;
var riverCurvyness = 0;
var numberOfRivers = 0;
var doAddShallows = 0;
var doCreateShallows = 0;
var doCreateBeaches = 0;
var doAddRiver = 0;
var doSeedVolcanoes = 0;
var volcanoCount = 0;
var buttonCreateLavaFlows = 0;
var thisIsLava = 0;
var volcanoXArray = new Array;
var volcanoYArray = new Array;
var numberLavaFlows = 0;
var doCreateLavaFlows = 0;
var lavaFlowCount = 0;
var editorButton = 0;
var editorButtonCount = 0;
var editorError = 0;
var editorArray = new Array(0);
var arraySquare = "";
var arrayTile = "";
var doLocateMe = 0;
var selectedTerrain = "";
var levelChanged = 0;
var editorTextString = "";
var tileChangeX = 0;
var tileChangeY = 0;
var inEditor = 0;
var inBuilder = 0;
function main()
{
	setTimeout("main();",100);
	if (document.myform.field5.value == 0 ||
		document.myform.field6.value == 0 ||
		document.myform.levelsToRunInput.value == 0 ||
		document.myform.field8.value == 0 ||
		document.myform.hillLengthInput.value == 0 ||
		document.myform.hillCurvynessInput.value == 0 ||
		document.myform.landSpread.value == 0 ||
		document.myform.field16.value == 0 ||
		document.myform.field18.value == 0 ||
		isNaN(document.myform.field5.value) ||
		isNaN(document.myform.field6.value) ||
		isNaN(document.myform.levelsToRunInput.value) ||
		isNaN(document.myform.field8.value) ||
		isNaN(document.myform.hillLengthInput.value) ||
		isNaN(document.myform.hillCurvynessInput.value) ||
		isNaN(document.myform.landSpread.value) ||
		isNaN(document.myform.field16.value) ||
		isNaN(document.myform.field18.value))
	{
		document.myform.run.disabled=true;
		document.myform.runagainsame.disabled=true;
	}
	else
	{
		document.myform.run.disabled=false;
		document.myform.runagainsame.disabled=false;
	}
	if (document.myform.loadInput.value == 0 ||
		document.myform.widthInput.value == 0 ||
		document.myform.heightInput.value == 0 ||
		isNaN(document.myform.widthInput.value) ||
		isNaN(document.myform.heightInput.value))
	{
		document.myform.buttonLoad.disabled=true;
	}
	else
	{
		document.myform.buttonLoad.disabled=false;
	}
	if (document.myform.field12.value == 0 ||
		isNaN(document.myform.field12.value))
	{
		document.myform.checkslope.disabled=true;
	}
	else
	{
		document.myform.checkslope.disabled=false;
	}
	if (buttonAbout==1)
	{
		buttonAbout = 0;
		aboutThis();
	}
	else if (buttonCheckSlopeAngle==1)
	{
	}
	else if (buttonRandomLand==1)
	{
	}
	else if (buttonCheckAllBoxes==1)
	{
	}
	else if (buttonPresetWorld==1)
	{
		buttonPresetWorld = 0;
		presetWorld();
	}
	else if (buttonClearContinents==1)
	{
	}
	else if (turnOffWaiting==1)
	{
		turnOffWaiting = 0;
		document.getElementById("waiting").style.display="none";
		setTimeout("displayWaiting();",100);
	}
	else if (mountainPrinted==1)
	{
		mountainPrinted = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hoursStart + ":" + minutesStart + ":" + secondsStart + " / " + hours + ":" + minutes + ":" + seconds + " - World printed.";
		document.myform.fieldError.value = document.myform.fieldError.value + "\nLand levels displayed: " + (waterLevel - 1);
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		document.getElementById("waiting").style.display="none";
		buttonDisplayWaiting = 1;
		turnOffWaiting = 1;
		worldInMemory=1;
		enableAllButtons();
	}
	else if (doPrintMountain==1)
	{
		doPrintMountain = 0;
		printMountain();
	}
	else if (levelCreated==1)
	{
		levelCreated = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Level " + z + " created.";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		if (z==numberLevels)
		{
			doGrowMountain = 0;
			doPrintMountain = 1;
		}
		else
		{
			z = z + 1;
		}
	}
	else if (doGrowMountain==1)
	{
		doGrowMountain = 0;
		growMountain();
	}
	else if (doCreateLavaFlows==1)
	{
		addLavaFlow();
		if (numberLavaFlows==0)
		{
			doCreateLavaFlows = 0;
		}
	}
	else if (buttonCreateLavaFlows==1)
	{
		buttonCreateLavaFlows = 0;
		numberLavaFlows = document.myform.numberFlowsInput.value;
		doCreateLavaFlows = 1;
	}
	else if (doSeedVolcanoes==1)
	{
		seedVolcanoes();
		if (numberVolcanoes==0)
		{
			doSeedVolcanoes = 0;
			doGrowMountain = 1;
		}
	}
	else if (mountainRangesSeeded==1)
	{
		mountainRangesSeeded = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Mountain ranges seeded.";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		if (numberVolcanoes >= 1)
		{
			doSeedVolcanoes = 1;
		}
		else
		{
			doGrowMountain = 1;
		}
	}
	else if (doSeedRanges==1)
	{
		doSeedRanges = 0;
		if (numRanges > 0)
		{
			z=1;
			setCharacter();
			newSeedRanges();
		}
		else
		{
			var time = new Date();
			var hours = time.getHours();
			var minutes = time.getMinutes();
			if (minutes < 10)
			{
				minutes = "0" + minutes;
			}
			var seconds = time.getSeconds();
			if (seconds < 10)
			{
				seconds = "0" + seconds;
			}
			document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - No mountain ranges.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
			z=1;
			doGrowMountain = 1;
		}
	}
	else if (growthCurveSet==1)
	{
		growthCurveSet = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Growth curve set.";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		doSeedRanges = 1;
	}
	else if (doSetGrowthCurve==1)
	{
		doSetGrowthCurve = 0;
		setGrowthCurve();
	}
	else if (worldArraysInitialized==1)
	{
		worldArraysInitialized = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Arrays initialized.";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		doSetGrowthCurve = 1;
	}
	else if (doInitWorldArrays==1)
	{
		doInitWorldArrays = 0;
		initWorldArrays();
	}
	else if (gotValues==1)
	{
		gotValues = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Values assimilated.";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		doInitWorldArrays = 1;
	}
	else if (doGetValues==1)
	{
		doGetValues = 0;
		getValues();
	}
	else if (continentsAreSelected==1)
	{
		continentsAreSelected = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Continents confirmed.";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		doGetValues = 1;
	}
	else if (doCheckForContinentSelection==1)
	{
		doCheckForContinentSelection = 0;
		checkForContinentSelection();
	}
	else if (spacesCleared==1)
	{
		spacesCleared = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + hours + ":" + minutes + ":" + seconds + " - Spaces cleared.";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		doCheckForContinentSelection = 1;
	}
	else if (doClearSpaces==1)
	{
		doClearSpaces = 0;
		clearSpaces();
	}
	else if (buttonCreateWorld==1)
	{
		closeAllDisplays();
		document.getElementById("masterDisplay").style.display="block";
		buttonCreateWorld = 0;
		onlyCheckingSlope = 0;
		var time = new Date();
		hoursStart = time.getHours();
		minutesStart = time.getMinutes();
		if (minutesStart < 10)
		{
			minutesStart = "0" + minutesStart;
		}
		secondsStart = time.getSeconds();
		if (secondsStart < 10)
		{
			secondsStart = "0" + secondsStart;
		}
		document.getElementById("waiting").style.display="block";
		document.getElementById("runagainsame").style.display="block";
		document.getElementById("areYouSure").style.display="none";
		document.getElementById("sureYes").style.display="none";
		document.getElementById("sureNo").style.display="none";
		doClearSpaces = 1;
	}
	else if (buttonEliminateRadicals==1)
	{
	}
	else if (buttonRaiseWaterLevel==1)
	{
	}
	else if (buttonLowerWaterLevel==1)
	{
	}
	else if (doDrawMap==1)
	{
		doDrawMap = 0;
		drawMap();
	}
	else if (buttonDrawMap==1)
	{
		buttonDrawMap = 0;
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}
		var seconds = time.getSeconds();
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Drawing map...";
		document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		doDrawMap = 1;
	}
	else if (doCreateShallows==1)
	{
		doCreateShallows = 0;
		createShallows();
		shallowsCount = shallowsCount + 1;
		if (shallowsCount==1)
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n"+shallowsCount+" shallow created.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n"+shallowsCount+" shallows created.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		if (shallowsCount < numberShallows)
		{
			doCreateShallows = 1;
		}
	}
	else if (buttonCreateShallows==1)
	{
		buttonCreateShallows = 0;
		shallowsCount = 0;
		numberShallows = document.myform.numberShallowsInput.value;
		if (numberShallows==0)
		{
			numberShallows = 1;
		}
		doCreateShallows = 1;
	}
	else if (buttonEraseShallows==1)
	{
	}
	else if (doCreateBeaches==1)
	{
		doCreateBeaches = 0;
		createBeaches();
		beachCount = beachCount + 1;
		if (beachCount==1)
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n"+beachCount+" beach created.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n"+beachCount+" beaches created.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		if (beachCount < numberBeaches)
		{
			doCreateBeaches = 1;
		}
	}
	else if (buttonCreateBeaches==1)
	{
		buttonCreateBeaches = 0;
		beachCount = 0;
		numberBeaches = document.myform.numberBeachesInput.value;
		if (numberBeaches==0)
		{
			numberBeaches = 1;
		}
		doCreateBeaches = 1;
	}
	else if (doAddRiver==1)
	{
		doAddRiver = 0;
		addRiver();
		riverCount = riverCount + 1;
		if (riverCount==1)
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n"+riverCount+" river created.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n"+riverCount+" rivers created.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		if (riverCount < numberRivers)
		{
			doAddRiver = 1;
		}
	}
	else if (buttonAddRiver==1)
	{
		buttonAddRiver = 0;
		riverCount = 0;
		numberRivers = document.myform.numberRiversInput.value;
		if (numberRivers==0)
		{
			numberRivers = 1;
		}
		doAddRiver = 1;
	}
	else if (buttonDisplayWaiting==1)
	{
		buttonDisplayWaiting = 0;
		displayWaiting();
	}
	else if (growthCurveSet==1)
	{
	}
	else if (mountainRangesSeeded==1)
	{
	}
}
function seedVolcanoes()
{
	halfVolcanoSize = Math.round(volcanoSize * 0.5);
	randomNumber=Math.floor(Math.random()*halfVolcanoSize)+1;
	volcanoSizeSpecific = volcanoSize - randomNumber;
	volcanoRadius = Math.round(volcanoSizeSpecific / 2);
	negativeVolcanoRadius = volcanoRadius - (volcanoRadius * 2);
	volcanoSeedTries = 0;
	goodVolcanoSeedPoint = 0;
	while (goodVolcanoSeedPoint==0 && volcanoSeedTries <= 10000)
	{
		volcanoSeedTries = volcanoSeedTries + 1;
		volcanoX = randomNumber=Math.floor(Math.random()*mapSizeX)+1;
		volcanoY = randomNumber=Math.floor(Math.random()*mapSizeY)+1;
		if (mapArrayWorld[volcanoX][volcanoY][1] == ".")
		{
			volcanoSeedPointTooClose = 0;
			for (q=(negativeVolcanoRadius * 2);q<=(volcanoRadius * 2);q++)
			{
				s=q;
				for (p=(negativeVolcanoRadius * 2);p<=(volcanoRadius * 2);p++)
				{
					r=p;
					if (mapArrayWorld[volcanoX+r][volcanoY+s][1] == "%")
					{
						volcanoSeedPointTooClose = 1;
					}
				}
			}
			if (volcanoSeedPointTooClose==0)
			{
				goodVolcanoSeedPoint = 1;
			}
		}
	}
	if (goodVolcanoSeedPoint==1)
	{
		volcanoCount = volcanoCount + 1;
		volcanoXArray[volcanoCount] = volcanoX;
		volcanoYArray[volcanoCount] = volcanoY;
		for (q=negativeVolcanoRadius;q<=volcanoRadius;q++)
		{
			s=q;
			for (p=negativeVolcanoRadius;p<=volcanoRadius;p++)
			{
				r=p;
				if ((Math.abs((r * r)+(s * s))) <= ((volcanoRadius) * (volcanoRadius)))
				{
					mapArrayWorld[volcanoX+r][volcanoY+s][1] = "%";
				}
			}
		}
		for (y=1;y<=mapSizeY;y++)
		{
			for (x=1;x<=mapSizeX;x++)
			{
				if (mapArrayWorld[x][y][1] == "%")
				{
					for (q=(-1);q<=1;q++)
					{
						s=q;
						for (p=(-1);p<=1;p++)
						{
							r=p;
							if (mapArrayWorld[x+r][y+s][1] != "." && mapArrayWorld[x+r][y+s][1] != "%")
							{
								mapArrayWorld[x+r][y+s][1] = ".";
							}
						}
					}
				}
			}
		}
		if (volcanoCount==1)
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n1 volcano created.";
		}
		else
		{
			document.myform.fieldError.value = document.myform.fieldError.value + "\n" + volcanoCount + " volcanoes created.";
		}
	}
	else
	{
		document.myform.fieldError.value = document.myform.fieldError.value + "\nVolcano aborted! (No good seed point.)";
	}
	document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
	numberVolcanoes = numberVolcanoes - 1;
}
function clearSpaces()
{
	mapString = "";
	document.getElementById('field2').innerHTML = "";
	document.myform.fieldError.value = "";
	document.getElementById("drawDisplay").style.display="none";
	spacesCleared = 1;
}
function checkForContinentSelection()
{
	continentsSelected = 0;
	for (gh=1;gh<=100;gh++)
	{
		if (document.getElementById("checkbox"+gh).checked)
		{
			continentsSelected = 1;
		}
	}
	if (continentsSelected==1)
	{
		continentsAreSelected = 1;
	}
	else
	{
		continentsAreSelected = 2;
	}
}
function populateTestData()
{
	document.myform.field5.value = 300;
	document.myform.field6.value = 300;
	document.myform.levelsToRunInput.value = 15;
	document.myform.field8.value = 25;
	document.myform.hillLengthInput.value = 5;
	document.myform.hillCurvynessInput.value = 80;
	document.myform.landSpread.value = 110;
	document.myform.field12.value = 130;
	document.myform.field14.value = 30;
	document.myform.field16.value = 8;
	document.myform.field18.value = 25;
	presetString = localStorage.preset1;
	for (gh=0;gh<=99;gh++)
	{
		if (presetString.substr(gh,1)=="0")
		{
			document.getElementById("checkbox"+(gh+1)).checked = false;
		}
		else if (presetString.substr(gh,1)=="1")
		{
			document.getElementById("checkbox"+(gh+1)).checked = true;
		}
	}
}
function getValues()
{
	iterationCount = 0;
	mapSizeX = document.myform.field5.value;
	mapSizeY = document.myform.field6.value;
	mountainTopSeeds = document.myform.field8.value;
	mountainosity = ((document.myform.field12.value) / 100);
	numRanges = document.myform.field14.value;
	rangeLengthPct = document.myform.field16.value;
	uniformity = document.myform.field18.value;
	landSpreadFactor = ((document.myform.landSpread.value) / 100);
	numberLevels = document.myform.levelsToRunInput.value;
	hillLengthFactor = Math.round(((document.myform.hillLengthInput.value) / 100) * ((mapSizeX / 2) + (mapSizeY / 2)));
	hillCurvynessFactor = document.myform.hillCurvynessInput.value;
	numberVolcanoes = document.myform.numberVolcanoesInput.value;
	volcanoSize = document.myform.volcanoSizeInput.value;
	volcanoCount = 0;
	gotValues = 1;
}
function createWorld()
{
	if (continentsSelected == 1)
	{
	}
	else
	{
		document.myform.fieldError.value = "NO CONTINENT AREAS SELECTED!";
	}
	buttonDisplayWaiting = 1;
}
function initWorldArrays()
{
	for (x=1;x<=20;x++)
	{
		growth[x] = 0;
	}
	for (x=1;x<=mapSizeX;x++)
	{
		mapArrayMaster[x] = new Array(mapSizeY);
		mapArrayDev[x] = new Array(mapSizeY);
		mapArrayDev2[x] = new Array(mapSizeY);
	}
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayMaster[x][y]="&nbsp;";
			mapArrayDev[x][y]="&nbsp;";
		}
	}
	for (x=1;x<=mapSizeX;x++)
	{
		mapArrayWorld[x] = new Array(mapSizeY);
	}
	for (x=1;x<=mapSizeX;x++)
	{
		for (y=1;y<=mapSizeY;y++)
		{
			mapArrayWorld[x][y] = new Array(21);
		}
	}
	for (x=1;x<=mapSizeX;x++)
	{
		for (y=1;y<=mapSizeY;y++)
		{
			for (z=1;z<=21;z++)
			{
				mapArrayWorld[x][y][z] = "empty";
				countInitializations = countInitializations + 1;
			}
		}
	}
	worldArraysInitialized = 1;
}
function growMountain()
{
	levelComplete = 0;
	notEmptyTiles = 0;
	setCharacter();
	if (z==1 && numRanges==0)
	{
		newSeedMountainTops();
	}
	else if (levelComplete==1)
	{
	}
	else
	{
		newSeedMountainTops();
		for (y=1;y<=mapSizeY;y++)
		{
			for (x=1;x<=mapSizeX;x++)
			{
				if (mapArrayWorld[x][y][z-1] != "empty")
				{
					notEmptyTiles = notEmptyTiles + 1;
					if ((z>2) && (notEmptyTiles == (mapSizeX * mapSizeY)))
					{
						levelComplete = 1;
					}
					randomNumber=Math.floor(Math.random()*100)+1;
					if (randomNumber <= uniformity || z==2)
					{
						for (k=-1;k<=1;k++)
						{
							m=k;
							for (j=-1;j<=1;j++)
							{
								l=j;
								if ((x+l) <= 1 || (x+l) >= mapSizeX)		{l = 0;}
								if ((y+m) <= 1 || (y+m) >= mapSizeY)		{m = 0;}
								if (mapArrayWorld[x+l][y+m][z-1] == "empty")
								{
									adjustGrowthDiameter();
									for (q=negativeLandGrowthDiameter;q<=landGrowthDiameter;q++)
									{
										s=q;
										for (p=negativeLandGrowthDiameter;p<=landGrowthDiameter;p++)
										{
											r=p;
											if ((x+r) <= 1 || (x+r) >= mapSizeX)		{r = 0;}
											if ((y+s) <= 1 || (y+s) >= mapSizeY)		{s = 0;}
											if ((Math.abs((r * r)+(s * s))) <= ((landGrowthDiameter) * (landGrowthDiameter)))
											{
												for (drillDown = z;drillDown <= 20;drillDown++)
												{
													mapArrayWorld[x+r][y+s][drillDown] = landCharacter;
												}
												iterationCount = iterationCount + 1;
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
	}
	levelCreated = 1;
	if (z <= numberLevels)
	{
		doGrowMountain = 1;
	}
}
function setDrillDownCharacter()
{
	if (z==1)		{landCharacter=".";}
	else if (z==2)	{landCharacter=":";}
	else if (z==3)	{landCharacter=";";}
	else if (z==4)	{landCharacter="^";}
	else if (z==5)	{landCharacter="=";}
	else if (z==6)	{landCharacter="+";}
	else if (z==7)	{landCharacter="?";}
	else if (z==8)	{landCharacter="I";}
	else if (z==9)	{landCharacter="C";}
	else if (z==10)	{landCharacter="J";}
	else if (z==11)	{landCharacter="Z";}
	else if (z==12)	{landCharacter="*";}
	else if (z==13)	{landCharacter="G";}
	else if (z==14)	{landCharacter="A";}
	else if (z==15)	{landCharacter="O";}
	else if (z==16)	{landCharacter="D";}
	else if (z==17)	{landCharacter="B";}
	else if (z==18)	{landCharacter="E";}
	else if (z==19)	{landCharacter="X";}
	else if (z==20)	{landCharacter="N";}
}
function newSeedRanges()
{
	for (r=1;r<=numRanges;r++)
	{
		rangeLength = Math.round(Math.floor(Math.random()*(((rangeLengthPct / 100)*2)*mapSizeX)))+1;
	
		rangeSpawnPointOkay = 0;
		while (rangeSpawnPointOkay==0)
		{
			adjustedMapSizeX = Math.round(mapSizeX * 0.8);
			adjustedMapSizeY = Math.round(mapSizeY * 0.8);
			mountainTopX = Math.floor(Math.random()*adjustedMapSizeX)+1;
			mountainTopY = Math.floor(Math.random()*adjustedMapSizeY)+1;
			mountainTopX = mountainTopX + Math.round(mapSizeX * 0.1);
			mountainTopY = mountainTopY + Math.round(mapSizeY * 0.1);
			checkSeedLocation();
			if (goodSeedLocation == 1)
			{
				rangeSpawnPointOkay = 1;
			}
		}
	
	
		randomNumberA = Math.floor(Math.random()*100)+1;
		randomNumberB = Math.floor(Math.random()*100)+1;
		coordinateX = randomNumberA - 50;
		coordinateY = randomNumberB - 50;
	
	
	
	
		rangeLeftPct = 50 - coordinateX;
		rangeRightPct = 50+ coordinateX;
		rangeTopPct = 50 + coordinateY;
		rangeBottomPct = 50 - coordinateY;
		rangeTotalPct = (rangeTopPct + rangeBottomPct + rangeLeftPct + rangeRightPct);
		for (rangeSteps=1;rangeSteps<=rangeLength;rangeSteps++)
		{
			directionApproved = 0;
			while (directionApproved==0)
			{
		
				rangeTopRoll = Math.floor(Math.random()*(rangeTopPct))+1;
				rangeBottomRoll = Math.floor(Math.random()*(rangeBottomPct))+1;
				rangeLeftRoll = Math.floor(Math.random()*(rangeLeftPct))+1;
				rangeRightRoll = Math.floor(Math.random()*(rangeRightPct))+1;
			
				if (rangeTopRoll > rangeBottomRoll &&
					rangeTopRoll > rangeLeftRoll &&
					rangeTopRoll > rangeRightRoll)
				{
				
					rangeDirection = "up";
				}
				else if (rangeBottomRoll > rangeLeftRoll &&
						 rangeBottomRoll > rangeRightRoll)
				{
				
					rangeDirection = "down";
				}
				else if (rangeLeftRoll > rangeRightRoll)
				{
				
					rangeDirection = "left";
				}
				else
				{
				
					rangeDirection = "right";
				}
				if ((rangeDirection != "up" && oldRangeDirection != "down") ||
					(rangeDirection != "down" && oldRangeDirection != "up") ||
					(rangeDirection != "left" && oldRangeDirection != "right") ||
					(rangeDirection != "right" && oldRangeDirection != "left"))
				{
					if (rangeDirection == "up")
					{
						mountainTopX = mountainTopX;
						mountainTopY = mountainTopY - 1;
						checkSeedLocation();
						if (goodSeedLocation==1)
						{
							mapArrayWorld[mountainTopX][mountainTopY][z] = landCharacter;
							oldRangeDirection = rangeDirection;
							setRangePreviousDirections();
							directionApproved = 1;
						}
						else
						{
							mountainTopY = mountainTopY + 1;
						}
					}
					else if (rangeDirection == "down")
					{
						mountainTopX = mountainTopX;
						mountainTopY = mountainTopY + 1;
						checkSeedLocation();
						if (goodSeedLocation==1)
						{
							mapArrayWorld[mountainTopX][mountainTopY][z] = landCharacter;
							oldRangeDirection = rangeDirection;
							setRangePreviousDirections();
							directionApproved = 1;
						}
						else
						{
							mountainTopY = mountainTopY - 1;
						}
					}
					else if (rangeDirection == "left")
					{
						mountainTopX = mountainTopX - 1;
						mountainTopY = mountainTopY;
						checkSeedLocation();
						if (goodSeedLocation==1)
						{
							mapArrayWorld[mountainTopX][mountainTopY][z] = landCharacter;
							oldRangeDirection = rangeDirection;
							setRangePreviousDirections();
							directionApproved = 1;
						}
						else
						{
							mountainTopX = mountainTopX + 1;
						}
					}
					else if (rangeDirection == "right")
					{
						mountainTopX = mountainTopX + 1;
						mountainTopY = mountainTopY;
						checkSeedLocation();
						if (goodSeedLocation==1)
						{
							mapArrayWorld[mountainTopX][mountainTopY][z] = landCharacter;
							oldRangeDirection = rangeDirection;
							setRangePreviousDirections();
							directionApproved = 1;
						}
						else
						{
							mountainTopX = mountainTopX - 1;
						}
					}
				}
			}
		}
	}
	mountainRangesSeeded = 1;
}
function setRangePreviousDirections()
{
	rangeFifthPreviousDirection = rangeFourthPreviousDirection;
	rangeFourthPreviousDirection = rangeThirdPreviousDirection;
	rangeThirdPreviousDirection = rangeSecondPreviousDirection;
	rangeSecondPreviousDirection = rangeFirstPreviousDirection;
	rangeFirstPreviousDirection = rangeDirection;
	if ((rangeFifthPreviousDirection == rangeFourthPreviousDirection) &&
		(rangeFourthPreviousDirection == rangeThirdPreviousDirection) &&
		(rangeThirdPreviousDirection == rangeSecondPreviousDirection) &&
		(rangeSecondPreviousDirection == rangeFirstPreviousDirection))
	{
	
	
		randomNumberA = Math.floor(Math.random()*100)+1;
		randomNumberB = Math.floor(Math.random()*100)+1;
		coordinateX = randomNumberA - 50;
		coordinateY = randomNumberB - 50;
	
	
	
	
		rangeLeftPct = 50 - coordinateX;
		rangeRightPct = 50+ coordinateX;
		rangeTopPct = 50 + coordinateY;
		rangeBottomPct = 50 - coordinateY;
		rangeTotalPct = (rangeTopPct + rangeBottomPct + rangeLeftPct + rangeRightPct);
	}
}
function newSeedMountainTops()
{
	mountainTopSeeds = mountainTopSeeds * landSpreadFactor;
	if (z > 3)
	{
		for (v=1;v<=mountainTopSeeds;v++)
		{
			goodSeedLocation = 0;
			while (goodSeedLocation == 0 && noContinentsSelected == 0)
			{
				adjustedMapSizeX = Math.round(mapSizeX * 0.8);
				adjustedMapSizeY = Math.round(mapSizeY * 0.8);
				mountainTopX = Math.floor(Math.random()*adjustedMapSizeX)+1;
				mountainTopY = Math.floor(Math.random()*adjustedMapSizeY)+1;
				mountainTopX = mountainTopX + Math.round(mapSizeX * 0.1);
				mountainTopY = mountainTopY + Math.round(mapSizeY * 0.1);
				checkSeedLocation();
			}
			if (goodSeedLocation == 1)
			{
				mapArrayWorld[mountainTopX][mountainTopY][z]=landCharacter;
				oldDirection = Math.floor(Math.random()*8)+1;
				realHillLength = Math.floor(Math.random()*hillLengthFactor)+1;
				for (asd=1;asd<=realHillLength;asd++)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber <= hillCurvynessFactor)
					{
					
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if      (oldDirection == 1)		{newDirection = 4;}
							else if (oldDirection == 2)		{newDirection = 1;}
							else if (oldDirection == 3)		{newDirection = 2;}
							else if (oldDirection == 4)		{newDirection = 6;}
							else if (oldDirection == 5)		{newDirection = 3;}
							else if (oldDirection == 6)		{newDirection = 7;}
							else if (oldDirection == 7)		{newDirection = 8;}
							else if (oldDirection == 8)		{newDirection = 5;}
						}
						else
						{
						
							if      (oldDirection == 1)		{newDirection = 2;}
							else if (oldDirection == 2)		{newDirection = 3;}
							else if (oldDirection == 3)		{newDirection = 5;}
							else if (oldDirection == 4)		{newDirection = 1;}
							else if (oldDirection == 5)		{newDirection = 8;}
							else if (oldDirection == 6)		{newDirection = 4;}
							else if (oldDirection == 7)		{newDirection = 6;}
							else if (oldDirection == 8)		{newDirection = 7;}
						}
					}
					else
					{
					
						newDirection = oldDirection;
					}
					if (newDirection == 1)
					{
						mountainTopX = mountainTopX - 1;
						mountainTopY = mountainTopY - 1;
						if (mountainTopX < (mapSizeX * 0.1))
						{
							mountainTopX = (mapSizeX * 0.1);
						}
						if (mountainTopY < (mapSizeY * 0.1))
						{
							mountainTopY = (mapSizeY * 0.1);
						}
						oldDirection = 1;
					}
					else if (newDirection == 2)
					{
						mountainTopX = mountainTopX;
						mountainTopY = mountainTopY - 1;
						if (mountainTopY < (mapSizeY * 0.1))
						{
							mountainTopY = (mapSizeY * 0.1);
						}
						oldDirection = 2;
					}
					else if (newDirection == 3)
					{
						mountainTopX = mountainTopX + 1;
						mountainTopY = mountainTopY - 1;
						if (mountainTopX > (mapSizeX * 0.9))
						{
							mountainTopX = (mapSizeX * 0.9);
						}
						if (mountainTopY < (mapSizeY * 0.1))
						{
							mountainTopY = (mapSizeY * 0.1);
						}
						oldDirection = 3;
					}
					else if (newDirection == 4)
					{
						mountainTopX = mountainTopX - 1;
						mountainTopY = mountainTopY;
						if (mountainTopX < (mapSizeX * 0.1))
						{
							mountainTopX = (mapSizeX * 0.1);
						}
						oldDirection = 4;
					}
					else if (newDirection == 5)
					{
						mountainTopX = mountainTopX + 1;
						mountainTopY = mountainTopY;
						if (mountainTopX > (mapSizeX * 0.9))
						{
							mountainTopX = (mapSizeX * 0.9);
						}
						oldDirection = 5;
					}
					else if (newDirection == 6)
					{
						mountainTopX = mountainTopX - 1;
						mountainTopY = mountainTopY + 1;
						if (mountainTopX < (mapSizeX * 0.1))
						{
							mountainTopX = (mapSizeX * 0.1);
						}
						if (mountainTopY > (mapSizeY * 0.9))
						{
							mountainTopY = (mapSizeY * 0.9);
						}
						oldDirection = 6;
					}
					else if (newDirection == 7)
					{
						mountainTopX = mountainTopX;
						mountainTopY = mountainTopY + 1;
						if (mountainTopY > (mapSizeY * 0.9))
						{
							mountainTopY = (mapSizeY * 0.9);
						}
						oldDirection = 7;
					}
					else if (newDirection == 8)
					{
						mountainTopX = mountainTopX + 1;
						mountainTopY = mountainTopY + 1;
						if (mountainTopX > (mapSizeX * 0.9))
						{
							mountainTopX = (mapSizeX * 0.9);
						}
						if (mountainTopY > (mapSizeY * 0.9))
						{
							mountainTopY = (mapSizeY * 0.9);
						}
						oldDirection = 7;
					}
					mapArrayWorld[mountainTopX][mountainTopY][z]=landCharacter;
					mapArrayWorld[mountainTopX+1][mountainTopY][z]=landCharacter;
					mapArrayWorld[mountainTopX][mountainTopY+1][z]=landCharacter;
					mapArrayWorld[mountainTopX+1][mountainTopY+1][z]=landCharacter;
				}
			}
		}
	}
}
function printLevelComplete()
{
	document.myform.field3.value = document.myform.field3.value + "level " + z + " complete\n";
}
function checkSlope()
{
	closeAllDisplays();
	document.getElementById("slopeDisplay").style.display="block";
		slopeString = "";
		mountainosity = ((document.myform.field12.value) / 100);
		setGrowthCurve();
		curve[1] = 1;
		curve[2] = Math.round(growth[2]);
		curve[3] = Math.round(growth[3]);
		curve[4] = Math.round(growth[4]);
		curve[5] = Math.round(growth[5]);
		curve[6] = Math.round(growth[6]);
		curve[7] = Math.round(growth[7]);
		curve[8] = Math.round(growth[8]);
		curve[9] = Math.round(growth[9]);
		curve[10] = Math.round(growth[10]);
		curve[11] = Math.round(growth[11]);
		curve[12] = Math.round(growth[12]);
		curve[13] = Math.round(growth[13]);
		curve[14] = Math.round(growth[14]);
		curve[15] = Math.round(growth[15]);
		curve[16] = Math.round(growth[16]);
		curve[17] = Math.round(growth[17]);
		curve[18] = Math.round(growth[18]);
		curve[19] = Math.round(growth[19]);
		curve[20] = Math.round(growth[20]);
		levelSteps = 1;
		for (slopeCheck=1;slopeCheck<=20;slopeCheck++)
		{
			if (slopeCheck != 1)
			{
				levelSteps = levelSteps + curve[slopeCheck];
			}
			for (abcd=1;abcd<=levelSteps;abcd++)
			{
				slopeString = slopeString + "#";
			}
			slopeString = slopeString + "<br>";
		}
		document.myform.checkslope.disabled=true;
		document.myform.checkrandomboxes.disabled=true;
		document.myform.checkallboxes.disabled=true;
		document.myform.clearcheckboxes.disabled=true;
		document.myform.run.disabled=true;
		document.myform.runagainsame.disabled=true;
		document.myform.raisewater.disabled=true;
		document.myform.lowerwater.disabled=true;
		document.myform.drawMapButton.disabled=true;
		document.myform.viewTextButton.disabled=true;
		document.myform.createShallowsButton.disabled=true;
		slopeString=slopeString+"<br><INPUT TYPE='button' id='slopeOkay' Value='Okay then.' class='btn' onClick='closeSlope()' style='position:absolute; left:5px; width:125px; display:block;'><br>&nbsp;<br>";
		document.getElementById('slopeDisplayBox').innerHTML = slopeString;
}
function setGrowthCurve()
{
	growth[1] = 1;
	growth[2] = growth[1] * mountainosity;
	growth[3] = growth[2] * mountainosity;
	growth[4] = growth[3] * mountainosity;
	growth[5] = growth[4] * mountainosity;
	growth[6] = growth[5] * mountainosity;
	growth[7] = growth[6] * mountainosity;
	growth[8] = growth[7] * mountainosity;
	growth[9] = growth[8] * mountainosity;
	growth[10] = growth[9] * mountainosity;
	growth[11] = growth[10] * mountainosity;
	growth[12] = growth[11] * mountainosity;
	growth[13] = growth[12] * mountainosity;
	growth[14] = growth[13] * mountainosity;
	growth[15] = growth[14] * mountainosity;
	growth[16] = growth[15] * mountainosity;
	growth[17] = growth[16] * mountainosity;
	growth[18] = growth[17] * mountainosity;
	growth[19] = growth[18] * mountainosity;
	growth[20] = growth[19] * mountainosity;
	if (onlyCheckingSlope==0)
	{
		growthCurveSet = 1;
	}
}
function adjustGrowthDiameter()
{
	if		(z==1)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[1]));}
	else if (z==2)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[2]));}
	else if (z==3)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[3]));}
	else if (z==4)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[4]));}
	else if (z==5)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[5]));}
	else if (z==6)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[6]));}
	else if (z==7)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[7]));}
	else if (z==8)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[8]));}
	else if (z==9)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[9]));}
	else if (z==10)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[10]));}
	else if (z==11)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[11]));}
	else if (z==12)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[12]));}
	else if (z==13)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[13]));}
	else if (z==14)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[14]));}
	else if (z==15)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[15]));}
	else if (z==16)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[16]));}
	else if (z==17)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[17]));}
	else if (z==18)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[18]));}
	else if (z==19)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[19]));}
	else if (z==20)	{landGrowthDiameter=Math.round(Math.floor(Math.random()*growth[20]));}
	negativeLandGrowthDiameter = landGrowthDiameter - (landGrowthDiameter * 2);
}
function printLevel()
{
	z=20;
	setCharacter();
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (mapArrayWorld[x][y][z]=="empty")
			{
				document.myform.field2.value = document.myform.field2.value + " ";
			}
			else
			{
				document.myform.field2.value = document.myform.field2.value + landCharacter;
			}
		}
		document.myform.field2.value = document.myform.field2.value + "\n";
	}
}
function flattenMap()
{
	for (z=20;z>=1;z--)
	{
		for (y=1;y<=mapSizeY;y++)
		{
			for (x=1;x<=mapSizeX;x++)
			{
				if (mapArrayWorld[x][y][z] != "empty")
				{
					mapArrayMaster[x][y] = mapArrayWorld[x][y][z];
					mapArrayDev[x][y] = mapArrayWorld[x][y][z];
				}
			}
		}
	}
}
function differentiateOceans()
{
	mapArrayDev[1][1] = "M"
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
	for (y=mapSizeY;y>=1;y--)
	{
		for (x=mapSizeX;x>=1;x--)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
	for (x=1;x<=mapSizeX;x++)
	{
		for (y=1;y<=mapSizeY;y++)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
	for (x=mapSizeX;x>=1;x--)
	{
		for (y=mapSizeY;y>=1;y--)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
	for (y=mapSizeY;y>=1;y--)
	{
		for (x=mapSizeX;x>=1;x--)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
	for (x=1;x<=mapSizeX;x++)
	{
		for (y=1;y<=mapSizeY;y++)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
	for (x=mapSizeX;x>=1;x--)
	{
		for (y=mapSizeY;y>=1;y--)
		{
			if (mapArrayDev[x][y]=="N")
			{
				for (yy=(-1);yy<=1;yy++)
				{
					yyy = yy;
					if ((y+yyy < 1) || (y+yyy > mapSizeY))
					{
						yyy = 0;
					}
					for (xx=(-1);xx<=1;xx++)
					{
						xxx = xx;
						if ((x+xxx < 1) || (x+xxx > mapSizeX))
						{
							xxx = 0;
						}
						if (mapArrayDev[x+xxx][y+yyy]=="M")
						{
							mapArrayDev[x][y] = "M";
							yy = 1;
							xx = 1;
						}
					}
				}
			}
		}
	}
}
function printMountain()
{
	for (z=20;z>=1;z--)
	{
		for (y=1;y<=mapSizeY;y++)
		{
			for (x=1;x<=mapSizeX;x++)
			{
				if (mapArrayWorld[x][y][z] != "empty")
				{
					mapArrayMaster[x][y] = mapArrayWorld[x][y][z];
					mapArrayDev[x][y] = mapArrayWorld[x][y][z];
				}
			}
		}
	}
	differentiateOceans();
	closeAllDisplays();
	document.getElementById("masterDisplay").style.display="block";
	document.getElementById("drawMapButton").style.display="block";
	document.getElementById("viewTextButton").style.display="none";
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapString = mapString + mapArrayDev[x][y];
		}
		mapString = mapString + "<br>";
	}
	document.getElementById('field2').innerHTML = mapString;
	document.getElementById("run").style.display="none";
	document.getElementById("runagainsame").style.display="block";
	determineWaterLevel();
	mountainPrinted = 1;
}
function eliminateRadicals()
{
	for (z=1;z<=20;z++)
	{
		for (y=1;y<=mapSizeY;y++)
		{
			for (x=1;x<=mapSizeX;x++)
			{
				if (mapArrayWorld[x][y][z] != "empty")
				{
					nextToSomething = 0;
					for (qw=(-1);qw<=1;qw++)
					{
						for (er=(-1);er<=1;er++)
						{
							if ((er == 0) && (qw == 0))
							{
								er = 1;
							}
							if (mapArrayWorld[(x+er)][(y+qw)][z] != "empty")
							{
								nextToSomething = 1;
							}
						}
					}
					if (nextToSomething == 0)
					{
						mapArrayWorld[x][y][z] = "empty";
		
					}
				}
			}
		}
	}
	mapString = "";
	printMountain();
}
function eraseModifications()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev[x][y] = mapArrayMaster[x][y];
		}
	}
	setWaterLevel();
}
function raiseWaterLevel()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev[x][y] = mapArrayMaster[x][y];
		}
	}
	waterLevel = waterLevel - 1;
	if (waterLevel == 1)
	{
		waterLevel = 2;
	}
	setWaterLevel();
}
function lowerWaterLevel()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev[x][y] = mapArrayMaster[x][y];
		}
	}
	waterLevel = waterLevel + 1;
	if (waterLevel == 21)
	{
		waterLevel = 20;
	}
	setWaterLevel();
}
function eraseBeaches()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev[x][y] = mapArrayMaster[x][y];
		}
	}
	setWaterLevel();
}
function determineWaterLevel()
{
	if 		(mapArrayDev[2][2]==":")		{waterLevel = 2;}
	else if (mapArrayDev[2][2]==";")		{waterLevel = 3;}
	else if (mapArrayDev[2][2]=="^")		{waterLevel = 4;}
	else if (mapArrayDev[2][2]=="=")		{waterLevel = 5;}
	else if (mapArrayDev[2][2]=="+")		{waterLevel = 6;}
	else if (mapArrayDev[2][2]=="?")		{waterLevel = 7;}
	else if (mapArrayDev[2][2]=="I")		{waterLevel = 8;}
	else if (mapArrayDev[2][2]=="C")		{waterLevel = 9;}
	else if (mapArrayDev[2][2]=="J")		{waterLevel = 10;}
	else if (mapArrayDev[2][2]=="Z")		{waterLevel = 11;}
	else if (mapArrayDev[2][2]=="*")		{waterLevel = 12;}
	else if (mapArrayDev[2][2]=="G")		{waterLevel = 13;}
	else if (mapArrayDev[2][2]=="A")		{waterLevel = 14;}
	else if (mapArrayDev[2][2]=="O")		{waterLevel = 15;}
	else if (mapArrayDev[2][2]=="D")		{waterLevel = 16;}
	else if (mapArrayDev[2][2]=="B")		{waterLevel = 17;}
	else if (mapArrayDev[2][2]=="E")		{waterLevel = 18;}
	else if (mapArrayDev[2][2]=="X")		{waterLevel = 19;}
	else if (mapArrayDev[2][2]=="N")		{waterLevel = 20;}
}
function setWaterLevel()
{
	mapString = "";
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (waterLevel == 2 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != ".")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 3 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 4 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 5 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 6 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 7 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 8 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 9 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 10 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 11 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 12 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 13 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 14 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*" &&
				mapArrayDev[x][y] != "G")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 15 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*" &&
				mapArrayDev[x][y] != "G" &&
				mapArrayDev[x][y] != "A")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 16 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*" &&
				mapArrayDev[x][y] != "G" &&
				mapArrayDev[x][y] != "A" &&
				mapArrayDev[x][y] != "O")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 17 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*" &&
				mapArrayDev[x][y] != "G" &&
				mapArrayDev[x][y] != "A" &&
				mapArrayDev[x][y] != "O" &&
				mapArrayDev[x][y] != "D")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 18 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*" &&
				mapArrayDev[x][y] != "G" &&
				mapArrayDev[x][y] != "A" &&
				mapArrayDev[x][y] != "O" &&
				mapArrayDev[x][y] != "D" &&
				mapArrayDev[x][y] != "B")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 19 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*" &&
				mapArrayDev[x][y] != "G" &&
				mapArrayDev[x][y] != "A" &&
				mapArrayDev[x][y] != "O" &&
				mapArrayDev[x][y] != "D" &&
				mapArrayDev[x][y] != "B" &&
				mapArrayDev[x][y] != "E")
			{
				mapArrayDev[x][y] = "N";
			}
			else if (waterLevel == 20 &&
				mapArrayDev[x][y] != "%" &&
				mapArrayDev[x][y] != "." &&
				mapArrayDev[x][y] != ":" &&
				mapArrayDev[x][y] != ";" &&
				mapArrayDev[x][y] != "^" &&
				mapArrayDev[x][y] != "=" &&
				mapArrayDev[x][y] != "+" &&
				mapArrayDev[x][y] != "?" &&
				mapArrayDev[x][y] != "I" &&
				mapArrayDev[x][y] != "C" &&
				mapArrayDev[x][y] != "J" &&
				mapArrayDev[x][y] != "Z" &&
				mapArrayDev[x][y] != "*" &&
				mapArrayDev[x][y] != "G" &&
				mapArrayDev[x][y] != "A" &&
				mapArrayDev[x][y] != "O" &&
				mapArrayDev[x][y] != "D" &&
				mapArrayDev[x][y] != "B" &&
				mapArrayDev[x][y] != "E" &&
				mapArrayDev[x][y] != "X")
			{
				mapArrayDev[x][y] = "N";
			}
			else
			{
			}
		}
	}
	differentiateOceans();
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapString = mapString + mapArrayDev[x][y];
		}
		mapString = mapString + "<br>";
	}
	document.getElementById('field2').innerHTML = mapString;
	document.getElementById("setwater").style.display="none";
	document.getElementById("raisewater").style.display="block";
	document.getElementById("lowerwater").style.display="block";
	document.myform.fieldError.value = document.myform.fieldError.value + "\nLand levels displayed " + (waterLevel - 1);
	document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
}
function clearDisplay()
{
	mapString = "";
	document.getElementById('field2').innerHTML = "";
	document.myform.debug.value = "";
}
function timer()
{
	setTimeout("timer();",500);
}
function checkSeedLocation()
{
	goodSeedLocation = 0;
	if (document.myform.checkbox1.checked &&
		((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
		(mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox2.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox3.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox4.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox5.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox6.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox7.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox8.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox9.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox10.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			 (mountainTopY >= (mapSizeY * 0.1)) && (mountainTopY < ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeX * 0.2)) / 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox11.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox12.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox13.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox14.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox15.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox16.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox17.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox18.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox19.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox20.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + ((mapSizeY - (mapSizeY * 0.2)) / 10))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox21.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox22.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox23.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox24.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox25.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox26.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox27.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox28.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox29.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox30.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 2))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox31.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox32.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox33.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox34.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox35.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox36.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox37.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox38.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox39.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox40.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 3))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox41.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox42.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox43.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox44.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox45.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox46.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox47.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox48.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox49.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox50.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 4))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox51.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox52.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox53.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox54.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox55.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox56.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox57.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox58.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox59.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox60.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 5))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox61.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox62.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox63.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox64.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox65.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox66.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox67.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox68.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox69.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox70.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 6))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox71.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox72.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox73.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox74.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox75.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox76.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox77.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox78.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox79.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox80.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 7))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox81.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox82.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox83.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox84.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox85.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox86.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox87.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox88.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox89.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox90.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 8))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox91.checked &&
			((mountainTopX >= (mapSizeX * 0.1)) && (mountainTopX < ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox92.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + ((mapSizeX - (mapSizeX * 0.2)) / 10))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox93.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 2))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox94.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 3))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox95.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 4))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox96.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 5))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox97.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 6))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox98.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 7))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox99.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 8))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
	else if (document.myform.checkbox100.checked &&
			((mountainTopX >= ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 9))) &&
			 (mountainTopX < ((mapSizeX * 0.1) + (((mapSizeX - (mapSizeX * 0.2)) / 10) * 10))) &&
			(mountainTopY >= ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 9))) &&
			(mountainTopY < ((mapSizeY * 0.1) + (((mapSizeY - (mapSizeY * 0.2)) / 10) * 10)))))
	{
		goodSeedLocation = 1;
	}
}
function checkAllBoxes()
{
	for (gh=1;gh<=100;gh++)
	{
		document.getElementById("checkbox"+gh).checked = true;
	}
}
function checkRandomBoxes()
{
	checkboxChance = document.myform.checkboxChance.value;
	for (gh=1;gh<=100;gh++)
	{
		randomNumber=Math.floor(Math.random()*100)+1;
		if (randomNumber <= checkboxChance)
		{
			document.getElementById("checkbox"+gh).checked = true;
		}
		else
		{
			document.getElementById("checkbox"+gh).checked = false;
		}
	}
}
function clearCheckboxes()
{
	for (gh=1;gh<=100;gh++)
	{
		document.getElementById("checkbox"+gh).checked = false;
	}
}
function setCharacter()
{
	if (z==1)		{landCharacter=".";}
	else if (z==2)	{landCharacter=":";}
	else if (z==3)	{landCharacter=";";}
	else if (z==4)	{landCharacter="^";}
	else if (z==5)	{landCharacter="=";}
	else if (z==6)	{landCharacter="+";}
	else if (z==7)	{landCharacter="?";}
	else if (z==8)	{landCharacter="I";}
	else if (z==9)	{landCharacter="C";}
	else if (z==10)	{landCharacter="J";}
	else if (z==11)	{landCharacter="Z";}
	else if (z==12)	{landCharacter="*";}
	else if (z==13)	{landCharacter="G";}
	else if (z==14)	{landCharacter="A";}
	else if (z==15)	{landCharacter="O";}
	else if (z==16)	{landCharacter="D";}
	else if (z==17)	{landCharacter="B";}
	else if (z==18)	{landCharacter="E";}
	else if (z==19)	{landCharacter="X";}
	else if (z==20)	{landCharacter="N";}
}
function runAgain()
{
	closeAllDisplays();
	document.getElementById("masterDisplay").style.display="block";
	document.getElementById("viewTextButton").style.display="none";
	document.getElementById("drawMapButton").style.display="block";
	mapString = "";
	drawDisplayString = "";
	document.getElementById('field2').innerHTML = "";
	document.getElementById('drawDisplay').innerHTML = "";
	main();
}
function aboutThis()
{
	closeAllDisplays();
	document.getElementById("aboutDisplay").style.display="block";
	disableAllButtons();
		aboutString = "";
		aboutString=aboutString+"<b>Rhino Builder - by John Poppin &copy;2011</b><br>&nbsp;<br>";
		aboutString=aboutString+"<b>Q: </b>What is this all about?<br>&nbsp;<br>";
		aboutString=aboutString+"<b>A: </b>'Rhino Builder' is a JavaScript application which generates an <b>organic 3D</b> ASCII-character random map, the general features of which are controlled by user-input.<br>&nbsp;<br>";
		aboutString=aboutString+"<b>Q: Organic 3D?</b> How does this work?<br>&nbsp;<br>";
		aboutString=aboutString+"<b>A: </b>Each of the 20 levels of elevation is grown from the one preceeding it. Water and land features follow changes in elevation according to nature (water flows down hill, et cetera).<br>&nbsp;<br>";
		aboutString=aboutString+"<b>Q: </b>Why does 'Rhino Builder' generate an ASCII-character map?<br>&nbsp;<br>";
		aboutString=aboutString+"<b>A: </b>An ASCII-character map can be dropped, as a text-array, directly in to another application or game and used immediately. It also makes manipulation of the map very easy.<br>&nbsp;<br>";
		aboutString=aboutString+"<b>Q: </b>Why JavaScript?<br>&nbsp;<br>";
		aboutString=aboutString+"<b>A: </b>JavaScript is a great language for a proof-of-concept; it has nearly all of the utilitarian functionality as lower-level languages. Because they're browser-based, JavaScript applications will work on a PC or a Mac fairly uniformly.<br>&nbsp;<br>";
		aboutString=aboutString+"<b>Q: </b>Why did you write this?<br>&nbsp;<br>";
		aboutString=aboutString+"<b>A: </b>I needed a very large world map for a game I'm writing (a classic 'Ultima'-style adventure). I drew a map in MS Paint and used an on-line tool to convert it in to ASCII characters, but the process is very messy and requires a lot of manual clean-up. This didn't seem like the best option for the size of map I wanted. I don't think I'm very good at drawing maps and I didn't want to hire someone to make one for me. So I decided to write an application which would make a map according to the basic parameters I set.<br>&nbsp;<br>";
		aboutString=aboutString+"<INPUT TYPE='button' id='aboutOkay' Value='Okay then.' class='btn' onClick='closeAbout()' style='position:absolute; left:25px; width:125px; display:block; font-weight:bold;'><br>&nbsp;<br>";
		document.getElementById('aboutDisplayBox').innerHTML = aboutString;
}
function instructions()
{
	closeAllDisplays();
	document.getElementById("instructionsDisplay").style.display="block";
	instructionsString = "";
	if (inEditor==0)
	{
		instructionsString=instructionsString+"<b>Rhino Builder - by John Poppin &copy;2011</b><br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"So you want to build a world...<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 1: </b>Click 'Create New World' (unless you've already done that).<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 2: </b>Click one of the four 'Preset' buttons and see that various values fill in to the yellow fields. Also note checkboxes are checked, designating areas where land will be created in your world.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 3: </b>Click 'CREATE WORLD' and watch in the reporting field as the various components of the world are built.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 4: </b>Set your water level by clicking 'Raise Water' or 'Lower Water'.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 5: </b>Add shallows, beaches, lava flows and / or rivers (these are all optional but recommended).<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 6: </b>Click 'DRAW MAP' to see a graphic representation of your new world.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 7: </b>When done examining your world, click 'View Text Map' to continue modifying the world, create another new one, or accept the world as created and move to the editor. While you *can* use this text representation of your world, it is recommended you use the text version provided by the Editor where the levels will be more realistically defined.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 8: </b>When you have the world you want, click 'Accept / Edit World' to move to the editor.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Step 9: </b>Once in the editor, click 'Instructions' again...<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Here are some details in which you may be interested:<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>About</b> - Displays information about this program.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Instructions</b> - Displays the instructions you are reading here.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Map Width</b> - The number of tiles wide you'd like your map to be. Though any positive number may be entered, 100 would be a small map, 1000 would be a large map. 500 is a pretty good place to start.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Map Height</b> - The number of tiles tall you'd like your map to be. See above.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Elevations</b> - The number, between 1 and 20, of how many elevations you'd like your world to contain. When starting out, stay with 20 until you get a feel for how the various values relate.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Hill Top Seeds</b> - The number of hills per level you'd like in your map. A larger number of hills might square-off continents. '25' seems to work pretty well.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Hill Length (%)</b> - The maximum length of a hill crest, defined by a % of your map's size. This is fun to play with, although '5' appears to be a pretty good number.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Hill Curvyness (%)</b> - The percent chance a hill top will curve to the left or right instead of going straight at every step in its creation. '80' is a good number.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Land Spread (%)</b> - The percent increase of hill tops per level (after level 3). That is, if you have a setting of 100 hill tops per level and a 'Land Spread' factor of '110', on level 4 there will be 110 hill top seeds and on level 5 there will be 121 hill top seeds. '110' is a decent value. Values larger than '150' tend to drastically slow down the map making process.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Mountain Spread (%)</b> - The percent increase in width of any mountain or hill per level of elevation (lower levels become wider than the levels above them). '120' works fairly well and values over '200' become unweildly. '120' to '130' is a good range to start.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Slope</b> - When clicked, this displays a text-graph of the actual slope of the land in your map, depending on the value entered in 'Mountain Spread'. This is only a tool to see your projected slope and otherwise does not impact the map creation process (you don't have to use this - but it's a good idea now and then).<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b># of Mountain Ranges</b> - The total number of mountain ranges you'd like in your map.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Max Range Length</b> - The maximum length of any single mountain range, defined by a % of your map's size. See 'Max Hill Length'.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Volcanoes</b> - YES VOLCANOES! Who doesn't like volcanoes? How many would you like in your world? Put that number here. Go easy at first, 4 to 6 is good to start.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Max Volcano Size</b> - This is the maximum size of any volcano caldera, in world tiles. If you enter '10', then the volcanoes generated will have a width across the caldera of between 6 and 10 world tiles.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Land Mass Uniformity</b> - A percentage of how often land is created beneath a tile occupied by land on the level above. This is another fun one to play with. '75' is a good number with which to start.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Continent Checkboxes</b> - Select here, by checking the boxes, where you'd like your continents to grow. Keep in mind that depending your settings and the random seed locations, mountains and hills can grow outside your designated areas.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Presets</b> - These are preset continent selections, set by you. Clicking a 'Preset' button loads the continent map saved to it. On first launch, the four presets are pre-loaded with maps and parameters (a small test world similar to the map I used for my adventure game, Azeroth, Britannia and the USA). These presets are saved locally to your machine and are browser-specific (if you create a preset in Safari and then load this application in Chrome, your preset will not be present).<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Set</b> - To set a 'Preset', click 'Set', then the 'Preset' button (1-4) to which you'd like to save the parameters of your intended world. If you accidentally clicked 'Set' you can always click 'Cancel' (the same button).<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>All</b> - Selects all of the continent-selection checkboxes.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Clear</b> - Clears all of the continent-selection checkboxes.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Random Land</b> - Generates a random set of continent selections based on the % number in the 'Density' field.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Create World</b> - Begins the map creation cycle.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Raise / Lower Water Level</b> - Once a map is in memory, you may raise or lower the base water level with these buttons.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Add Shallows</b> - Once a mep is in memory, you may create shallow water around the land. For smaller maps (< 500) 2 or 3 shallows is good, for larger maps, 4 or 5.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Add Beaches</b> - Once a map is in memory, you may create beaches next to any water. For smaller maps (< 500), 1 or 2 is good, for larger maps, 2 or 3.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Add Lava Flows</b> - What would volcanoes be without lava flows? (Well, they'd still be pretty cool.) Enter a number here (2 or 3 per volcano is good) and lava will flow forth from your volcanoes (complete with burn zones).<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>River Curvyness (%)</b> - The percent chance a river will curve to the left or right instead of going straight at every step in its creation. Since rivers can be pretty curvy, '100' is a good number.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Add Rivers</b> - Once a map is in memory, you may add rivers to it. The rivers will spawn high up in the hills and flow downhill. Sometimes rivers will not go all the way to the coast, or they may become lakes - and nobody knows why.<br>&nbsp;<br>";
		instructionsString=instructionsString+"<b>Draw Map</b> - Draws the map as a graphic. For large maps (~ 1000), this function might take a moment to complete, so please be patient.<br>&nbsp;<br>";
	}
	else
	{
		instructionsString=instructionsString+"<b>Rhino Builder - by John Poppin &copy;2011</b><br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"So you want to shape a world...<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"If you got here by clicking the 'Accept / Edit World' button, you may skip the following section. If, however, you'd like to load a map with which you're currently working, please read on...<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Loading A World</b><br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Open the text file in which your text world resides.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Select and copy the world map (only the world tiles represented by single characters - not any extra text).<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Paste the world map in to the yellow box following the label 'World Text:'. (Yes, the box is much smaller than the world text - don't worry about that.) This paste action may take a moment - please be patient.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Enter the width and height of your world. Please be accurate - your current timespace continuum may undergo severe modification if these vales are incorrect.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Click the 'Load World' button.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Your world should appear in the editor shortly thereafter.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Understanding The Editor</b><br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"When the editor opens, your view of your world is in the uppermost left corner.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"On left side of the editor you will see two sets of buttons representing cardinal directions (one set inside the other). The inner set will move the editor view in the corresponding direction 1 world tile. The outer set will move the editor view 30 tiles.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"The 'Locate Me' button, below the directional buttons, when clicked will draw your world (in a similar fashion as when in Builder mode) and will add a black square indicating the location of the editor view.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"The 'View Text Map' button will do the same thing as when in Builder mode except with different characters as designated by the Editor. This is the text map you should save and / or use.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Below the 'View Text Map' button is the Editor reporting display. Any errors or messages will appear here.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Using The Editor</b><br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"On the right side of the editor, you will see the Terrain Palette. Simply click one of the terrains shown, then click inside the editor view on the square you'd like to change. The change is instant, and you will see the world tile change to the selected terrain. This change is reflected in the text representation of the world.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"<b>Saving Your World</b><br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"When you wish to save your world for future work or have finished editing your world, click the 'View Text Map' button.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Click inside the text map, then either choose 'Select All' from the 'Edit' menu or press ('Command / Ctrl' + 'A') on the keyboard.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Copy the selected text.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Open your text editor of choice. (On a Mac BBEdit is an excellent choice, on a PC 'TextPad' is a good one.)<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Paste the selected text in to the text editor.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Remove any text other than the map tiles. (There may be text before and after the map.)<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
		instructionsString=instructionsString+"Save the text file as whatever you wish.<br>";
		instructionsString=instructionsString+"&nbsp;<br>";
	}
	instructionsString=instructionsString+"<INPUT TYPE='button' id='instructionsOkay' Value='Okay then.' class='btn' onClick='closeInstructions()' style='position:absolute; left:25px; width:125px; display:block; font-weight:bold;'><br>&nbsp;<br>";
	document.getElementById('instructionsDisplayBox').innerHTML = instructionsString;
}
function viewTextMap()
{
	document.getElementById('drawDisplay').innerHTML = drawDisplayString;
	document.getElementById("slopeDisplay").style.display="none";
	document.getElementById("instructionsDisplay").style.display="none";
	document.getElementById("aboutDisplay").style.display="none";
	document.getElementById("drawDisplay").style.display="none";
	document.getElementById("masterDisplay").style.display="block";
	document.getElementById("viewTextButton").style.display="none";
	document.getElementById("drawMapButton").style.display="block";
	enableAllButtons();
}
function viewEditorTextMap()
{
	hideEditorPalette()
	document.getElementById("editorTextButton").style.display="none";
	document.getElementById("buttonBackToEditor2").style.display="block";
	document.myform.buttonLocateMe.disabled=true;
	editorTextString = "";
	for (y=1;y<=editorMapHeight;y++)
	{
		for (x=1;x<=editorMapWidth;x++)
		{
			editorTextString = editorTextString + editorArray[x][y];
		}
		editorTextString = editorTextString + "<br>";
	}
	for (x=1;x<=2500;x++)
	{
		document.getElementById("editorButton"+x).style.display="none";
	}
	document.getElementById("masterDisplay").style.display="block";
	document.getElementById('field2').innerHTML = editorTextString;
}
function drawMap()
{
	var canvasThing=document.getElementById("drawDisplay");
	var cxt=canvasThing.getContext("2d");
	cxt.clearRect(0,0,2000,2000);
	disableAllButtons();
	document.myform.viewTextButton.disabled=false;
	document.getElementById("masterDisplay").style.display="none";
	document.getElementById("slopeDisplay").style.display="none";
	document.getElementById("instructionsDisplay").style.display="none";
	document.getElementById("aboutDisplay").style.display="none";
	document.getElementById("drawDisplay").style.display="block";
	document.getElementById("drawMapButton").style.display="none";
	document.getElementById("viewTextButton").style.display="block";
	drawResolutionFactor = 1;
	drawDisplayString = "";
	var drawPosX = 0;
	var drawPosY = 0;
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (waterLevel == 2)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 3)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 4)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 5)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 6)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 7)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#e5e5ca"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 8)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#e5e5ca"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 9)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#e5e5ca"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 10)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 11)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 12)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#e5e5ca"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#d5d5ab"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#b6c988"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#3ab42b"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 13)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#e5e5ca"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#d5d5ab"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#b6c988"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#3ab42b"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 14)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "G")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 15)
			{
				if (mapArrayDev[x][y] == ".")			{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "G")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "A")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 16)
			{
				if 		(mapArrayDev[x][y] == ".")		{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "G")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "A")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "O")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 17)
			{
				if 		(mapArrayDev[x][y] == ".")		{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#3ab42b"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "G")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "A")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "O")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "D")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 18)
			{
				if 		(mapArrayDev[x][y] == ".")		{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#3ab42b"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "G")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "A")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "O")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "D")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "B")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 19)
			{
				if 		(mapArrayDev[x][y] == ".")		{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#b6c988"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#3ab42b"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "G")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "A")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "O")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "D")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "B")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "E")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
			else if (waterLevel == 20)
			{
				if 		(mapArrayDev[x][y] == ".")		{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ":")		{cxt.fillStyle="#f5f5ea"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == ";")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "^")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "=")		{cxt.fillStyle="#d5d5ab"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "+")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "?")		{cxt.fillStyle="#b6c988"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "I")		{cxt.fillStyle="#98c472"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "C")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "J")		{cxt.fillStyle="#57b941"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Z")		{cxt.fillStyle="#3ab42b"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "*")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "G")		{cxt.fillStyle="#00aa00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "A")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "O")		{cxt.fillStyle="#00a000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "D")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "B")		{cxt.fillStyle="#009500"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "E")		{cxt.fillStyle="#009000"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "X")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "Q")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "H")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "N")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "r")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
				else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			}
		}
	}
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
	var seconds = time.getSeconds();
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}
	document.myform.fieldError.value = document.myform.fieldError.value + "\n" + hours + ":" + minutes + ":" + seconds + " - Map drawn.";
	document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
}
function closeAbout()
{
	enableAllButtons();
	document.getElementById("aboutDisplay").style.display="none";
	document.getElementById("masterDisplay").style.display="block";
}
function closeInstructions()
{
	enableAllButtons();
	document.getElementById("instructionsDisplay").style.display="none";
	document.getElementById("masterDisplay").style.display="block";
}
function closeSlope()
{
	enableAllButtons();
	document.getElementById("slopeDisplay").style.display="none";
	document.getElementById("masterDisplay").style.display="block";
}
function createShallows()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (mapArrayDev[x][y] == "M" || mapArrayDev[x][y] == "N")
			{
				somethingAjacent = 0;
				for (by=(-1);by<=1;by++)
				{
					byy = by;
					for (bx=(-1);bx<=1;bx++)
					{
						bxx = bx;
						if (byy == 0 && bxx == 0)	{bxx = 1;}
						if ((y+byy) < 1)			{byy=0;}
						if ((y+byy) > mapSizeY)		{byy=0;}
						if ((x+bxx) < 1)			{bxx=0;}
						if ((x+bxx) > mapSizeX)		{bxx=0;}
						if (mapArrayDev[(x+bxx)][(y+byy)] != "M" && mapArrayDev[(x+bxx)][(y+byy)] != "N")
						{
							somethingAjacent = 1;
						}
					}
				}
				if (somethingAjacent==0)
				{
					if (mapArrayDev[x][y]=="M")
					{
						mapArrayDev2[x][y] = "M";
					}
					else if (mapArrayDev[x][y]=="N")
					{
						mapArrayDev2[x][y] = "N";
					}
				}
				else
				{
					if (mapArrayDev[x][y]=="M")
					{
						mapArrayDev2[x][y] = "Q";
					}
					else if (mapArrayDev[x][y]=="N")
					{
						mapArrayDev2[x][y] = "H";
					}
				}
			}
			else
			{
				mapArrayDev2[x][y] = mapArrayDev[x][y];
			}
		}
	}
	mapString = "";
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev[x][y] = mapArrayDev2[x][y];
			mapArrayDev2[x][y] = "";
			mapString = mapString + mapArrayDev[x][y];
		}
		mapString = mapString + "<br>";
	}
	document.getElementById('field2').innerHTML = mapString;
}
function createBeaches()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if ((mapArrayDev[x][y] != "M") && (mapArrayDev[x][y] != "Q") && (mapArrayDev[x][y] != "~"))
			{
				waterAjacent = 0;
				for (by=(-1);by<=1;by++)
				{
					byy = by;
					for (bx=(-1);bx<=1;bx++)
					{
						bxx = bx;
						if (byy == 0 && bxx == 0)	{bxx = 1;}
						if ((y+byy) < 1)			{byy=0;}
						if ((y+byy) > mapSizeY)		{byy=0;}
						if ((x+bxx) < 1)			{bxx=0;}
						if ((x+bxx) > mapSizeX)		{bxx=0;}
						if (mapArrayDev[(x+bxx)][(y+byy)] == "M" || mapArrayDev[(x+bxx)][(y+byy)] == "Q" || mapArrayDev[(x+bxx)][(y+byy)] == "~")
						{
							waterAjacent = 1;
						}
					}
				}
				if (waterAjacent==1)
				{
					mapArrayDev2[x][y] = "~";
				}
				else
				{
					mapArrayDev2[x][y] = mapArrayDev[x][y];
				}
			}
			else
			{
				mapArrayDev2[x][y] = mapArrayDev[x][y];
			}
		}
	}
	mapString = "";
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev[x][y] = mapArrayDev2[x][y];
			mapArrayDev2[x][y] = "";
			mapString = mapString + mapArrayDev[x][y];
		}
		mapString = mapString + "<br>";
	}
	document.getElementById('field2').innerHTML = mapString;
}
function eraseShallows()
{
	mapString = "";
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (mapArrayDev[x][y]=="Q" || mapArrayDev[x][y]=="H")
			{
				mapArrayDev[x][y]="N";
			}
		}
	}
	differentiateOceans();
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapString = mapString + mapArrayDev[x][y];
		}
		mapString = mapString + "<br>";
	}
	document.getElementById('field2').innerHTML = mapString;
	document.myform.fieldError.value = document.myform.fieldError.value + "\nShallows erased.";
	document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
}
function displayWaiting()
{
	buttonDisplayWaiting = 0;
	if (displayWaitingOn==0)
	{
		document.getElementById("waiting").style.display="block";
		displayWaitingOn = 1;
	}
	else
	{
		document.getElementById("waiting").style.display="none";
		displayWaitingOn = 0;
	}
}
function addLavaFlow()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev2[x][y] = mapArrayDev[x][y];
		}
	}
	selectedVolcano = Math.floor(Math.random()*volcanoCount)+1;
	flowX = volcanoXArray[selectedVolcano];
	flowY = volcanoYArray[selectedVolcano];
	oldFlowDirection = Math.floor(Math.random()*8)+1;
	plotLavaFlow();
	riverX = flowX;
	riverY = flowY;
	thisIsLava = 1;
	pickRiverDirection();
	thisIsLava = 0;
	flowX = riverX;
	flowY = riverY;
	mapString = "";
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapString = mapString + mapArrayDev2[x][y];
			mapArrayDev[x][y] = mapArrayDev2[x][y];
		}
		mapString = mapString + "<br>";
	}
	document.getElementById('field2').innerHTML = mapString;
	lavaFlowCount = lavaFlowCount + 1;
	if (lavaFlowCount==1)
	{
		document.myform.fieldError.value = document.myform.fieldError.value + "\n1 lava flow created.";
	}
	else
	{
		document.myform.fieldError.value = document.myform.fieldError.value + "\n" + lavaFlowCount + " lava flows created.";
	}
	document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
	numberLavaFlows = numberLavaFlows - 1;
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (mapArrayDev[x][y]=="%")
			{
				for (def=(-1);def<=1;def++)
				{
					jkl = def;
					for (abc=(-1);abc<=1;abc++)
					{
						ghi = abc;
						if (def==0 && abc==0)
						{
						}
						else
						{
							if (mapArrayDev[(x+ghi)][(y+jkl)] != "." &&
								mapArrayDev[(x+ghi)][(y+jkl)] != ":" &&
								mapArrayDev[(x+ghi)][(y+jkl)] != ";" &&
								mapArrayDev[(x+ghi)][(y+jkl)] != "%" &&
								mapArrayDev[(x+ghi)][(y+jkl)] != "M" &&
								mapArrayDev[(x+ghi)][(y+jkl)] != "N" &&
								mapArrayDev[(x+ghi)][(y+jkl)] != "r" &&
								mapArrayDev[(x+ghi)][(y+jkl)] != "Q")
							{
								mapArrayDev[(x+ghi)][(y+jkl)] = "-";
							}
						}
					}
				}
			}
		}
	}
}
function plotLavaFlow()
{
	mapArrayDev2[flowX][flowY - 1] = "%";
	mapArrayDev2[flowX - 1][flowY] = "%";
	mapArrayDev2[flowX][flowY] = "%";
	mapArrayDev2[flowX + 1][flowY] = "%";
	mapArrayDev2[flowX][flowY + 1] = "%";
}
function checkForUphillFlow()
{
	if (mapArrayDev[flowX][flowY]==":" &&
		mapArrayDev[newFlowX][newFlowY] != ".")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]==";" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="^" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="=" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="+" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="?" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="I" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+" &&
			 mapArrayDev[newFlowX][newFlowY] != "?")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="C" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+" &&
			 mapArrayDev[newFlowX][newFlowY] != "?" &&
			 mapArrayDev[newFlowX][newFlowY] != "I")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="J" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+" &&
			 mapArrayDev[newFlowX][newFlowY] != "?" &&
			 mapArrayDev[newFlowX][newFlowY] != "I" &&
			 mapArrayDev[newFlowX][newFlowY] != "C")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="Z" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+" &&
			 mapArrayDev[newFlowX][newFlowY] != "?" &&
			 mapArrayDev[newFlowX][newFlowY] != "I" &&
			 mapArrayDev[newFlowX][newFlowY] != "C" &&
			 mapArrayDev[newFlowX][newFlowY] != "J")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="*" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+" &&
			 mapArrayDev[newFlowX][newFlowY] != "?" &&
			 mapArrayDev[newFlowX][newFlowY] != "I" &&
			 mapArrayDev[newFlowX][newFlowY] != "C" &&
			 mapArrayDev[newFlowX][newFlowY] != "J" &&
			 mapArrayDev[newFlowX][newFlowY] != "Z")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="G" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+" &&
			 mapArrayDev[newFlowX][newFlowY] != "?" &&
			 mapArrayDev[newFlowX][newFlowY] != "I" &&
			 mapArrayDev[newFlowX][newFlowY] != "C" &&
			 mapArrayDev[newFlowX][newFlowY] != "J" &&
			 mapArrayDev[newFlowX][newFlowY] != "Z" &&
			 mapArrayDev[newFlowX][newFlowY] != "*")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[flowX][flowY]=="A" &&
			 mapArrayDev[newFlowX][newFlowY] != "." &&
			 mapArrayDev[newFlowX][newFlowY] != ":" &&
			 mapArrayDev[newFlowX][newFlowY] != ";" &&
			 mapArrayDev[newFlowX][newFlowY] != "^" &&
			 mapArrayDev[newFlowX][newFlowY] != "=" &&
			 mapArrayDev[newFlowX][newFlowY] != "+" &&
			 mapArrayDev[newFlowX][newFlowY] != "?" &&
			 mapArrayDev[newFlowX][newFlowY] != "I" &&
			 mapArrayDev[newFlowX][newFlowY] != "C" &&
			 mapArrayDev[newFlowX][newFlowY] != "J" &&
			 mapArrayDev[newFlowX][newFlowY] != "Z" &&
			 mapArrayDev[newFlowX][newFlowY] != "*" &&
			 mapArrayDev[newFlowX][newFlowY] != "G")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else
	{
	}
}
function addRiver()
{
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapArrayDev2[x][y] = mapArrayDev[x][y];
		}
	}
	goodRiverStartPoint = 0;
	var riverPointCount = 0;
	while (goodRiverStartPoint == 0)
	{
		adjustedMapSizeX = Math.round(mapSizeX * 0.8);
		adjustedMapSizeY = Math.round(mapSizeY * 0.8);
		riverX = Math.floor(Math.random()*adjustedMapSizeX)+1;
		riverY = Math.floor(Math.random()*adjustedMapSizeY)+1;
		riverX = riverX + Math.round(mapSizeX * 0.1);
		riverY = riverY + Math.round(mapSizeY * 0.1);
		riverPointCount = riverPointCount + 1;
		if (waterLevel==4)
		{
			if (mapArrayDev[riverX][riverY]==":")
			{
				goodRiverStartPoint = 1;
			}
		}
		else if (waterLevel==5)
		{
			if (mapArrayDev[riverX][riverY]==":" ||
				mapArrayDev[riverX][riverY]==";")
			{
				goodRiverStartPoint = 1;
			}
		}
		else if (waterLevel==6)
		{
			if (mapArrayDev[riverX][riverY]==";" ||
				mapArrayDev[riverX][riverY]=="^")
			{
				goodRiverStartPoint = 1;
			}
		}
		else if (waterLevel >= 7 && waterLevel <= 19)
		{
			if (mapArrayDev[riverX][riverY]==";" ||
				mapArrayDev[riverX][riverY]=="^" ||
				mapArrayDev[riverX][riverY]=="=")
			{
				goodRiverStartPoint = 1;
			}
		}
	}
	document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
	plotRiver();
	pickRiverDirection();
	mapString = "";
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			mapString = mapString + mapArrayDev2[x][y];
			mapArrayDev[x][y] = mapArrayDev2[x][y];
		}
		mapString = mapString + "<br>";
	}
	document.getElementById('field2').innerHTML = mapString;
}
function setTileValue()
{
	if 		(landTile==".")		{landTileValue=1;}
	else if (landTile==":")		{landTileValue=2;}
	else if (landTile==";")		{landTileValue=3;}
	else if (landTile=="^")		{landTileValue=4;}
	else if (landTile=="=")		{landTileValue=5;}
	else if (landTile=="+")		{landTileValue=6;}
	else if (landTile=="?")		{landTileValue=7;}
	else if (landTile=="I")		{landTileValue=8;}
	else if (landTile=="C")		{landTileValue=9;}
	else if (landTile=="J")		{landTileValue=10;}
	else if (landTile=="Z")		{landTileValue=11;}
	else if (landTile=="*")		{landTileValue=12;}
	else if (landTile=="G")		{landTileValue=13;}
	else if (landTile=="A")		{landTileValue=14;}
	else if (landTile=="O")		{landTileValue=15;}
	else if (landTile=="D")		{landTileValue=16;}
	else if (landTile=="B")		{landTileValue=17;}
	else if (landTile=="E")		{landTileValue=18;}
	else if (landTile=="X")		{landTileValue=19;}
	else if (landTile=="N")		{landTileValue=20;}
	else if (landTile=="r")		{landTileValue=2;}
	else if (landTile=="~")		{landTileValue=20;}
	else if (landTile=="%")		{landTileValue=1;}
}
function pickRiverDirection()
{
	riverTries = 0;
	riverEnd = 0;
	while (riverEnd==0)
	{
		waterAjacent = 0;
		for (fgh=(-1);fgh<=1;fgh++)
		{
			for (jkl=(-1);jkl<=1;jkl++)
			{
				if (fgh==0 && jkl==0)
				{
					jkl = 1;
				}
				if (mapArrayDev[riverX + jkl][riverY + fgh]=="M" || mapArrayDev[riverX + jkl][riverY + fgh]=="N"|| mapArrayDev[riverX + jkl][riverY + fgh]=="Q")
				{
					waterAjacent = 1;
				}
			}
		}
		if (waterAjacent==1)
		{
			riverEnd = 1;
		}
		else if (riverTries==100)
		{
			riverEnd = 1;
		}
		else
		{
			riverTries = riverTries + 1;
	
		
			directionOkay = 0;
			direction1 = 0;
			newRiverX = riverX - 1;
			newRiverY = riverY - 1;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction1Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction1Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction1 = 1;
			}
		
			directionOkay = 0;
			direction2 = 0;
			newRiverX = riverX;
			newRiverY = riverY - 1;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction2Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction2Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction2 = 1;
			}
		
			directionOkay = 0;
			direction3 = 0;
			newRiverX = riverX + 1;
			newRiverY = riverY - 1;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction3Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction3Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction3 = 1;
			}
		
			directionOkay = 0;
			direction4 = 0;
			newRiverX = riverX - 1;
			newRiverY = riverY;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction4Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction4Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction4 = 1;
			}
		
			directionOkay = 0;
			direction5 = 0;
			newRiverX = riverX + 1;
			newRiverY = riverY;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction5Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction5Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction5 = 1;
			}
		
			directionOkay = 0;
			direction6 = 0;
			newRiverX = riverX - 1;
			newRiverY = riverY + 1;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction6Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction6Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction6 = 1;
			}
		
			directionOkay = 0;
			direction7 = 0;
			newRiverX = riverX;
			newRiverY = riverY + 1;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction7Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction7Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction7 = 1;
			}
		
			directionOkay = 0;
			direction8 = 0;
			newRiverX = riverX + 1;
			newRiverY = riverY + 1;
			landTile = mapArrayDev[newRiverX][newRiverY];
			direction8Tile = mapArrayDev[newRiverX][newRiverY];
			setTileValue();
			direction8Value = landTileValue;
			checkForUphillRiver();
			if (directionOkay == 1)
			{
				direction8 = 1;
			}
			landTile = mapArrayDev[riverX][riverY];
			setTileValue();
			riverStartPointValue = landTileValue;
			lowestTile = mapArrayDev[riverX][riverY];
			if (direction1Value > riverStartPointValue)			{lowestTile = mapArrayDev[riverX - 1][riverY - 1];}
			if (direction2Value > riverStartPointValue &&
				direction2Value > direction1Value)				{lowestTile = mapArrayDev[riverX][riverY - 1];}
			if (direction3Value > riverStartPointValue &&
				direction3Value > direction1Value &&
				direction3Value > direction2Value)				{lowestTile = mapArrayDev[riverX + 1][riverY - 1];}
			if (direction4Value > riverStartPointValue &&
				direction4Value > direction1Value &&
				direction4Value > direction2Value &&
				direction4Value > direction3Value)				{lowestTile = mapArrayDev[riverX - 1][riverY];}
			if (direction5Value > riverStartPointValue &&
				direction5Value > direction1Value &&
				direction5Value > direction2Value &&
				direction5Value > direction3Value &&
				direction5Value > direction4Value)				{lowestTile = mapArrayDev[riverX + 1][riverY];}
			if (direction6Value > riverStartPointValue &&
				direction6Value > direction1Value &&
				direction6Value > direction2Value &&
				direction6Value > direction3Value &&
				direction6Value > direction4Value &&
				direction6Value > direction5Value)				{lowestTile = mapArrayDev[riverX - 1][riverY + 1];}
			if (direction7Value > riverStartPointValue &&
				direction7Value > direction1Value &&
				direction7Value > direction2Value &&
				direction7Value > direction3Value &&
				direction7Value > direction4Value &&
				direction7Value > direction5Value &&
				direction7Value > direction6Value)				{lowestTile = mapArrayDev[riverX][riverY + 1];}
			if (direction8Value > riverStartPointValue &&
				direction8Value > direction1Value &&
				direction8Value > direction2Value &&
				direction8Value > direction3Value &&
				direction8Value > direction4Value &&
				direction8Value > direction5Value &&
				direction8Value > direction6Value &&
				direction8Value > direction7Value)				{lowestTile = mapArrayDev[riverX + 1][riverY + 1];}
			direction1Okay = 0;
			direction2Okay = 0;
			direction3Okay = 0;
			direction4Okay = 0;
			direction5Okay = 0;
			direction6Okay = 0;
			direction7Okay = 0;
			direction8Okay = 0;
			if (direction1Tile==lowestTile)				{direction1Okay = 1;}
			if (direction2Tile==lowestTile)				{direction2Okay = 1;}
			if (direction3Tile==lowestTile)				{direction3Okay = 1;}
			if (direction4Tile==lowestTile)				{direction4Okay = 1;}
			if (direction5Tile==lowestTile)				{direction5Okay = 1;}
			if (direction6Tile==lowestTile)				{direction6Okay = 1;}
			if (direction7Tile==lowestTile)				{direction7Okay = 1;}
			if (direction8Tile==lowestTile)				{direction8Okay = 1;}
			riverCurveChance = document.myform.riverCurvynessInput.value;
			if (riverCurveChance > 100)
			{
				riverCurveChance = 100;
			}
			if (direction1Okay==1 && lastDirectionChosen==1)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction4Okay==1)
							{
								lastDirectionChosen = 4;
								riverX = riverX - 1;
								riverY = riverY;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction2Okay==1)
							{
								lastDirectionChosen = 2;
								riverX = riverX;
								riverY = riverY - 1;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 1;
						riverX = riverX - 1;
						riverY = riverY - 1;
						directionOkay = 1;
					}
				}
			}
			else if (direction2Okay==1 && lastDirectionChosen==2)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction1Okay==1)
							{
								lastDirectionChosen = 1;
								riverX = riverX - 1;
								riverY = riverY - 1;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction3Okay==1)
							{
								lastDirectionChosen = 3;
								riverX = riverX + 1;
								riverY = riverY - 1;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 2;
						riverX = riverX;
						riverY = riverY - 1;
						directionOkay = 1;
					}
				}
			}
			else if (direction3Okay==1 && lastDirectionChosen==3)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction2Okay==1)
							{
								lastDirectionChosen = 2;
								riverX = riverX;
								riverY = riverY - 1;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction5Okay==1)
							{
								lastDirectionChosen = 5;
								riverX = riverX + 1;
								riverY = riverY;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 3;
						riverX = riverX + 1;
						riverY = riverY - 1;
						directionOkay = 1;
					}
				}
			}
			else if (direction4Okay==1 && lastDirectionChosen==4)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction6Okay==1)
							{
								lastDirectionChosen = 6;
								riverX = riverX - 1;
								riverY = riverY + 1;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction1Okay==1)
							{
								lastDirectionChosen = 1;
								riverX = riverX - 1;
								riverY = riverY - 1;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 4;
						riverX = riverX - 1;
						riverY = riverY;
						directionOkay = 1;
					}
				}
			}
			else if (direction5Okay==1 && lastDirectionChosen==5)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction3Okay==1)
							{
								lastDirectionChosen = 3;
								riverX = riverX + 1;
								riverY = riverY - 1;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction8Okay==1)
							{
								lastDirectionChosen = 8;
								riverX = riverX + 1;
								riverY = riverY + 1;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 5;
						riverX = riverX + 1;
						riverY = riverY;
						directionOkay = 1;
					}
				}
			}
			else if (direction6Okay==1 && lastDirectionChosen==6)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction7Okay==1)
							{
								lastDirectionChosen = 7;
								riverX = riverX;
								riverY = riverY + 1;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction4Okay==1)
							{
								lastDirectionChosen = 4;
								riverX = riverX - 1;
								riverY = riverY;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 6;
						riverX = riverX - 1;
						riverY = riverY + 1;
						directionOkay = 1;
					}
				}
			}
			else if (direction7Okay==1 && lastDirectionChosen==7)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction8Okay==1)
							{
								lastDirectionChosen = 8;
								riverX = riverX + 1;
								riverY = riverY + 1;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction6Okay==1)
							{
								lastDirectionChosen = 6;
								riverX = riverX - 1;
								riverY = riverY + 1;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 7;
						riverX = riverX;
						riverY = riverY + 1;
						directionOkay = 1;
					}
				}
			}
			else if (direction8Okay==1 && lastDirectionChosen==8)
			{
				directionOkay = 0;
				while (directionOkay==0)
				{
					randomNumber = Math.floor(Math.random()*100)+1;
					if (randomNumber < riverCurveChance)
					{
						randomNumber = Math.floor(Math.random()*100)+1;
						if (randomNumber < 51)
						{
						
							if (direction5Okay==1)
							{
								lastDirectionChosen = 5;
								riverX = riverX + 1;
								riverY = riverY;
								directionOkay = 1;
							}
						}
						else
						{
						
							if (direction7Okay==1)
							{
								lastDirectionChosen = 7;
								riverX = riverX;
								riverY = riverY + 1;
								directionOkay = 1;
							}
						}
					}
					else
					{
						lastDirectionChosen = 8;
						riverX = riverX + 1;
						riverY = riverY + 1;
						directionOkay = 1;
					}
				}
			}
			else
			{
				riverDirectionChosen = 0;
				inAHole = 0;
				while (riverDirectionChosen==0 && inAHole < 100)
				{
					randomNumber = Math.floor(Math.random()*8)+1;
					inAHole = inAHole + 1;
					if (randomNumber==1 && direction1Okay==1 && lastDirectionChosen != 8)
					{
						lastDirectionChosen = 1;
						riverX = riverX - 1;
						riverY = riverY - 1;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
					else if (randomNumber==2 && direction2Okay==1 && lastDirectionChosen != 7)
					{
						lastDirectionChosen = 2;
						riverX = riverX;
						riverY = riverY - 1;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
					else if (randomNumber==3 && direction3Okay==1 && lastDirectionChosen != 6)
					{
						lastDirectionChosen = 3;
						riverX = riverX + 1;
						riverY = riverY - 1;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
					else if (randomNumber==4 && direction4Okay==1 && lastDirectionChosen != 5)
					{
						lastDirectionChosen = 4;
						riverX = riverX - 1;
						riverY = riverY;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
					else if (randomNumber==5 && direction5Okay==1 && lastDirectionChosen != 4)
					{
						lastDirectionChosen = 5;
						riverX = riverX + 1;
						riverY = riverY;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
					else if (randomNumber==6 && direction6Okay==1 && lastDirectionChosen != 3)
					{
						lastDirectionChosen = 6;
						riverX = riverX - 1;
						riverY = riverY + 1;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
					else if (randomNumber==7 && direction7Okay==1 && lastDirectionChosen != 2)
					{
						lastDirectionChosen = 7;
						riverX = riverX;
						riverY = riverY + 1;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
					else if (randomNumber==8 && direction8Okay==1 && lastDirectionChosen != 1)
					{
						lastDirectionChosen = 8;
						riverX = riverX + 1;
						riverY = riverY + 1;
						inAHole = 0;
						riverDirectionChosen = 1;
					}
				}
			}
			if (thisIsLava==1)
			{
				flowX = riverX;
				flowY = riverY;
				plotFlow();
			}
			else
			{
				plotRiver();
			}
		}
	}
}
function plotFlow()
{
	mapArrayDev2[flowX][flowY - 1] = "%";
	mapArrayDev2[flowX - 1][flowY] = "%";
	mapArrayDev2[flowX][flowY] = "%";
	mapArrayDev2[flowX + 1][flowY] = "%";
	mapArrayDev2[flowX][flowY + 1] = "%";
}
function plotRiver()
{
	mapArrayDev2[riverX][riverY - 1] = "r";
	mapArrayDev2[riverX - 1][riverY] = "r";
	mapArrayDev2[riverX][riverY] = "r";
	mapArrayDev2[riverX + 1][riverY] = "r";
	mapArrayDev2[riverX][riverY + 1] = "r";
}
function checkForUphillRiver()
{
	if (mapArrayDev[riverX][riverY]==":" &&
		mapArrayDev[newRiverX][newRiverY] != "%" &&
		mapArrayDev[newRiverX][newRiverY] != ".")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]==";" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="^" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="=" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="+" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="?" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="I" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+" &&
			 mapArrayDev[newRiverX][newRiverY] != "?")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="C" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+" &&
			 mapArrayDev[newRiverX][newRiverY] != "?" &&
			 mapArrayDev[newRiverX][newRiverY] != "I")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="J" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+" &&
			 mapArrayDev[newRiverX][newRiverY] != "?" &&
			 mapArrayDev[newRiverX][newRiverY] != "I" &&
			 mapArrayDev[newRiverX][newRiverY] != "C")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="Z" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+" &&
			 mapArrayDev[newRiverX][newRiverY] != "?" &&
			 mapArrayDev[newRiverX][newRiverY] != "I" &&
			 mapArrayDev[newRiverX][newRiverY] != "C" &&
			 mapArrayDev[newRiverX][newRiverY] != "J")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="*" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+" &&
			 mapArrayDev[newRiverX][newRiverY] != "?" &&
			 mapArrayDev[newRiverX][newRiverY] != "I" &&
			 mapArrayDev[newRiverX][newRiverY] != "C" &&
			 mapArrayDev[newRiverX][newRiverY] != "J" &&
			 mapArrayDev[newRiverX][newRiverY] != "Z")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="G" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+" &&
			 mapArrayDev[newRiverX][newRiverY] != "?" &&
			 mapArrayDev[newRiverX][newRiverY] != "I" &&
			 mapArrayDev[newRiverX][newRiverY] != "C" &&
			 mapArrayDev[newRiverX][newRiverY] != "J" &&
			 mapArrayDev[newRiverX][newRiverY] != "Z" &&
			 mapArrayDev[newRiverX][newRiverY] != "*")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else if (mapArrayDev[riverX][riverY]=="A" &&
			 mapArrayDev[newRiverX][newRiverY] != "%" &&
			 mapArrayDev[newRiverX][newRiverY] != "." &&
			 mapArrayDev[newRiverX][newRiverY] != ":" &&
			 mapArrayDev[newRiverX][newRiverY] != ";" &&
			 mapArrayDev[newRiverX][newRiverY] != "^" &&
			 mapArrayDev[newRiverX][newRiverY] != "=" &&
			 mapArrayDev[newRiverX][newRiverY] != "+" &&
			 mapArrayDev[newRiverX][newRiverY] != "?" &&
			 mapArrayDev[newRiverX][newRiverY] != "I" &&
			 mapArrayDev[newRiverX][newRiverY] != "C" &&
			 mapArrayDev[newRiverX][newRiverY] != "J" &&
			 mapArrayDev[newRiverX][newRiverY] != "Z" &&
			 mapArrayDev[newRiverX][newRiverY] != "*" &&
			 mapArrayDev[newRiverX][newRiverY] != "G")
	{
		maybeStuck = 0;
		directionOkay = 1;
	}
	else
	{
	}
}
function initScreen()
{
	document.write("<FORM NAME='myform' ACTION='' METHOD='GET'>");
	masterTop = 5;
	bumpDown = 3;
	textBump = 2;
	itemHeight = 44;
	document.write("<font style='position:absolute; top:"+masterTop+"px; left:4px; width:255px; height:"+itemHeight+"px; font-size:38px; color:blue; font-weight:bold; text-align:center; font-family:Arial;' readonly='readonly'>Rhino Builder</font>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 30;
	document.write("<a href='http://www.CrashRhinoceros.com'><img src='../../crtitle6.png' id='cr' style='position:absolute; top:"+(masterTop+3)+"px; left:9px; width:200px;'></a>");
	document.write("<a href='http://en.wikipedia.org/wiki/Rhinoceros'><img src='../../rhino.png' id='rhino' style='position:absolute; top:"+masterTop+"px; left:225px; width:30px;'></a>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 24;
	document.write("<INPUT TYPE='button' id='buttonAbout' Value='About' class='btn' onClick='aboutThis();' style='position:absolute; top:"+masterTop+"px; left:5px; width:125px; display:block;'>");
	document.write("<INPUT TYPE='button' id='buttonInstructions' Value='Instructions' class='btn' onClick='instructions();' style='position:absolute; top:"+masterTop+"px; left:135px; width:125px; display:block;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelWidth' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Map Width (1-1000?):</font>");
	document.write("<textarea id='field5' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelHeight' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Map Height (1-1000?):</font>");
	document.write("<textarea id='field6' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelLevels' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Elevations (1-20):</font>");
	document.write("<textarea id='levelsToRunInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelHillSeeds' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Hill Top Seeds (0-?):</font>");
	document.write("<textarea id='field8' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelHillLength' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Hill Length (0-100):</font>");
	document.write("<textarea id='hillLengthInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelHillCurvyness' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Hill Curvyness (0-100):</font>");
	document.write("<textarea id='hillCurvynessInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelLandSpread' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Land Spread (100-150?):</font>");
	document.write("<textarea id='landSpread' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelMountainosity' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Mtn Spread (100-150?):</font>");
	document.write("<textarea id='field12' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	document.write("<INPUT TYPE='button' id='checkslope' NAME='button5' Value='Slope' class='btn' onClick='onlyCheckingSlope=1;checkSlope();' style='position:absolute; top:"+(masterTop-1)+"px; left:155px; width:50px; display:none; text-align:center;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelNumRanges' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'># of Mountain Ranges (0-?):</font>");
	document.write("<textarea id='field14' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelRangeLength' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Max Range Length (0-100):</font>");
	document.write("<textarea id='field16' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelNumVolcanoes' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Volcanoes (0-?):</font>");
	document.write("<textarea id='numberVolcanoesInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelVolcanoSize' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Max Volcano Size (0-?):</font>");
	document.write("<textarea id='volcanoSizeInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelUniformity' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Land Mass Uniformity (1-100):</font>");
	document.write("<textarea id='field18' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 182;
	checkboxX = 5;
	checkboxY = masterTop;
	checkboxNumber = 0;
	document.write("<table id='checkboxTable' border='0' style='position:absolute; left:"+(checkboxX)+"px; height:"+itemHeight+"px;width:182px; top:"+(checkboxY)+"px; display:none;'>");
	document.write("<tr>");
	document.write("<td id='fieldCheckbox' bgcolor='blue' style='height:"+itemHeight+"px; width:149px; display:none;'>");
	document.write("</td>");
	document.write("</tr>");
	document.write("</table>");
	for (checkboxCountB=1;checkboxCountB<=10;checkboxCountB++)
	{
		for (checkboxCountA=1;checkboxCountA<=10;checkboxCountA++)
		{
			checkboxNumber = checkboxNumber + 1;
			document.write("<INPUT TYPE='checkbox' id='checkbox"+checkboxNumber+"' style='position:absolute; top:"+(checkboxY+(checkboxCountB*15))+"px; left:"+(checkboxX+(checkboxCountA*15))+"px; display:none;'>");
		}
	}
	document.write("<img src='waiting.gif' id='waiting' style='position:absolute; top:"+(masterTop-20)+"px; left:535px; display:none;'>");
	document.write("<INPUT TYPE='button' id='preset1' Value='Preset 1' class='btn' onClick='buttonPreset1 = 1; setThePreset()' style='position:absolute; top:"+(masterTop)+"px; left:190px; width:70px; display:none;'>");
	document.write("<INPUT TYPE='button' id='preset2' Value='Preset 2' class='btn' onClick='buttonPreset2 = 1; setThePreset()' style='position:absolute; top:"+(masterTop + 25)+"px; left:190px; width:70px; display:none;'>");
	document.write("<INPUT TYPE='button' id='preset3' Value='Preset 3' class='btn' onClick='buttonPreset3 = 1; setThePreset()' style='position:absolute; top:"+(masterTop + 50)+"px; left:190px; width:70px; display:none;'>");
	document.write("<INPUT TYPE='button' id='preset4' Value='Preset 4' class='btn' onClick='buttonPreset4 = 1; setThePreset()' style='position:absolute; top:"+(masterTop + 75)+"px; left:190px; width:70px; display:none;'>");
	document.write("<INPUT TYPE='button' id='buttonSetPreset' Value='Set' class='btn' onClick='setPreset()' style='position:absolute; top:"+(masterTop + 100)+"px; left:190px; width:70px; display:none;'>");
	document.write("<INPUT TYPE='button' id='buttonCancelSetPreset' Value='Cancel' class='btn' onClick='cancelSetPreset()' style='position:absolute; top:"+(masterTop + 100)+"px; left:190px; width:70px; display:none;'>");
	document.write("<INPUT TYPE='button' id='checkallboxes' Value='All' class='btn' onClick='checkAllBoxes()' style='position:absolute; top:"+(masterTop + 135)+"px; left:190px; width:70px; display:none;'>");
	document.write("<INPUT TYPE='button' id='clearcheckboxes' Value='Clear' class='btn' onClick='clearCheckboxes()' style='position:absolute; top:"+(masterTop + 160)+"px; left:190px; width:70px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='checkrandomboxes' NAME='button5' Value='Random Land' class='btn' onClick='checkRandomBoxes()' style='position:absolute; top:"+masterTop+"px; left:5px; width:95px; display:none;'>");
	document.write("<font id='labelRandom' style='position:absolute; top:"+(masterTop+textBump)+"px; left:105px; width:100px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Density (1-100):</font>");
	document.write("<textarea id='checkboxChance' wrap='on' style='resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='run' NAME='button3' Value='CREATE WORLD' class='btn' onClick='buttonCreateWorld=1;' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none; font-weight:bold;'>");
	document.write("<INPUT TYPE='button' id='runagainsame' NAME='button4' Value='CREATE WORLD AGAIN' class='btn' onClick='createWorldCheck();' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none; font-weight:bold;'>");
	document.write("<textarea id='areYouSure' wrap='off' style='position:absolute; top:"+masterTop+"px; left:5px; width:145px; height:"+itemHeight+"px; font-family:Arial; font-size:12px; display:none; text-align:center; font-weight:bold; color:red;' readonly='readonly'></textarea>");
	document.myform.areYouSure.value = "ARE YOU SURE?";
	document.write("<INPUT TYPE='button' id='sureYes' Value='YES!' class='btn' onClick='buttonCreateWorld=1;' style='position:absolute; top:"+masterTop+"px; left:155px; width:50px; display:none; font-weight:bold;'>");
	document.write("<INPUT TYPE='button' id='sureNo' Value='NO!' class='btn' onClick='cancelCreateWorld();' style='position:absolute; top:"+masterTop+"px; left:210px; width:50px; display:none; font-weight:bold;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='raisewater' NAME='button5' Value='Raise Water' class='btn' onClick='raiseWaterLevel()' style='position:absolute; top:"+masterTop+"px; left:5px; width:125px; display:none;'>");
	document.write("<INPUT TYPE='button' id='lowerwater' NAME='button5' Value='Lower Water' class='btn' onClick='lowerWaterLevel()' style='position:absolute; top:"+masterTop+"px; left:135px; width:125px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='createShallowsButton' Value='Add Shallows' class='btn' onClick='buttonCreateShallows=1;' style='position:absolute; top:"+masterTop+"px; left:5px; width:125px; display:none;'>");
	document.write("<textarea id='numberShallowsInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='createBeachesButton' Value='Add Beaches' class='btn' onClick='buttonCreateBeaches=1;' style='position:absolute; top:"+masterTop+"px; left:5px; width:125px; display:none;'>");
	document.write("<textarea id='numberBeachesInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='createLavaFlowsButton' Value='Add Lava Flows' class='btn' onClick='buttonCreateLavaFlows=1;' style='position:absolute; top:"+masterTop+"px; left:5px; width:125px; display:none;'>");
	document.write("<textarea id='numberFlowsInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='labelCurvyness' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>River Curvyness (0-100):</font>");
	document.write("<textarea id='riverCurvynessInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='addRiverButton' Value='Add Rivers' class='btn' onClick='buttonAddRiver=1;' style='position:absolute; top:"+masterTop+"px; left:5px; width:125px; display:none;'>");
	document.write("<textarea id='numberRiversInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+masterTop+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='eraseModificationsButton' Value='Erase Modifications' class='btn' onClick='eraseModifications();' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='drawMapButton' Value='DRAW MAP' class='btn' onClick='buttonDrawMap=1;' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	document.write("<INPUT TYPE='button' id='viewTextButton' Value='View Text Map' class='btn' onClick='viewTextMap()' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 100;
	document.write("<textarea id='fieldError' wrap='on' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; height:"+itemHeight+"px; color:darkblue; font-family:Arial; font-size:12px; display:none;' readonly='readonly'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='acceptButton' Value='Accept / Edit Map' class='btn' onClick='acceptMap()' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	document.write("<INPUT TYPE='button' id='setwater' NAME='button5' Value='Set Water Level' class='btn' onClick='setWaterLevel()' style='position:absolute; top:280px; left:5px; width:200px; display:none;'>");
	document.write("<table border='1' id='splashScreen' style='position:absolute; left:265px; width:600px; top:5px; height: 600px; font-size:14px; font-family:Arial; display:block;'>");
	document.write("<tr>");
	document.write("<td valign='top' id='splashScreenBox' style='background-color:white; color:black; height:600px; width:600px; font-size:14px; padding:20px; display:block;'>");
	document.write("</td>");
	document.write("</tr>");
	document.write("</table>");
	document.write("<table border='1' id='masterDisplay' style='position:absolute; left:265px; width:600px; top:5px; height: 600px; font-size:7px; display:none;'>");
	document.write("<tr>");
	document.write("<td id='field2' style='height:600px; width:600px; font-size:7px; line-height:4px; font-family:monospace;'>");
	document.write("</td>");
	document.write("</tr>");
	document.write("</table>");
	document.write("<table border='1' id='slopeDisplay' style='position:absolute; left:265px; width:600px; top:5px; height: 600px; font-size:7px; display:none;'>");
	document.write("<tr>");
	document.write("<td id='slopeDisplayBox' style='height:600px; width:600px; font-size:7px; line-height:4px; font-family:monospace;'>");
	document.write("</td>");
	document.write("</tr>");
	document.write("</table>");
	document.write("<table border='1' id='aboutDisplay' style='position:absolute; left:265px; width:600px; top:5px; height: 600px; font-size:14px; font-family:Arial; display:none;'>");
	document.write("<tr>");
	document.write("<td valign='top' id='aboutDisplayBox' style='height:600px; width:600px; font-size:14px; padding:20px;'>");
	document.write("</td>");
	document.write("</tr>");
	document.write("</table>");
	document.write("<table border='1' id='instructionsDisplay' style='position:absolute; left:265px; width:600px; top:5px; height: 600px; font-size:14px; font-family:Arial; display:none;'>");
	document.write("<tr>");
	document.write("<td valign='top' id='instructionsDisplayBox' style='height:600px; width:600px; font-size:14px; padding:20px;'>");
	document.write("</td>");
	document.write("</tr>");
	document.write("</table>");
	document.write("<canvas id='drawDisplay' border='1' width='2000' height='2000' style='position:absolute; left:265px; top:5px; display:none;'></canvas>");
	masterTop = 116;
	itemHeight = 40;
	document.write("<BUTTON TYPE='button' id='buttonCreateNew' Value='Create New World' class='btn' onClick='createNewWorld();' style='position:absolute; top:"+masterTop+"px; left:5px; height:40px; width:255px; display:block;'>Create New World</BUTTON>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 40;
	document.write("<BUTTON TYPE='button' id='buttonOpenEditor' Value='Load / Edit Existing Map' class='btn' onClick='openEditor();' style='position:absolute; top:"+masterTop+"px; left:5px; height:40px; width:255px; display:block;'>Load / Edit World</BUTTON>");
	
	document.write("<a href='http://www.easycounter.com/' id='counter' target='blank' style='position:absolute; top:375px; left:5px; display:block;'><img src='http://www.easycounter.com/counter.php?crashrhinoceros' border='0' alt='Hit Counter'></a>");
	document.write("<font id='email' style='position:absolute; font-family:Arial; font-size:13px; top:255px; left:5px; display:block;'>Problems, questions or suggestions?<br>Job offer?<br>Please email me:<br><a href='mailto:Crash@CrashRhinoceros.com'>Crash@CrashRhinoceros.com</a></font>");
	
	masterTop = masterTop + itemHeight + bumpDown;
	editorLeft = 265;
	editorTop = 5;
	for (y=1;y<=50;y++)
	{
		for (x=1;x<=50;x++)
		{
			editorButtonCount = editorButtonCount + 1;
			document.write("<input type='button' id='editorButton"+editorButtonCount+"' onClick='tileChangeX="+x+";tileChangeY="+y+";changeTile()' style='margin:0; border:0; padding:0; position:absolute;left:"+editorLeft+"px;top:"+editorTop+"px;width:18px;height:18px; display:none'>");
			editorLeft = editorLeft + 18;
		}
		editorLeft = editorLeft - (18*50);
		editorTop = editorTop + 18;
	}
	masterTop = 105 + bumpDown;
	document.write("<font id='terrainLegend' style='position:absolute; top:5px; left:1170px; font-family:Arial; font-size:13px; display:none;'><b>Terrain Legend</b></font>");
	document.write("<font id='legendLevel1' style='position:absolute; top:25px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 1:</font>");
	document.write("<font id='legendLevel2' style='position:absolute; top:45px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 2:</font>");
	document.write("<font id='legendLevel3' style='position:absolute; top:65px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 3:</font>");
	document.write("<font id='legendLevel4' style='position:absolute; top:85px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 4:</font>");
	document.write("<font id='legendLevel5' style='position:absolute; top:105px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 5:</font>");
	document.write("<font id='legendLevel6' style='position:absolute; top:125px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 6:</font>");
	document.write("<font id='legendLevel7' style='position:absolute; top:145px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 7:</font>");
	document.write("<font id='legendLevel8' style='position:absolute; top:165px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 8:</font>");
	document.write("<font id='legendLevel9' style='position:absolute; top:185px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 9:</font>");
	document.write("<font id='legendLevel10' style='position:absolute; top:205px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 10:</font>");
	document.write("<font id='legendLevel11' style='position:absolute; top:225px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 11:</font>");
	document.write("<font id='legendLevel12' style='position:absolute; top:245px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 12:</font>");
	document.write("<font id='legendLevel13' style='position:absolute; top:265px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 13:</font>");
	document.write("<font id='legendLevel14' style='position:absolute; top:285px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 14:</font>");
	document.write("<font id='legendLevel15' style='position:absolute; top:305px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 15:</font>");
	document.write("<font id='legendLevel16' style='position:absolute; top:325px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 16:</font>");
	document.write("<font id='legendLevel17' style='position:absolute; top:345px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 17:</font>");
	document.write("<font id='legendLevel18' style='position:absolute; top:365px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 18:</font>");
	document.write("<font id='legendLevel19' style='position:absolute; top:385px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 19:</font>");
	document.write("<font id='legendLevel20' style='position:absolute; top:405px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Level 20:</font>");
	document.write("<input type='button' id='legendLevel1Display' onClick='levelChanged=1;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:25px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel2Display' onClick='levelChanged=2;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:45px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel3Display' onClick='levelChanged=3;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:65px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel4Display' onClick='levelChanged=4;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:85px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel5Display' onClick='levelChanged=5;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:105px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel6Display' onClick='levelChanged=6;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:125px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel7Display' onClick='levelChanged=7;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:145px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel8Display' onClick='levelChanged=8;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:165px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel9Display' onClick='levelChanged=9;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:185px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel10Display' onClick='levelChanged=10;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:205px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel11Display' onClick='levelChanged=11;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:225px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel12Display' onClick='levelChanged=12;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:245px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel13Display' onClick='levelChanged=13;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:265px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel14Display' onClick='levelChanged=14;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:285px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel15Display' onClick='levelChanged=15;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:305px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel16Display' onClick='levelChanged=16;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:325px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel17Display' onClick='levelChanged=17;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:345px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel18Display' onClick='levelChanged=18;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:365px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel19Display' onClick='levelChanged=19;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:385px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='legendLevel20Display' onClick='levelChanged=20;changeLevelTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1270px;top:405px;width:18px;height:18px; display:none'>");
	document.write("<font id='terrainPaletteTitle' style='position:absolute; top:5px; left:1170px; font-family:Arial; font-size:13px; display:none;'><b>Terrain Palette</b></font>");
	document.write("<font id='selectedTerrainText' style='position:absolute; top:25px; left:1170px; font-family:Arial; font-size:13px; display:none;'>Selected Terrain:</font>");
	document.write("<img id='selectedTerrainPic' src='terrain/blankwhite.gif' style='margin:0; border:0; padding:0; position:absolute;left:1280px;top:25px;width:18px;height:18px; display:none'>");
	document.write("<input type='button' id='highMountainsButton' onClick='selectedTerrain=1;changeSelectedTerrain()' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:45px;width:18px;height:18px; display:none; background:url(terrain/highmountains.gif) no-repeat'>");
	document.write("<input type='button' id='lowMountainsButton' onClick='selectedTerrain=2;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:45px;width:18px;height:18px; display:none; background:url(terrain/lowmountains.gif) no-repeat'>");
	document.write("<input type='button' id='hillsButton' onClick='selectedTerrain=3;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:45px;width:18px;height:18px; display:none; background:url(terrain/hills.gif) no-repeat'>");
	document.write("<input type='button' id='borealButton' onClick='selectedTerrain=4;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:45px;width:18px;height:18px; display:none; background:url(terrain/boreal.gif) no-repeat'>");
	document.write("<input type='button' id='forestButton' onClick='selectedTerrain=5;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:65px;width:18px;height:18px; display:none; background:url(terrain/forest.gif) no-repeat'>");
	document.write("<input type='button' id='treesButton' onClick='selectedTerrain=6;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:65px;width:18px;height:18px; display:none; background:url(terrain/trees.gif) no-repeat'>");
	document.write("<input type='button' id='scrubButton' onClick='selectedTerrain=7;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:65px;width:18px;height:18px; display:none; background:url(terrain/scrub.gif) no-repeat'>");
	document.write("<input type='button' id='longGrassButton' onClick='selectedTerrain=8;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:65px;width:18px;height:18px; display:none; background:url(terrain/longgrass.gif) no-repeat'>");
	document.write("<input type='button' id='grassButton' onClick='selectedTerrain=9;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:85px;width:18px;height:18px; display:none; background:url(terrain/grass.gif) no-repeat'>");
	document.write("<input type='button' id='swampButton' onClick='selectedTerrain=10;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:85px;width:18px;height:18px; display:none; background:url(terrain/swamp.gif) no-repeat'>");
	document.write("<input type='button' id='dirtButton' onClick='selectedTerrain=11;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:85px;width:18px;height:18px; display:none; background:url(terrain/dirt.gif) no-repeat'>");
	document.write("<input type='button' id='sandButton' onClick='selectedTerrain=12;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:85px;width:18px;height:18px; display:none; background:url(terrain/sand.gif) no-repeat'>");
	document.write("<input type='button' id='fireButton' onClick='selectedTerrain=13;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:105px;width:18px;height:18px; display:none; background:url(terrain/fire.gif) no-repeat'>");
	document.write("<input type='button' id='shallowWaterButton' onClick='selectedTerrain=14;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:105px;width:18px;height:18px; display:none; background:url(terrain/watershallow.gif) no-repeat'>");
	document.write("<input type='button' id='deepWaterButton' onClick='selectedTerrain=15;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:105px;width:18px;height:18px; display:none; background:url(terrain/waterdeep.gif) no-repeat'>");
	document.write("<input type='button' id='castleButton' onClick='selectedTerrain=16;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:135px;width:18px;height:18px; display:none; background:url(terrain/castle.gif) no-repeat'>");
	document.write("<input type='button' id='cemeteryButton' onClick='selectedTerrain=17;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:135px;width:18px;height:18px; display:none; background:url(terrain/cemetery.gif) no-repeat'>");
	document.write("<input type='button' id='homeButton' onClick='selectedTerrain=18;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:135px;width:18px;height:18px; display:none; background:url(terrain/home.gif) no-repeat'>");
	document.write("<input type='button' id='towerButton' onClick='selectedTerrain=19;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:135px;width:18px;height:18px; display:none; background:url(terrain/tower.gif) no-repeat'>");
	document.write("<input type='button' id='townButton' onClick='selectedTerrain=20;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:155px;width:18px;height:18px; display:none; background:url(terrain/town.gif) no-repeat'>");
	document.write("<input type='button' id='villageButton' onClick='selectedTerrain=21;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:155px;width:18px;height:18px; display:none; background:url(terrain/village.gif) no-repeat'>");
	document.write("<input type='button' id='redbricksButton' onClick='selectedTerrain=22;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:185px;width:18px;height:18px; display:none; background:url(terrain/redbricks.gif) no-repeat'>");
	document.write("<input type='button' id='redbrickscrackedButton' onClick='selectedTerrain=23;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:185px;width:18px;height:18px; display:none; background:url(terrain/redbrickscracked.gif) no-repeat'>");
	document.write("<input type='button' id='redbrickwindowButton' onClick='selectedTerrain=24;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:185px;width:18px;height:18px; display:none; background:url(terrain/redbrickwindow.gif) no-repeat'>");
	document.write("<input type='button' id='reddoorButton' onClick='selectedTerrain=25;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:185px;width:18px;height:18px; display:none; background:url(terrain/reddoor.gif) no-repeat'>");
	document.write("<input type='button' id='redopendoorButton' onClick='selectedTerrain=26;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:205px;width:18px;height:18px; display:none; background:url(terrain/redopendoor.gif) no-repeat'>");
	document.write("<input type='button' id='redgrateButton' onClick='selectedTerrain=27;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:205px;width:18px;height:18px; display:none; background:url(terrain/redgrate.gif) no-repeat'>");
	document.write("<input type='button' id='whitebricksButton' onClick='selectedTerrain=28;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:235px;width:18px;height:18px; display:none; background:url(terrain/whitebricks.gif) no-repeat'>");
	document.write("<input type='button' id='whitedoorButton' onClick='selectedTerrain=29;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:235px;width:18px;height:18px; display:none; background:url(terrain/whitedoor.gif) no-repeat'>");
	document.write("<input type='button' id='whiteopendoorButton' onClick='selectedTerrain=30;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:235px;width:18px;height:18px; display:none; background:url(terrain/whiteopendoor.gif) no-repeat'>");
	document.write("<input type='button' id='whitegrateButton' onClick='selectedTerrain=31;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:235px;width:18px;height:18px; display:none; background:url(terrain/whitegrate.gif) no-repeat'>");
	document.write("<input type='button' id='woodfloorhButton' onClick='selectedTerrain=32;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:265px;width:18px;height:18px; display:none; background:url(terrain/woodfloorh.gif) no-repeat'>");
	document.write("<input type='button' id='woodfloorvButton' onClick='selectedTerrain=33;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:265px;width:18px;height:18px; display:none; background:url(terrain/woodfloorv.gif) no-repeat'>");
	document.write("<input type='button' id='tilefloorButton' onClick='selectedTerrain=34;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:265px;width:18px;height:18px; display:none; background:url(terrain/tilefloor.gif) no-repeat'>");
	document.write("<input type='button' id='tilefloorbButton' onClick='selectedTerrain=35;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:265px;width:18px;height:18px; display:none; background:url(terrain/tilefloorb.gif) no-repeat'>");
	document.write("<input type='button' id='cobblestonesButton' onClick='selectedTerrain=36;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:285px;width:18px;height:18px; display:none; background:url(terrain/cobblestones.gif) no-repeat'>");
	document.write("<input type='button' id='anvilButton' onClick='selectedTerrain=37;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:315px;width:18px;height:18px; display:none; background:url(terrain/anvil.gif) no-repeat'>");
	document.write("<input type='button' id='barrelButton' onClick='selectedTerrain=38;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:315px;width:18px;height:18px; display:none; background:url(terrain/barrel.gif) no-repeat'>");
	document.write("<input type='button' id='brazierButton' onClick='selectedTerrain=39;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:315px;width:18px;height:18px; display:none; background:url(terrain/brazier.gif) no-repeat'>");
	document.write("<input type='button' id='caskButton' onClick='selectedTerrain=40;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:315px;width:18px;height:18px; display:none; background:url(terrain/cask.gif) no-repeat'>");
	document.write("<input type='button' id='fountainButton' onClick='selectedTerrain=41;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:335px;width:18px;height:18px; display:none; background:url(terrain/fountain.gif) no-repeat'>");
	document.write("<input type='button' id='harpsichordButton' onClick='selectedTerrain=42;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:335px;width:18px;height:18px; display:none; background:url(terrain/harpsichord.gif) no-repeat'>");
	document.write("<input type='button' id='pillarButton' onClick='selectedTerrain=43;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:335px;width:18px;height:18px; display:none; background:url(terrain/pillar.gif) no-repeat'>");
	document.write("<input type='button' id='plantButton' onClick='selectedTerrain=44;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:335px;width:18px;height:18px; display:none; background:url(terrain/plant.gif) no-repeat'>");
	document.write("<input type='button' id='spitButton' onClick='selectedTerrain=45;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:355px;width:18px;height:18px; display:none; background:url(terrain/spit.gif) no-repeat'>");
	document.write("<input type='button' id='stocksButton' onClick='selectedTerrain=46;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:355px;width:18px;height:18px; display:none; background:url(terrain/stocks.gif) no-repeat'>");
	document.write("<input type='button' id='stoveButton' onClick='selectedTerrain=47;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:355px;width:18px;height:18px; display:none; background:url(terrain/stove.gif) no-repeat'>");
	document.write("<input type='button' id='tableButton' onClick='selectedTerrain=48;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:355px;width:18px;height:18px; display:none; background:url(terrain/table.gif) no-repeat'>");
	document.write("<input type='button' id='tombstoneButton' onClick='selectedTerrain=49;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:375px;width:18px;height:18px; display:none; background:url(terrain/tombstone.gif) no-repeat'>");
	document.write("<input type='button' id='treeButton' onClick='selectedTerrain=50;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:375px;width:18px;height:18px; display:none; background:url(terrain/tree.gif) no-repeat'>");
	document.write("<input type='button' id='treedeadButton' onClick='selectedTerrain=51;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:375px;width:18px;height:18px; display:none; background:url(terrain/treedead.gif) no-repeat'>");
	document.write("<input type='button' id='bladebottomButton' onClick='selectedTerrain=52;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:405px;width:18px;height:18px; display:none; background:url(terrain/bladebottom.gif) no-repeat'>");
	document.write("<input type='button' id='bladetopButton' onClick='selectedTerrain=53;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:405px;width:18px;height:18px; display:none; background:url(terrain/bladetop.gif) no-repeat'>");
	document.write("<input type='button' id='guillitinebottomButton' onClick='selectedTerrain=54;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:405px;width:18px;height:18px; display:none; background:url(terrain/guillitinebottom.gif) no-repeat'>");
	document.write("<input type='button' id='guillitinetopButton' onClick='selectedTerrain=55;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:405px;width:18px;height:18px; display:none; background:url(terrain/guillitinetop.gif) no-repeat'>");
	document.write("<input type='button' id='racklButton' onClick='selectedTerrain=56;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:425px;width:18px;height:18px; display:none; background:url(terrain/rackl.gif) no-repeat'>");
	document.write("<input type='button' id='rackrButton' onClick='selectedTerrain=57;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:425px;width:18px;height:18px; display:none; background:url(terrain/rackr.gif) no-repeat'>");
	document.write("<input type='button' id='shacklesButton' onClick='selectedTerrain=58;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:425px;width:18px;height:18px; display:none; background:url(terrain/shackles.gif) no-repeat'>");
	document.write("<input type='button' id='aButton' onClick='selectedTerrain=59;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:455px;width:18px;height:18px; display:none; background:url(alphabet/a.gif) no-repeat'>");
	document.write("<input type='button' id='bButton' onClick='selectedTerrain=60;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:455px;width:18px;height:18px; display:none; background:url(alphabet/b.gif) no-repeat'>");
	document.write("<input type='button' id='cButton' onClick='selectedTerrain=61;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:455px;width:18px;height:18px; display:none; background:url(alphabet/c.gif) no-repeat'>");
	document.write("<input type='button' id='dButton' onClick='selectedTerrain=62;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:455px;width:18px;height:18px; display:none; background:url(alphabet/d.gif) no-repeat'>");
	document.write("<input type='button' id='eButton' onClick='selectedTerrain=63;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:475px;width:18px;height:18px; display:none; background:url(alphabet/e.gif) no-repeat'>");
	document.write("<input type='button' id='fButton' onClick='selectedTerrain=64;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:475px;width:18px;height:18px; display:none; background:url(alphabet/f.gif) no-repeat'>");
	document.write("<input type='button' id='gButton' onClick='selectedTerrain=65;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:475px;width:18px;height:18px; display:none; background:url(alphabet/g.gif) no-repeat'>");
	document.write("<input type='button' id='hButton' onClick='selectedTerrain=66;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:475px;width:18px;height:18px; display:none; background:url(alphabet/h.gif) no-repeat'>");
	document.write("<input type='button' id='iButton' onClick='selectedTerrain=67;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:495px;width:18px;height:18px; display:none; background:url(alphabet/i.gif) no-repeat'>");
	document.write("<input type='button' id='jButton' onClick='selectedTerrain=68;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:495px;width:18px;height:18px; display:none; background:url(alphabet/j.gif) no-repeat'>");
	document.write("<input type='button' id='kButton' onClick='selectedTerrain=69;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:495px;width:18px;height:18px; display:none; background:url(alphabet/k.gif) no-repeat'>");
	document.write("<input type='button' id='lButton' onClick='selectedTerrain=70;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:495px;width:18px;height:18px; display:none; background:url(alphabet/l.gif) no-repeat'>");
	document.write("<input type='button' id='mButton' onClick='selectedTerrain=71;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:515px;width:18px;height:18px; display:none; background:url(alphabet/m.gif) no-repeat'>");
	document.write("<input type='button' id='nButton' onClick='selectedTerrain=72;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:515px;width:18px;height:18px; display:none; background:url(alphabet/n.gif) no-repeat'>");
	document.write("<input type='button' id='oButton' onClick='selectedTerrain=73;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:515px;width:18px;height:18px; display:none; background:url(alphabet/o.gif) no-repeat'>");
	document.write("<input type='button' id='pButton' onClick='selectedTerrain=74;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:515px;width:18px;height:18px; display:none; background:url(alphabet/p.gif) no-repeat'>");
	document.write("<input type='button' id='qButton' onClick='selectedTerrain=75;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:535px;width:18px;height:18px; display:none; background:url(alphabet/q.gif) no-repeat'>");
	document.write("<input type='button' id='rButton' onClick='selectedTerrain=76;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:535px;width:18px;height:18px; display:none; background:url(alphabet/r.gif) no-repeat'>");
	document.write("<input type='button' id='sButton' onClick='selectedTerrain=77;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:535px;width:18px;height:18px; display:none; background:url(alphabet/s.gif) no-repeat'>");
	document.write("<input type='button' id='tButton' onClick='selectedTerrain=78;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:535px;width:18px;height:18px; display:none; background:url(alphabet/t.gif) no-repeat'>");
	document.write("<input type='button' id='uButton' onClick='selectedTerrain=79;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:555px;width:18px;height:18px; display:none; background:url(alphabet/u.gif) no-repeat'>");
	document.write("<input type='button' id='vButton' onClick='selectedTerrain=80;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:555px;width:18px;height:18px; display:none; background:url(alphabet/v.gif) no-repeat'>");
	document.write("<input type='button' id='wButton' onClick='selectedTerrain=81;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:555px;width:18px;height:18px; display:none; background:url(alphabet/w.gif) no-repeat'>");
	document.write("<input type='button' id='xButton' onClick='selectedTerrain=82;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1230px;top:555px;width:18px;height:18px; display:none; background:url(alphabet/x.gif) no-repeat'>");
	document.write("<input type='button' id='yButton' onClick='selectedTerrain=83;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1170px;top:575px;width:18px;height:18px; display:none; background:url(alphabet/y.gif) no-repeat'>");
	document.write("<input type='button' id='zButton' onClick='selectedTerrain=84;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1190px;top:575px;width:18px;height:18px; display:none; background:url(alphabet/z.gif) no-repeat'>");
	document.write("<input type='button' id='spaceButton' onClick='selectedTerrain=85;changeSelectedTerrain();' style='margin:0; border:0; padding:0; position:absolute;left:1210px;top:575px;width:18px;height:18px; display:none; background:url(alphabet/space.gif) no-repeat'>");
	itemHeight = 20;
	document.write("<font id='labelLoad' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Map Text:</font>");
	document.write("<textarea id='loadInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+(masterTop+bumpDown)+"px; left:135px; width:125px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='editorWidth' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Map Width:</font>");
	document.write("<textarea id='widthInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+(masterTop+bumpDown)+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<font id='editorHeight' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Map Height:</font>");
	document.write("<textarea id='heightInput' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+(masterTop+bumpDown)+"px; left:210px; width:50px; height:"+itemHeight+"px; background-color:yellow; display:none;'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	masterTop = masterTop + 1;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='buttonLoad' Value='Load Map' class='btn' onClick='loadMap();' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	masterTop = masterTop + 5;
	document.write("<BUTTON TYPE='button' id='buttonNW20' Value='NW' class='btn' onClick='editorNW20();' style='position:absolute; top:"+masterTop+"px; left:5px; width:49px; height:49px; display:none;'>NW</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonN20' Value='N' class='btn' onClick='editorN20();' style='position:absolute; top:"+masterTop+"px; left:107px; width:49px; height:49px; display:none;'>N</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonNE20' Value='NE' class='btn' onClick='editorNE20();' style='position:absolute; top:"+masterTop+"px; left:209px; width:49px; height:49px; display:none;'>NE</BUTTON>");
	masterTop = masterTop + 51;
	document.write("<BUTTON TYPE='button' id='buttonNW' Value='NW' class='btn' onClick='editorNW();' style='position:absolute; top:"+masterTop+"px; left:56px; width:49px; height:49px; display:none;'>NW</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonN' Value='N' class='btn' onClick='editorN();' style='position:absolute; top:"+masterTop+"px; left:107px; width:49px; height:49px; display:none;'>N</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonNE' Value='NE' class='btn' onClick='editorNE();' style='position:absolute; top:"+masterTop+"px; left:158px; width:49px; height:49px; display:none;'>NE</BUTTON>");
	masterTop = masterTop + 51;
	document.write("<BUTTON TYPE='button' id='buttonW20' Value='W' class='btn' onClick='editorWest20();' style='position:absolute; top:"+masterTop+"px; left:5px; width:49px; height:49px; display:none;'>W</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonW' Value='W' class='btn' onClick='editorWest();' style='position:absolute; top:"+masterTop+"px; left:56px; width:49px; height:49px; display:none;'>W</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonE' Value='E' class='btn' onClick='editorEast();' style='position:absolute; top:"+masterTop+"px; left:158px; width:49px; height:49px; display:none;'>E</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonE20' Value='E' class='btn' onClick='editorEast20();' style='position:absolute; top:"+masterTop+"px; left:209px; width:49px; height:49px; display:none;'>E</BUTTON>");
	masterTop = masterTop + 51;
	document.write("<BUTTON TYPE='button' id='buttonSW' Value='SW' class='btn' onClick='editorSW();' style='position:absolute; top:"+masterTop+"px; left:56px; width:49px; height:49px; display:none;'>SW</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonS' Value='S' class='btn' onClick='editorS();' style='position:absolute; top:"+masterTop+"px; left:107px; width:49px; height:49px; display:none;'>S</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonSE' Value='SE' class='btn' onClick='editorSE();' style='position:absolute; top:"+masterTop+"px; left:158px; width:49px; height:49px; display:none;'>SE</BUTTON>");
	masterTop = masterTop + 51;
	document.write("<BUTTON TYPE='button' id='buttonSW20' Value='SW' class='btn' onClick='editorSW20();' style='position:absolute; top:"+masterTop+"px; left:5px; width:49px; height:49px; display:none;'>SW</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonS20' Value='S' class='btn' onClick='editorS20();' style='position:absolute; top:"+masterTop+"px; left:107px; width:49px; height:49px; display:none;'>S</BUTTON>");
	document.write("<BUTTON TYPE='button' id='buttonSE20' Value='SE' class='btn' onClick='editorSE20();' style='position:absolute; top:"+masterTop+"px; left:209px; width:49px; height:49px; display:none;'>SE</BUTTON>");
	masterTop = masterTop + 54;
	itemHeight = 20;
	document.write("<font id='editorX' style='position:absolute; top:"+(masterTop+textBump)+"px; left:5px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>X Position:</font>");
	document.write("<textarea id='editorXDisplay' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+(masterTop+bumpDown)+"px; left:75px; width:50px; height:"+itemHeight+"px; display:none;' readonly='readonly'></textarea>");
	document.write("<font id='editorY' style='position:absolute; top:"+(masterTop+textBump)+"px; left:138px; width:200px; height:"+itemHeight+"px; font-family:Arial; font-size:13px; display:none;' readonly='readonly'>Y Position:</font>");
	document.write("<textarea id='editorYDisplay' wrap='on' style='font-size:11px; resize:none; position:absolute; top:"+(masterTop+bumpDown)+"px; left:210px; width:50px; height:"+itemHeight+"px; display:none;' readonly='readonly'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	itemHeight = 20;
	document.write("<INPUT TYPE='button' id='buttonLocateMe' Value='Locate Me' class='btn' onClick='locateMe();' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	document.write("<INPUT TYPE='button' id='buttonBackToEditor' Value='Back To Editor' class='btn' onClick='backToEditor();' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown;
	document.write("<INPUT TYPE='button' id='editorTextButton' Value='View Text Map' class='btn' onClick='viewEditorTextMap()' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	document.write("<INPUT TYPE='button' id='buttonBackToEditor2' Value='Back To Editor' class='btn' onClick='backToEditor()' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; display:none;'>");
	masterTop = masterTop + itemHeight + bumpDown + 3;
	itemHeight = 100;
	document.write("<textarea id='fieldEditor' wrap='on' style='position:absolute; top:"+masterTop+"px; left:5px; width:255px; height:"+itemHeight+"px; color:darkblue; font-family:Arial; font-size:12px; display:none;' readonly='readonly'></textarea>");
	masterTop = masterTop + itemHeight + bumpDown;
	document.write("</FORM>");
	document.getElementById('field2').innerHTML = "";
	document.myform.field5.value = "";
	document.myform.field6.value = "";
	document.myform.field8.value = "";
	document.myform.field12.value = "";
	document.myform.field14.value = "";
	document.myform.field16.value = "";
	document.myform.field18.value = "";
	document.myform.fieldError.value = "";
}
function changeTile()
{
	if (selectedTerrain=="")
	{
		document.myform.fieldEditor.value = document.myform.fieldEditor.value + "\nNo terrain selected!";
		document.myform.fieldError.scrollTop = document.myform.fieldEditor.scrollHeight;
	}
	else
	{
		editorArray[(tileChangeX+editorX)][(tileChangeY+editorY)] = selectedTerrain;
		drawEditorMap();
	}
}
function changeSelectedTerrain()
{
	if 		(selectedTerrain==1)			{selectedTerrain="."; document.getElementById("selectedTerrainPic").src="terrain/highmountains.gif";}
	else if (selectedTerrain==2)			{selectedTerrain=":"; document.getElementById("selectedTerrainPic").src="terrain/lowmountains.gif";}
	else if (selectedTerrain==3)			{selectedTerrain=";"; document.getElementById("selectedTerrainPic").src="terrain/hills.gif";}
	else if (selectedTerrain==4)			{selectedTerrain="^"; document.getElementById("selectedTerrainPic").src="terrain/boreal.gif";}
	else if (selectedTerrain==5)			{selectedTerrain="="; document.getElementById("selectedTerrainPic").src="terrain/forest.gif";}
	else if (selectedTerrain==6)			{selectedTerrain="+"; document.getElementById("selectedTerrainPic").src="terrain/trees.gif";}
	else if (selectedTerrain==7)			{selectedTerrain="?"; document.getElementById("selectedTerrainPic").src="terrain/scrub.gif";}
	else if (selectedTerrain==8)			{selectedTerrain="I"; document.getElementById("selectedTerrainPic").src="terrain/longgrass.gif";}
	else if (selectedTerrain==9)			{selectedTerrain="C"; document.getElementById("selectedTerrainPic").src="terrain/grass.gif";}
	else if (selectedTerrain==10)			{selectedTerrain="&"; document.getElementById("selectedTerrainPic").src="terrain/swamp.gif";}
	else if (selectedTerrain==11)			{selectedTerrain="-"; document.getElementById("selectedTerrainPic").src="terrain/dirt.gif";}
	else if (selectedTerrain==12)			{selectedTerrain="~"; document.getElementById("selectedTerrainPic").src="terrain/sand.gif";}
	else if (selectedTerrain==13)			{selectedTerrain="%"; document.getElementById("selectedTerrainPic").src="terrain/fire.gif";}
	else if (selectedTerrain==14)			{selectedTerrain=","; document.getElementById("selectedTerrainPic").src="terrain/watershallow.gif";}
	else if (selectedTerrain==15)			{selectedTerrain="M"; document.getElementById("selectedTerrainPic").src="terrain/waterdeep.gif";}
	else if (selectedTerrain==16)			{selectedTerrain="@"; document.getElementById("selectedTerrainPic").src="terrain/castle.gif";}
	else if (selectedTerrain==17)			{selectedTerrain="_"; document.getElementById("selectedTerrainPic").src="terrain/cemetery.gif";}
	else if (selectedTerrain==18)			{selectedTerrain="7"; document.getElementById("selectedTerrainPic").src="terrain/home.gif";}
	else if (selectedTerrain==19)			{selectedTerrain="/"; document.getElementById("selectedTerrainPic").src="terrain/tower.gif";}
	else if (selectedTerrain==20)			{selectedTerrain="#"; document.getElementById("selectedTerrainPic").src="terrain/town.gif";}
	else if (selectedTerrain==21)			{selectedTerrain="V"; document.getElementById("selectedTerrainPic").src="terrain/village.gif";}
	else if (selectedTerrain==22)			{selectedTerrain="R"; document.getElementById("selectedTerrainPic").src="terrain/redbricks.gif";}
	else if (selectedTerrain==23)			{selectedTerrain="{"; document.getElementById("selectedTerrainPic").src="terrain/redbrickscracked.gif";}
	else if (selectedTerrain==24)			{selectedTerrain="}"; document.getElementById("selectedTerrainPic").src="terrain/redbrickwindow.gif";}
	else if (selectedTerrain==25)			{selectedTerrain="E"; document.getElementById("selectedTerrainPic").src="terrain/reddoor.gif";}
	else if (selectedTerrain==26)			{selectedTerrain="S"; document.getElementById("selectedTerrainPic").src="terrain/redopendoor.gif";}
	else if (selectedTerrain==27)			{selectedTerrain="("; document.getElementById("selectedTerrainPic").src="terrain/redgrate.gif";}
	else if (selectedTerrain==28)			{selectedTerrain="W"; document.getElementById("selectedTerrainPic").src="terrain/whitebricks.gif";}
	else if (selectedTerrain==29)			{selectedTerrain="D"; document.getElementById("selectedTerrainPic").src="terrain/whitedoor.gif";}
	else if (selectedTerrain==30)			{selectedTerrain="T"; document.getElementById("selectedTerrainPic").src="terrain/whiteopendoor.gif";}
	else if (selectedTerrain==31)			{selectedTerrain="U"; document.getElementById("selectedTerrainPic").src="terrain/whitegrate.gif";}
	else if (selectedTerrain==32)			{selectedTerrain="F"; document.getElementById("selectedTerrainPic").src="terrain/woodfloorh.gif";}
	else if (selectedTerrain==33)			{selectedTerrain="G"; document.getElementById("selectedTerrainPic").src="terrain/woodfloorv.gif";}
	else if (selectedTerrain==34)			{selectedTerrain="X"; document.getElementById("selectedTerrainPic").src="terrain/tilefloor.gif";}
	else if (selectedTerrain==35)			{selectedTerrain="Y"; document.getElementById("selectedTerrainPic").src="terrain/tilefloorb.gif";}
	else if (selectedTerrain==36)			{selectedTerrain="0"; document.getElementById("selectedTerrainPic").src="terrain/cobblestones.gif";}
	else if (selectedTerrain==37)			{selectedTerrain=">"; document.getElementById("selectedTerrainPic").src="terrain/anvil.gif";}
	else if (selectedTerrain==38)			{selectedTerrain="B"; document.getElementById("selectedTerrainPic").src="terrain/barrel.gif";}
	else if (selectedTerrain==39)			{selectedTerrain="!"; document.getElementById("selectedTerrainPic").src="terrain/brazier.gif";}
	else if (selectedTerrain==40)			{selectedTerrain="O"; document.getElementById("selectedTerrainPic").src="terrain/cask.gif";}
	else if (selectedTerrain==41)			{selectedTerrain="A"; document.getElementById("selectedTerrainPic").src="terrain/fountain.gif";}
	else if (selectedTerrain==42)			{selectedTerrain="K"; document.getElementById("selectedTerrainPic").src="terrain/harpsichord.gif";}
	else if (selectedTerrain==43)			{selectedTerrain="P"; document.getElementById("selectedTerrainPic").src="terrain/pillar.gif";}
	else if (selectedTerrain==44)			{selectedTerrain="J"; document.getElementById("selectedTerrainPic").src="terrain/plant.gif";}
	else if (selectedTerrain==45)			{selectedTerrain="9"; document.getElementById("selectedTerrainPic").src="terrain/spit.gif";}
	else if (selectedTerrain==46)			{selectedTerrain="8"; document.getElementById("selectedTerrainPic").src="terrain/stocks.gif";}
	else if (selectedTerrain==47)			{selectedTerrain="Z"; document.getElementById("selectedTerrainPic").src="terrain/stove.gif";}
	else if (selectedTerrain==48)			{selectedTerrain="N"; document.getElementById("selectedTerrainPic").src="terrain/table.gif";}
	else if (selectedTerrain==49)			{selectedTerrain=")"; document.getElementById("selectedTerrainPic").src="terrain/tombstone.gif";}
	else if (selectedTerrain==50)			{selectedTerrain="H"; document.getElementById("selectedTerrainPic").src="terrain/tree.gif";}
	else if (selectedTerrain==51)			{selectedTerrain="Q"; document.getElementById("selectedTerrainPic").src="terrain/treedead.gif";}
	else if (selectedTerrain==52)			{selectedTerrain="4"; document.getElementById("selectedTerrainPic").src="terrain/bladebottom.gif";}
	else if (selectedTerrain==53)			{selectedTerrain="3"; document.getElementById("selectedTerrainPic").src="terrain/bladetop.gif";}
	else if (selectedTerrain==54)			{selectedTerrain="2"; document.getElementById("selectedTerrainPic").src="terrain/guillitinebottom.gif";}
	else if (selectedTerrain==55)			{selectedTerrain="1"; document.getElementById("selectedTerrainPic").src="terrain/guillitinetop.gif";}
	else if (selectedTerrain==56)			{selectedTerrain="5"; document.getElementById("selectedTerrainPic").src="terrain/rackl.gif";}
	else if (selectedTerrain==57)			{selectedTerrain="6"; document.getElementById("selectedTerrainPic").src="terrain/rackr.gif";}
	else if (selectedTerrain==58)			{selectedTerrain="<"; document.getElementById("selectedTerrainPic").src="terrain/shackles.gif";}
	else if (selectedTerrain==59)			{selectedTerrain="a"; document.getElementById("selectedTerrainPic").src="alphabet/a.gif";}
	else if (selectedTerrain==60)			{selectedTerrain="b"; document.getElementById("selectedTerrainPic").src="alphabet/b.gif";}
	else if (selectedTerrain==61)			{selectedTerrain="c"; document.getElementById("selectedTerrainPic").src="alphabet/c.gif";}
	else if (selectedTerrain==62)			{selectedTerrain="d"; document.getElementById("selectedTerrainPic").src="alphabet/d.gif";}
	else if (selectedTerrain==63)			{selectedTerrain="e"; document.getElementById("selectedTerrainPic").src="alphabet/e.gif";}
	else if (selectedTerrain==64)			{selectedTerrain="f"; document.getElementById("selectedTerrainPic").src="alphabet/f.gif";}
	else if (selectedTerrain==65)			{selectedTerrain="g"; document.getElementById("selectedTerrainPic").src="alphabet/g.gif";}
	else if (selectedTerrain==66)			{selectedTerrain="h"; document.getElementById("selectedTerrainPic").src="alphabet/h.gif";}
	else if (selectedTerrain==67)			{selectedTerrain="i"; document.getElementById("selectedTerrainPic").src="alphabet/i.gif";}
	else if (selectedTerrain==68)			{selectedTerrain="j"; document.getElementById("selectedTerrainPic").src="alphabet/j.gif";}
	else if (selectedTerrain==69)			{selectedTerrain="k"; document.getElementById("selectedTerrainPic").src="alphabet/k.gif";}
	else if (selectedTerrain==70)			{selectedTerrain="l"; document.getElementById("selectedTerrainPic").src="alphabet/l.gif";}
	else if (selectedTerrain==71)			{selectedTerrain="m"; document.getElementById("selectedTerrainPic").src="alphabet/m.gif";}
	else if (selectedTerrain==72)			{selectedTerrain="n"; document.getElementById("selectedTerrainPic").src="alphabet/n.gif";}
	else if (selectedTerrain==73)			{selectedTerrain="o"; document.getElementById("selectedTerrainPic").src="alphabet/o.gif";}
	else if (selectedTerrain==74)			{selectedTerrain="p"; document.getElementById("selectedTerrainPic").src="alphabet/p.gif";}
	else if (selectedTerrain==75)			{selectedTerrain="q"; document.getElementById("selectedTerrainPic").src="alphabet/q.gif";}
	else if (selectedTerrain==76)			{selectedTerrain="r"; document.getElementById("selectedTerrainPic").src="alphabet/r.gif";}
	else if (selectedTerrain==77)			{selectedTerrain="s"; document.getElementById("selectedTerrainPic").src="alphabet/s.gif";}
	else if (selectedTerrain==78)			{selectedTerrain="t"; document.getElementById("selectedTerrainPic").src="alphabet/t.gif";}
	else if (selectedTerrain==79)			{selectedTerrain="u"; document.getElementById("selectedTerrainPic").src="alphabet/u.gif";}
	else if (selectedTerrain==80)			{selectedTerrain="v"; document.getElementById("selectedTerrainPic").src="alphabet/v.gif";}
	else if (selectedTerrain==81)			{selectedTerrain="w"; document.getElementById("selectedTerrainPic").src="alphabet/w.gif";}
	else if (selectedTerrain==82)			{selectedTerrain="x"; document.getElementById("selectedTerrainPic").src="alphabet/x.gif";}
	else if (selectedTerrain==83)			{selectedTerrain="y"; document.getElementById("selectedTerrainPic").src="alphabet/y.gif";}
	else if (selectedTerrain==84)			{selectedTerrain="z"; document.getElementById("selectedTerrainPic").src="alphabet/z.gif";}
	else if (selectedTerrain==85)			{selectedTerrain="|"; document.getElementById("selectedTerrainPic").src="alphabet/space.gif";}
}
function changeLevelTerrain()
{
	if (selectedTerrain=="")
	{
		document.myform.fieldEditor.value = document.myform.fieldEditor.value + "\nNo terrain type selected!";
	}
	else
	{
		if (levelChanged==1)		{terrainToBeChanged='.';}
		else if (levelChanged==2)	{terrainToBeChanged='.';}
		else if (levelChanged==3)	{terrainToBeChanged='.';}
		else if (levelChanged==4)	{terrainToBeChanged='.';}
		else if (levelChanged==5)	{terrainToBeChanged='.';}
		else if (levelChanged==6)	{terrainToBeChanged='.';}
		else if (levelChanged==7)	{terrainToBeChanged='.';}
		else if (levelChanged==8)	{terrainToBeChanged='.';}
		else if (levelChanged==9)	{terrainToBeChanged='.';}
		else if (levelChanged==10)	{terrainToBeChanged='.';}
		else if (levelChanged==11)	{terrainToBeChanged='.';}
		else if (levelChanged==12)	{terrainToBeChanged='.';}
		else if (levelChanged==13)	{terrainToBeChanged='.';}
		else if (levelChanged==14)	{terrainToBeChanged='.';}
		else if (levelChanged==15)	{terrainToBeChanged='.';}
		else if (levelChanged==16)	{terrainToBeChanged='.';}
		else if (levelChanged==17)	{terrainToBeChanged='.';}
		else if (levelChanged==18)	{terrainToBeChanged='.';}
		else if (levelChanged==19)	{terrainToBeChanged='.';}
		else if (levelChanged==20)	{terrainToBeChanged='.';}
	}
}
function createWorldCheck()
{
	disableAllButtons();
	document.getElementById("runagainsame").style.display="none";
	document.getElementById("areYouSure").style.display="block";
	document.getElementById("sureYes").style.display="block";
	document.getElementById("sureNo").style.display="block";
}
function cancelCreateWorld()
{
	enableAllButtons();
	document.getElementById("runagainsame").style.display="block";
	document.getElementById("areYouSure").style.display="none";
	document.getElementById("sureYes").style.display="none";
	document.getElementById("sureNo").style.display="none";
}
function setPreset()
{
	document.getElementById("buttonSetPreset").style.display="none";
	document.getElementById("buttonCancelSetPreset").style.display="block";
	disableAllButtons();
	document.myform.buttonCancelSetPreset.disabled=false;
	document.myform.preset1.disabled=false;
	document.myform.preset2.disabled=false;
	document.myform.preset3.disabled=false;
	document.myform.preset4.disabled=false;
	setAPreset = 1;
}
function cancelSetPreset()
{
	document.getElementById("buttonCancelSetPreset").style.display="none";
	document.getElementById("buttonSetPreset").style.display="block";
	enableAllButtons();
	setAPreset = 0;
}
function setThePreset()
{
	presetString = "";
	if (setAPreset==1)
	{
		for (gh=1;gh<=100;gh++)
		{
			if (document.getElementById("checkbox"+gh).checked==false)
			{
				presetString = presetString + "0";
			}
			else
			{
				presetString = presetString + "1";
			}
		}
		storedWidth = document.myform.field5.value;
		if (isNaN(storedWidth))						{storedWidth="000000";}
		else if (storedWidth == 0)					{storedWidth="000000";}
		else if (storedWidth < 10)					{storedWidth="00000"+storedWidth.toString();}
		else if (storedWidth < 100)					{storedWidth="0000"+storedWidth.toString();}
		else if (storedWidth < 1000)				{storedWidth="000"+storedWidth.toString();}
		else if (storedWidth < 10000)				{storedWidth="00"+storedWidth.toString();}
		else if (storedWidth < 100000)				{storedWidth="0"+storedWidth.toString();}
		else if (storedWidth > 999999)				{storedWidth="999999";}
		presetString = presetString + storedWidth;
		storedHeight = document.myform.field6.value;
		if (isNaN(storedHeight))					{storedHeight="000000";}
		else if (storedHeight == 0)					{storedHeight="000000";}
		else if (storedHeight < 10)					{storedHeight="00000"+storedHeight.toString();}
		else if (storedHeight < 100)				{storedHeight="0000"+storedHeight.toString();}
		else if (storedHeight < 1000)				{storedHeight="000"+storedHeight.toString();}
		else if (storedHeight < 10000)				{storedHeight="00"+storedHeight.toString();}
		else if (storedHeight < 100000)				{storedHeight="0"+storedHeight.toString();}
		else if (storedHeight > 999999)				{storedHeight="999999";}
		presetString = presetString + storedHeight;
		storedElevations = document.myform.levelsToRunInput.value;
		if (isNaN(storedElevations))				{storedElevations="000000";}
		else if (storedElevations == 0)				{storedElevations="000000";}
		else if (storedElevations < 10)				{storedElevations="00000"+storedElevations.toString();}
		else if (storedElevations < 100)			{storedElevations="0000"+storedElevations.toString();}
		else if (storedElevations < 1000)			{storedElevations="000"+storedElevations.toString();}
		else if (storedElevations < 10000)			{storedElevations="00"+storedElevations.toString();}
		else if (storedElevations < 100000)			{storedElevations="0"+storedElevations.toString();}
		else if (storedElevations > 999999)			{storedElevations="999999";}
		presetString = presetString + storedElevations;
		storedHillTops = document.myform.field8.value;
		if (isNaN(storedHillTops))					{storedHillTops="000000";}
		else if (storedHillTops == 0)				{storedHillTops="000000";}
		else if (storedHillTops < 10)				{storedHillTops="00000"+storedHillTops.toString();}
		else if (storedHillTops < 100)				{storedHillTops="0000"+storedHillTops.toString();}
		else if (storedHillTops < 1000)				{storedHillTops="000"+storedHillTops.toString();}
		else if (storedHillTops < 10000)			{storedHillTops="00"+storedHillTops.toString();}
		else if (storedHillTops < 100000)			{storedHillTops="0"+storedHillTops.toString();}
		else if (storedHillTops > 999999)			{storedHillTops="999999";}
		presetString = presetString + storedHillTops;
		storedHillLength = document.myform.hillLengthInput.value;
		if (isNaN(storedHillLength))				{storedHillLength="000000";}
		else if (storedHillLength == 0)				{storedHillLength="000000";}
		else if (storedHillLength < 10)				{storedHillLength="00000"+storedHillLength.toString();}
		else if (storedHillLength < 100)			{storedHillLength="0000"+storedHillLength.toString();}
		else if (storedHillLength < 1000)			{storedHillLength="000"+storedHillLength.toString();}
		else if (storedHillLength < 10000)			{storedHillLength="00"+storedHillLength.toString();}
		else if (storedHillLength < 100000)			{storedHillLength="0"+storedHillLength.toString();}
		else if (storedHillLength > 999999)			{storedHillLength="999999";}
		presetString = presetString + storedHillLength;
		storedHillCurvyness = document.myform.hillCurvynessInput.value;
		if (isNaN(storedHillCurvyness))				{storedHillCurvyness="000000";}
		else if (storedHillCurvyness == 0)			{storedHillCurvyness="000000";}
		else if (storedHillCurvyness < 10)			{storedHillCurvyness="00000"+storedHillCurvyness.toString();}
		else if (storedHillCurvyness < 100)			{storedHillCurvyness="0000"+storedHillCurvyness.toString();}
		else if (storedHillCurvyness < 1000)		{storedHillCurvyness="000"+storedHillCurvyness.toString();}
		else if (storedHillCurvyness < 10000)		{storedHillCurvyness="00"+storedHillCurvyness.toString();}
		else if (storedHillCurvyness < 100000)		{storedHillCurvyness="0"+storedHillCurvyness.toString();}
		else if (storedHillCurvyness > 999999)		{storedHillCurvyness="999999";}
		presetString = presetString + storedHillCurvyness;
		storedLandSpread = document.myform.landSpread.value;
		if (isNaN(storedLandSpread))				{storedLandSpread="000000";}
		else if (storedLandSpread == 0)				{storedLandSpread="000000";}
		else if (storedLandSpread < 10)				{storedLandSpread="00000"+storedLandSpread.toString();}
		else if (storedLandSpread < 100)			{storedLandSpread="0000"+storedLandSpread.toString();}
		else if (storedLandSpread < 1000)			{storedLandSpread="000"+storedLandSpread.toString();}
		else if (storedLandSpread < 10000)			{storedLandSpread="00"+storedLandSpread.toString();}
		else if (storedLandSpread < 100000)			{storedLandSpread="0"+storedLandSpread.toString();}
		else if (storedLandSpread > 999999)			{storedLandSpread="999999";}
		presetString = presetString + storedLandSpread;
		storedMountainSpread = document.myform.field12.value;
		if (isNaN(storedMountainSpread))				{storedMountainSpread="000000";}
		else if (storedMountainSpread == 0)				{storedMountainSpread="000000";}
		else if (storedMountainSpread < 10)				{storedMountainSpread="00000"+storedMountainSpread.toString();}
		else if (storedMountainSpread < 100)			{storedMountainSpread="0000"+storedMountainSpread.toString();}
		else if (storedMountainSpread < 1000)			{storedMountainSpread="000"+storedMountainSpread.toString();}
		else if (storedMountainSpread < 10000)			{storedMountainSpread="00"+storedMountainSpread.toString();}
		else if (storedMountainSpread < 100000)			{storedMountainSpread="0"+storedMountainSpread.toString();}
		else if (storedMountainSpread > 999999)			{storedMountainSpread="999999";}
		presetString = presetString + storedMountainSpread;
		storedNumRanges = document.myform.field14.value;
		if (isNaN(storedNumRanges))					{storedNumRanges="000000";}
		else if (storedNumRanges == 0)				{storedNumRanges="000000";}
		else if (storedNumRanges < 10)				{storedNumRanges="00000"+storedNumRanges.toString();}
		else if (storedNumRanges < 100)				{storedNumRanges="0000"+storedNumRanges.toString();}
		else if (storedNumRanges < 1000)			{storedNumRanges="000"+storedNumRanges.toString();}
		else if (storedNumRanges < 10000)			{storedNumRanges="00"+storedNumRanges.toString();}
		else if (storedNumRanges < 100000)			{storedNumRanges="0"+storedNumRanges.toString();}
		else if (storedNumRanges > 999999)			{storedNumRanges="999999";}
		presetString = presetString + storedNumRanges;
		storedMaxRangeLength = document.myform.field16.value;
		if (isNaN(storedMaxRangeLength))				{storedMaxRangeLength="000000";}
		else if (storedMaxRangeLength == 0)				{storedMaxRangeLength="000000";}
		else if (storedMaxRangeLength < 10)				{storedMaxRangeLength="00000"+storedMaxRangeLength.toString();}
		else if (storedMaxRangeLength < 100)			{storedMaxRangeLength="0000"+storedMaxRangeLength.toString();}
		else if (storedMaxRangeLength < 1000)			{storedMaxRangeLength="000"+storedMaxRangeLength.toString();}
		else if (storedMaxRangeLength < 10000)			{storedMaxRangeLength="00"+storedMaxRangeLength.toString();}
		else if (storedMaxRangeLength < 100000)			{storedMaxRangeLength="0"+storedMaxRangeLength.toString();}
		else if (storedMaxRangeLength > 999999)			{storedMaxRangeLength="999999";}
		presetString = presetString + storedMaxRangeLength;
		storedNumVolcanoes = document.myform.numberVolcanoesInput.value;
		if (isNaN(storedNumVolcanoes))					{storedNumVolcanoes="000000";}
		else if (storedNumVolcanoes == 0)				{storedNumVolcanoes="000000";}
		else if (storedNumVolcanoes < 10)				{storedNumVolcanoes="00000"+storedNumVolcanoes.toString();}
		else if (storedNumVolcanoes < 100)				{storedNumVolcanoes="0000"+storedNumVolcanoes.toString();}
		else if (storedNumVolcanoes < 1000)				{storedNumVolcanoes="000"+storedNumVolcanoes.toString();}
		else if (storedNumVolcanoes < 10000)			{storedNumVolcanoes="00"+storedNumVolcanoes.toString();}
		else if (storedNumVolcanoes < 100000)			{storedNumVolcanoes="0"+storedNumVolcanoes.toString();}
		else if (storedNumVolcanoes > 999999)			{storedNumVolcanoes="999999";}
		presetString = presetString + storedNumVolcanoes;
		storedMaxVolcanoSize = document.myform.volcanoSizeInput.value;
		if (isNaN(storedMaxVolcanoSize))				{storedMaxVolcanoSize="000000";}
		else if (storedMaxVolcanoSize == 0)				{storedMaxVolcanoSize="000000";}
		else if (storedMaxVolcanoSize < 10)				{storedMaxVolcanoSize="00000"+storedMaxVolcanoSize.toString();}
		else if (storedMaxVolcanoSize < 100)			{storedMaxVolcanoSize="0000"+storedMaxVolcanoSize.toString();}
		else if (storedMaxVolcanoSize < 1000)			{storedMaxVolcanoSize="000"+storedMaxVolcanoSize.toString();}
		else if (storedMaxVolcanoSize < 10000)			{storedMaxVolcanoSize="00"+storedMaxVolcanoSize.toString();}
		else if (storedMaxVolcanoSize < 100000)			{storedMaxVolcanoSize="0"+storedMaxVolcanoSize.toString();}
		else if (storedMaxVolcanoSize > 999999)			{storedMaxVolcanoSize="999999";}
		presetString = presetString + storedMaxVolcanoSize;
		storedNumberFlows = document.myform.numberFlowsInput.value;
		if (isNaN(storedNumberFlows))				{storedNumberFlows="000000";}
		else if (storedNumberFlows == 0)			{storedNumberFlows="000000";}
		else if (storedNumberFlows < 10)			{storedNumberFlows="00000"+storedNumberFlows.toString();}
		else if (storedNumberFlows < 100)			{storedNumberFlows="0000"+storedNumberFlows.toString();}
		else if (storedNumberFlows < 1000)			{storedNumberFlows="000"+storedNumberFlows.toString();}
		else if (storedNumberFlows < 10000)			{storedNumberFlows="00"+storedNumberFlows.toString();}
		else if (storedNumberFlows < 100000)		{storedNumberFlows="0"+storedNumberFlows.toString();}
		else if (storedNumberFlows > 999999)		{storedNumberFlows="999999";}
		presetString = presetString + storedNumberFlows;
		storedLandUniformity = document.myform.field18.value;
		if (isNaN(storedLandUniformity))				{storedLandUniformity="000000";}
		else if (storedLandUniformity == 0)				{storedLandUniformity="000000";}
		else if (storedLandUniformity < 10)				{storedLandUniformity="00000"+storedLandUniformity.toString();}
		else if (storedLandUniformity < 100)			{storedLandUniformity="0000"+storedLandUniformity.toString();}
		else if (storedLandUniformity < 1000)			{storedLandUniformity="000"+storedLandUniformity.toString();}
		else if (storedLandUniformity < 10000)			{storedLandUniformity="00"+storedLandUniformity.toString();}
		else if (storedLandUniformity < 100000)			{storedLandUniformity="0"+storedLandUniformity.toString();}
		else if (storedLandUniformity > 999999)			{storedLandUniformity="999999";}
		presetString = presetString + storedLandUniformity;
		storedNumShallows = document.myform.numberShallowsInput.value;
		if (isNaN(storedNumShallows))					{storedNumShallows="000000";}
		else if (storedNumShallows == 0)				{storedNumShallows="000000";}
		else if (storedNumShallows < 10)				{storedNumShallows="00000"+storedNumShallows.toString();}
		else if (storedNumShallows < 100)				{storedNumShallows="0000"+storedNumShallows.toString();}
		else if (storedNumShallows < 1000)				{storedNumShallows="000"+storedNumShallows.toString();}
		else if (storedNumShallows < 10000)				{storedNumShallows="00"+storedNumShallows.toString();}
		else if (storedNumShallows < 100000)			{storedNumShallows="0"+storedNumShallows.toString();}
		else if (storedNumShallows > 999999)			{storedNumShallows="999999";}
		presetString = presetString + storedNumShallows;
		storedNumBeaches = document.myform.numberBeachesInput.value;
		if (isNaN(storedNumBeaches))					{storedNumBeaches="000000";}
		else if (storedNumBeaches == 0)					{storedNumBeaches="000000";}
		else if (storedNumBeaches < 10)					{storedNumBeaches="00000"+storedNumBeaches.toString();}
		else if (storedNumBeaches < 100)				{storedNumBeaches="0000"+storedNumBeaches.toString();}
		else if (storedNumBeaches < 1000)				{storedNumBeaches="000"+storedNumBeaches.toString();}
		else if (storedNumBeaches < 10000)				{storedNumBeaches="00"+storedNumBeaches.toString();}
		else if (storedNumBeaches < 100000)				{storedNumBeaches="0"+storedNumBeaches.toString();}
		else if (storedNumBeaches > 999999)				{storedNumBeaches="999999";}
		presetString = presetString + storedNumBeaches;
		storedRiverCurvyness = document.myform.riverCurvynessInput.value;
		if (isNaN(storedRiverCurvyness))					{storedRiverCurvyness="000000";}
		else if (storedRiverCurvyness == 0)					{storedRiverCurvyness="000000";}
		else if (storedRiverCurvyness < 10)					{storedRiverCurvyness="00000"+storedRiverCurvyness.toString();}
		else if (storedRiverCurvyness < 100)				{storedRiverCurvyness="0000"+storedRiverCurvyness.toString();}
		else if (storedRiverCurvyness < 1000)				{storedRiverCurvyness="000"+storedRiverCurvyness.toString();}
		else if (storedRiverCurvyness < 10000)				{storedRiverCurvyness="00"+storedRiverCurvyness.toString();}
		else if (storedRiverCurvyness < 100000)				{storedRiverCurvyness="0"+storedRiverCurvyness.toString();}
		else if (storedRiverCurvyness > 999999)				{storedRiverCurvyness="999999";}
		presetString = presetString + storedRiverCurvyness;
		storedNumRivers = document.myform.numberRiversInput.value;
		if (isNaN(storedNumRivers))						{storedNumRivers="000000";}
		else if (storedNumRivers == 0)					{storedNumRivers="000000";}
		else if (storedNumRivers < 10)					{storedNumRivers="00000"+storedNumRivers.toString();}
		else if (storedNumRivers < 100)					{storedNumRivers="0000"+storedNumRivers.toString();}
		else if (storedNumRivers < 1000)				{storedNumRivers="000"+storedNumRivers.toString();}
		else if (storedNumRivers < 10000)				{storedNumRivers="00"+storedNumRivers.toString();}
		else if (storedNumRivers < 100000)				{storedNumRivers="0"+storedNumRivers.toString();}
		else if (storedNumRivers > 999999)				{storedNumRivers="999999";}
		presetString = presetString + storedNumRivers;
		if (buttonPreset1==1)
		{
			localStorage.preset1 = presetString;
			buttonPreset1 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 1 set.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else if (buttonPreset2==1)
		{
			localStorage.preset2 = presetString;
			buttonPreset2 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 2 set.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else if (buttonPreset3==1)
		{
			localStorage.preset3 = presetString;
			buttonPreset3 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 3 set.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else if (buttonPreset4==1)
		{
			localStorage.preset4 = presetString;
			buttonPreset4 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 4 set.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		document.getElementById("buttonCancelSetPreset").style.display="none";
		document.getElementById("buttonSetPreset").style.display="block";
		setAPreset = 0;
		enableAllButtons();
	}
	else
	{
		if (buttonPreset1==1)
		{
			presetString = localStorage.preset1;
			buttonPreset1 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 1 loaded.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else if (buttonPreset2==1)
		{
			presetString = localStorage.preset2;
			buttonPreset2 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 2 loaded.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else if (buttonPreset3==1)
		{
			presetString = localStorage.preset3;
			buttonPreset3 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 3 loaded.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		else if (buttonPreset4==1)
		{
			presetString = localStorage.preset4;
			buttonPreset4 = 0;
			document.myform.fieldError.value = document.myform.fieldError.value + "\nPreset 4 loaded.";
			document.myform.fieldError.scrollTop = document.myform.fieldError.scrollHeight;
		}
		if (presetString=="")
		{
		}
		else
		{
			for (gh=0;gh<=99;gh++)
			{
				if (presetString.substr(gh,1)=="0")
				{
					document.getElementById("checkbox"+(gh+1)).checked = false;
				}
				else if (presetString.substr(gh,1)=="1")
				{
					document.getElementById("checkbox"+(gh+1)).checked = true;
				}
			}
			storedWidth = parseInt(presetString.substr(100,6),10);
			storedHeight = parseInt(presetString.substr(106,6),10);
			storedElevations = parseInt(presetString.substr(112,6),10);
			storedHillTops = parseInt(presetString.substr(118,6),10);
			storedHillLength = parseInt(presetString.substr(124,6),10);
			storedHillCurvyness = parseInt(presetString.substr(130,6),10);
			storedLandSpread = parseInt(presetString.substr(136,6),10);
			storedMountainSpread = parseInt(presetString.substr(142,6),10);
			storedNumRanges = parseInt(presetString.substr(148,6),10);
			storedMaxRangeLength = parseInt(presetString.substr(154,6),10);
			storedNumVolcanoes = parseInt(presetString.substr(160,6),10);
			storedMaxVolcanoSize = parseInt(presetString.substr(166,6),10);
			storedNumberFlows = parseInt(presetString.substr(172,6),10);
			storedLandUniformity = parseInt(presetString.substr(178,6),10);
			storedNumShallows = parseInt(presetString.substr(184,6),10);
			storedNumBeaches = parseInt(presetString.substr(190,6),10);
			storedRiverCurvyness = parseInt(presetString.substr(196,6),10);
			storedNumRivers = parseInt(presetString.substr(202,6),10);
			document.myform.field5.value = storedWidth;
			document.myform.field6.value = storedHeight;
			document.myform.levelsToRunInput.value = storedElevations;
			document.myform.field8.value = storedHillTops;
			document.myform.hillLengthInput.value = storedHillLength;
			document.myform.hillCurvynessInput.value = storedHillCurvyness;
			document.myform.landSpread.value = storedLandSpread;
			document.myform.field12.value = storedMountainSpread;
			document.myform.field14.value = storedNumRanges;
			document.myform.field16.value = storedMaxRangeLength;
			document.myform.numberVolcanoesInput.value = storedNumVolcanoes;
			document.myform.volcanoSizeInput.value = storedMaxVolcanoSize;
			document.myform.numberFlowsInput.value = storedNumberFlows;
			document.myform.field18.value = storedLandUniformity;
			document.myform.numberShallowsInput.value = storedNumShallows;
			document.myform.numberBeachesInput.value = storedNumBeaches;
			document.myform.riverCurvynessInput.value = storedRiverCurvyness;
			document.myform.numberRiversInput.value = storedNumRivers;
		}
		enableAllButtons();
	}
}
function displaySplashScreen()
{
	if ((userAgent.search("Safari") > (-1)) && (userAgent.search("Chrome") == (-1)))
	{
		specificBrowser = "Safari";
	}
	else if (userAgent.search("Chrome") > (-1))
	{
		specificBrowser = "Chrome";
	}
	else if (userAgent.search("Firefox") > (-1))
	{
		specificBrowser = "Firefox";
	}
	else if (browserName = "Microsoft Internet Explorer")
	{
		specificBrowser = "Microsoft Internet Explorer";
	}
	else
	{
		specificBrowser = "No idea...";
	}
	if (platformName=="Win32")
	{
		specificPlatform = "on a PC.";
	}
	else if (platformName=="MacIntel")
	{
		specificPlatform = "on a Mac.";
	}
	else if (platformName=="iPhone")
	{
		specificPlatform = "on a iPhone!.";
	}
	else
	{
		specificPlatform = "and I have no idea on what platform..."
	}
	splashString = "";
	splashString=splashString+"<div align='center' width='600px'><font style='font-size:20px'>";
	splashString=splashString+"<b>Welcome to Rhino Builder!</b><br>&nbsp;<br>";
	splashString=splashString+"</font></div>";
	splashString=splashString+"<img src='colors/SplashPic3.png' style='position:absolute; left:135px; top:80px'>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	if (specificBrowser=="Safari")
	{
		splashString=splashString+"You're using Safari " + specificPlatform + "<br>";
		splashString=splashString+"<br>Rhino Builder was written most specifically for Safari - so that's good.<br>";
		if (specificPlatform=="on a PC.")
		{
		}
		else if (specificPlatform=="on a Mac.")
		{
			splashString=splashString+"<br>And congratulations for using an Apple Macintosh - at this time, there are no known issues for this configuration.";
		}
		else if (specificPlatform=="on an iPhone!")
		{
			splashString=splashString+"<br>And you're running this on an iPhone! Either you're desperate to generate a map, or you're nuts.";
			splashString=splashString+"<br>Either way, if there's enough people asking for it, I'll write an iPhone-specific interface.";
		}
	}
	else if (specificBrowser=="Firefox")
	{
		splashString=splashString+"You're using Firefox " + specificPlatform + "<br>";
		splashString=splashString+"<br>There appear to be some issues with Firefox (at least on a PC - it's yet to be tested on a Mac). Specifically, something odd is up with the preset buttons and the textular* map display does not resize the box outline once the map is drawn.<br>";
		splashString=splashString+"However these do not appear to be performance problems, so have at it.<br>";
		splashString=splashString+"<br>That said, you might want to try the Safari browser.";
	}
	else if (specificBrowser=="Chrome")
	{
		splashString=splashString+"You're using Chrome " + specificPlatform + "<br>";
		splashString=splashString+"<br>There appear to be no issues with Chrome at this time.<br>";
	}
	else if (specificBrowser=="Microsoft Internet Explorer")
	{
		splashString=splashString+"You're using Microsoft Internet Explorer " + specificPlatform + "<br>";
		splashString=splashString+"<br>You may experience some issues with this application when using IE.<br>";
	}
	else if (specificBrowser=="No idea...")
	{
		splashString=splashString+"I have no idea what browser you're using " + specificPlatform + "<br>";
		splashString=splashString+"<br>You may experience some issues with this application.<br>";
		splashString=splashString+"<br>You might want to try the Safari browser.<br>";
	}
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"&nbsp;<br>";
	splashString=splashString+"<font style='font-size:9px'>";
	splashString=splashString+"<b>Browser Name: </b>"+specificBrowser+", ";
	splashString=splashString+"<b>Browser Type: </b>"+browserName+", ";
	splashString=splashString+"<b>Platform: </b>"+platformName+"<br>";
	splashString=splashString+"<b>Agent: </b>"+userAgent+"<br>";
	splashString=splashString+"<b>Screen X: </b>"+screenW+", ";
	splashString=splashString+"<b>Screen Y: </b>"+screenH;
	splashString=splashString+"</font>";
	document.getElementById('splashScreenBox').innerHTML = splashString;
}
function closeAllDisplays()
{
	document.getElementById("splashScreen").style.display="none";
	document.getElementById("masterDisplay").style.display="none";
	document.getElementById("slopeDisplay").style.display="none";
	document.getElementById("aboutDisplay").style.display="none";
	document.getElementById("instructionsDisplay").style.display="none";
	document.getElementById("drawDisplay").style.display="none";
	for (checkboxNumber=1;checkboxNumber<=2500;checkboxNumber++)
	{
		document.getElementById("editorButton"+checkboxNumber).style.display="none";
	}
}
function disableAllButtons()
{
	document.myform.checkslope.disabled=true;
	document.myform.preset1.disabled=true;
	document.myform.preset2.disabled=true;
	document.myform.preset3.disabled=true;
	document.myform.preset4.disabled=true;
	document.myform.buttonSetPreset.disabled=true;
	document.myform.buttonCancelSetPreset.disabled=true;
	document.myform.checkallboxes.disabled=true;
	document.myform.clearcheckboxes.disabled=true;
	document.myform.checkrandomboxes.disabled=true;
	document.myform.run.disabled=true;
	document.myform.runagainsame.disabled=true;
	document.myform.raisewater.disabled=true;
	document.myform.lowerwater.disabled=true;
	document.myform.drawMapButton.disabled=true;
	document.myform.viewTextButton.disabled=true;
	document.myform.createShallowsButton.disabled=true;
	document.myform.createBeachesButton.disabled=true;
	document.myform.addRiverButton.disabled=true;
	document.myform.createLavaFlowsButton.disabled=true;
	document.myform.eraseModificationsButton.disabled=true;
	document.myform.acceptButton.disabled=true;
}
function enableAllButtons()
{
	document.myform.buttonAbout.disabled=false;
	document.myform.buttonInstructions.disabled=false;
	document.myform.checkslope.disabled=false;
	document.myform.checkrandomboxes.disabled=false;
	document.myform.preset1.disabled=false;
	document.myform.preset2.disabled=false;
	document.myform.preset3.disabled=false;
	document.myform.preset4.disabled=false;
	document.myform.buttonSetPreset.disabled=false;
	document.myform.checkallboxes.disabled=false;
	document.myform.clearcheckboxes.disabled=false;
	document.myform.run.disabled=false;
	document.myform.runagainsame.disabled=false;
	if (worldInMemory==1)
	{
		document.myform.raisewater.disabled=false;
		document.myform.lowerwater.disabled=false;
		document.myform.drawMapButton.disabled=false;
		document.myform.viewTextButton.disabled=false;
		document.myform.createShallowsButton.disabled=false;
		document.myform.createBeachesButton.disabled=false;
		document.myform.addRiverButton.disabled=false;
		document.myform.createLavaFlowsButton.disabled=false;
		document.myform.eraseModificationsButton.disabled=false;
		document.myform.acceptButton.disabled=false;
	}
}
function populatePresets()
{
	if (localStorage.preset1==undefined || localStorage.preset1==null)
	{
	
		localStorage.preset1 = "0111000111101000110001110001010010000011100010000000000010000100010000111000001101100011011100001101000300000300000020000025000005000080000110000125000030000008000004000010000008000025000003000002000100000040";
	}
	if (localStorage.preset2==undefined || localStorage.preset2==null)
	{
	
		localStorage.preset2 = "1000000010001000111101100011110111000010111000001011110011111110001111111000111011100011100000000100000500000500000020000020000005000080000110000130000020000008000000000000000000000025000004000002000100000050";
	}
	if (localStorage.preset3==undefined || localStorage.preset3==null)
	{
	
		localStorage.preset3 = "0111111110111111111111111110011111100000111000000101100000000110000000001100001000110000000001101000000500000500000020000020000005000080000110000130000020000008000000000000000000000025000004000002000100000050";
	}
	if (localStorage.preset4==undefined || localStorage.preset4==null)
	{
	
		localStorage.preset4 = "0000000001111100000111111010111111101011110111111011111111100111111110001111111000011100110000100001000500000500000020000025000005000080000110000130000030000008000001000010000002000025000004000002000100000050";
	}
}
function createNewWorld()
{
	inBuilder = 1;
	document.getElementById('counter').style.display="none";
	document.getElementById('email').style.display="none";
	document.getElementById('labelWidth').style.display="block";
	document.getElementById('field5').style.display="block";
	document.getElementById('labelHeight').style.display="block";
	document.getElementById('field6').style.display="block";
	document.getElementById('labelLevels').style.display="block";
	document.getElementById('levelsToRunInput').style.display="block";
	document.getElementById('labelHillSeeds').style.display="block";
	document.getElementById('field8').style.display="block";
	document.getElementById('labelHillLength').style.display="block";
	document.getElementById('hillLengthInput').style.display="block";
	document.getElementById('labelHillCurvyness').style.display="block";
	document.getElementById('hillCurvynessInput').style.display="block";
	document.getElementById('labelLandSpread').style.display="block";
	document.getElementById('landSpread').style.display="block";
	document.getElementById('labelMountainosity').style.display="block";
	document.getElementById('field12').style.display="block";
	document.getElementById('checkslope').style.display="block";
	document.getElementById('labelNumRanges').style.display="block";
	document.getElementById('field14').style.display="block";
	document.getElementById('labelRangeLength').style.display="block";
	document.getElementById('field16').style.display="block";
	document.getElementById('labelNumVolcanoes').style.display="block";
	document.getElementById('numberVolcanoesInput').style.display="block";
	document.getElementById('labelVolcanoSize').style.display="block";
	document.getElementById('volcanoSizeInput').style.display="block";
	document.getElementById('labelUniformity').style.display="block";
	document.getElementById('field18').style.display="block";
	document.getElementById('checkboxTable').style.display="block";
	document.getElementById('fieldCheckbox').style.display="block";
	for (checkboxNumber=1;checkboxNumber<=100;checkboxNumber++)
	{
		document.getElementById("checkbox"+checkboxNumber).style.display="block";
	}
	document.getElementById('preset1').style.display="block";
	document.getElementById('preset2').style.display="block";
	document.getElementById('preset3').style.display="block";
	document.getElementById('preset4').style.display="block";
	document.getElementById('buttonSetPreset').style.display="block";
	document.getElementById('checkallboxes').style.display="block";
	document.getElementById('clearcheckboxes').style.display="block";
	document.getElementById('checkrandomboxes').style.display="block";
	document.getElementById('labelRandom').style.display="block";
	document.getElementById('checkboxChance').style.display="block";
	document.getElementById('run').style.display="block";
	document.getElementById('raisewater').style.display="block";
	document.getElementById('lowerwater').style.display="block";
	document.getElementById('createShallowsButton').style.display="block";
	document.getElementById('numberShallowsInput').style.display="block";
	document.getElementById('createBeachesButton').style.display="block";
	document.getElementById('numberBeachesInput').style.display="block";
	document.getElementById('createLavaFlowsButton').style.display="block";
	document.getElementById('numberFlowsInput').style.display="block";
	document.getElementById('labelCurvyness').style.display="block";
	document.getElementById('riverCurvynessInput').style.display="block";
	document.getElementById('addRiverButton').style.display="block";
	document.getElementById('numberRiversInput').style.display="block";
	document.getElementById('eraseModificationsButton').style.display="block";
	document.getElementById('drawMapButton').style.display="block";
	document.getElementById('fieldError').style.display="block";
	document.getElementById('acceptButton').style.display="block";
	document.getElementById('drawDisplay').style.display="block";
	document.getElementById('buttonCreateNew').style.display="none";
	document.getElementById('buttonOpenEditor').style.display="none";
}
function openEditor()
{
	inEditor = 1;
	document.getElementById('counter').style.display="none";
	document.getElementById('email').style.display="none";
	document.getElementById('labelWidth').style.display="none";
	document.getElementById('field5').style.display="none";
	document.getElementById('labelHeight').style.display="none";
	document.getElementById('field6').style.display="none";
	document.getElementById('labelLevels').style.display="none";
	document.getElementById('levelsToRunInput').style.display="none";
	document.getElementById('labelHillSeeds').style.display="none";
	document.getElementById('field8').style.display="none";
	document.getElementById('labelHillLength').style.display="none";
	document.getElementById('hillLengthInput').style.display="none";
	document.getElementById('labelHillCurvyness').style.display="none";
	document.getElementById('hillCurvynessInput').style.display="none";
	document.getElementById('labelLandSpread').style.display="none";
	document.getElementById('landSpread').style.display="none";
	document.getElementById('labelMountainosity').style.display="none";
	document.getElementById('field12').style.display="none";
	document.getElementById('checkslope').style.display="none";
	document.getElementById('labelNumRanges').style.display="none";
	document.getElementById('field14').style.display="none";
	document.getElementById('labelRangeLength').style.display="none";
	document.getElementById('field16').style.display="none";
	document.getElementById('labelNumVolcanoes').style.display="none";
	document.getElementById('numberVolcanoesInput').style.display="none";
	document.getElementById('labelVolcanoSize').style.display="none";
	document.getElementById('volcanoSizeInput').style.display="none";
	document.getElementById('labelUniformity').style.display="none";
	document.getElementById('field18').style.display="none";
	document.getElementById('checkboxTable').style.display="none";
	for (checkboxNumber=1;checkboxNumber<=100;checkboxNumber++)
	{
		document.getElementById("checkbox"+checkboxNumber).style.display="none";
	}
	document.getElementById('waiting').style.display="none";
	document.getElementById('preset1').style.display="none";
	document.getElementById('preset2').style.display="none";
	document.getElementById('preset3').style.display="none";
	document.getElementById('preset4').style.display="none";
	document.getElementById('buttonSetPreset').style.display="none";
	document.getElementById('buttonCancelSetPreset').style.display="none";
	document.getElementById('checkallboxes').style.display="none";
	document.getElementById('clearcheckboxes').style.display="none";
	document.getElementById('checkrandomboxes').style.display="none";
	document.getElementById('labelRandom').style.display="none";
	document.getElementById('checkboxChance').style.display="none";
	document.getElementById('run').style.display="none";
	document.getElementById('runagainsame').style.display="none";
	document.getElementById('areYouSure').style.display="none";
	document.getElementById('sureYes').style.display="none";
	document.getElementById('sureNo').style.display="none";
	document.getElementById('raisewater').style.display="none";
	document.getElementById('lowerwater').style.display="none";
	document.getElementById('createShallowsButton').style.display="none";
	document.getElementById('numberShallowsInput').style.display="none";
	document.getElementById('createBeachesButton').style.display="none";
	document.getElementById('numberBeachesInput').style.display="none";
	document.getElementById('createLavaFlowsButton').style.display="none";
	document.getElementById('numberFlowsInput').style.display="none";
	document.getElementById('labelCurvyness').style.display="none";
	document.getElementById('riverCurvynessInput').style.display="none";
	document.getElementById('addRiverButton').style.display="none";
	document.getElementById('numberRiversInput').style.display="none";
	document.getElementById('eraseModificationsButton').style.display="none";
	document.getElementById('drawMapButton').style.display="none";
	document.getElementById('viewTextButton').style.display="none";
	document.getElementById('fieldError').style.display="none";
	document.getElementById('acceptButton').style.display="none";
	if (worldInMemory==1)
	{
		document.getElementById('splashScreen').style.display="none";
	}
	document.getElementById('masterDisplay').style.display="none";
	document.getElementById('slopeDisplay').style.display="none";
	document.getElementById('aboutDisplay').style.display="none";
	document.getElementById('instructionsDisplay').style.display="none";
	document.getElementById('drawDisplay').style.display="none";
	document.getElementById('buttonCreateNew').style.display="none";
	document.getElementById('buttonOpenEditor').style.display="none";
	document.getElementById('labelLoad').style.display="block";
	document.getElementById('loadInput').style.display="block";
	document.getElementById('buttonLoad').style.display="block";
	document.getElementById('buttonLocateMe').style.display="block";
	document.getElementById('editorTextButton').style.display="block";
	if (worldInMemory != 1)
	{
		document.myform.buttonLocateMe.disabled=true;
		document.myform.editorTextButton.disabled=true;
	}
	document.getElementById('editorHeight').style.display="block";
	document.getElementById('heightInput').style.display="block";
	document.getElementById('editorWidth').style.display="block";
	document.getElementById('widthInput').style.display="block";
	document.getElementById('buttonNW20').style.display="block";
	document.getElementById('buttonN20').style.display="block";
	document.getElementById('buttonNE20').style.display="block";
	document.getElementById('buttonNE').style.display="block";
	document.getElementById('buttonN').style.display="block";
	document.getElementById('buttonNW').style.display="block";
	document.getElementById('buttonW20').style.display="block";
	document.getElementById('buttonW').style.display="block";
	document.getElementById('buttonE').style.display="block";
	document.getElementById('buttonE20').style.display="block";
	document.getElementById('buttonSE').style.display="block";
	document.getElementById('buttonS').style.display="block";
	document.getElementById('buttonSW').style.display="block";
	document.getElementById('buttonSE20').style.display="block";
	document.getElementById('buttonS20').style.display="block";
	document.getElementById('buttonSW20').style.display="block";
	document.getElementById('editorX').style.display="block";
	document.getElementById('editorXDisplay').style.display="block";
	document.getElementById('editorY').style.display="block";
	document.getElementById('editorYDisplay').style.display="block";
	document.getElementById('fieldEditor').style.display="block";
}
function acceptMap()
{
	analyzeLandLevels();
	editorMapWidth = mapSizeX;
	editorMapHeight = mapSizeY;
	for (x=1;x<=mapSizeX;x++)
	{
		editorArray[x] = new Array(mapSizeY);
	}
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (landLevelsDisplayed==1)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==2)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==3)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==4)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==5)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="=")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==6)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="=")		{editorArray[x][y]="?"}		
				else if (mapArrayDev[x][y]=="+")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==7)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]=":"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="=")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="+")		{editorArray[x][y]="?"}		
				else if (mapArrayDev[x][y]=="?")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==8)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]=":"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]=";"}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]=="=")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="+")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="?")		{editorArray[x][y]="?"}		
				else if (mapArrayDev[x][y]=="I")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==9)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]=":"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]=";"}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]=="=")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="+")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="?")		{editorArray[x][y]="?"}		
				else if (mapArrayDev[x][y]=="I")		{editorArray[x][y]="I"}		
				else if (mapArrayDev[x][y]=="C")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==10)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]=":"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]=";"}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]=="=")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]=="+")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="?")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="I")		{editorArray[x][y]="?"}		
				else if (mapArrayDev[x][y]=="C")		{editorArray[x][y]="I"}		
				else if (mapArrayDev[x][y]=="J")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
			else if (landLevelsDisplayed==11)
			{
				if 		(mapArrayDev[x][y]==".")		{editorArray[x][y]="."}		
				else if (mapArrayDev[x][y]==":")		{editorArray[x][y]=":"}		
				else if (mapArrayDev[x][y]==";")		{editorArray[x][y]=";"}		
				else if (mapArrayDev[x][y]=="^")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]=="=")		{editorArray[x][y]="^"}		
				else if (mapArrayDev[x][y]=="+")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="?")		{editorArray[x][y]="="}		
				else if (mapArrayDev[x][y]=="I")		{editorArray[x][y]="+"}		
				else if (mapArrayDev[x][y]=="C")		{editorArray[x][y]="?"}		
				else if (mapArrayDev[x][y]=="J")		{editorArray[x][y]="I"}		
				else if (mapArrayDev[x][y]=="Z")		{editorArray[x][y]="C"}		
				else if (mapArrayDev[x][y]=="M")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="N")		{editorArray[x][y]="M"}		
				else if (mapArrayDev[x][y]=="Q")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="H")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="r")		{editorArray[x][y]=","}		
				else if (mapArrayDev[x][y]=="~")		{editorArray[x][y]="~"}		
				else if (mapArrayDev[x][y]=="%")		{editorArray[x][y]="%"}		
				else if (mapArrayDev[x][y]=="-")		{editorArray[x][y]="-"}		
			}
		}
	}
	openEditor();
	editorX = 0;
	editorY = 0;
	for (x=1;x<=2500;x++)
	{
		document.getElementById("editorButton"+x).style.display="block";
	}
	drawEditorMap();
	displayEditorPalette();
}
function analyzeLandLevels()
{
	landLevelsDisplayed = 0;
	for (y=1;y<=mapSizeY;y++)
	{
		for (x=1;x<=mapSizeX;x++)
		{
			if (mapArrayDev[x][y] != "M" &&
				mapArrayDev[x][y] != "Q" &&
				mapArrayDev[x][y] != "N" &&
				mapArrayDev[x][y] != "r" &&
				mapArrayDev[x][y] != "~" &&
				mapArrayDev[x][y] != "%")
			{
				landTile = mapArrayDev[x][y];
				setTileValue();
				if (landTileValue > landLevelsDisplayed)
				{
					landLevelsDisplayed = landTileValue;
				}
			}
		}
	}
}
function loadMap()
{
	document.getElementById('masterDisplay').style.display="none";
	document.getElementById('drawDisplay').style.display="none";
	document.getElementById('buttonLocateMe').style.display="block";
	document.getElementById('editorTextButton').style.display="block";
	document.getElementById('buttonBackToEditor').style.display="none";
	document.getElementById('buttonBackToEditor2').style.display="none";
	document.myform.editorTextButton.disabled=false;
	document.myform.buttonLocateMe.disabled=false;
	editorInputError = 0;
	if (document.myform.loadInput.value=="")
	{
		document.myform.fieldEditor.value = document.myform.fieldEditor.value + "\nNo map string present!";
		editorInputError = 1;
	}
	else
	{
		editorString = document.myform.loadInput.value;
	}
	if (document.myform.heightInput.value=="")
	{
		document.myform.fieldEditor.value = document.myform.fieldEditor.value + "\nNo map height present!";
		editorInputError = 1;
	}
	else
	{
		editorMapHeight = document.myform.heightInput.value;
	}
	if (document.myform.widthInput.value=="")
	{
		document.myform.fieldEditor.value = document.myform.fieldEditor.value + "\nNo map width present!";
		editorInputError = 1;
	}
	else
	{
		editorMapWidth = document.myform.widthInput.value;
	}
	if (editorError==0)
	{
		editorString2 = "";
		editorArray = new Array(editorMapWidth+1);
		for (x=1;x<=editorMapWidth;x++)
		{
			editorArray[x] = new Array(editorMapHeight);
		}
		x = 1;
		y = 1;
		for (editorStringCounter=0;editorStringCounter<=editorString.length;editorStringCounter++)
		{
			if ((editorString.charCodeAt(editorStringCounter)==10) ||
				(editorString.charCodeAt(editorStringCounter)==13))
			{
			}
			else
			{
				editorArray[x][y]=editorString.substr(editorStringCounter,1)
				x = x + 1;
				if (x > editorMapWidth)
				{
					x = 1;
					y = y + 1;
				}
			}
		}
	}
	document.myform.loadInput.value = "";
	document.myform.heightInput.value = "";
	document.myform.widthInput.value = "";
	editorX = 0;
	editorY = 0;
	document.myform.fieldEditor.value = document.myform.fieldEditor.value + "\nMap loaded."
	worldInMemory==1;
	document.myform.buttonLocateMe.disabled=false;
	document.myform.editorTextButton.disabled=false;
	document.getElementById('splashScreen').style.display="none";
	for (x=1;x<=2500;x++)
	{
		document.getElementById("editorButton"+x).style.display="block";
	}
	drawEditorMap();
	displayEditorPalette();
}
function displayEditorPalette()
{
	document.getElementById("terrainPaletteTitle").style.display="block";
	document.getElementById("selectedTerrainText").style.display="block";
	document.getElementById("selectedTerrainPic").style.display="block";
	document.getElementById("highMountainsButton").style.display="block";
	document.getElementById("lowMountainsButton").style.display="block";
	document.getElementById("hillsButton").style.display="block";
	document.getElementById("borealButton").style.display="block";
	document.getElementById("forestButton").style.display="block";
	document.getElementById("treesButton").style.display="block";
	document.getElementById("scrubButton").style.display="block";
	document.getElementById("longGrassButton").style.display="block";
	document.getElementById("grassButton").style.display="block";
	document.getElementById("swampButton").style.display="block";
	document.getElementById("dirtButton").style.display="block";
	document.getElementById("sandButton").style.display="block";
	document.getElementById("fireButton").style.display="block";
	document.getElementById("shallowWaterButton").style.display="block";
	document.getElementById("deepWaterButton").style.display="block";
	document.getElementById("castleButton").style.display="block";
	document.getElementById("cemeteryButton").style.display="block";
	document.getElementById("homeButton").style.display="block";
	document.getElementById("towerButton").style.display="block";
	document.getElementById("townButton").style.display="block";
	document.getElementById("villageButton").style.display="block";
	document.getElementById("redbricksButton").style.display="block";
	document.getElementById("redbrickscrackedButton").style.display="block";
	document.getElementById("redbrickwindowButton").style.display="block";
	document.getElementById("reddoorButton").style.display="block";
	document.getElementById("redopendoorButton").style.display="block";
	document.getElementById("redgrateButton").style.display="block";
	document.getElementById("whitebricksButton").style.display="block";
	document.getElementById("whitedoorButton").style.display="block";
	document.getElementById("whiteopendoorButton").style.display="block";
	document.getElementById("whitegrateButton").style.display="block";
	document.getElementById("woodfloorhButton").style.display="block";
	document.getElementById("woodfloorvButton").style.display="block";
	document.getElementById("tilefloorButton").style.display="block";
	document.getElementById("tilefloorbButton").style.display="block";
	document.getElementById("cobblestonesButton").style.display="block";
	document.getElementById("anvilButton").style.display="block";
	document.getElementById("barrelButton").style.display="block";
	document.getElementById("brazierButton").style.display="block";
	document.getElementById("caskButton").style.display="block";
	document.getElementById("fountainButton").style.display="block";
	document.getElementById("harpsichordButton").style.display="block";
	document.getElementById("pillarButton").style.display="block";
	document.getElementById("plantButton").style.display="block";
	document.getElementById("spitButton").style.display="block";
	document.getElementById("stocksButton").style.display="block";
	document.getElementById("stoveButton").style.display="block";
	document.getElementById("tableButton").style.display="block";
	document.getElementById("tombstoneButton").style.display="block";
	document.getElementById("treeButton").style.display="block";
	document.getElementById("treedeadButton").style.display="block";
	document.getElementById("bladebottomButton").style.display="block";
	document.getElementById("bladetopButton").style.display="block";
	document.getElementById("guillitinebottomButton").style.display="block";
	document.getElementById("guillitinetopButton").style.display="block";
	document.getElementById("racklButton").style.display="block";
	document.getElementById("rackrButton").style.display="block";
	document.getElementById("shacklesButton").style.display="block";
	document.getElementById("aButton").style.display="block";
	document.getElementById("bButton").style.display="block";
	document.getElementById("cButton").style.display="block";
	document.getElementById("dButton").style.display="block";
	document.getElementById("eButton").style.display="block";
	document.getElementById("fButton").style.display="block";
	document.getElementById("gButton").style.display="block";
	document.getElementById("hButton").style.display="block";
	document.getElementById("iButton").style.display="block";
	document.getElementById("jButton").style.display="block";
	document.getElementById("kButton").style.display="block";
	document.getElementById("lButton").style.display="block";
	document.getElementById("mButton").style.display="block";
	document.getElementById("nButton").style.display="block";
	document.getElementById("oButton").style.display="block";
	document.getElementById("pButton").style.display="block";
	document.getElementById("qButton").style.display="block";
	document.getElementById("rButton").style.display="block";
	document.getElementById("sButton").style.display="block";
	document.getElementById("tButton").style.display="block";
	document.getElementById("uButton").style.display="block";
	document.getElementById("vButton").style.display="block";
	document.getElementById("wButton").style.display="block";
	document.getElementById("xButton").style.display="block";
	document.getElementById("yButton").style.display="block";
	document.getElementById("zButton").style.display="block";
	document.getElementById("spaceButton").style.display="block";
}
function hideEditorPalette()
{
	document.getElementById("terrainPaletteTitle").style.display="none";
	document.getElementById("selectedTerrainText").style.display="none";
	document.getElementById("selectedTerrainPic").style.display="none";
	document.getElementById("highMountainsButton").style.display="none";
	document.getElementById("lowMountainsButton").style.display="none";
	document.getElementById("hillsButton").style.display="none";
	document.getElementById("borealButton").style.display="none";
	document.getElementById("forestButton").style.display="none";
	document.getElementById("treesButton").style.display="none";
	document.getElementById("scrubButton").style.display="none";
	document.getElementById("longGrassButton").style.display="none";
	document.getElementById("grassButton").style.display="none";
	document.getElementById("swampButton").style.display="none";
	document.getElementById("dirtButton").style.display="none";
	document.getElementById("sandButton").style.display="none";
	document.getElementById("fireButton").style.display="none";
	document.getElementById("shallowWaterButton").style.display="none";
	document.getElementById("deepWaterButton").style.display="none";
	document.getElementById("castleButton").style.display="none";
	document.getElementById("cemeteryButton").style.display="none";
	document.getElementById("homeButton").style.display="none";
	document.getElementById("towerButton").style.display="none";
	document.getElementById("townButton").style.display="none";
	document.getElementById("villageButton").style.display="none";
	document.getElementById("redbricksButton").style.display="none";
	document.getElementById("redbrickscrackedButton").style.display="none";
	document.getElementById("redbrickwindowButton").style.display="none";
	document.getElementById("reddoorButton").style.display="none";
	document.getElementById("redopendoorButton").style.display="none";
	document.getElementById("redgrateButton").style.display="none";
	document.getElementById("whitebricksButton").style.display="none";
	document.getElementById("whitedoorButton").style.display="none";
	document.getElementById("whiteopendoorButton").style.display="none";
	document.getElementById("whitegrateButton").style.display="none";
	document.getElementById("woodfloorhButton").style.display="none";
	document.getElementById("woodfloorvButton").style.display="none";
	document.getElementById("tilefloorButton").style.display="none";
	document.getElementById("tilefloorbButton").style.display="none";
	document.getElementById("cobblestonesButton").style.display="none";
	document.getElementById("anvilButton").style.display="none";
	document.getElementById("barrelButton").style.display="none";
	document.getElementById("brazierButton").style.display="none";
	document.getElementById("caskButton").style.display="none";
	document.getElementById("fountainButton").style.display="none";
	document.getElementById("harpsichordButton").style.display="none";
	document.getElementById("pillarButton").style.display="none";
	document.getElementById("plantButton").style.display="none";
	document.getElementById("spitButton").style.display="none";
	document.getElementById("stocksButton").style.display="none";
	document.getElementById("stoveButton").style.display="none";
	document.getElementById("tableButton").style.display="none";
	document.getElementById("tombstoneButton").style.display="none";
	document.getElementById("treeButton").style.display="none";
	document.getElementById("treedeadButton").style.display="none";
	document.getElementById("bladebottomButton").style.display="none";
	document.getElementById("bladetopButton").style.display="none";
	document.getElementById("guillitinebottomButton").style.display="none";
	document.getElementById("guillitinetopButton").style.display="none";
	document.getElementById("racklButton").style.display="none";
	document.getElementById("rackrButton").style.display="none";
	document.getElementById("shacklesButton").style.display="none";
	document.getElementById("aButton").style.display="none";
	document.getElementById("bButton").style.display="none";
	document.getElementById("cButton").style.display="none";
	document.getElementById("dButton").style.display="none";
	document.getElementById("eButton").style.display="none";
	document.getElementById("fButton").style.display="none";
	document.getElementById("gButton").style.display="none";
	document.getElementById("hButton").style.display="none";
	document.getElementById("iButton").style.display="none";
	document.getElementById("jButton").style.display="none";
	document.getElementById("kButton").style.display="none";
	document.getElementById("lButton").style.display="none";
	document.getElementById("mButton").style.display="none";
	document.getElementById("nButton").style.display="none";
	document.getElementById("oButton").style.display="none";
	document.getElementById("pButton").style.display="none";
	document.getElementById("qButton").style.display="none";
	document.getElementById("rButton").style.display="none";
	document.getElementById("sButton").style.display="none";
	document.getElementById("tButton").style.display="none";
	document.getElementById("uButton").style.display="none";
	document.getElementById("vButton").style.display="none";
	document.getElementById("wButton").style.display="none";
	document.getElementById("xButton").style.display="none";
	document.getElementById("yButton").style.display="none";
	document.getElementById("zButton").style.display="none";
	document.getElementById("spaceButton").style.display="none";
}
function displayLegend()
{
	document.getElementById("terrainLegend").style.display="block";
	for (x=1;x<=landLevelsDisplayed;x++)
	{
		document.getElementById("legendLevel"+x+"").style.display="block";
		document.getElementById("legendLevel"+x+"Display").style.display="block";
	}
	if (landLevelsDisplayed==10)
	{
		document.getElementById("legendLevel1Display").style.background="url(terrain/highmountains.gif) no-repeat";
		document.getElementById("legendLevel2Display").style.background="url(terrain/lowmountains.gif) no-repeat";
		document.getElementById("legendLevel3Display").style.background="url(terrain/hills.gif) no-repeat";
		document.getElementById("legendLevel4Display").style.background="url(terrain/boreal.gif) no-repeat";
		document.getElementById("legendLevel5Display").style.background="url(terrain/boreal.gif) no-repeat";
		document.getElementById("legendLevel6Display").style.background="url(terrain/forest.gif) no-repeat";
		document.getElementById("legendLevel7Display").style.background="url(terrain/trees.gif) no-repeat";
		document.getElementById("legendLevel8Display").style.background="url(terrain/scrub.gif) no-repeat";
		document.getElementById("legendLevel9Display").style.background="url(terrain/longgrass.gif) no-repeat";
		document.getElementById("legendLevel10Display").style.background="url(terrain/grass.gif) no-repeat";
	}
}
function drawEditorMap()
{
	document.myform.editorXDisplay.value = editorX;
	document.myform.editorYDisplay.value = editorY;
	editorDisplaySquare = 0;
	for (y=1;y<=50;y++)
	{
		for (x=1;x<=50;x++)
		{
			editorDisplaySquare = editorDisplaySquare + 1;
			arraySquare=editorArray[(editorX+x)][(editorY+y)];
			if 		(arraySquare==".")		{arrayTile="terrain/highmountains";}
			else if (arraySquare==" ") 		{arrayTile="terrain/notile2";}
			else if (arraySquare==":")		{arrayTile="terrain/lowmountains";}
			else if (arraySquare==";")		{arrayTile="terrain/hills";}
			else if (arraySquare=="^")		{arrayTile="terrain/boreal";}
			else if (arraySquare=="=")		{arrayTile="terrain/forest";}
			else if (arraySquare=="+")		{arrayTile="terrain/trees";}
			else if (arraySquare=="?")		{arrayTile="terrain/scrub";}
			else if (arraySquare=="I")		{arrayTile="terrain/longgrass";}
			else if (arraySquare=="C")		{arrayTile="terrain/grass";}
			else if (arraySquare=="~")		{arrayTile="terrain/sand";}
			else if (arraySquare=="%")		{arrayTile="terrain/fire";}
			else if (arraySquare==",")		{arrayTile="terrain/watershallow";}
			else if (arraySquare=="M")		{arrayTile="terrain/waterdeep";}
			else if (arraySquare=="+")		{arrayTile="terrain/swamp";}
			else if (arraySquare=="-")		{arrayTile="terrain/dirt";}
			else if (arraySquare=="@")		{arrayTile="terrain/castle";}
			else if (arraySquare=="_") 		{arrayTile="terrain/cemetery";}
			else if (arraySquare=="7") 		{arrayTile="terrain/home";}
			else if (arraySquare=="/")		{arrayTile="terrain/tower";}
			else if (arraySquare=="#")		{arrayTile="terrain/town";}
			else if (arraySquare=="V") 		{arrayTile="terrain/village";}
			else if (arraySquare=="R") 		{arrayTile="terrain/redbricks";}
			else if (arraySquare=="{") 		{arrayTile="terrain/redbrickscracked";}
			else if (arraySquare=="}")		{arrayTile="terrain/redbrickwindow";}
			else if (arraySquare=="E") 		{arrayTile="terrain/reddoor";}
			else if (arraySquare=="S") 		{arrayTile="terrain/redopendoor";}
			else if (arraySquare=="(") 		{arrayTile="terrain/redgrate";}
			else if (arraySquare=="W")		{arrayTile="terrain/whitebricks";}
			else if (arraySquare=="D")		{arrayTile="terrain/whitedoor";}
			else if (arraySquare=="T")		{arrayTile="terrain/whiteopendoor";}
			else if (arraySquare=="U")		{arrayTile="terrain/whitegrate";}
			else if (arraySquare=="F")		{arrayTile="terrain/woodfloorh";}
			else if (arraySquare=="G")		{arrayTile="terrain/woodfloorv";}
			else if (arraySquare=="X")		{arrayTile="terrain/tilefloor";}
			else if (arraySquare=="Y")		{arrayTile="terrain/tilefloorb";}
			else if (arraySquare=="0")		{arrayTile="terrain/cobblestones";}
			else if (arraySquare==">")		{arrayTile="terrain/anvil";}
			else if (arraySquare=="B")		{arrayTile="terrain/barrel";}
			else if (arraySquare=="!")		{arrayTile="terrain/brazier";}
			else if (arraySquare=="O")		{arrayTile="terrain/cask";}
			else if (arraySquare=="A")		{arrayTile="terrain/fountain";}
			else if (arraySquare=="K")		{arrayTile="terrain/harpsichord";}
			else if (arraySquare=="P")		{arrayTile="terrain/pillar";}
			else if (arraySquare=="J")		{arrayTile="terrain/plant";}
			else if (arraySquare=="9")		{arrayTile="terrain/spit";}
			else if (arraySquare=="8")		{arrayTile="terrain/stocks";}
			else if (arraySquare=="Z")		{arrayTile="terrain/stove";}
			else if (arraySquare=="N")		{arrayTile="terrain/table";}
			else if (arraySquare==")")		{arrayTile="terrain/tombstone";}
			else if (arraySquare=="H")		{arrayTile="terrain/tree";}
			else if (arraySquare=="Q")		{arrayTile="terrain/treedead";}
			else if (arraySquare=="4")		{arrayTile="terrain/bladebottom";}
			else if (arraySquare=="3")		{arrayTile="terrain/bladetop";}
			else if (arraySquare=="2")		{arrayTile="terrain/guillitinebottom";}
			else if (arraySquare=="1")		{arrayTile="terrain/guillitinetop";}
			else if (arraySquare=="5")		{arrayTile="terrain/rackl";}
			else if (arraySquare=="6")		{arrayTile="terrain/rackr";}
			else if (arraySquare=="<")		{arrayTile="terrain/shackles";}
			else if (arraySquare=="a")		{arrayTile="alphabet/a";}
			else if (arraySquare=="b")		{arrayTile="alphabet/b";}
			else if (arraySquare=="c")		{arrayTile="alphabet/c";}
			else if (arraySquare=="d")		{arrayTile="alphabet/d";}
			else if (arraySquare=="e")		{arrayTile="alphabet/e";}
			else if (arraySquare=="f")		{arrayTile="alphabet/f";}
			else if (arraySquare=="g")		{arrayTile="alphabet/g";}
			else if (arraySquare=="h")		{arrayTile="alphabet/h";}
			else if (arraySquare=="i")		{arrayTile="alphabet/i";}
			else if (arraySquare=="j")		{arrayTile="alphabet/j";}
			else if (arraySquare=="k")		{arrayTile="alphabet/k";}
			else if (arraySquare=="l")		{arrayTile="alphabet/l";}
			else if (arraySquare=="m")		{arrayTile="alphabet/m";}
			else if (arraySquare=="n")		{arrayTile="alphabet/n";}
			else if (arraySquare=="o")		{arrayTile="alphabet/o";}
			else if (arraySquare=="p")		{arrayTile="alphabet/p";}
			else if (arraySquare=="q")		{arrayTile="alphabet/q";}
			else if (arraySquare=="r")		{arrayTile="alphabet/r";}
			else if (arraySquare=="s")		{arrayTile="alphabet/s";}
			else if (arraySquare=="t")		{arrayTile="alphabet/t";}
			else if (arraySquare=="u")		{arrayTile="alphabet/u";}
			else if (arraySquare=="v")		{arrayTile="alphabet/v";}
			else if (arraySquare=="w")		{arrayTile="alphabet/w";}
			else if (arraySquare=="x")		{arrayTile="alphabet/x";}
			else if (arraySquare=="y")		{arrayTile="alphabet/y";}
			else if (arraySquare=="z")		{arrayTile="alphabet/z";}
			else if (arraySquare=="|")		{arrayTile="alphabet/space";}
			document.getElementById("editorButton"+editorDisplaySquare).style.background="url("+arrayTile+".gif) no-repeat";
		}
	}
}
function editorEast()
{
	editorX = editorX + 1;
	if (editorX < (editorMapWidth-50))
	{
		drawEditorMap();
	}
	else
	{
		editorX = (editorMapWidth-50);
		drawEditorMap();
	}
}
function editorEast20()
{
	editorX = editorX + 30;
	if (editorX < (editorMapWidth-50))
	{
		drawEditorMap();
	}
	else
	{
		editorX = (editorMapWidth-50)
		drawEditorMap();
	}
}
function editorWest()
{
	editorX = editorX - 1;
	if (editorX > 0)
	{
		drawEditorMap();
	}
	else
	{
		editorX = 0;
		drawEditorMap();
	}
}
function editorWest20()
{
	editorX = editorX - 30;
	if (editorX > 0)
	{
		drawEditorMap();
	}
	else
	{
		editorX = 0;
		drawEditorMap();
	}
}
function editorNW()
{
	editorX = editorX - 1;
	editorY = editorY - 1;
	if (editorX > 0 && editorY > 0)
	{
		drawEditorMap();
	}
	else
	{
		if (editorX < 0)
		{
			editorX = 0;
		}
		if (editorY < 0)
		{
			editorY = 0;
		}
		drawEditorMap();
	}
}
function editorN()
{
	editorY = editorY - 1;
	if (editorY > 0)
	{
		drawEditorMap();
	}
	else
	{
		editorY = 0;
		drawEditorMap();
	}
}
function editorNE()
{
	editorX = editorX + 1;
	editorY = editorY - 1;
	if (editorX < (editorMapWidth-50) && editorY > 0)
	{
		drawEditorMap();
	}
	else
	{
		if (editorX > (editorMapWidth-50))
		{
			editorX = (editorMapWidth-50);
		}
		if (editorY < 0)
		{
			editorY = 0;
		}
		drawEditorMap();
	}
}
function editorSW()
{
	editorX = editorX - 1;
	editorY = editorY + 1;
	if (editorX > 0 && editorY < (editorMapHeight-50))
	{
		drawEditorMap();
	}
	else
	{
		if (editorX < 0)
		{
			editorX = 0;
		}
		if (editorY > (editorMapHeight-50))
		{
			editorY = (editorMapHeight-50);
		}
		drawEditorMap();
	}
}
function editorS()
{
	editorY = editorY + 1;
	if (editorY < (editorMapHeight-50))
	{
		drawEditorMap();
	}
	else
	{
		editorY = (editorMapHeight-50);
		drawEditorMap();
	}
}
function editorSE()
{
	editorX = editorX + 1;
	editorY = editorY + 1;
	if (editorX < (editorMapWidth-50) && editorY < (editorMapHeight-50))
	{
		drawEditorMap();
	}
	else
	{
		if (editorX > (editorMapWidth-50))
		{
			editorX = (editorMapWidth-50);
		}
		if (editorY > (editorMapHeight-50))
		{
			editorY = (editorMapHeight-50);
		}
		drawEditorMap();
	}
}
function editorNW20()
{
	editorX = editorX - 30;
	editorY = editorY - 30;
	if (editorX > 0 && editorY > 0)
	{
		drawEditorMap();
	}
	else
	{
		if (editorX < 0)
		{
			editorX = 0;
		}
		if (editorY < 0)
		{
			editorY = 0;
		}
		drawEditorMap();
	}
}
function editorN20()
{
	editorY = editorY - 30;
	if (editorY > 0)
	{
		drawEditorMap();
	}
	else
	{
		editorY = 0;
		drawEditorMap();
	}
}
function editorNE20()
{
	editorX = editorX + 30;
	editorY = editorY - 30;
	if (editorX < (editorMapWidth-50) && editorY > 0)
	{
		drawEditorMap();
	}
	else
	{
		if (editorX > (editorMapWidth-50))
		{
			editorX = (editorMapWidth-50);
		}
		if (editorY < 0)
		{
			editorY = 0;
		}
		drawEditorMap();
	}
}
function editorSW20()
{
	editorX = editorX - 30;
	editorY = editorY + 30;
	if (editorX > 0 && editorY < (editorMapHeight-50))
	{
		drawEditorMap();
	}
	else
	{
		if (editorX < 0)
		{
			editorX = 0;
		}
		if (editorY > (editorMapHeight-50))
		{
			editorY = (editorMapHeight-50);
		}
		drawEditorMap();
	}
}
function editorS20()
{
	editorY = editorY + 30;
	if (editorY < (editorMapHeight-50))
	{
		drawEditorMap();
	}
	else
	{
		editorY = (editorMapHeight-50);
		drawEditorMap();
	}
}
function editorSE20()
{
	editorX = editorX + 30;
	editorY = editorY + 30;
	if (editorX < (editorMapWidth-50) && editorY < (editorMapHeight-50))
	{
		drawEditorMap();
	}
	else
	{
		if (editorX > (editorMapWidth-50))
		{
			editorX = (editorMapWidth-50);
		}
		if (editorY > (editorMapHeight-50))
		{
			editorY = (editorMapHeight-50);
		}
		drawEditorMap();
	}
}
function locateMe()
{
	hideEditorPalette();
	document.myform.editorTextButton.disabled=true;
	mapSizeX = editorMapWidth;
	mapSizeY = editorMapHeight;
	mapArrayDev = new Array(editorMapWidth+1);
	for (x=1;x<=editorMapWidth;x++)
	{
		mapArrayDev[x] = new Array(editorMapHeight);
	}
	for (y=1;y<=editorMapHeight;y++)
	{
		for (x=1;x<=editorMapWidth;x++)
		{
			mapArrayDev[x][y] = editorArray[x][y];
		}
	}
	for (x=1;x<=2500;x++)
	{
		document.getElementById("editorButton"+x).style.display="none";
	}
	document.getElementById('drawDisplay').style.display="block";
	document.getElementById('buttonLocateMe').style.display="none";
	document.getElementById('buttonBackToEditor').style.display="block";
	var canvasThing=document.getElementById("drawDisplay");
	var cxt=canvasThing.getContext("2d");
	cxt.clearRect(0,0,2000,2000);
	disableAllButtons();
	document.myform.viewTextButton.disabled=false;
	document.getElementById("masterDisplay").style.display="none";
	document.getElementById("slopeDisplay").style.display="none";
	document.getElementById("instructionsDisplay").style.display="none";
	document.getElementById("aboutDisplay").style.display="none";
	document.getElementById("drawDisplay").style.display="block";
	document.getElementById("drawMapButton").style.display="none";
	for (y=1;y<=editorMapHeight;y++)
	{
		for (x=1;x<=editorMapWidth;x++)
		{
			if		(editorArray[x][y] == ".")		{cxt.fillStyle="#fcfcf9"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == ":")		{cxt.fillStyle="#ededda"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == ";")		{cxt.fillStyle="#ddddbb"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == "^")		{cxt.fillStyle="#cece9c"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == "=")		{cxt.fillStyle="#78be5a"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == "+")		{cxt.fillStyle="#1aaf13"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == "?")		{cxt.fillStyle="#00a500"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == "I")		{cxt.fillStyle="#009a00"; cxt.fillRect(x,y,1,1);}
			else if (editorArray[x][y] == "C")		{cxt.fillStyle="#008b00"; cxt.fillRect(x,y,1,1);}
			else if (mapArrayDev[x][y] == ",")		{cxt.fillStyle="#0099ff"; cxt.fillRect(x,y,1,1);}
			else if (mapArrayDev[x][y] == "M")		{cxt.fillStyle="#0033ff"; cxt.fillRect(x,y,1,1);}
			else if (mapArrayDev[x][y] == "~")		{cxt.fillStyle="#ffcc66"; cxt.fillRect(x,y,1,1);}
			else if (mapArrayDev[x][y] == "%")		{cxt.fillStyle="#ffa500"; cxt.fillRect(x,y,1,1);}
			else if (mapArrayDev[x][y] == "&")		{cxt.fillStyle="#808000"; cxt.fillRect(x,y,1,1);}
			else if (mapArrayDev[x][y] == "-")		{cxt.fillStyle="#8b4513"; cxt.fillRect(x,y,1,1);}
			else 									{cxt.fillStyle="#000000"; cxt.fillRect(x,y,1,1);}
		}
	}
	cxt.fillStyle="#ff0000"; cxt.strokeRect(editorX,editorY,50,50);
}
function backToEditor()
{
	document.getElementById('masterDisplay').style.display="none";
	document.getElementById('drawDisplay').style.display="none";
	for (x=1;x<=2500;x++)
	{
		document.getElementById("editorButton"+x).style.display="block";
	}
	document.getElementById('buttonLocateMe').style.display="block";
	document.getElementById('editorTextButton').style.display="block";
	document.getElementById('buttonBackToEditor').style.display="none";
	document.getElementById('buttonBackToEditor2').style.display="none";
	document.myform.editorTextButton.disabled=false;
	document.myform.buttonLocateMe.disabled=false;
	displayEditorPalette();
}